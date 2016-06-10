export default [
  {
    name: 'protocolVersion',
    desc: 'Returns the current ethereum protocol version.',
    params: [],
    returns: '`String` - The current ethereum protocol version',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'syncing',
    desc: 'Returns an object with data about the sync status or `false`.',
    params: [],
    returns: {
      'description': '`Object|Boolean`, An object with sync status data or `FALSE`, when not syncing:',
      'details': {
        'startingBlock': '`QUANTITY` - The block at which the import started (will only be reset, after the sync reached his head)',
        'currentBlock': '`QUANTITY` - The current block, same as eth_blockNumber',
        'highestBlock': '`QUANTITY` - The estimated highest block'
      }
    },
    inputFormatters: [],
    outputFormatter: 'outputSyncingFormatter'
  },
  {
    name: 'coinbase',
    desc: 'Returns the client coinbase address.',
    params: [],
    returns: '`DATA`, 20 bytes - the current coinbase address.',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'mining',
    desc: 'Returns `true` if client is actively mining new blocks.',
    params: [],
    returns: '`Boolean` - returns `true` of the client is mining, otherwise `false`.',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'hashrate',
    desc: 'Returns the number of hashes per second that the node is mining with.',
    params: [],
    returns: '`QUANTITY` - number of hashes per second.',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'gasPrice',
    desc: 'Returns the current price per gas in wei.',
    params: [],
    returns: '`QUANTITY` - integer of the current gas price in wei.',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'accounts',
    desc: 'Returns a list of addresses owned by client.',
    params: [],
    returns: '`Array of DATA`, 20 Bytes - addresses owned by the client.',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'blockNumber',
    desc: 'Returns the number of most recent block.',
    params: [],
    returns: '`QUANTITY` - integer of the current block number the client is on.',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'getBalance',
    desc: 'Returns the balance of the account of given address.',
    params: [
      '`DATA`, 20 Bytes - address to check for balance.',
      '`QUANTITY|TAG` - integer block number, or the string `\'latest\'`, `\'earliest\'` or `\'pending\'`, see the [default block parameter](#the-default-block-parameter)'
    ],
    returns: '`QUANTITY` - integer of the current balance in wei.',
    inputFormatters: [
      'inputAddressFormatter',
      'inputDefaultBlockNumberFormatter'
    ],
    outputFormatter: 'outputBigNumberFormatter'
  },
  {
    name: 'getStorageAt',
    desc: 'Returns the value from a storage position at a given address.',
    params: [
      '`DATA`, 20 Bytes - address of the storage.',
      '`QUANTITY` - integer of the position in the storage.',
      '`QUANTITY|TAG` - integer block number, or the string `\'latest\'`, `\'earliest\'` or `\'pending\'`, see the [default block parameter](#the-default-block-parameter)'
    ],
    returns: '`DATA` - the value at this storage position.',
    inputFormatters: [
      null,
      'utils.toHex',
      'inputDefaultBlockNumberFormatter'
    ],
    outputFormatter: null
  },
  {
    name: 'getTransactionCount',
    desc: 'Returns the number of transactions *sent* from an address.',
    params: [
      '`DATA`, 20 Bytes - address.',
      '`QUANTITY|TAG` - integer block number, or the string `\'latest\'`, `\'earliest\'` or `\'pending\'`, see the [default block parameter](#the-default-block-parameter)'
    ],
    returns: '`QUANTITY` - integer of the number of transactions send from this address.',
    inputFormatters: [
      null,
      'inputDefaultBlockNumberFormatter'
    ],
    outputFormatter: 'utils.toDecimal'
  },
  {
    name: 'getBlockTransactionCountByHash',
    desc: 'Returns the number of transactions in a block from a block matching the given block hash.',
    params: [
      '`DATA`, 32 Bytes - hash of a block'
    ],
    returns: '`QUANTITY` - integer of the number of transactions in this block.',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'getBlockTransactionCountByNumber',
    desc: 'Returns the number of transactions in a block from a block matching the given block number.',
    params: [
      '`QUANTITY|TAG` - integer of a block number, or the string `\'earliest\'`, `\'latest\'` or `\'pending\'`, as in the [default block parameter](#the-default-block-parameter).'
    ],
    returns: '`QUANTITY` - integer of the number of transactions in this block.',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'getUncleCountByBlockHash',
    desc: 'Returns the number of uncles in a block from a block matching the given block hash.',
    params: [
      '`DATA`, 32 Bytes - hash of a block'
    ],
    returns: '`QUANTITY` - integer of the number of uncles in this block.',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'getUncleCountByBlockNumber',
    desc: 'Returns the number of uncles in a block from a block matching the given block number.',
    params: [
      '`QUANTITY` - integer of a block number, or the string \'latest\', \'earliest\' or \'pending\', see the [default block parameter](#the-default-block-parameter)'
    ],
    returns: '`QUANTITY` - integer of the number of uncles in this block.',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'getCode',
    desc: 'Returns code at a given address.',
    params: [
      '`DATA`, 20 Bytes - address',
      '`QUANTITY|TAG` - integer block number, or the string `\'latest\'`, `\'earliest\'` or `\'pending\'`, see the [default block parameter](#the-default-block-parameter)'
    ],
    returns: '`DATA` - the code from the given address.',
    inputFormatters: [
      'inputAddressFormatter',
      'inputDefaultBlockNumberFormatter'
    ],
    outputFormatter: null
  },
  {
    name: 'sign',
    desc: 'Signs data with a given address.\n**Note** the address to sign must be unlocked.',
    params: [
      '`DATA`, 20 Bytes - address',
      '`DATA`, Data to sign'
    ],
    returns: '`DATA`: Signed data',
    inputFormatters: [
      'inputAddressFormatter',
      null
    ],
    outputFormatter: null
  },
  {
    name: 'sendTransaction',
    desc: 'Creates new message call transaction or a contract creation, if the data field contains code.',
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
      }
    ],
    returns: '`DATA`, 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available.',
    inputFormatters: [
      'inputTransactionFormatter'
    ],
    outputFormatter: null
  },
  {
    name: 'sendRawTransaction',
    desc: 'Creates new message call transaction or a contract creation for signed transactions.',
    params: [
      '`DATA`, The signed transaction data.'
    ],
    returns: '`DATA`, 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available.',
    inputFormatters: [
      null
    ],
    outputFormatter: null
  },
  {
    name: 'call',
    desc: 'Executes a new message call immediately without creating a transaction on the block chain.',
    params: [
      {
        'description': '`Object` - The transaction call object',
        'details': {
          'from': '`DATA`, 20 Bytes - (optional) The address the transaction is send from.',
          'to': '`DATA`, 20 Bytes  - The address the transaction is directed to.',
          'gas': '`QUANTITY`  - (optional) Integer of the gas provided for the transaction execution. eth_call consumes zero gas, but this parameter may be needed by some executions.',
          'gasPrice': '`QUANTITY`  - (optional) Integer of the gasPrice used for each paid gas',
          'value': '`QUANTITY`  - (optional) Integer of the value send with this transaction',
          'data': '`DATA`  - (optional) Hash of the method signature and encoded parameters. For details see [Ethereum Contract ABI](https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI)'
        }
      },
      '`QUANTITY|TAG` - integer block number, or the string `\'latest\'`, `\'earliest\'` or `\'pending\'`, see the [default block parameter](#the-default-block-parameter)'
    ],
    returns: '`DATA` - the return value of executed contract.',
    inputFormatters: [
      'inputCallFormatter',
      'inputDefaultBlockNumberFormatter'
    ],
    outputFormatter: null
  },
  {
    name: 'estimateGas',
    desc: 'Makes a call or transaction, which won\'t be added to the blockchain and returns the used gas, which can be used for estimating the used gas.',
    params: [],
    returns: '`QUANTITY` - the amount of gas used.',
    inputFormatters: [
      'inputCallFormatter'
    ],
    outputFormatter: 'utils.toDecimal'
  },
  {
    name: 'getBlockByHash',
    desc: 'Returns information about a block by hash.',
    params: [
      '`DATA`, 32 Bytes - Hash of a block.',
      '`Boolean` - If `true` it returns the full transaction objects, if `false` only the hashes of the transactions.'
    ],
    returns: {
      'description': '`Object` - A block object, or `null` when no block was found:',
      'details': {
        'number': '`QUANTITY` - the block number. `null` when its pending block.',
        'hash': '`DATA`, 32 Bytes - hash of the block. `null` when its pending block.',
        'parentHash': '`DATA`, 32 Bytes - hash of the parent block.',
        'nonce': '`DATA`, 8 Bytes - hash of the generated proof-of-work. `null` when its pending block.',
        'sha3Uncles': '`DATA`, 32 Bytes - SHA3 of the uncles data in the block.',
        'logsBloom': '`DATA`, 256 Bytes - the bloom filter for the logs of the block. `null` when its pending block.',
        'transactionsRoot': '`DATA`, 32 Bytes - the root of the transaction trie of the block.',
        'stateRoot': '`DATA`, 32 Bytes - the root of the final state trie of the block.',
        'receiptsRoot': '`DATA`, 32 Bytes - the root of the receipts trie of the block.',
        'miner': '`DATA`, 20 Bytes - the address of the beneficiary to whom the mining rewards were given.',
        'difficulty': '`QUANTITY` - integer of the difficulty for this block.',
        'totalDifficulty': '`QUANTITY` - integer of the total difficulty of the chain until this block.',
        'extraData': '`DATA` - the \'extra data\' field of this block.',
        'size': '`QUANTITY` - integer the size of this block in bytes.',
        'gasLimit': '`QUANTITY` - the maximum gas allowed in this block.',
        'gasUsed': '`QUANTITY` - the total used gas by all transactions in this block.',
        'timestamp': '`QUANTITY` - the unix timestamp for when the block was collated.',
        'transactions': '`Array` - Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter.',
        'uncles': '`Array` - Array of uncle hashes.'
      }
    },
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'getBlockByNumber',
    desc: 'Returns information about a block by block number.',
    params: [
      '`QUANTITY|TAG` - integer of a block number, or the string `\'earliest\'`, `\'latest\'` or `\'pending\'`, as in the [default block parameter](#the-default-block-parameter).',
      '`Boolean` - If `true` it returns the full transaction objects, if `false` only the hashes of the transactions.'
    ],
    returns: 'See [eth_getBlockByHash](#eth_getblockbyhash)',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'getTransactionByHash',
    desc: 'Returns the information about a transaction requested by transaction hash.',
    params: [
      '`DATA`, 32 Bytes - hash of a transaction'
    ],
    returns: {
      'description': '`Object` - A transaction object, or `null` when no transaction was found:',
      'details': {
        'hash': '`DATA`, 32 Bytes - hash of the transaction.',
        'nonce': '`QUANTITY` - the number of transactions made by the sender prior to this one.',
        'blockHash': '`DATA`, 32 Bytes - hash of the block where this transaction was in. `null` when its pending.',
        'blockNumber': '`QUANTITY` - block number where this transaction was in. `null` when its pending.',
        'transactionIndex': '`QUANTITY` - integer of the transactions index position in the block. `null` when its pending.',
        'from': '`DATA`, 20 Bytes - address of the sender.',
        'to': '`DATA`, 20 Bytes - address of the receiver. `null` when its a contract creation transaction.',
        'value': '`QUANTITY` - value transferred in Wei.',
        'gasPrice': '`QUANTITY` - gas price provided by the sender in Wei.',
        'gas': '`QUANTITY` - gas provided by the sender.',
        'input': '`DATA` - the data send along with the transaction.'
      }
    },
    inputFormatters: [],
    outputFormatter: 'outputTransactionFormatter'
  },
  {
    name: 'getTransactionByBlockHashAndIndex',
    desc: 'Returns information about a transaction by block hash and transaction index position.',
    params: [
      '`DATA`, 32 Bytes - hash of a block.',
      '`QUANTITY` - integer of the transaction index position.'
    ],
    returns: 'See [eth_getBlockByHash](#eth_gettransactionbyhash)',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'getTransactionByBlockNumberAndIndex',
    desc: 'Returns information about a transaction by block number and transaction index position.',
    params: [
      '`QUANTITY|TAG` - a block number, or the string `\'earliest\'`, `\'latest\'` or `\'pending\'`, as in the [default block parameter](#the-default-block-parameter).',
      '`QUANTITY` - the transaction index position.'
    ],
    returns: 'See [eth_getBlockByHash](#eth_gettransactionbyhash)',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'getTransactionReceipt',
    desc: 'Returns the receipt of a transaction by transaction hash.\n**Note** That the receipt is not available for pending transactions.',
    params: [
      '`DATA`, 32 Bytes - hash of a transaction'
    ],
    returns: {
      'description': '`Object` - A transaction receipt object, or `null` when no receipt was found:',
      'details': {
        'transactionHash ': '`DATA`, 32 Bytes - hash of the transaction.',
        'transactionIndex': '`QUANTITY` - integer of the transactions index position in the block.',
        'blockHash': '`DATA`, 32 Bytes - hash of the block where this transaction was in.',
        'blockNumber': '`QUANTITY` - block number where this transaction was in.',
        'cumulativeGasUsed ': '`QUANTITY ` - The total amount of gas used when this transaction was executed in the block.',
        'gasUsed ': '`QUANTITY ` - The amount of gas used by this specific transaction alone.',
        'contractAddress ': '`DATA`, 20 Bytes - The contract address created, if the transaction was a contract creation, otherwise `null`.',
        'logs': '`Array` - Array of log objects, which this transaction generated.'
      }
    },
    inputFormatters: [],
    outputFormatter: 'outputTransactionReceiptFormatter'
  },
  {
    name: 'getUncleByBlockHashAndIndex',
    desc: 'Returns information about a uncle of a block by hash and uncle index position.',
    params: [
      '`DATA`, 32 Bytes - hash a block.',
      '`QUANTITY` - the uncle\'s index position.'
    ],
    returns: 'See [eth_getBlockByHash](#eth_getblockbyhash)',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'getUncleByBlockNumberAndIndex',
    desc: 'Returns information about a uncle of a block by number and uncle index position.',
    params: [
      '`QUANTITY|TAG` - a block number, or the string `\'earliest\'`, `\'latest\'` or `\'pending\'`, as in the [default block parameter](#the-default-block-parameter).',
      '`QUANTITY` - the uncle\'s index position.'
    ],
    returns: 'See [eth_getBlockByHash](#eth_getblockbyhash)',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'getCompilers',
    desc: 'Returns a list of available compilers in the client.',
    params: [],
    returns: '`Array` - Array of available compilers.',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'compileSolidity',
    desc: 'Returns compiled solidity code.',
    params: [
      '`String` - The source code.'
    ],
    returns: '`DATA` - The compiled source code.',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'compileLLL',
    desc: 'Returns compiled LLL code.',
    params: [
      '`String` - The source code.'
    ],
    returns: '`DATA` - The compiled source code.',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'compileSerpent',
    desc: 'Returns compiled serpent code.',
    params: [
      '`String` - The source code.'
    ],
    returns: '`DATA` - The compiled source code.',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'newFilter',
    desc: 'Creates a filter object, based on filter options, to notify when the state changes (logs).\nTo check if the state has changed, call [eth_getFilterChanges](#eth_getfilterchanges).',
    params: [],
    returns: {
      'description': '1. `Object` - The filter options:',
      'details': {
        'fromBlock': '`QUANTITY|TAG` - (optional, default: `\'latest\'`) Integer block number, or `\'latest\'` for the last mined block or `\'pending\'`, `\'earliest\'` for not yet mined transactions.',
        'toBlock': '`QUANTITY|TAG` - (optional, default: `\'latest\'`) Integer block number, or `\'latest\'` for the last mined block or `\'pending\'`, `\'earliest\'` for not yet mined transactions.',
        'address': '`DATA|Array`, 20 Bytes - (optional) Contract address or a list of addresses from which logs should originate.',
        'topics': '`Array of DATA`,  - (optional) Array of 32 Bytes `DATA` topics. Topics are order-dependent. Each topic can also be an array of DATA with \'or\' options.'
      }
    },
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'newBlockFilter',
    desc: 'Creates a filter in the node, to notify when a new block arrives.\nTo check if the state has changed, call [eth_getFilterChanges](#eth_getfilterchanges).',
    params: [],
    returns: '`QUANTITY` - A filter id.',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'newPendingTransactionFilter',
    desc: 'Creates a filter in the node, to notify when new pending transactions arrive.\nTo check if the state has changed, call [eth_getFilterChanges](#eth_getfilterchanges).',
    params: [],
    returns: '`QUANTITY` - A filter id.',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'uninstallFilter',
    desc: 'Uninstalls a filter with given id. Should always be called when watch is no longer needed.\nAdditonally Filters timeout when they aren\'t requested with [eth_getFilterChanges](#eth_getfilterchanges) for a period of time.',
    params: [
      '`QUANTITY` - The filter id.'
    ],
    returns: '`Boolean` - `true` if the filter was successfully uninstalled, otherwise `false`.',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'getFilterChanges',
    desc: 'Polling method for a filter, which returns an array of logs which occurred since last poll.',
    params: [
      '`QUANTITY` - the filter id.'
    ],
    returns: '`Array` - Array of log objects, or an empty array if nothing has changed since last poll.',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'getFilterLogs',
    desc: 'Returns an array of all logs matching filter with given id.',
    params: [
      '`QUANTITY` - The filter id.'
    ],
    returns: 'See [eth_getFilterChanges](#eth_getfilterchanges)',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'getLogs',
    desc: 'Returns an array of all logs matching a given filter object.',
    params: [
      {
        'description': '`Object` - the filter object, see [eth_newFilter parameters](#eth_newfilter).',
        'details': {}
      }
    ],
    returns: 'See [eth_getFilterChanges](#eth_getfilterchanges)',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'getWork',
    desc: 'Returns the hash of the current block, the seedHash, and the boundary condition to be met (\'target\').',
    params: [],
    returns: '`Array` - Array with the following properties:',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'submitWork',
    desc: 'Used for submitting a proof-of-work solution.',
    params: [
      '`DATA`, 8 Bytes - The nonce found (64 bits)',
      '`DATA`, 32 Bytes - The header\'s pow-hash (256 bits)',
      '`DATA`, 32 Bytes - The mix digest (256 bits)'
    ],
    returns: '`Boolean` - returns `true` if the provided solution is valid, otherwise `false`.',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'submitHashrate',
    desc: 'Used for submitting mining hashrate.',
    params: [
      '`Hashrate`, a hexadecimal string representation (32 bytes) of the hash rate ',
      '`ID`, String - A random hexadecimal(32 bytes) ID identifying the client'
    ],
    returns: '`Boolean` - returns `true` if submitting went through succesfully and `false` otherwise.',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'pendingTransactions',
    desc: '?',
    params: [],
    returns: '`Boolean` - whether the call was successful',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'flush',
    desc: '?',
    params: [],
    returns: '`Boolean` - whether the call was successful',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'newFilterEx',
    desc: '?',
    params: [
      ''
    ],
    returns: '`Boolean` - whether the call was successful',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'getFilterChangesEx',
    desc: '?',
    params: [
      ''
    ],
    returns: '`Boolean` - whether the call was successful',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'getFilterLogsEx',
    desc: '?',
    params: [
      ''
    ],
    returns: '`Boolean` - whether the call was successful',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'getLogsEx',
    desc: '?',
    params: [
      '?'
    ],
    returns: '`Boolean` - whether the call was successful',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'register',
    desc: '?',
    params: [
      '?'
    ],
    returns: '`Boolean` - whether the call was successful',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'unregister',
    desc: '?',
    params: [
      '?'
    ],
    returns: '`Boolean` - whether the call was successful',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'fetchQueuedTransactions',
    desc: '?',
    params: [
      '?'
    ],
    returns: '`Boolean` - whether the call was successful',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'signTransaction',
    desc: '?',
    params: [
      '?'
    ],
    returns: '`Boolean` - whether the call was successful',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'inspectTransaction',
    desc: '?',
    params: [
      '?'
    ],
    returns: '`Boolean` - whether the call was successful',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'notePassword',
    desc: '?',
    params: [
      '?'
    ],
    returns: '`Boolean` - whether the call was successful',
    inputFormatters: [],
    outputFormatter: null
  }
];
