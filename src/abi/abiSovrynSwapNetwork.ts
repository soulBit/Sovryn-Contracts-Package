const abi: Object[] = [
  {
    constant: false,
    inputs: [{ name: '_onlyOwnerCanUpdateRegistry', type: 'bool' }],
    name: 'restrictRegistryUpdate',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_token', type: 'address' },
      { name: '_register', type: 'bool' },
    ],
    name: 'registerEtherToken',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { name: '_path', type: 'address[]' },
      { name: '_amount', type: 'uint256' },
    ],
    name: 'getReturnByPath',
    outputs: [
      { name: '', type: 'uint256' },
      { name: '', type: 'uint256' },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_path', type: 'address[]' },
      { name: '_amount', type: 'uint256' },
      { name: '_minReturn', type: 'uint256' },
      { name: '_beneficiary', type: 'address' },
      { name: '_affiliateAccount', type: 'address' },
      { name: '_affiliateFee', type: 'uint256' },
    ],
    name: 'claimAndConvertFor2',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'onlyOwnerCanUpdateRegistry',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'updateRegistry',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_path', type: 'address[]' },
      { name: '_amount', type: 'uint256' },
      { name: '_minReturn', type: 'uint256' },
      { name: '_affiliateAccount', type: 'address' },
      { name: '_affiliateFee', type: 'uint256' },
    ],
    name: 'convert2',
    outputs: [{ name: '', type: 'uint256' }],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'maxAffiliateFee',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_token', type: 'address' },
      { name: '_to', type: 'address' },
      { name: '_amount', type: 'uint256' },
    ],
    name: 'withdrawTokens',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'prevRegistry',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'registry',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { name: '_path', type: 'address[]' },
      { name: '_amount', type: 'uint256' },
    ],
    name: 'rateByPath',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'etherTokens',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_path', type: 'address[]' },
      { name: '_sovrynSwapX', type: 'address' },
      { name: '_conversionId', type: 'uint256' },
      { name: '_minReturn', type: 'uint256' },
      { name: '_beneficiary', type: 'address' },
    ],
    name: 'completeXConversion',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_path', type: 'address[]' },
      { name: '_amount', type: 'uint256' },
      { name: '_minReturn', type: 'uint256' },
      { name: '_beneficiary', type: 'address' },
      { name: '_affiliateAccount', type: 'address' },
      { name: '_affiliateFee', type: 'uint256' },
    ],
    name: 'convertFor2',
    outputs: [{ name: '', type: 'uint256' }],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_path', type: 'address[]' },
      { name: '_amount', type: 'uint256' },
      { name: '_minReturn', type: 'uint256' },
      { name: '_beneficiary', type: 'address' },
    ],
    name: 'claimAndConvertFor',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'restoreRegistry',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_path', type: 'address[]' },
      { name: '_amount', type: 'uint256' },
      { name: '_minReturn', type: 'uint256' },
      { name: '_beneficiary', type: 'address' },
      { name: '_affiliateAccount', type: 'address' },
      { name: '_affiliateFee', type: 'uint256' },
    ],
    name: 'convertByPath',
    outputs: [{ name: '', type: 'uint256' }],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_path', type: 'address[]' },
      { name: '_amount', type: 'uint256' },
      { name: '_minReturn', type: 'uint256' },
      { name: '_targetBlockchain', type: 'bytes32' },
      { name: '_targetAccount', type: 'bytes32' },
      { name: '_conversionId', type: 'uint256' },
    ],
    name: 'xConvert',
    outputs: [{ name: '', type: 'uint256' }],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_path', type: 'address[]' },
      { name: '_amount', type: 'uint256' },
      { name: '_minReturn', type: 'uint256' },
    ],
    name: 'claimAndConvert',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_path', type: 'address[]' },
      { name: '_amount', type: 'uint256' },
      { name: '_minReturn', type: 'uint256' },
      { name: '_beneficiary', type: 'address' },
    ],
    name: 'convertFor',
    outputs: [{ name: '', type: 'uint256' }],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_path', type: 'address[]' },
      { name: '_amount', type: 'uint256' },
      { name: '_minReturn', type: 'uint256' },
      { name: '_targetBlockchain', type: 'bytes32' },
      { name: '_targetAccount', type: 'bytes32' },
      { name: '_conversionId', type: 'uint256' },
      { name: '_affiliateAccount', type: 'address' },
      { name: '_affiliateFee', type: 'uint256' },
    ],
    name: 'xConvert2',
    outputs: [{ name: '', type: 'uint256' }],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'newOwner',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { name: '_sourceToken', type: 'address' },
      { name: '_targetToken', type: 'address' },
    ],
    name: 'conversionPath',
    outputs: [{ name: '', type: 'address[]' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_path', type: 'address[]' },
      { name: '_amount', type: 'uint256' },
      { name: '_minReturn', type: 'uint256' },
      { name: '_affiliateAccount', type: 'address' },
      { name: '_affiliateFee', type: 'uint256' },
    ],
    name: 'claimAndConvert2',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: '_newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_path', type: 'address[]' },
      { name: '_amount', type: 'uint256' },
      { name: '_minReturn', type: 'uint256' },
    ],
    name: 'convert',
    outputs: [{ name: '', type: 'uint256' }],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: '_maxAffiliateFee', type: 'uint256' }],
    name: 'setMaxAffiliateFee',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ name: '_registry', type: 'address' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: '_smartToken', type: 'address' },
      { indexed: true, name: '_fromToken', type: 'address' },
      { indexed: true, name: '_toToken', type: 'address' },
      { indexed: false, name: '_fromAmount', type: 'uint256' },
      { indexed: false, name: '_toAmount', type: 'uint256' },
      { indexed: false, name: '_trader', type: 'address' },
    ],
    name: 'Conversion',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: '_prevOwner', type: 'address' },
      { indexed: true, name: '_newOwner', type: 'address' },
    ],
    name: 'OwnerUpdate',
    type: 'event',
  },
];

export default abi;
