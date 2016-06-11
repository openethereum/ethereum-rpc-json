import fs from 'fs';
import path from 'path';

import interfaces from '../lib';

const INDEX_JSON = path.join(__dirname, '../index.json');

const functions = [];

Object.keys(interfaces).forEach((group) => {
  interfaces[group].forEach((method) => {
    method.name = `${group}_${method.name}`;
    functions.push(method);
  });
});

fs.writeFileSync(INDEX_JSON, JSON.stringify({
  methods: functions.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    }

    return 0;
  })
}, null, 2), 'utf8');
