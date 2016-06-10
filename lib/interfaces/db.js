export default [
  {
    name: 'db_putString',
    desc: 'Stores a string in the local database.\n**Note** this function is deprecated and will be removed in the future.',
    params: [
      '`String` - Database name.',
      '`String` - Key name.',
      '`String` - String to store.'
    ],
    returns: '`Boolean` - returns `true` if the value was stored, otherwise `false`.',
    inputFormatters: [],
    outputFormatter: null,
    deprecated: true
  },
  {
    name: 'db_getString',
    desc: 'Returns string from the local database.\n**Note** this function is deprecated and will be removed in the future.',
    params: [
      '`String` - Database name.',
      '`String` - Key name.'
    ],
    returns: '`String` - The previously stored string.',
    inputFormatters: [],
    outputFormatter: null,
    deprecated: true
  },
  {
    name: 'db_putHex',
    desc: 'Stores binary data in the local database.\n**Note** this function is deprecated and will be removed in the future.',
    params: [
      '`String` - Database name.',
      '`String` - Key name.',
      '`DATA` - The data to store.'
    ],
    returns: '`Boolean` - returns `true` if the value was stored, otherwise `false`.',
    inputFormatters: [],
    outputFormatter: null,
    deprecated: true
  },
  {
    name: 'db_getHex',
    desc: 'Returns binary data from the local database.\n**Note** this function is deprecated and will be removed in the future.',
    params: [
      '`String` - Database name.',
      '`String` - Key name.'
    ],
    returns: '`DATA` - The previously stored data.',
    inputFormatters: [],
    outputFormatter: null,
    deprecated: true
  }
];
