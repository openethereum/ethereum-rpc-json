import fs from 'fs';
import path from 'path';

import interfaces from '../lib';

const MARKDOWN = path.join(__dirname, '../interfaces.md');

let preamble = '# interfaces\n';
let markdown = '';

Object.keys(interfaces).sort().forEach((group) => {
  let content = '';

  preamble = `${preamble}\n- [${group}](#${group})`;
  markdown = `${markdown}\n## ${group}\n`;

  Object.keys(interfaces[group]).sort().forEach((name) => {
    const method = interfaces[group][name];

    method.name = `${group}_${name}`;

    markdown = `${markdown}\n- [${method.name}](#${method.name})`;
    content = `${content}### ${method.name}\n\n${method.desc}\n\n#### parameters\n\n#### returns\n\n`;
  });

  markdown = `${markdown}\n\n${content}`;
});

fs.writeFileSync(MARKDOWN, `${preamble}\n\n${markdown}`, 'utf8');
