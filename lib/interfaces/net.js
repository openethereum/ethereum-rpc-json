export default [
  {
    name: 'version',
    desc: 'Returns the current network protocol version.',
    params: [],
    returns: '`String` - The current network protocol version',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'listening',
    desc: 'Returns `true` if client is actively listening for network connections.',
    params: [],
    returns: '`Boolean` - `true` when listening, otherwise `false`.',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'peerCount',
    desc: 'Returns number of peers currenly connected to the client.',
    params: [],
    returns: '`QUANTITY` - integer of the number of connected peers.',
    inputFormatters: [],
    outputFormatter: 'utils.toDecimal'
  }
];
