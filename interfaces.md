# interfaces

- [db](#db)
- [eth](#eth)
- [ethcore](#ethcore)
- [net](#net)
- [personal](#personal)
- [shh](#shh)
- [trace](#trace)
- [web3](#web3)


## db

- [db_getHex](#db_getHex)
- [db_getString](#db_getString)
- [db_putHex](#db_putHex)
- [db_putString](#db_putString)

### db_getHex

Returns binary data from the local database.
**Note** this function is deprecated and will be removed in the future.

#### parameters

- `String` - Database name.
- `String` - Key name.

#### returns

`DATA` - The previously stored data.

### db_getString

Returns string from the local database.
**Note** this function is deprecated and will be removed in the future.

#### parameters

- `String` - Database name.
- `String` - Key name.

#### returns

`String` - The previously stored string.

### db_putHex

Stores binary data in the local database.
**Note** this function is deprecated and will be removed in the future.

#### parameters

- `String` - Database name.
- `String` - Key name.
- `DATA` - The data to store.

#### returns

`Boolean` - returns `true` if the value was stored, otherwise `false`.

### db_putString

Stores a string in the local database.
**Note** this function is deprecated and will be removed in the future.

#### parameters

- `String` - Database name.
- `String` - Key name.
- `String` - String to store.

#### returns

`Boolean` - returns `true` if the value was stored, otherwise `false`.


## eth

- [eth_accounts](#eth_accounts)
- [eth_blockNumber](#eth_blockNumber)
- [eth_call](#eth_call)
- [eth_coinbase](#eth_coinbase)
- [eth_compileLLL](#eth_compileLLL)
- [eth_compileSerpent](#eth_compileSerpent)
- [eth_compileSolidity](#eth_compileSolidity)
- [eth_estimateGas](#eth_estimateGas)
- [eth_fetchQueuedTransactions](#eth_fetchQueuedTransactions)
- [eth_flush](#eth_flush)
- [eth_gasPrice](#eth_gasPrice)
- [eth_getBalance](#eth_getBalance)
- [eth_getBlockByHash](#eth_getBlockByHash)
- [eth_getBlockByNumber](#eth_getBlockByNumber)
- [eth_getBlockTransactionCountByHash](#eth_getBlockTransactionCountByHash)
- [eth_getBlockTransactionCountByNumber](#eth_getBlockTransactionCountByNumber)
- [eth_getCode](#eth_getCode)
- [eth_getCompilers](#eth_getCompilers)
- [eth_getFilterChanges](#eth_getFilterChanges)
- [eth_getFilterChangesEx](#eth_getFilterChangesEx)
- [eth_getFilterLogs](#eth_getFilterLogs)
- [eth_getFilterLogsEx](#eth_getFilterLogsEx)
- [eth_getLogs](#eth_getLogs)
- [eth_getLogsEx](#eth_getLogsEx)
- [eth_getStorageAt](#eth_getStorageAt)
- [eth_getTransactionByBlockHashAndIndex](#eth_getTransactionByBlockHashAndIndex)
- [eth_getTransactionByBlockNumberAndIndex](#eth_getTransactionByBlockNumberAndIndex)
- [eth_getTransactionByHash](#eth_getTransactionByHash)
- [eth_getTransactionCount](#eth_getTransactionCount)
- [eth_getTransactionReceipt](#eth_getTransactionReceipt)
- [eth_getUncleByBlockHashAndIndex](#eth_getUncleByBlockHashAndIndex)
- [eth_getUncleByBlockNumberAndIndex](#eth_getUncleByBlockNumberAndIndex)
- [eth_getUncleCountByBlockHash](#eth_getUncleCountByBlockHash)
- [eth_getUncleCountByBlockNumber](#eth_getUncleCountByBlockNumber)
- [eth_getWork](#eth_getWork)
- [eth_hashrate](#eth_hashrate)
- [eth_inspectTransaction](#eth_inspectTransaction)
- [eth_mining](#eth_mining)
- [eth_newBlockFilter](#eth_newBlockFilter)
- [eth_newFilter](#eth_newFilter)
- [eth_newFilterEx](#eth_newFilterEx)
- [eth_newPendingTransactionFilter](#eth_newPendingTransactionFilter)
- [eth_notePassword](#eth_notePassword)
- [eth_pendingTransactions](#eth_pendingTransactions)
- [eth_protocolVersion](#eth_protocolVersion)
- [eth_register](#eth_register)
- [eth_sendRawTransaction](#eth_sendRawTransaction)
- [eth_sendTransaction](#eth_sendTransaction)
- [eth_sign](#eth_sign)
- [eth_signTransaction](#eth_signTransaction)
- [eth_submitHashrate](#eth_submitHashrate)
- [eth_submitWork](#eth_submitWork)
- [eth_syncing](#eth_syncing)
- [eth_uninstallFilter](#eth_uninstallFilter)
- [eth_unregister](#eth_unregister)

### eth_accounts

Returns a list of addresses owned by client.

#### parameters

none

#### returns

`Array of DATA`, 20 Bytes - addresses owned by the client.

### eth_blockNumber

Returns the number of most recent block.

#### parameters

none

#### returns

`QUANTITY` - integer of the current block number the client is on.

### eth_call

Executes a new message call immediately without creating a transaction on the block chain.

#### parameters

- ```js
{
  "description": "`Object` - The transaction call object",
  "details": {
    "from": "`DATA`, 20 Bytes - (optional) The address the transaction is send from.",
    "to": "`DATA`, 20 Bytes  - The address the transaction is directed to.",
    "gas": "`QUANTITY`  - (optional) Integer of the gas provided for the transaction execution. eth_call consumes zero gas, but this parameter may be needed by some executions.",
    "gasPrice": "`QUANTITY`  - (optional) Integer of the gasPrice used for each paid gas",
    "value": "`QUANTITY`  - (optional) Integer of the value send with this transaction",
    "data": "`DATA`  - (optional) Hash of the method signature and encoded parameters. For details see [Ethereum Contract ABI](https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI)"
  }
}```
- `QUANTITY|TAG` - integer block number, or the string `'latest'`, `'earliest'` or `'pending'`, see the [default block parameter](#the-default-block-parameter)

#### returns

`DATA` - the return value of executed contract.

### eth_coinbase

Returns the client coinbase address.

#### parameters

none

#### returns

`DATA`, 20 bytes - the current coinbase address.

### eth_compileLLL

Returns compiled LLL code.

#### parameters

- `String` - The source code.

#### returns

`DATA` - The compiled source code.

### eth_compileSerpent

Returns compiled serpent code.

#### parameters

- `String` - The source code.

#### returns

`DATA` - The compiled source code.

### eth_compileSolidity

Returns compiled solidity code.

#### parameters

- `String` - The source code.

#### returns

`DATA` - The compiled source code.

### eth_estimateGas

Makes a call or transaction, which won't be added to the blockchain and returns the used gas, which can be used for estimating the used gas.

#### parameters

none

#### returns

`QUANTITY` - the amount of gas used.

### eth_fetchQueuedTransactions

?

#### parameters

- ?

#### returns

`Boolean` - whether the call was successful

### eth_flush

?

#### parameters

none

#### returns

`Boolean` - whether the call was successful

### eth_gasPrice

Returns the current price per gas in wei.

#### parameters

none

#### returns

`QUANTITY` - integer of the current gas price in wei.

### eth_getBalance

Returns the balance of the account of given address.

#### parameters

- `DATA`, 20 Bytes - address to check for balance.
- `QUANTITY|TAG` - integer block number, or the string `'latest'`, `'earliest'` or `'pending'`, see the [default block parameter](#the-default-block-parameter)

#### returns

`QUANTITY` - integer of the current balance in wei.

### eth_getBlockByHash

Returns information about a block by hash.

#### parameters

- `DATA`, 32 Bytes - Hash of a block.
- `Boolean` - If `true` it returns the full transaction objects, if `false` only the hashes of the transactions.

#### returns

```js
{
  "description": "`Object` - A block object, or `null` when no block was found:",
  "details": {
    "number": "`QUANTITY` - the block number. `null` when its pending block.",
    "hash": "`DATA`, 32 Bytes - hash of the block. `null` when its pending block.",
    "parentHash": "`DATA`, 32 Bytes - hash of the parent block.",
    "nonce": "`DATA`, 8 Bytes - hash of the generated proof-of-work. `null` when its pending block.",
    "sha3Uncles": "`DATA`, 32 Bytes - SHA3 of the uncles data in the block.",
    "logsBloom": "`DATA`, 256 Bytes - the bloom filter for the logs of the block. `null` when its pending block.",
    "transactionsRoot": "`DATA`, 32 Bytes - the root of the transaction trie of the block.",
    "stateRoot": "`DATA`, 32 Bytes - the root of the final state trie of the block.",
    "receiptsRoot": "`DATA`, 32 Bytes - the root of the receipts trie of the block.",
    "miner": "`DATA`, 20 Bytes - the address of the beneficiary to whom the mining rewards were given.",
    "difficulty": "`QUANTITY` - integer of the difficulty for this block.",
    "totalDifficulty": "`QUANTITY` - integer of the total difficulty of the chain until this block.",
    "extraData": "`DATA` - the 'extra data' field of this block.",
    "size": "`QUANTITY` - integer the size of this block in bytes.",
    "gasLimit": "`QUANTITY` - the maximum gas allowed in this block.",
    "gasUsed": "`QUANTITY` - the total used gas by all transactions in this block.",
    "timestamp": "`QUANTITY` - the unix timestamp for when the block was collated.",
    "transactions": "`Array` - Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter.",
    "uncles": "`Array` - Array of uncle hashes."
  }
}```

### eth_getBlockByNumber

Returns information about a block by block number.

#### parameters

- `QUANTITY|TAG` - integer of a block number, or the string `'earliest'`, `'latest'` or `'pending'`, as in the [default block parameter](#the-default-block-parameter).
- `Boolean` - If `true` it returns the full transaction objects, if `false` only the hashes of the transactions.

#### returns

See [eth_getBlockByHash](#eth_getblockbyhash)

### eth_getBlockTransactionCountByHash

Returns the number of transactions in a block from a block matching the given block hash.

#### parameters

- `DATA`, 32 Bytes - hash of a block

#### returns

`QUANTITY` - integer of the number of transactions in this block.

### eth_getBlockTransactionCountByNumber

Returns the number of transactions in a block from a block matching the given block number.

#### parameters

- `QUANTITY|TAG` - integer of a block number, or the string `'earliest'`, `'latest'` or `'pending'`, as in the [default block parameter](#the-default-block-parameter).

#### returns

`QUANTITY` - integer of the number of transactions in this block.

### eth_getCode

Returns code at a given address.

#### parameters

- `DATA`, 20 Bytes - address
- `QUANTITY|TAG` - integer block number, or the string `'latest'`, `'earliest'` or `'pending'`, see the [default block parameter](#the-default-block-parameter)

#### returns

`DATA` - the code from the given address.

### eth_getCompilers

Returns a list of available compilers in the client.

#### parameters

none

#### returns

`Array` - Array of available compilers.

### eth_getFilterChanges

Polling method for a filter, which returns an array of logs which occurred since last poll.

#### parameters

- `QUANTITY` - the filter id.

#### returns

`Array` - Array of log objects, or an empty array if nothing has changed since last poll.

### eth_getFilterChangesEx

?

#### parameters

- 

#### returns

`Boolean` - whether the call was successful

### eth_getFilterLogs

Returns an array of all logs matching filter with given id.

#### parameters

- `QUANTITY` - The filter id.

#### returns

See [eth_getFilterChanges](#eth_getfilterchanges)

### eth_getFilterLogsEx

?

#### parameters

- 

#### returns

`Boolean` - whether the call was successful

### eth_getLogs

Returns an array of all logs matching a given filter object.

#### parameters

- ```js
{
  "description": "`Object` - the filter object, see [eth_newFilter parameters](#eth_newfilter).",
  "details": {}
}```

#### returns

See [eth_getFilterChanges](#eth_getfilterchanges)

### eth_getLogsEx

?

#### parameters

- ?

#### returns

`Boolean` - whether the call was successful

### eth_getStorageAt

Returns the value from a storage position at a given address.

#### parameters

- `DATA`, 20 Bytes - address of the storage.
- `QUANTITY` - integer of the position in the storage.
- `QUANTITY|TAG` - integer block number, or the string `'latest'`, `'earliest'` or `'pending'`, see the [default block parameter](#the-default-block-parameter)

#### returns

`DATA` - the value at this storage position.

### eth_getTransactionByBlockHashAndIndex

Returns information about a transaction by block hash and transaction index position.

#### parameters

- `DATA`, 32 Bytes - hash of a block.
- `QUANTITY` - integer of the transaction index position.

#### returns

See [eth_getBlockByHash](#eth_gettransactionbyhash)

### eth_getTransactionByBlockNumberAndIndex

Returns information about a transaction by block number and transaction index position.

#### parameters

- `QUANTITY|TAG` - a block number, or the string `'earliest'`, `'latest'` or `'pending'`, as in the [default block parameter](#the-default-block-parameter).
- `QUANTITY` - the transaction index position.

#### returns

See [eth_getBlockByHash](#eth_gettransactionbyhash)

### eth_getTransactionByHash

Returns the information about a transaction requested by transaction hash.

#### parameters

- `DATA`, 32 Bytes - hash of a transaction

#### returns

```js
{
  "description": "`Object` - A transaction object, or `null` when no transaction was found:",
  "details": {
    "hash": "`DATA`, 32 Bytes - hash of the transaction.",
    "nonce": "`QUANTITY` - the number of transactions made by the sender prior to this one.",
    "blockHash": "`DATA`, 32 Bytes - hash of the block where this transaction was in. `null` when its pending.",
    "blockNumber": "`QUANTITY` - block number where this transaction was in. `null` when its pending.",
    "transactionIndex": "`QUANTITY` - integer of the transactions index position in the block. `null` when its pending.",
    "from": "`DATA`, 20 Bytes - address of the sender.",
    "to": "`DATA`, 20 Bytes - address of the receiver. `null` when its a contract creation transaction.",
    "value": "`QUANTITY` - value transferred in Wei.",
    "gasPrice": "`QUANTITY` - gas price provided by the sender in Wei.",
    "gas": "`QUANTITY` - gas provided by the sender.",
    "input": "`DATA` - the data send along with the transaction."
  }
}```

### eth_getTransactionCount

Returns the number of transactions *sent* from an address.

#### parameters

- `DATA`, 20 Bytes - address.
- `QUANTITY|TAG` - integer block number, or the string `'latest'`, `'earliest'` or `'pending'`, see the [default block parameter](#the-default-block-parameter)

#### returns

`QUANTITY` - integer of the number of transactions send from this address.

### eth_getTransactionReceipt

Returns the receipt of a transaction by transaction hash.
**Note** That the receipt is not available for pending transactions.

#### parameters

- `DATA`, 32 Bytes - hash of a transaction

#### returns

```js
{
  "description": "`Object` - A transaction receipt object, or `null` when no receipt was found:",
  "details": {
    "transactionHash ": "`DATA`, 32 Bytes - hash of the transaction.",
    "transactionIndex": "`QUANTITY` - integer of the transactions index position in the block.",
    "blockHash": "`DATA`, 32 Bytes - hash of the block where this transaction was in.",
    "blockNumber": "`QUANTITY` - block number where this transaction was in.",
    "cumulativeGasUsed ": "`QUANTITY ` - The total amount of gas used when this transaction was executed in the block.",
    "gasUsed ": "`QUANTITY ` - The amount of gas used by this specific transaction alone.",
    "contractAddress ": "`DATA`, 20 Bytes - The contract address created, if the transaction was a contract creation, otherwise `null`.",
    "logs": "`Array` - Array of log objects, which this transaction generated."
  }
}```

### eth_getUncleByBlockHashAndIndex

Returns information about a uncle of a block by hash and uncle index position.

#### parameters

- `DATA`, 32 Bytes - hash a block.
- `QUANTITY` - the uncle's index position.

#### returns

See [eth_getBlockByHash](#eth_getblockbyhash)

### eth_getUncleByBlockNumberAndIndex

Returns information about a uncle of a block by number and uncle index position.

#### parameters

- `QUANTITY|TAG` - a block number, or the string `'earliest'`, `'latest'` or `'pending'`, as in the [default block parameter](#the-default-block-parameter).
- `QUANTITY` - the uncle's index position.

#### returns

See [eth_getBlockByHash](#eth_getblockbyhash)

### eth_getUncleCountByBlockHash

Returns the number of uncles in a block from a block matching the given block hash.

#### parameters

- `DATA`, 32 Bytes - hash of a block

#### returns

`QUANTITY` - integer of the number of uncles in this block.

### eth_getUncleCountByBlockNumber

Returns the number of uncles in a block from a block matching the given block number.

#### parameters

- `QUANTITY` - integer of a block number, or the string 'latest', 'earliest' or 'pending', see the [default block parameter](#the-default-block-parameter)

#### returns

`QUANTITY` - integer of the number of uncles in this block.

### eth_getWork

Returns the hash of the current block, the seedHash, and the boundary condition to be met ('target').

#### parameters

none

#### returns

`Array` - Array with the following properties:

### eth_hashrate

Returns the number of hashes per second that the node is mining with.

#### parameters

none

#### returns

`QUANTITY` - number of hashes per second.

### eth_inspectTransaction

?

#### parameters

- ?

#### returns

`Boolean` - whether the call was successful

### eth_mining

Returns `true` if client is actively mining new blocks.

#### parameters

none

#### returns

`Boolean` - returns `true` of the client is mining, otherwise `false`.

### eth_newBlockFilter

Creates a filter in the node, to notify when a new block arrives.
To check if the state has changed, call [eth_getFilterChanges](#eth_getfilterchanges).

#### parameters

none

#### returns

`QUANTITY` - A filter id.

### eth_newFilter

Creates a filter object, based on filter options, to notify when the state changes (logs).
To check if the state has changed, call [eth_getFilterChanges](#eth_getfilterchanges).

#### parameters

none

#### returns

```js
{
  "description": "1. `Object` - The filter options:",
  "details": {
    "fromBlock": "`QUANTITY|TAG` - (optional, default: `'latest'`) Integer block number, or `'latest'` for the last mined block or `'pending'`, `'earliest'` for not yet mined transactions.",
    "toBlock": "`QUANTITY|TAG` - (optional, default: `'latest'`) Integer block number, or `'latest'` for the last mined block or `'pending'`, `'earliest'` for not yet mined transactions.",
    "address": "`DATA|Array`, 20 Bytes - (optional) Contract address or a list of addresses from which logs should originate.",
    "topics": "`Array of DATA`,  - (optional) Array of 32 Bytes `DATA` topics. Topics are order-dependent. Each topic can also be an array of DATA with 'or' options."
  }
}```

### eth_newFilterEx

?

#### parameters

- 

#### returns

`Boolean` - whether the call was successful

### eth_newPendingTransactionFilter

Creates a filter in the node, to notify when new pending transactions arrive.
To check if the state has changed, call [eth_getFilterChanges](#eth_getfilterchanges).

#### parameters

none

#### returns

`QUANTITY` - A filter id.

### eth_notePassword

?

#### parameters

- ?

#### returns

`Boolean` - whether the call was successful

### eth_pendingTransactions

?

#### parameters

none

#### returns

`Boolean` - whether the call was successful

### eth_protocolVersion

Returns the current ethereum protocol version.

#### parameters

none

#### returns

`String` - The current ethereum protocol version

### eth_register

?

#### parameters

- ?

#### returns

`Boolean` - whether the call was successful

### eth_sendRawTransaction

Creates new message call transaction or a contract creation for signed transactions.

#### parameters

- `DATA`, The signed transaction data.

#### returns

`DATA`, 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available.

### eth_sendTransaction

Creates new message call transaction or a contract creation, if the data field contains code.

#### parameters

- ```js
{
  "description": "`Object` - The transaction object",
  "details": {
    "from": "`DATA`, 20 Bytes - The address the transaction is send from.",
    "to": "`DATA`, 20 Bytes - (optional when creating new contract) The address the transaction is directed to.",
    "gas": "`QUANTITY`  - (optional, default: 90000) Integer of the gas provided for the transaction execution. It will return unused gas.",
    "gasPrice": "`QUANTITY`  - (optional, default: To-Be-Determined) Integer of the gasPrice used for each paid gas",
    "value": "`QUANTITY`  - (optional) Integer of the value send with this transaction",
    "data": "`DATA`  - The compiled code of a contract OR the hash of the invoked method signature and encoded parameters. For details see [Ethereum Contract ABI](https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI)",
    "nonce": "`QUANTITY`  - (optional) Integer of a nonce. This allows to overwrite your own pending transactions that use the same nonce."
  }
}```

#### returns

`DATA`, 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available.

### eth_sign

Signs data with a given address.
**Note** the address to sign must be unlocked.

#### parameters

- `DATA`, 20 Bytes - address
- `DATA`, Data to sign

#### returns

`DATA`: Signed data

### eth_signTransaction

?

#### parameters

- ?

#### returns

`Boolean` - whether the call was successful

### eth_submitHashrate

Used for submitting mining hashrate.

#### parameters

- `Hashrate`, a hexadecimal string representation (32 bytes) of the hash rate 
- `ID`, String - A random hexadecimal(32 bytes) ID identifying the client

#### returns

`Boolean` - returns `true` if submitting went through succesfully and `false` otherwise.

### eth_submitWork

Used for submitting a proof-of-work solution.

#### parameters

- `DATA`, 8 Bytes - The nonce found (64 bits)
- `DATA`, 32 Bytes - The header's pow-hash (256 bits)
- `DATA`, 32 Bytes - The mix digest (256 bits)

#### returns

`Boolean` - returns `true` if the provided solution is valid, otherwise `false`.

### eth_syncing

Returns an object with data about the sync status or `false`.

#### parameters

none

#### returns

```js
{
  "description": "`Object|Boolean`, An object with sync status data or `FALSE`, when not syncing:",
  "details": {
    "startingBlock": "`QUANTITY` - The block at which the import started (will only be reset, after the sync reached his head)",
    "currentBlock": "`QUANTITY` - The current block, same as eth_blockNumber",
    "highestBlock": "`QUANTITY` - The estimated highest block"
  }
}```

### eth_uninstallFilter

Uninstalls a filter with given id. Should always be called when watch is no longer needed.
Additonally Filters timeout when they aren't requested with [eth_getFilterChanges](#eth_getfilterchanges) for a period of time.

#### parameters

- `QUANTITY` - The filter id.

#### returns

`Boolean` - `true` if the filter was successfully uninstalled, otherwise `false`.

### eth_unregister

?

#### parameters

- ?

#### returns

`Boolean` - whether the call was successful


## ethcore

- [ethcore_defaultExtraData](#ethcore_defaultExtraData)
- [ethcore_devLogs](#ethcore_devLogs)
- [ethcore_devLogsLevels](#ethcore_devLogsLevels)
- [ethcore_extraData](#ethcore_extraData)
- [ethcore_gasFloorTarget](#ethcore_gasFloorTarget)
- [ethcore_minGasPrice](#ethcore_minGasPrice)
- [ethcore_netChain](#ethcore_netChain)
- [ethcore_netMaxPeers](#ethcore_netMaxPeers)
- [ethcore_netPort](#ethcore_netPort)
- [ethcore_nodeName](#ethcore_nodeName)
- [ethcore_rpcSettings](#ethcore_rpcSettings)
- [ethcore_setAuthor](#ethcore_setAuthor)
- [ethcore_setExtraData](#ethcore_setExtraData)
- [ethcore_setGasFloorTarget](#ethcore_setGasFloorTarget)
- [ethcore_setMinGasPrice](#ethcore_setMinGasPrice)
- [ethcore_setTransactionsLimit](#ethcore_setTransactionsLimit)
- [ethcore_transactionsLimit](#ethcore_transactionsLimit)

### ethcore_defaultExtraData

Returns the default extra data

#### parameters

none

#### returns

`DATA` - Extra data

### ethcore_devLogs

?

#### parameters

none

#### returns

`ARRAY` - Dev logs

### ethcore_devLogsLevels

?

#### parameters

none

#### returns

?

### ethcore_extraData

Returns currently set extra data

#### parameters

none

#### returns

`DATA` - Extra data

### ethcore_gasFloorTarget

Returns current target for gas floor

#### parameters

none

#### returns

`QUANTITY` - Gas Floor Target

### ethcore_minGasPrice

Returns currently set minimal gas price

#### parameters

none

#### returns

`QUANTITY` - Minimal Gas Price

### ethcore_netChain

Returns the name of the connected chain.

#### parameters

none

#### returns

`DATA` - chain name

### ethcore_netMaxPeers

Returns maximal number of peers.

#### parameters

none

#### returns

`QUANTITY` - Maximal number of peers

### ethcore_netPort

Returns network port the node is listening on.

#### parameters

none

#### returns

`QUANTITY` - Port Number

### ethcore_nodeName

Returns node name (identity)

#### parameters

none

#### returns

`DATA` - Node name

### ethcore_rpcSettings

Returns basic settings of rpc (enabled, port, interface).

#### parameters

none

#### returns

`OBJECT` - JSON object containing rpc settings

### ethcore_setAuthor

Changes author (coinbase) for mined blocks.

#### parameters

- `DATA`, 20 Bytes - Address

#### returns

`Boolean` - whether the call was successful

### ethcore_setExtraData

Changes extra data for newly mined blocks

#### parameters

- `DATA`- Extra Data

#### returns

`Boolean` - whether the call was successful

### ethcore_setGasFloorTarget

Changes current gas floor target.

#### parameters

- `QUANTITY` - Gas Floor Target

#### returns

`Boolean` - whether the call was successful

### ethcore_setMinGasPrice

Changes minimal gas price for transaction to be accepted to the queue.

#### parameters

- `QUANTITY` - Minimal gas price

#### returns

`Boolean` - whether the call was successful

### ethcore_setTransactionsLimit

Changes limit for transactions in queue.

#### parameters

- `QUANTITY` - New Limit

#### returns

`Boolean` - whether the call was successful

### ethcore_transactionsLimit

Changes limit for transactions in queue.

#### parameters

none

#### returns

`QUANTITY` - Current max number of transactions in queue.


## net

- [net_listening](#net_listening)
- [net_peerCount](#net_peerCount)
- [net_version](#net_version)

### net_listening

Returns `true` if client is actively listening for network connections.

#### parameters

none

#### returns

`Boolean` - `true` when listening, otherwise `false`.

### net_peerCount

Returns number of peers currenly connected to the client.

#### parameters

none

#### returns

`QUANTITY` - integer of the number of connected peers.

### net_version

Returns the current network protocol version.

#### parameters

none

#### returns

`String` - The current network protocol version


## personal

- [personal_listAccounts](#personal_listAccounts)
- [personal_newAccount](#personal_newAccount)
- [personal_signAndSendTransaction](#personal_signAndSendTransaction)
- [personal_signerEnabled](#personal_signerEnabled)
- [personal_unlockAccount](#personal_unlockAccount)

### personal_listAccounts

Returns a list of addresses owned by client.

#### parameters

none

#### returns

`Array of DATA`, 20 Bytes - addresses owned by the client.

### personal_newAccount

Creates new account

#### parameters

- `DATA` - Password

#### returns

`Boolean` - whether the call was successful

### personal_signAndSendTransaction

Sends and signs a transaction given account passphrase. Does not require the account to be unlocked nor unlocks the account for future transactions. 

#### parameters

- ```js
{
  "description": "`Object` - The transaction object",
  "details": {
    "from": "`DATA`, 20 Bytes - The address the transaction is send from.",
    "to": "`DATA`, 20 Bytes - (optional when creating new contract) The address the transaction is directed to.",
    "gas": "`QUANTITY`  - (optional, default: 90000) Integer of the gas provided for the transaction execution. It will return unused gas.",
    "gasPrice": "`QUANTITY`  - (optional, default: To-Be-Determined) Integer of the gasPrice used for each paid gas",
    "value": "`QUANTITY`  - (optional) Integer of the value send with this transaction",
    "data": "`DATA`  - The compiled code of a contract OR the hash of the invoked method signature and encoded parameters. For details see [Ethereum Contract ABI](https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI)",
    "nonce": "`QUANTITY`  - (optional) Integer of a nonce. This allows to overwrite your own pending transactions that use the same nonce."
  }
}```
- `PASS`, Passphrase to unlock `from` account.

#### returns

`DATA`, 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available.

### personal_signerEnabled

Returns whether signer is enabled/disabled.

#### parameters

none

#### returns

`Boolean` - true when enabled, false when disabled

### personal_unlockAccount

?

#### parameters

- ?
- ?
- ?

#### returns

`Boolean` - whether the call was successful


## shh

- [shh_addToGroup](#shh_addToGroup)
- [shh_getFilterChanges](#shh_getFilterChanges)
- [shh_getMessages](#shh_getMessages)
- [shh_hasIdentity](#shh_hasIdentity)
- [shh_newFilter](#shh_newFilter)
- [shh_newGroup](#shh_newGroup)
- [shh_newIdentity](#shh_newIdentity)
- [shh_post](#shh_post)
- [shh_uninstallFilter](#shh_uninstallFilter)
- [shh_version](#shh_version)

### shh_addToGroup

(?)

#### parameters

- `DATA`, 60 Bytes - The identity address to add to a group (?).

#### returns

`Boolean` - returns `true` if the identity was successfully added to the group, otherwise `false` (?).

### shh_getFilterChanges

Polling method for whisper filters. Returns new messages since the last call of this method.
**Note** calling the [shh_getMessages](#shh_getmessages) method, will reset the buffer for this method, so that you won't receive duplicate messages.

#### parameters

- `QUANTITY` - The filter id.

#### returns

`Array` - Array of messages received since last poll:

### shh_getMessages

Get all messages matching a filter. Unlike `shh_getFilterChanges` this returns all messages.

#### parameters

- `QUANTITY` - The filter id.

#### returns

See [shh_getFilterChanges](#shh_getfilterchanges)

### shh_hasIdentity

Checks if the client hold the private keys for a given identity.

#### parameters

- `DATA`, 60 Bytes - The identity address to check.

#### returns

`Boolean` - returns `true` if the client holds the privatekey for that identity, otherwise `false`.

### shh_newFilter

Creates filter to notify, when client receives whisper message matching the filter options.

#### parameters

- ```js
{
  "description": "`Object` - The filter options:",
  "details": {
    "to": "`DATA`, 60 Bytes - (optional) Identity of the receiver. *When present it will try to decrypt any incoming message if the client holds the private key to this identity.*",
    "topics": "`Array of DATA` - Array of `DATA` topics which the incoming message's topics should match.  You can use the following combinations:"
  }
}```

#### returns

`QUANTITY` - The newly created filter.

### shh_newGroup

(?)

#### parameters

none

#### returns

`DATA`, 60 Bytes - the address of the new group. (?)

### shh_newIdentity

Creates new whisper identity in the client.

#### parameters

none

#### returns

`DATA`, 60 Bytes - the address of the new identiy.

### shh_post

Sends a whisper message.

#### parameters

- ```js
{
  "description": "`Object` - The whisper post object:",
  "details": {
    "from": "`DATA`, 60 Bytes - (optional) The identity of the sender.",
    "to": "`DATA`, 60 Bytes - (optional) The identity of the receiver. When present whisper will encrypt the message so that only the receiver can decrypt it.",
    "topics": "`Array of DATA` - Array of `DATA` topics, for the receiver to identify messages.",
    "payload": "`DATA` - The payload of the message.",
    "priority": "`QUANTITY` - The integer of the priority in a rang from ... (?).",
    "ttl": "`QUANTITY` - integer of the time to live in seconds."
  }
}```

#### returns

`Boolean` - returns `true` if the message was send, otherwise `false`.

### shh_uninstallFilter

Uninstalls a filter with given id. Should always be called when watch is no longer needed.
Additonally Filters timeout when they aren't requested with [shh_getFilterChanges](#shh_getfilterchanges) for a period of time.

#### parameters

- `QUANTITY` - The filter id.

#### returns

`Boolean` - `true` if the filter was successfully uninstalled, otherwise `false`.

### shh_version

Returns the current whisper protocol version.

#### parameters

none

#### returns

`String` - The current whisper protocol version


## trace

- [trace_block](#trace_block)
- [trace_filter](#trace_filter)
- [trace_get](#trace_get)
- [trace_transaction](#trace_transaction)

### trace_block

Returns traces created at given block

#### parameters

- `BLOCKNUMBER` - Integer block number, or 'latest' for the last mined block or 'pending', 'earliest' for not yet mined transactions

#### returns

`ARRAY` - Block traces

### trace_filter

Returns traces matching given filter

#### parameters

- `OBJECT` - The filter object

#### returns

`ARRAY` - Traces matching given filter

### trace_get

Returns trace at given position.

#### parameters

- `HASH` - Transaction hash
- `INTEGER` - Trace position witing transaction

#### returns

`Object` - Trace

### trace_transaction

Returns all traces of given transaction

#### parameters

- `HASH` - Transaction hash

#### returns

`ARRAY` - Traces of given transaction


## web3

- [web3_clientVersion](#web3_clientVersion)
- [web3_sha3](#web3_sha3)

### web3_clientVersion

Returns the current client version.

#### parameters

none

#### returns

`String` - The current client version

### web3_sha3

Returns Keccak-256 (*not* the standardized SHA3-256) of the given data.

#### parameters

- `String` - the data to convert into a SHA3 hash

#### returns

`DATA` - The SHA3 result of the given string.

