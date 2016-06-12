export default {
  minGasPrice: {
    desc: 'Returns currently set minimal gas price',
    params: [],
    returns: '`QUANTITY` - Minimal Gas Price',
    inputFormatters: [],
    outputFormatter: 'outputBigNumberFormatter'
  },
  extraData: {
    desc: 'Returns currently set extra data',
    params: [],
    returns: '`DATA` - Extra data',
    inputFormatters: [],
    outputFormatter: null
  },
  setExtraData: {
    desc: 'Changes extra data for newly mined blocks',
    params: [
      '`DATA`- Extra Data'
    ],
    returns: '`Boolean` - whether the call was successful',
    inputFormatters: [
      'utils.toHex'
    ],
    outputFormatter: null
  },
  setMinGasPrice: {
    desc: 'Changes minimal gas price for transaction to be accepted to the queue.',
    params: [
      '`QUANTITY` - Minimal gas price'
    ],
    returns: '`Boolean` - whether the call was successful',
    inputFormatters: [
      'utils.toHex'
    ],
    outputFormatter: null
  },
  gasFloorTarget: {
    desc: 'Returns current target for gas floor',
    params: [],
    returns: '`QUANTITY` - Gas Floor Target',
    inputFormatters: [],
    outputFormatter: 'outputBigNumberFormatter'
  },
  setGasFloorTarget: {
    desc: 'Changes current gas floor target.',
    params: [
      '`QUANTITY` - Gas Floor Target'
    ],
    returns: '`Boolean` - whether the call was successful',
    inputFormatters: [
      'utils.toHex'
    ],
    outputFormatter: null
  },
  setAuthor: {
    desc: 'Changes author (coinbase) for mined blocks.',
    params: [
      '`DATA`, 20 Bytes - Address'
    ],
    returns: '`Boolean` - whether the call was successful',
    inputFormatters: [
      'inputAddressFormatter'
    ],
    outputFormatter: null
  },
  setTransactionsLimit: {
    desc: 'Changes limit for transactions in queue.',
    params: [
      '`QUANTITY` - New Limit'
    ],
    returns: '`Boolean` - whether the call was successful',
    inputFormatters: [
      'utils.toHex'
    ],
    outputFormatter: null
  },
  transactionsLimit: {
    desc: 'Changes limit for transactions in queue.',
    params: [],
    returns: '`QUANTITY` - Current max number of transactions in queue.',
    inputFormatters: [],
    outputFormatter: 'outputBigNumberFormatter'
  },
  netChain: {
    desc: 'Returns the name of the connected chain.',
    params: [],
    returns: '`DATA` - chain name',
    inputFormatters: [],
    outputFormatter: null
  },
  netMaxPeers: {
    desc: 'Returns maximal number of peers.',
    params: [],
    returns: '`QUANTITY` - Maximal number of peers',
    inputFormatters: [],
    outputFormatter: null
  },
  netPort: {
    desc: 'Returns network port the node is listening on.',
    params: [],
    returns: '`QUANTITY` - Port Number',
    inputFormatters: [],
    outputFormatter: null
  },
  rpcSettings: {
    desc: 'Returns basic settings of rpc (enabled, port, interface).',
    params: [],
    returns: '`OBJECT` - JSON object containing rpc settings',
    inputFormatters: [],
    outputFormatter: null
  },
  nodeName: {
    desc: 'Returns node name (identity)',
    params: [],
    returns: '`DATA` - Node name',
    inputFormatters: [],
    outputFormatter: null
  },
  defaultExtraData: {
    desc: 'Returns the default extra data',
    params: [],
    returns: '`DATA` - Extra data',
    inputFormatters: [],
    outputFormatter: null
  },
  devLogs: {
    desc: '?',
    params: [],
    returns: '`ARRAY` - Dev logs',
    inputFormatters: [],
    outputFormatter: null
  },
  devLogsLevels: {
    desc: '?',
    params: [],
    returns: '?',
    inputFormatters: [],
    outputFormatter: null
  }
};
