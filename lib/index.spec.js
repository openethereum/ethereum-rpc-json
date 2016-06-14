import interfaces from './';
import { Data, Quantity } from './types';

const flatlist = {};

function verifyType (obj) {
  if (obj && obj.type) {
    expect(obj).to.satisfy(() => {
      return obj.type === Boolean || obj.type === String || obj.type === Data || obj.type === Quantity;
    });
  }
}

describe('interfaces', () => {
  Object.keys(interfaces).forEach((group) => {
    describe(group, () => {
      Object.keys(interfaces[group]).forEach((name) => {
        const method = interfaces[group][name];

        flatlist[`${group}_${name}`] = true;

        describe(name, () => {
          it('has the correct interface', () => {
            expect(method.desc).to.be.a('string');
            expect(method.params).to.be.an('array');
            expect(method.returns).to.satisfy((returns) => {
              return typeof returns === 'string' || typeof returns === 'object';
            });
            expect(method.inputFormatters).to.be.an('array');
            expect(method.outputFormatter).to.satisfy((formatter) => {
              return formatter === null || typeof formatter === 'string';
            });

            method.params.forEach(verifyType);
            verifyType(method.returns);
          });
        });
      });
    });
  });
});

// import original from './rpc.original.json';
//
// describe('rpc', () => {
//   it('has all the original methods mapped', () => {
//     original.methods.forEach((method) => {
//       expect(flatlist[method.name] || `${method.name} not found in new list`).to.be.true;
//     });
//   });
// });
