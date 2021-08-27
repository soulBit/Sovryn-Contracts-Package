const abi: Object[] = [
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: 'Token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'amountInEth',
    outputs: [
      {
        internalType: 'uint256',
        name: 'ethAmount',
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
        internalType: 'address',
        name: 'sourceToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'destToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'sourceAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'destAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxSlippage',
        type: 'uint256',
      },
    ],
    name: 'checkPriceDisagreement',
    outputs: [
      {
        internalType: 'uint256',
        name: 'sourceToDestSwapRate',
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
        internalType: 'address',
        name: 'loanToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'collateralToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'loanAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'collateralAmount',
        type: 'uint256',
      },
    ],
    name: 'getCurrentMargin',
    outputs: [
      {
        internalType: 'uint256',
        name: 'currentMargin',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'collateralToLoanRate',
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
        internalType: 'address',
        name: 'loanToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'collateralToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'loanAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'collateralAmount',
        type: 'uint256',
      },
    ],
    name: 'getCurrentMarginAndCollateralSize',
    outputs: [
      {
        internalType: 'uint256',
        name: 'currentMargin',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'collateralInEthAmount',
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
        internalType: 'address',
        name: 'payToken',
        type: 'address',
      },
    ],
    name: 'getFastGasPrice',
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
        internalType: 'address',
        name: 'loanToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'collateralToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'loanAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'collateralAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maintenanceMargin',
        type: 'uint256',
      },
    ],
    name: 'getMaxDrawdown',
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
        internalType: 'address',
        name: 'sourceToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'destToken',
        type: 'address',
      },
    ],
    name: 'queryPrecision',
    outputs: [
      {
        internalType: 'uint256',
        name: 'precision',
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
        internalType: 'address',
        name: 'sourceToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'destToken',
        type: 'address',
      },
    ],
    name: 'queryRate',
    outputs: [
      {
        internalType: 'uint256',
        name: 'rate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'precision',
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
        internalType: 'address',
        name: 'sourceToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'destToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'sourceAmount',
        type: 'uint256',
      },
    ],
    name: 'queryReturn',
    outputs: [
      {
        internalType: 'uint256',
        name: 'destAmount',
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
        internalType: 'address',
        name: 'loanToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'collateralToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'loanAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'collateralAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maintenanceMargin',
        type: 'uint256',
      },
    ],
    name: 'shouldLiquidate',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
];

export default abi;
