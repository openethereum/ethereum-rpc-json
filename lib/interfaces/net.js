import { Quantity } from '../types';

export default {
  listening: {
    desc: 'Returns `true` if client is actively listening for network connections.',
    params: [],
    returns: {
      type: Boolean, desc: 'true` when listening, otherwise `false`.'
    },
    inputFormatters: [],
    outputFormatter: null
  },
  peerCount: {
    desc: 'Returns number of peers currenly connected to the client.',
    params: [],
    returns: {
      type: Quantity, desc: 'Integer of the number of connected peers'
    },
    inputFormatters: [],
    outputFormatter: 'utils.toDecimal'
  },
  version: {
    desc: 'Returns the current network protocol version.',
    params: [],
    returns: {
      type: String, desc: 'The current network protocol version'
    },
    inputFormatters: [],
    outputFormatter: null
  }
};
