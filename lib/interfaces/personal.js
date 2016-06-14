import { Address, Data, Quantity } from '../types';

export default {
  listAccounts: {
    desc: 'Returns a list of addresses owned by client.',
    params: [],
    returns: {
      type: Array, desc: '20 Bytes addresses owned by the client.'
    },
    inputFormatters: [],
    outputFormatter: null
  },
  newAccount: {
    desc: 'Creates new account',
    params: [
      { type: String, desc: 'Password' }
    ],
    returns: {
      type: Address, desc: 'The created address'
    },
    inputFormatters: [
      null
    ],
    outputFormatter: null
  },
  signAndSendTransaction: {
    desc: 'Sends and signs a transaction given account passphrase. Does not require the account to be unlocked nor unlocks the account for future transactions. ',
    params: [
      {
        type: Object, desc: 'The transaction object',
        details: {
          from: {
            type: Address, desc: '20 Bytes - The address the transaction is send from'
          },
          to: {
            type: Address, desc: '20 Bytes - (optional when creating new contract) The address the transaction is directed to'
          },
          gas: {
            type: Quantity, desc: '(optional, default: 90000) Integer of the gas provided for the transaction execution. It will return unused gas'
          },
          gasPrice: {
            type: Quantity, desc: '(optional, default: To-Be-Determined) Integer of the gasPrice used for each paid gas'
          },
          value: {
            type: Quantity, desc: '(optional) Integer of the value send with this transaction'
          },
          data: {
            type: Data, desc: 'The compiled code of a contract OR the hash of the invoked method signature and encoded parameters. For details see [Ethereum Contract ABI](https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI)'
          },
          nonce: {
            type: Quantity, desc: '(optional) Integer of a nonce. This allows to overwrite your own pending transactions that use the same nonce.'
          }
        }
      },
      { type: String, desc: 'Passphrase to unlock `from` account.' }
    ],
    returns: {
      type: Data, desc: '32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available'
    },
    inputFormatters: [],
    outputFormatter: null
  },
  signerEnabled: {
    desc: 'Returns whether signer is enabled/disabled.',
    params: [],
    returns: {
      type: Boolean, desc: 'true when enabled, false when disabled'
    },
    inputFormatters: [],
    outputFormatter: null
  },
  unlockAccount: {
    desc: '?',
    params: [
      '?', '?', '?'
    ],
    returns: {
      type: Boolean, desc: 'whether the call was successful'
    },
    inputFormatters: [
      null, null, null
    ],
    outputFormatter: null
  }
};
