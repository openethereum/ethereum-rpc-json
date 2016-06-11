export default [
  {
    name: 'listAccounts',
    desc: 'Returns a list of addresses owned by client.',
    params: [],
    returns: '`Array of DATA`, 20 Bytes - addresses owned by the client.'
  },
  {
    name: 'newAccount',
    desc: 'Creates new account',
    params: [
      '`DATA` - Password'
    ],
    returns: '`Boolean` - whether the call was successful',
    inputFormatters: [
      null
    ],
    outputFormatter: null
  },
  {
    name: 'signAndSendTransaction',
    desc: 'Sends and signs a transaction given account passphrase. Does not require the account to be unlocked nor unlocks the account for future transactions. ',
    params: [
      {
        'description': '`Object` - The transaction object',
        'details': {
          'from': '`DATA`, 20 Bytes - The address the transaction is send from.',
          'to': '`DATA`, 20 Bytes - (optional when creating new contract) The address the transaction is directed to.',
          'gas': '`QUANTITY`  - (optional, default: 90000) Integer of the gas provided for the transaction execution. It will return unused gas.',
          'gasPrice': '`QUANTITY`  - (optional, default: To-Be-Determined) Integer of the gasPrice used for each paid gas',
          'value': '`QUANTITY`  - (optional) Integer of the value send with this transaction',
          'data': '`DATA`  - The compiled code of a contract OR the hash of the invoked method signature and encoded parameters. For details see [Ethereum Contract ABI](https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI)',
          'nonce': '`QUANTITY`  - (optional) Integer of a nonce. This allows to overwrite your own pending transactions that use the same nonce.'
        }
      },
      '`PASS`, Passphrase to unlock `from` account.'
    ],
    returns: '`DATA`, 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available.',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'signerEnabled',
    desc: 'Returns whether signer is enabled/disabled.',
    params: [],
    returns: '`Boolean` - true when enabled, false when disabled'
  },
  {
    name: 'unlockAccount',
    desc: '?',
    params: [
      '?',
      '?',
      '?'
    ],
    returns: '`Boolean` - whether the call was successful',
    inputFormatters: [
      null,
      null,
      null
    ],
    outputFormatter: null
  }
];
