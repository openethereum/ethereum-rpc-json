export default [
  {
    name: 'shh_version',
    desc: 'Returns the current whisper protocol version.',
    params: [],
    returns: '`String` - The current whisper protocol version',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'shh_post',
    desc: 'Sends a whisper message.',
    params: [
      {
        'description': '`Object` - The whisper post object:',
        'details': {
          'from': '`DATA`, 60 Bytes - (optional) The identity of the sender.',
          'to': '`DATA`, 60 Bytes - (optional) The identity of the receiver. When present whisper will encrypt the message so that only the receiver can decrypt it.',
          'topics': '`Array of DATA` - Array of `DATA` topics, for the receiver to identify messages.',
          'payload': '`DATA` - The payload of the message.',
          'priority': '`QUANTITY` - The integer of the priority in a rang from ... (?).',
          'ttl': '`QUANTITY` - integer of the time to live in seconds.'
        }
      }
    ],
    returns: '`Boolean` - returns `true` if the message was send, otherwise `false`.',
    inputFormatters: [
      'inputPostFormatter'
    ],
    outputFormatter: null
  },
  {
    name: 'shh_newIdentity',
    desc: 'Creates new whisper identity in the client.',
    params: [],
    returns: '`DATA`, 60 Bytes - the address of the new identiy.',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'shh_hasIdentity',
    desc: 'Checks if the client hold the private keys for a given identity.',
    params: [
      '`DATA`, 60 Bytes - The identity address to check.'
    ],
    returns: '`Boolean` - returns `true` if the client holds the privatekey for that identity, otherwise `false`.',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'shh_newGroup',
    desc: '(?)',
    params: [],
    returns: '`DATA`, 60 Bytes - the address of the new group. (?)',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'shh_addToGroup',
    desc: '(?)',
    params: [
      '`DATA`, 60 Bytes - The identity address to add to a group (?).'
    ],
    returns: '`Boolean` - returns `true` if the identity was successfully added to the group, otherwise `false` (?).',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'shh_newFilter',
    desc: 'Creates filter to notify, when client receives whisper message matching the filter options.',
    params: [
      {
        'description': '`Object` - The filter options:',
        'details': {
          'to': '`DATA`, 60 Bytes - (optional) Identity of the receiver. *When present it will try to decrypt any incoming message if the client holds the private key to this identity.*',
          'topics': '`Array of DATA` - Array of `DATA` topics which the incoming message\'s topics should match.  You can use the following combinations:'
        }
      }
    ],
    returns: '`QUANTITY` - The newly created filter.',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'shh_uninstallFilter',
    desc: 'Uninstalls a filter with given id. Should always be called when watch is no longer needed.\nAdditonally Filters timeout when they aren\'t requested with [shh_getFilterChanges](#shh_getfilterchanges) for a period of time.',
    params: [
      '`QUANTITY` - The filter id.'
    ],
    returns: '`Boolean` - `true` if the filter was successfully uninstalled, otherwise `false`.',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'shh_getFilterChanges',
    desc: 'Polling method for whisper filters. Returns new messages since the last call of this method.\n**Note** calling the [shh_getMessages](#shh_getmessages) method, will reset the buffer for this method, so that you won\'t receive duplicate messages.',
    params: [
      '`QUANTITY` - The filter id.'
    ],
    returns: '`Array` - Array of messages received since last poll:',
    inputFormatters: [],
    outputFormatter: null
  },
  {
    name: 'shh_getMessages',
    desc: 'Get all messages matching a filter. Unlike `shh_getFilterChanges` this returns all messages.',
    params: [
      '`QUANTITY` - The filter id.'
    ],
    returns: 'See [shh_getFilterChanges](#shh_getfilterchanges)',
    inputFormatters: [],
    outputFormatter: null
  }
];
