import fs from 'fs';
import path from 'path';

import interfaces from '../lib';

const INDEX_JSON = path.join(__dirname, '../index.json');
const methods = [];

function formatDescription (obj) {
  const optional = obj.optional ? '(optional) ' : '';
  const defaults = obj.default ? `(default: ${obj.default}) ` : '';

  return `${obj.type.name} - ${optional}${defaults}${obj.desc}`;
}

function formatType (obj) {
  if (obj.type === Object && obj.details) {
    const formatted = {};

    Object.keys(obj.details).sort().forEach((key) => {
      formatted[key] = formatType(obj.details[key]);
    });

    return {
      desc: formatDescription(obj),
      details: formatted
    };
  } else if (obj.type && obj.type.name) {
    return formatDescription(obj);
  }

  return obj;
}

Object.keys(interfaces).sort().forEach((group) => {
  Object.keys(interfaces[group]).sort().forEach((name) => {
    const method = interfaces[group][name];
    const deprecated = method.deprecated ? ' (Deprecated and not supported, to be removed in a future version)' : '';

    method.name = `${group}_${name}`;
    method.desc = `${method.desc}${deprecated}`;
    method.params = method.params.map(formatType);
    method.returns = formatType(method.returns);
    method.inputFormatters = method.params.map((param) => param.format || null);
    method.outputFormatter = method.returns.format || null;

    methods.push(method);
  });
});

fs.writeFileSync(INDEX_JSON, JSON.stringify({ methods: methods }, null, 2), 'utf8');
