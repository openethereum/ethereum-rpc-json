import interfaces from './';

const flatlist = {};

describe('interfaces', () => {
  Object.keys(interfaces).forEach((group) => {
    describe(group, () => {
      interfaces[group].forEach((method) => {
        flatlist[`${group}_${method.name}`] = true;

        describe(method.name, () => {
          it('has the correct interface', () => {
            expect(method.name).to.be.a('string');
            expect(method.desc).to.be.a('string');
            expect(method.params).to.be.an('array');
            expect(method.returns).to.satisfy((returns) => {
              return typeof returns === 'string' || typeof returns === 'object';
            });
            expect(method.inputFormatters).to.be.an('array');
            expect(method.outputFormatter).to.satisfy(function (formatter) {
              return formatter === null || typeof formatter === 'string';
            });
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
