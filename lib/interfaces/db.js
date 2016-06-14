export default {
  getHex: {
    desc: 'Returns binary data from the local database.\n**Note** this function is deprecated and will be removed in the future.',
    params: [
      { type: 'String', desc: 'Database name' },
      { type: 'String', desc: 'Key name' }
    ],
    returns: '`DATA` - The previously stored data.',
    inputFormatters: [],
    outputFormatter: null,
    deprecated: true
  },
  getString: {
    desc: 'Returns string from the local database.\n**Note** this function is deprecated and will be removed in the future.',
    params: [
      { type: 'String', desc: 'Database name' },
      { type: 'String', desc: 'Key name' }
    ],
    returns: '`String` - The previously stored string.',
    inputFormatters: [],
    outputFormatter: null,
    deprecated: true
  },
  putHex: {
    desc: 'Stores binary data in the local database.\n**Note** this function is deprecated and will be removed in the future.',
    params: [
      { type: 'String', desc: 'Database name' },
      { type: 'String', desc: 'Key name' },
      { type: 'DATA', desc: 'The data to store' }
    ],
    returns: '`Boolean` - returns `true` if the value was stored, otherwise `false`.',
    inputFormatters: [],
    outputFormatter: null,
    deprecated: true
  },
  putString: {
    desc: 'Stores a string in the local database.\n**Note** this function is deprecated and will be removed in the future.',
    params: [
      { type: 'String', desc: 'Database name' },
      { type: 'String', desc: 'Key name' },
      { type: 'String', desc: 'The string to store' }
    ],
    returns: '`Boolean` - returns `true` if the value was stored, otherwise `false`.',
    inputFormatters: [],
    outputFormatter: null,
    deprecated: true
  }
};
