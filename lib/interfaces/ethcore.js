import { Address, Data, Quantity } from '../types';

export default {
  defaultExtraData: {
    desc: 'Returns the default extra data',
    params: [],
    returns: {
      type: Data, desc: 'Extra data'
    },
    inputFormatters: [],
    outputFormatter: null
  },

  devLogs: {
    desc: '?',
    params: [],
    returns: {
      type: Array, desc: 'Dev logs'
    },
    inputFormatters: [],
    outputFormatter: null
  },

  devLogsLevels: {
    desc: '?',
    params: [],
    returns: '?',
    inputFormatters: [],
    outputFormatter: null
  },

  extraData: {
    desc: 'Returns currently set extra data',
    params: [],
    returns: {
      type: Data, desc: 'Extra data'
    },
    inputFormatters: [],
    outputFormatter: null
  },

  gasFloorTarget: {
    desc: 'Returns current target for gas floor',
    params: [],
    returns: {
      type: Quantity, desc: 'Gas Floor Target'
    },
    inputFormatters: [],
    outputFormatter: 'outputBigNumberFormatter'
  },

  minGasPrice: {
    desc: 'Returns currently set minimal gas price',
    params: [],
    returns: {
      type: Quantity, desc: 'Minimal Gas Price'
    },
    inputFormatters: [],
    outputFormatter: 'outputBigNumberFormatter'
  },

  netChain: {
    desc: 'Returns the name of the connected chain.',
    params: [],
    returns: {
      type: String, desc: 'chain name'
    },
    inputFormatters: [],
    outputFormatter: null
  },

  netMaxPeers: {
    desc: 'Returns maximal number of peers.',
    params: [],
    returns: {
      type: Quantity, desc: 'Maximal number of peers'
    },
    inputFormatters: [],
    outputFormatter: null
  },

  netPort: {
    desc: 'Returns network port the node is listening on.',
    params: [],
    returns: {
      type: Quantity, desc: 'Port Number'
    },
    inputFormatters: [],
    outputFormatter: null
  },

  nodeName: {
    desc: 'Returns node name (identity)',
    params: [],
    returns: {
      type: String, desc: 'Node name'
    },
    inputFormatters: [],
    outputFormatter: null
  },

  rpcSettings: {
    desc: 'Returns basic settings of rpc (enabled, port, interface).',
    params: [],
    returns: {
      type: Object, desc: 'JSON object containing rpc settings'
    },
    inputFormatters: [],
    outputFormatter: null
  },

  setAuthor: {
    desc: 'Changes author (coinbase) for mined blocks.',
    params: [
      { type: Address, desc: '20 Bytes - Address' }
    ],
    returns: {
      type: Boolean, desc: 'whether the call was successful'
    },
    inputFormatters: [
      'inputAddressFormatter'
    ],
    outputFormatter: null
  },

  setExtraData: {
    desc: 'Changes extra data for newly mined blocks',
    params: [
      { type: Data, desc: 'Extra Data' }
    ],
    returns: {
      type: Boolean, desc: 'whether the call was successful'
    },
    inputFormatters: [
      'utils.toHex'
    ],
    outputFormatter: null
  },

  setGasFloorTarget: {
    desc: 'Changes current gas floor target.',
    params: [
      { type: Quantity, desc: 'Gas Floor Target' }
    ],
    returns: {
      type: Boolean, desc: 'whether the call was successful'
    },
    inputFormatters: [
      'utils.toHex'
    ],
    outputFormatter: null
  },

  setMinGasPrice: {
    desc: 'Changes minimal gas price for transaction to be accepted to the queue.',
    params: [
      { type: Quantity, desc: 'Minimal gas price' }
    ],
    returns: {
      type: Boolean, desc: 'whether the call was successful'
    },
    inputFormatters: [
      'utils.toHex'
    ],
    outputFormatter: null
  },

  setTransactionsLimit: {
    desc: 'Changes limit for transactions in queue.',
    params: [
      { type: Quantity, desc: 'New Limit' }
    ],
    returns: {
      type: Boolean, desc: 'whether the call was successful'
    },
    inputFormatters: [
      'utils.toHex'
    ],
    outputFormatter: null
  },

  transactionsLimit: {
    desc: 'Changes limit for transactions in queue.',
    params: [],
    returns: {
      type: Quantity, desc: 'Current max number of transactions in queue'
    },
    inputFormatters: [],
    outputFormatter: 'outputBigNumberFormatter'
  }
};
