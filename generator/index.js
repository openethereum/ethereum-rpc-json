import fs from 'fs';
import path from 'path';

import interfaces from '../lib';

const INDEX_JSON = path.join(__dirname, '../index.json');
const methods = [];

function formatType (obj) {
  if (obj.type === Object && obj.details) {
    const formatted = {};

    Object.keys(obj.details).sort().forEach((key) => {
      formatted[key] = formatType(obj.details[key]);
    });

    return {
      description: `${obj.type.name} - ${obj.desc}`,
      details: formatted
    };
  } else if (obj.type && obj.type.name) {
    return `${obj.type.name} - ${obj.desc}`;
  }

  return obj;
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
