export default [
  {
    name: 'filter',
    desc: 'Returns traces matching given filter',
    params: [
      '`OBJECT` - The filter object'
    ],
    returns: '`ARRAY` - Traces matching given filter',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'get',
    desc: 'Returns trace at given position.',
    params: [
      '`HASH` - Transaction hash',
      '`INTEGER` - Trace position witing transaction'
    ],
    returns: '`Object` - Trace',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'transaction',
    desc: 'Returns all traces of given transaction',
    params: [
      '`HASH` - Transaction hash'
    ],
    returns: '`ARRAY` - Traces of given transaction',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'block',
    desc: 'Returns traces created at given block',
    params: [
      '`BLOCKNUMBER` - Integer block number, or \'latest\' for the last mined block or \'pending\', \'earliest\' for not yet mined transactions'
    ],
    returns: '`ARRAY` - Block traces',
    inputFormatters: [],
    outputFormatter: null
  }
];
