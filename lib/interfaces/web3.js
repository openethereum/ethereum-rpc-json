import types from '../types';

export default {
  clientVersion: {
    desc: 'Returns the current client version.',
    params: [],
    returns: '`String` - The current client version',
    inputFormatters: [],
    outputFormatter: null
  },
  sha3: {
    desc: 'Returns Keccak-256 (*not* the standardized SHA3-256) of the given data.',
    params: [
      { type: types.String, desc: 'The data to convert into a SHA3 hash' }
    ],
    returns: '`DATA` - The SHA3 result of the given string.',
    inputFormatters: [],
    outputFormatter: null
  }
};
