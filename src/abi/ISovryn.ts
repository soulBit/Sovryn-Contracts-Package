const abi: Object[] = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'lender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'loanToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'collateralToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newPrincipal',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newCollateral',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'interestRate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'interestDuration',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'collateralToLoanRate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'currentMargin',
        type: 'uint256',
      },
    ],
    name: 'Borrow',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'lender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'closer',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'loanToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'collateralToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'repayAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'collateralWithdrawAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'collateralToLoanRate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'currentMargin',
        type: 'uint256',
      },
    ],
    name: 'CloseWithDeposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'lender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'collateralToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'loanToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'closer',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'positionCloseSize',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'loanCloseAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'exitPrice',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'currentLeverage',
        type: 'uint256',
      },
    ],
    name: 'CloseWithSwap',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'delegator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'delegated',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isActive',
        type: 'bool',
      },
    ],
    name: 'DelegatedManagerSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'depositAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'rate',
        type: 'uint256',
      },
    ],
    name: 'DepositCollateral',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sourceToken',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'destToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'sourceAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'destAmount',
        type: 'uint256',
      },
    ],
    name: 'ExternalSwap',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'liquidator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'lender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'loanToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'collateralToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'repayAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'collateralWithdrawAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'collateralToLoanRate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'currentMargin',
        type: 'uint256',
      },
    ],
    name: 'Liquidate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'loanToken',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'collateralToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minInitialMargin',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'maintenanceMargin',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'maxLoanTerm',
        type: 'uint256',
      },
    ],
    name: 'LoanParamsDisabled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'LoanParamsIdDisabled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'LoanParamsIdSetup',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'loanToken',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'collateralToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minInitialMargin',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'maintenanceMargin',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'maxLoanTerm',
        type: 'uint256',
      },
    ],
    name: 'LoanParamsSetup',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sourceToken',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'destToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'borrower',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'sourceAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'destAmount',
        type: 'uint256',
      },
    ],
    name: 'LoanSwap',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldValue',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newValue',
        type: 'uint256',
      },
    ],
    name: 'SetAffiliateFeePercent',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldValue',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newValue',
        type: 'uint256',
      },
    ],
    name: 'SetBorrowingFeePercent',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'oldController',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newController',
        type: 'address',
      },
    ],
    name: 'SetFeesController',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldValue',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newValue',
        type: 'uint256',
      },
    ],
    name: 'SetLendingFeePercent',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldValue',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newValue',
        type: 'uint256',
      },
    ],
    name: 'SetLiquidationIncentivePercent',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'loanPool',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'underlying',
        type: 'address',
      },
    ],
    name: 'SetLoanPool',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldValue',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newValue',
        type: 'uint256',
      },
    ],
    name: 'SetMaxSwapSize',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'oldValue',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newValue',
        type: 'address',
      },
    ],
    name: 'SetPriceFeedContract',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'oldProtocolToken',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newProtocolToken',
        type: 'address',
      },
    ],
    name: 'SetProtocolTokenAddress',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldRebatePercent',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newRebatePercent',
        type: 'uint256',
      },
    ],
    name: 'SetRebatePercent',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldValue',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newValue',
        type: 'uint256',
      },
    ],
    name: 'SetRolloverBaseReward',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'oldSovrynSwapContractRegistryAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newSovrynSwapContractRegistryAddress',
        type: 'address',
      },
    ],
    name: 'SetSovrynSwapContractRegistryAddress',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isActive',
        type: 'bool',
      },
    ],
    name: 'SetSupportedTokens',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'oldValue',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newValue',
        type: 'address',
      },
    ],
    name: 'SetSwapsImplContract',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldValue',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newValue',
        type: 'uint256',
      },
    ],
    name: 'SetTradingFeePercent',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'oldWethToken',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newWethToken',
        type: 'address',
      },
    ],
    name: 'SetWrbtcToken',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'lender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'collateralToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'loanToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'positionSize',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'borrowedAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'interestRate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'settlementDate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'entryPrice',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'entryLeverage',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'currentLeverage',
        type: 'uint256',
      },
    ],
    name: 'Trade',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'WithdrawBorrowingFees',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'lendingAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tradingAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'borrowingAmount',
        type: 'uint256',
      },
    ],
    name: 'WithdrawFees',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'WithdrawLendingFees',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'WithdrawTradingFees',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bool',
        name: 'shouldRefund',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountInRbtc',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'threshold',
        type: 'uint256',
      },
    ],
    name: 'swapExcess',
    type: 'event',
  },
  {
    constant: true,
    inputs: [],
    name: 'admin',
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
    name: 'affiliateFeePercent',
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
    constant: false,
    inputs: [
      {
        internalType: 'bytes32',
        name: 'loanParamsId',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32',
      },
      {
        internalType: 'bool',
        name: 'isTorqueLoan',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: 'initialMargin',
        type: 'uint256',
      },
      {
        internalType: 'address[4]',
        name: 'sentAddresses',
        type: 'address[4]',
      },
      {
        internalType: 'uint256[5]',
        name: 'sentValues',
        type: 'uint256[5]',
      },
      {
        internalType: 'bytes',
        name: 'loanDataBytes',
        type: 'bytes',
      },
    ],
    name: 'borrowOrTradeFromPool',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'borrowerNonce',
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
        name: '',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'borrowerOrders',
    outputs: [
      {
        internalType: 'uint256',
        name: 'lockedAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'interestRate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minLoanTerm',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxLoanTerm',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'createdTimestamp',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'expirationTimestamp',
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
    name: 'borrowingFeePercent',
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
        name: '',
        type: 'address',
      },
    ],
    name: 'borrowingFeeTokensHeld',
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
        name: '',
        type: 'address',
      },
    ],
    name: 'borrowingFeeTokensPaid',
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
    constant: false,
    inputs: [
      {
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'depositAmount',
        type: 'uint256',
      },
    ],
    name: 'closeWithDeposit',
    outputs: [
      {
        internalType: 'uint256',
        name: 'loanCloseAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'withdrawAmount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'withdrawToken',
        type: 'address',
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
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'swapAmount',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'returnTokenIsCollateral',
        type: 'bool',
      },
      {
        internalType: 'bytes',
        name: 'loanDataBytes',
        type: 'bytes',
      },
    ],
    name: 'closeWithSwap',
    outputs: [
      {
        internalType: 'uint256',
        name: 'loanCloseAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'withdrawAmount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'withdrawToken',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'delegatedManagers',
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
  {
    constant: false,
    inputs: [
      {
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'depositAmount',
        type: 'uint256',
      },
    ],
    name: 'depositCollateral',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'depositProtocolToken',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'bytes32[]',
        name: 'loanParamsIdList',
        type: 'bytes32[]',
      },
    ],
    name: 'disableLoanParams',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'payer',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'depositAmount',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'useCollateral',
        type: 'bool',
      },
      {
        internalType: 'bytes',
        name: 'loanDataBytes',
        type: 'bytes',
      },
    ],
    name: 'extendLoanByInterest',
    outputs: [
      {
        internalType: 'uint256',
        name: 'secondsExtended',
        type: 'uint256',
      },
    ],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'feeRebatePercent',
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
    name: 'feesController',
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
        name: 'start',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'count',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'unsafeOnly',
        type: 'bool',
      },
    ],
    name: 'getActiveLoans',
    outputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'loanId',
            type: 'bytes32',
          },
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
            name: 'principal',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'collateral',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'interestOwedPerDay',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'interestDepositRemaining',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'startRate',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'startMargin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maintenanceMargin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'currentMargin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxLoanTerm',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'endTimestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxLiquidatable',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxSeizable',
            type: 'uint256',
          },
        ],
        internalType: 'struct ISovryn.LoanReturnData[]',
        name: 'loansData',
        type: 'tuple[]',
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
        name: 'collateralTokenAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'marginAmount',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isTorqueLoan',
        type: 'bool',
      },
    ],
    name: 'getBorrowAmount',
    outputs: [
      {
        internalType: 'uint256',
        name: 'borrowAmount',
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
        name: 'loanTokenSent',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'collateralTokenSent',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'interestRate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'newPrincipal',
        type: 'uint256',
      },
    ],
    name: 'getEstimatedMarginExposure',
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
        name: 'ref',
        type: 'address',
      },
    ],
    name: 'getLegacyOracle',
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
        internalType: 'address',
        name: 'lender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'loanToken',
        type: 'address',
      },
    ],
    name: 'getLenderInterestData',
    outputs: [
      {
        internalType: 'uint256',
        name: 'interestPaid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'interestPaidDate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'interestOwedPerDay',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'interestUnPaid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'interestFeePercent',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'principalTotal',
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
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32',
      },
    ],
    name: 'getLoan',
    outputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'loanId',
            type: 'bytes32',
          },
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
            name: 'principal',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'collateral',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'interestOwedPerDay',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'interestDepositRemaining',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'startRate',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'startMargin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maintenanceMargin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'currentMargin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxLoanTerm',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'endTimestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxLiquidatable',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxSeizable',
            type: 'uint256',
          },
        ],
        internalType: 'struct ISovryn.LoanReturnData',
        name: 'loanData',
        type: 'tuple',
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
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32',
      },
    ],
    name: 'getLoanInterestData',
    outputs: [
      {
        internalType: 'address',
        name: 'loanToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'interestOwedPerDay',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'interestDepositTotal',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'interestDepositRemaining',
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
        internalType: 'bytes32[]',
        name: 'loanParamsIdList',
        type: 'bytes32[]',
      },
    ],
    name: 'getLoanParams',
    outputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            internalType: 'bool',
            name: 'active',
            type: 'bool',
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
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
            name: 'minInitialMargin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maintenanceMargin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxLoanTerm',
            type: 'uint256',
          },
        ],
        internalType: 'struct LoanParamsStruct.LoanParams[]',
        name: 'loanParamsList',
        type: 'tuple[]',
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
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'start',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'count',
        type: 'uint256',
      },
    ],
    name: 'getLoanParamsList',
    outputs: [
      {
        internalType: 'bytes32[]',
        name: 'loanParamsList',
        type: 'bytes32[]',
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
        internalType: 'uint256',
        name: 'start',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'count',
        type: 'uint256',
      },
    ],
    name: 'getLoanPoolsList',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
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
        name: 'newPrincipal',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'marginAmount',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isTorqueLoan',
        type: 'bool',
      },
    ],
    name: 'getRequiredCollateral',
    outputs: [
      {
        internalType: 'uint256',
        name: 'collateralAmountRequired',
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
        internalType: 'string',
        name: 'sig',
        type: 'string',
      },
    ],
    name: 'getTarget',
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
        internalType: 'address',
        name: 'lender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'loanToken',
        type: 'address',
      },
    ],
    name: 'getTotalPrincipal',
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
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'start',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'count',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'loanType',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isLender',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: 'unsafeOnly',
        type: 'bool',
      },
    ],
    name: 'getUserLoans',
    outputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'loanId',
            type: 'bytes32',
          },
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
            name: 'principal',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'collateral',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'interestOwedPerDay',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'interestDepositRemaining',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'startRate',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'startMargin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maintenanceMargin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'currentMargin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxLoanTerm',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'endTimestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxLiquidatable',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxSeizable',
            type: 'uint256',
          },
        ],
        internalType: 'struct ISovryn.LoanReturnData[]',
        name: 'loansData',
        type: 'tuple[]',
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
        name: 'loanPool',
        type: 'address',
      },
    ],
    name: 'isLoanPool',
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
  {
    constant: true,
    inputs: [],
    name: 'isOwner',
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
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'lenderInterest',
    outputs: [
      {
        internalType: 'uint256',
        name: 'principalTotal',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'owedPerDay',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'owedTotal',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'paidTotal',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'updatedTimestamp',
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
        name: '',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'lenderOrders',
    outputs: [
      {
        internalType: 'uint256',
        name: 'lockedAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'interestRate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minLoanTerm',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxLoanTerm',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'createdTimestamp',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'expirationTimestamp',
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
    name: 'lendingFeePercent',
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
        name: '',
        type: 'address',
      },
    ],
    name: 'lendingFeeTokensHeld',
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
        name: '',
        type: 'address',
      },
    ],
    name: 'lendingFeeTokensPaid',
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
    constant: false,
    inputs: [
      {
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'closeAmount',
        type: 'uint256',
      },
    ],
    name: 'liquidate',
    outputs: [
      {
        internalType: 'uint256',
        name: 'loanCloseAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'seizedAmount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'seizedToken',
        type: 'address',
      },
    ],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'liquidationIncentivePercent',
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
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'loanInterest',
    outputs: [
      {
        internalType: 'uint256',
        name: 'owedPerDay',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'depositTotal',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'updatedTimestamp',
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
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'loanParams',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32',
      },
      {
        internalType: 'bool',
        name: 'active',
        type: 'bool',
      },
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
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
        name: 'minInitialMargin',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maintenanceMargin',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxLoanTerm',
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
        name: '',
        type: 'address',
      },
    ],
    name: 'loanPoolToUnderlying',
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
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'loans',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'loanParamsId',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'pendingTradesId',
        type: 'bytes32',
      },
      {
        internalType: 'bool',
        name: 'active',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: 'principal',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'collateral',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'startTimestamp',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'endTimestamp',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'startMargin',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'startRate',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'borrower',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'lender',
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
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    name: 'logicTargets',
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
    name: 'maxDisagreement',
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
    name: 'maxSwapSize',
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
    name: 'owner',
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
    name: 'priceFeeds',
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
    name: 'protocolTokenAddress',
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
    name: 'protocolTokenHeld',
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
    name: 'protocolTokenPaid',
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
    constant: false,
    inputs: [
      {
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'withdrawAmount',
        type: 'uint256',
      },
    ],
    name: 'reduceLoanByInterest',
    outputs: [
      {
        internalType: 'uint256',
        name: 'secondsReduced',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
    ],
    name: 'replaceContract',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: 'loanDataBytes',
        type: 'bytes',
      },
    ],
    name: 'rollover',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'rolloverBaseReward',
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
    name: 'rolloverFlexFeePercent',
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
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: 'newValue',
        type: 'uint256',
      },
    ],
    name: 'setAffiliateFeePercent',
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
        name: 'newValue',
        type: 'uint256',
      },
    ],
    name: 'setBorrowingFeePercent',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'delegated',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'toggle',
        type: 'bool',
      },
    ],
    name: 'setDelegatedManager',
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
        name: 'newController',
        type: 'address',
      },
    ],
    name: 'setFeesController',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address[]',
        name: 'refs',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: 'oracles',
        type: 'address[]',
      },
    ],
    name: 'setLegacyOracles',
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
        name: 'newValue',
        type: 'uint256',
      },
    ],
    name: 'setLendingFeePercent',
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
        name: 'newAmount',
        type: 'uint256',
      },
    ],
    name: 'setLiquidationIncentivePercent',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address[]',
        name: 'pools',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: 'assets',
        type: 'address[]',
      },
    ],
    name: 'setLoanPool',
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
        name: 'newAmount',
        type: 'uint256',
      },
    ],
    name: 'setMaxDisagreement',
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
        name: 'newAmount',
        type: 'uint256',
      },
    ],
    name: 'setMaxSwapSize',
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
        name: 'newContract',
        type: 'address',
      },
    ],
    name: 'setPriceFeedContract',
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
        name: '_protocolTokenAddress',
        type: 'address',
      },
    ],
    name: 'setProtocolTokenAddress',
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
        name: 'rebatePercent',
        type: 'uint256',
      },
    ],
    name: 'setRebatePercent',
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
        name: 'transactionCost',
        type: 'uint256',
      },
    ],
    name: 'setRolloverBaseReward',
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
        name: 'newAmount',
        type: 'uint256',
      },
    ],
    name: 'setSourceBuffer',
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
        name: 'registryAddress',
        type: 'address',
      },
    ],
    name: 'setSovrynSwapContractRegistryAddress',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address[]',
        name: 'addrs',
        type: 'address[]',
      },
      {
        internalType: 'bool[]',
        name: 'toggles',
        type: 'bool[]',
      },
    ],
    name: 'setSupportedTokens',
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
        name: 'newContract',
        type: 'address',
      },
    ],
    name: 'setSwapsImplContract',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'string[]',
        name: 'sigsArr',
        type: 'string[]',
      },
      {
        internalType: 'address[]',
        name: 'targetsArr',
        type: 'address[]',
      },
    ],
    name: 'setTargets',
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
        name: 'newValue',
        type: 'uint256',
      },
    ],
    name: 'setTradingFeePercent',
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
        name: 'wrbtcTokenAddress',
        type: 'address',
      },
    ],
    name: 'setWrbtcToken',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            internalType: 'bool',
            name: 'active',
            type: 'bool',
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
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
            name: 'minInitialMargin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maintenanceMargin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxLoanTerm',
            type: 'uint256',
          },
        ],
        internalType: 'struct LoanParamsStruct.LoanParams[]',
        name: 'loanParamsList',
        type: 'tuple[]',
      },
    ],
    name: 'setupLoanParams',
    outputs: [
      {
        internalType: 'bytes32[]',
        name: 'loanParamsIdList',
        type: 'bytes32[]',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'sourceBuffer',
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
    name: 'sovrynSwapContractRegistryAddress',
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
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'supportedTokens',
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
  {
    constant: true,
    inputs: [],
    name: 'swapsImpl',
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
    name: 'tradingFeePercent',
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
        name: '',
        type: 'address',
      },
    ],
    name: 'tradingFeeTokensHeld',
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
        name: '',
        type: 'address',
      },
    ],
    name: 'tradingFeeTokensPaid',
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
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
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
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'underlyingToLoanPool',
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
    inputs: [
      {
        internalType: 'address',
        name: 'loanToken',
        type: 'address',
      },
    ],
    name: 'withdrawAccruedInterest',
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
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdrawBorrowingFees',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'bytes32',
        name: 'loanId',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'withdrawAmount',
        type: 'uint256',
      },
    ],
    name: 'withdrawCollateral',
    outputs: [
      {
        internalType: 'uint256',
        name: 'actualWithdrawAmount',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
    ],
    name: 'withdrawFees',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdrawLendingFees',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdrawProtocolToken',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdrawTradingFees',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'wrbtcToken',
    outputs: [
      {
        internalType: 'contract IWrbtcERC20',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
];

export default abi;
