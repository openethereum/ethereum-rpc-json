import fs from 'fs';
import path from 'path';

import interfaces from '../lib';

const INDEX_JSON = path.join(__dirname, '../index.json');
const methods = [];

function formatType (obj) {
  if (!obj || !obj.type || !obj.type.name) {
    return obj;
  }

  return `${obj.type.name} - ${obj.desc}`;
}

Object.keys(interfaces).sort().forEach((group) => {
  Object.keys(interfaces[group]).sort().forEach((name) => {
    const method = interfaces[group][name];

    method.name = `${group}_${name}`;
    method.params = method.params.map(formatType);
    method.returns = formatType(method.returns);

    methods.push(method);
  });
});

fs.writeFileSync(INDEX_JSON, JSON.stringify({ methods: methods }, null, 2), 'utf8');
