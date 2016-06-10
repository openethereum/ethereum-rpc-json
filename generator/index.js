import fs from 'fs';
import path from 'path';

import interfaces from '../lib';

const functions = [];

Object.keys(interfaces).forEach((group) => {
  interfaces[group].forEach((method) => {
    method.name = `${group}_${method.name}`;
    functions.push(method);
  });
});

console.log(JSON.stringify({
  methods: functions.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    }

    return 0;
  })
}, null, 2));

fs.writeFileSync(path.join(__dirname, '../index.json'), JSON.stringify({
  methods: functions.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    }

    return 0;
  })
}, null, 2), 'utf8');
