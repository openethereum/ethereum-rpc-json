import fs from 'fs';
import path from 'path';

import interfaces from '../lib';

const INDEX_JSON = path.join(__dirname, '../index.json');

const methods = [];

Object.keys(interfaces).sort().forEach((group) => {
  Object.keys(interfaces[group]).sort().forEach((name) => {
    const method = interfaces[group][name];

    method.name = `${group}_${name}`;
    method.params = method.params.map((param) => {
      if (!param.desc && !param.type) {
        return param;
      }

      return `${param.type} - ${param.desc}`;
    });

    methods.push(method);
  });
});

fs.writeFileSync(INDEX_JSON, JSON.stringify({ methods: methods }, null, 2), 'utf8');
