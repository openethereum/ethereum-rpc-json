import fs from 'fs';
import path from 'path';

import interfaces from '../lib';

const MARKDOWN = path.join(__dirname, '../interfaces.md');
const BLOCK_BEGIN = '```js\n';
const BLOCK_END = '```';

let preamble = '# interfaces\n';
let markdown = '';

Object.keys(interfaces).sort().forEach((group) => {
  let content = '';

  preamble = `${preamble}\n- [${group}](#${group})`;
  markdown = `${markdown}\n## ${group}\n`;

  Object.keys(interfaces[group]).sort().forEach((iname) => {
    const method = interfaces[group][iname];
    const name = `${group}_${iname}`;
    const desc = method.desc;
    const params = method.params.map((param) => {
      switch (Object.prototype.toString.call(param)) {
        case '[object String]':
          return `- ${param}`;
        default:
          return `- ${BLOCK_BEGIN}${JSON.stringify(param, null, 2)}${BLOCK_END}`;
      }
    });
    const returns = (Object.prototype.toString.call(method.returns) === '[object String]' ? method.returns : `${BLOCK_BEGIN}${JSON.stringify(method.returns, null, 2)}${BLOCK_END}`) || 'none';

    markdown = `${markdown}\n- [${name}](#${name})`;
    content = `${content}### ${name}\n\n${desc}\n\n#### parameters\n\n${params.join('\n') || 'none'}\n\n#### returns\n\n${returns}\n\n`;
  });

  markdown = `${markdown}\n\n${content}`;
});

fs.writeFileSync(MARKDOWN, `${preamble}\n\n${markdown}`, 'utf8');
