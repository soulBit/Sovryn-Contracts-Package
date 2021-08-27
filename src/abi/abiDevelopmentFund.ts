const abiDevelopmentFund: Object[] = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_SOV',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_lockedTokenOwner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_safeVault',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_unlockedTokenOwner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_lastReleaseTime',
        type: 'uint256',
      },
      {
        internalType: 'uint256[]',
        name: '_releaseDuration',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '_releaseTokenAmount',
        type: 'uint256[]',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'DevelopmentFundActivated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'DevelopmentFundExpired',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_initiator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_receiver',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'LockedTokenTransferByLockedOwner',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_initiator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_receiver',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'LockedTokenTransferByUnlockedOwner',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_initiator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_newLockedOwner',
        type: 'address',
      },
    ],
    name: 'NewLockedOwnerAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_initiator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_oldLockedOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_newLockedOwner',
        type: 'address',
      },
    ],
    name: 'NewLockedOwnerApproved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_initiator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'TokenDeposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_initiator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_releaseCount',
        type: 'uint256',
      },
    ],
    name: 'TokenReleaseChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_initiator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_newUnlockedOwner',
        type: 'address',
      },
    ],
    name: 'UnlockedOwnerUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_initiator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_releaseCount',
        type: 'uint256',
      },
    ],
    name: 'UnlockedTokenWithdrawalByUnlockedOwner',
    type: 'event',
  },
  {
    constant: true,
    inputs: [],
    name: 'SOV',
    outputs: [
      {
        internalType: 'contract IERC20',
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
    name: 'lastReleaseTime',
    outputs: [
      {
        internalType: 'uint256',
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
    name: 'lockedTokenOwner',
    outputs: [
      {
        internalType: 'address',
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
    name: 'newLockedTokenOwner',
    outputs: [
      {
        internalType: 'address',
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
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'releaseDuration',
    outputs: [
      {
        internalType: 'uint256',
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
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'releaseTokenAmount',
    outputs: [
      {
        internalType: 'uint256',
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
    name: 'safeVault',
    outputs: [
      {
        internalType: 'address',
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
    name: 'status',
    outputs: [
      {
        internalType: 'enum DevelopmentFund.Status',
        name: '',
        type: 'uint8',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'unlockedTokenOwner',
    outputs: [
      {
        internalType: 'address',
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
    name: 'init',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_newLockedTokenOwner',
        type: 'address',
      },
    ],
    name: 'updateLockedTokenOwner',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'approveLockedTokenOwner',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_newUnlockedTokenOwner',
        type: 'address',
      },
    ],
    name: 'updateUnlockedTokenOwner',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'depositTokens',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: '_newLastReleaseTime',
        type: 'uint256',
      },
      {
        internalType: 'uint256[]',
        name: '_releaseDuration',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '_releaseTokenAmount',
        type: 'uint256[]',
      },
    ],
    name: 'changeTokenReleaseSchedule',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'transferTokensByUnlockedTokenOwner',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'withdrawTokensByUnlockedTokenOwner',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_receiver',
        type: 'address',
      },
    ],
    name: 'transferTokensByLockedTokenOwner',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getReleaseDuration',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '_releaseTokenDuration',
        type: 'uint256[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getReleaseTokenAmount',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '_currentReleaseTokenAmount',
        type: 'uint256[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
];

export default abiDevelopmentFund;
