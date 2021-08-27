const abi: Object[] = [
  {
    constant: false,
    inputs: [
      {
        name: '_onlyOwnerCanUpdateRegistry',
        type: 'bool',
      },
    ],
    name: 'restrictRegistryUpdate',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'reserveRatio',
    outputs: [
      {
        name: '',
        type: 'uint32',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_address',
        type: 'address',
      },
    ],
    name: 'connectors',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
      {
        name: '',
        type: 'uint32',
      },
      {
        name: '',
        type: 'bool',
      },
      {
        name: '',
        type: 'bool',
      },
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'hasETHReserve',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_index',
        type: 'uint256',
      },
    ],
    name: 'connectorTokens',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_reserveToken',
        type: 'address',
      },
    ],
    name: 'reserveWeight',
    outputs: [
      {
        name: '',
        type: 'uint32',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_sourceToken',
        type: 'address',
      },
      {
        name: '_targetToken',
        type: 'address',
      },
      {
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'getReturn',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_newOwner',
        type: 'address',
      },
    ],
    name: 'transferTokenOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'isActive',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'onlyOwnerCanUpdateRegistry',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'acceptTokenOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_token',
        type: 'address',
      },
      {
        name: '_to',
        type: 'address',
      },
      {
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'withdrawFromAnchor',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'converterType',
    outputs: [
      {
        name: '',
        type: 'uint16',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'liquidate',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
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
      {
        name: '_whitelist',
        type: 'address',
      },
    ],
    name: 'setConversionWhitelist',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'version',
    outputs: [
      {
        name: '',
        type: 'uint16',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'conversionFee',
    outputs: [
      {
        name: '',
        type: 'uint32',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_token',
        type: 'address',
      },
      {
        name: '_to',
        type: 'address',
      },
      {
        name: '_amount',
        type: 'uint256',
      },
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
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_newOwner',
        type: 'address',
      },
    ],
    name: 'transferAnchorOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_to',
        type: 'address',
      },
    ],
    name: 'withdrawETH',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_token',
        type: 'address',
      },
      {
        name: '_weight',
        type: 'uint32',
      },
    ],
    name: 'addReserve',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_x',
        type: 'uint256',
      },
    ],
    name: 'decimalLength',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'connectorTokenCount',
    outputs: [
      {
        name: '',
        type: 'uint16',
      },
    ],
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
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_reserveTokens',
        type: 'address[]',
      },
      {
        name: '_reserveAmounts',
        type: 'uint256[]',
      },
      {
        name: '_minReturn',
        type: 'uint256',
      },
    ],
    name: 'addLiquidity',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'maxConversionFee',
    outputs: [
      {
        name: '',
        type: 'uint32',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'reserveTokenCount',
    outputs: [
      {
        name: '',
        type: 'uint16',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_values',
        type: 'uint256[]',
      },
    ],
    name: 'geometricMean',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_sourceToken',
        type: 'address',
      },
      {
        name: '_targetToken',
        type: 'address',
      },
      {
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'targetAmountAndFee',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_amount',
        type: 'uint256',
      },
      {
        name: '_reserveTokens',
        type: 'address[]',
      },
      {
        name: '_reserveMinReturnAmounts',
        type: 'uint256[]',
      },
    ],
    name: 'removeLiquidity',
    outputs: [],
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
    constant: true,
    inputs: [
      {
        name: '_n',
        type: 'uint256',
      },
      {
        name: '_d',
        type: 'uint256',
      },
    ],
    name: 'roundDiv',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'conversionsEnabled',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'conversionWhitelist',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'fund',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'acceptAnchorOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    name: 'reserveTokens',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'isV28OrHigher',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'anchor',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'newOwner',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'upgrade',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    name: 'reserves',
    outputs: [
      {
        name: 'balance',
        type: 'uint256',
      },
      {
        name: 'weight',
        type: 'uint32',
      },
      {
        name: 'deprecated1',
        type: 'bool',
      },
      {
        name: 'deprecated2',
        type: 'bool',
      },
      {
        name: 'isSet',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_connectorToken',
        type: 'address',
      },
    ],
    name: 'getConnectorBalance',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_reserveToken',
        type: 'address',
      },
    ],
    name: 'reserveBalance',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_sourceToken',
        type: 'address',
      },
      {
        name: '_targetToken',
        type: 'address',
      },
      {
        name: '_amount',
        type: 'uint256',
      },
      {
        name: '_trader',
        type: 'address',
      },
      {
        name: '_beneficiary',
        type: 'address',
      },
    ],
    name: 'convert',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_conversionFee',
        type: 'uint32',
      },
    ],
    name: 'setConversionFee',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'token',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_token',
        type: 'address',
      },
      {
        name: '_registry',
        type: 'address',
      },
      {
        name: '_maxConversionFee',
        type: 'uint32',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    payable: true,
    stateMutability: 'payable',
    type: 'fallback',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: '_connectorToken',
        type: 'address',
      },
      {
        indexed: false,
        name: '_tokenSupply',
        type: 'uint256',
      },
      {
        indexed: false,
        name: '_connectorBalance',
        type: 'uint256',
      },
      {
        indexed: false,
        name: '_connectorWeight',
        type: 'uint32',
      },
    ],
    name: 'PriceDataUpdate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: '_provider',
        type: 'address',
      },
      {
        indexed: true,
        name: '_reserveToken',
        type: 'address',
      },
      {
        indexed: false,
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        name: '_newBalance',
        type: 'uint256',
      },
      {
        indexed: false,
        name: '_newSupply',
        type: 'uint256',
      },
    ],
    name: 'LiquidityAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: '_provider',
        type: 'address',
      },
      {
        indexed: true,
        name: '_reserveToken',
        type: 'address',
      },
      {
        indexed: false,
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        name: '_newBalance',
        type: 'uint256',
      },
      {
        indexed: false,
        name: '_newSupply',
        type: 'uint256',
      },
    ],
    name: 'LiquidityRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: '_type',
        type: 'uint16',
      },
      {
        indexed: true,
        name: '_anchor',
        type: 'address',
      },
      {
        indexed: true,
        name: '_activated',
        type: 'bool',
      },
    ],
    name: 'Activation',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: '_fromToken',
        type: 'address',
      },
      {
        indexed: true,
        name: '_toToken',
        type: 'address',
      },
      {
        indexed: true,
        name: '_trader',
        type: 'address',
      },
      {
        indexed: false,
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        name: '_return',
        type: 'uint256',
      },
      {
        indexed: false,
        name: '_conversionFee',
        type: 'int256',
      },
    ],
    name: 'Conversion',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: '_token1',
        type: 'address',
      },
      {
        indexed: true,
        name: '_token2',
        type: 'address',
      },
      {
        indexed: false,
        name: '_rateN',
        type: 'uint256',
      },
      {
        indexed: false,
        name: '_rateD',
        type: 'uint256',
      },
    ],
    name: 'TokenRateUpdate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: '_prevFee',
        type: 'uint32',
      },
      {
        indexed: false,
        name: '_newFee',
        type: 'uint32',
      },
    ],
    name: 'ConversionFeeUpdate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: '_prevOwner',
        type: 'address',
      },
      {
        indexed: true,
        name: '_newOwner',
        type: 'address',
      },
    ],
    name: 'OwnerUpdate',
    type: 'event',
  },
];

export default abi;
