"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CakePot__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class CakePot__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.CakePot__factory = CakePot__factory;
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "season",
                type: "uint256",
            },
        ],
        name: "End",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "season",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "who",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Enter",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "season",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "who",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Exit",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "season",
                type: "uint256",
            },
        ],
        name: "Start",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "amounts",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "checkEnd",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "currentSeason",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "end",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "enter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "season",
                type: "uint256",
            },
        ],
        name: "exit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "exited",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "maxRCounts",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "maxSRCounts",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "maxSSRCounts",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "nRewards",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "period",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "rRewards",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "rs",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_period",
                type: "uint256",
            },
        ],
        name: "setPeriod",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IHanulRNG",
                name: "_rng",
                type: "address",
            },
        ],
        name: "setRNG",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "srRewards",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "srs",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "ssrRewards",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "ssrs",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "startSeasonBlock",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "totalAmounts",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "totalWeights",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "userCounts",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "weights",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x6080604052600180546001600160a01b0319167392ee48b37386b997faf1571789cd53a7f9b7cdd71790556102d0600255600060035534801561004157600080fd5b5061004b33610120565b60405163095ea7b360e01b81527373feaa1ee314f8c655e354234017be2193c9e24e60048201526000196024820152730e09fabb73bd3ade0a17ecc321fd13a19e81ce829063095ea7b390604401602060405180830381600087803b1580156100b357600080fd5b505af11580156100c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100eb9190610170565b50436004556040516000907ff06a29c94c6f4edc1085072972d9441f7603e81c8535a308f214285d0653c850908290a2610199565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561018257600080fd5b8151801515811461019257600080fd5b9392505050565b611401806101a86000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c80637f8661a1116100f9578063bb5f018c11610097578063c7ac86a311610071578063c7ac86a31461046f578063ef78d4fd14610482578063efbe1c1c1461048b578063f2fde38b1461049357600080fd5b8063bb5f018c14610426578063bcb3962114610446578063c049b94d1461044f57600080fd5b8063a3bea2fd116100d3578063a3bea2fd146103b3578063a59f3e0c146103d3578063a92cbb07146103e6578063b62e1efc1461040657600080fd5b80637f8661a11461036457806382af4dcf146103775780638da5cb5b146103a257600080fd5b80633b84edbd116101665780636051b1a8116101405780636051b1a8146102fc57806368ee4ed01461031c578063715018a61461033c57806375b6a4f21461034457600080fd5b80633b84edbd146102b65780634164c367146102c95780634b084d49146102f457600080fd5b80631a689179116101a25780631a6891791461021a5780631b6fec99146102585780631cb77205146102835780632bfeef8a146102a357600080fd5b80630f3a9f65146101c9578063129a4d6f146101de5780631646d23514610211575b600080fd5b6101dc6101d7366004611237565b6104a6565b005b6101fe6101ec366004611237565b600c6020526000908152604090205481565b6040519081526020015b60405180910390f35b6101fe60045481565b610248610228366004611269565b601460209081526000928352604080842090915290825290205460ff1681565b6040519015158152602001610208565b61026b610266366004611299565b6104de565b6040516001600160a01b039091168152602001610208565b6101fe610291366004611237565b60056020526000908152604090205481565b61026b6102b1366004611299565b610516565b6101dc6102c43660046111f1565b610532565b6101fe6102d7366004611269565b600860209081526000928352604080842090915290825290205481565b61024861057e565b6101fe61030a366004611237565b600d6020526000908152604090205481565b6101fe61032a366004611237565b60076020526000908152604090205481565b6101dc610597565b6101fe610352366004611237565b60106020526000908152604090205481565b6101dc610372366004611237565b6105cd565b6101fe610385366004611269565b600660209081526000928352604080842090915290825290205481565b6000546001600160a01b031661026b565b6101fe6103c1366004611237565b600e6020526000908152604090205481565b6101dc6103e1366004611237565b610aa9565b6101fe6103f4366004611237565b600b6020526000908152604090205481565b6101fe610414366004611237565b60096020526000908152604090205481565b6101fe610434366004611237565b600a6020526000908152604090205481565b6101fe60035481565b6101fe61045d366004611237565b600f6020526000908152604090205481565b61026b61047d366004611299565b610d33565b6101fe60025481565b6101dc610d4f565b6101dc6104a13660046111f1565b611106565b6000546001600160a01b031633146104d95760405162461bcd60e51b81526004016104d0906112df565b60405180910390fd5b600255565b601160205281600052604060002081815481106104fa57600080fd5b6000918252602090912001546001600160a01b03169150829050565b601360205281600052604060002081815481106104fa57600080fd5b6000546001600160a01b0316331461055c5760405162461bcd60e51b81526004016104d0906112df565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b600060025460045443610591919061135f565b11905090565b6000546001600160a01b031633146105c15760405162461bcd60e51b81526004016104d0906112df565b6105cb60006111a1565b565b60035481106105db57600080fd5b600081815260146020908152604080832033845290915290205460ff1615156001141561060757600080fd5b600081815260106020908152604080832054600683528184203385529092528220546106339190611314565b6000838152600860209081526040808320338452825280832054868452600983528184205460059093529083205493945091926106709190611340565b61067a919061132c565b6001546040516344a0a49160e01b81526004810186905233602482015291925060009183916064916001600160a01b03909116906344a0a49190604401602060405180830381600087803b1580156106d157600080fd5b505af11580156106e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107099190611250565b6107139190611376565b61071d9190611340565b6000858152600a60209081526040808320546011909252909120549192501180156107485750600381105b1561079557600084815260116020908152604080832080546001810182559084528284200180546001600160a01b03191633179055868352600d9091529020546107929084611314565b92505b6001546040516344a0a49160e01b81526004810186905233602482015283916064916001600160a01b03909116906344a0a49190604401602060405180830381600087803b1580156107e657600080fd5b505af11580156107fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081e9190611250565b6108289190611376565b6108329190611340565b6000858152600b602090815260408083205460129092529091205491925011801561085d5750600781105b156108aa57600084815260126020908152604080832080546001810182559084528284200180546001600160a01b03191633179055868352600e9091529020546108a79084611314565b92505b6001546040516344a0a49160e01b81526004810186905233602482015283916064916001600160a01b03909116906344a0a49190604401602060405180830381600087803b1580156108fb57600080fd5b505af115801561090f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109339190611250565b61093d9190611376565b6109479190611340565b6000858152600c60209081526040808320546013909252909120549192501180156109725750600f81105b156109bf57600084815260136020908152604080832080546001810182559084528284200180546001600160a01b03191633179055868352600f9091529020546109bc9084611314565b92505b60405163a9059cbb60e01b815233600482015260248101849052730e09fabb73bd3ade0a17ecc321fd13a19e81ce829063a9059cbb90604401602060405180830381600087803b158015610a1257600080fd5b505af1158015610a26573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4a9190611215565b5060008481526014602090815260408083203380855290835292819020805460ff191660011790555185815286917f5f67e0a44fbb8ec0f3794c6687c657244a50a7da2411d14707aa219d86b85492910160405180910390a350505050565b60008111610ab657600080fd5b610abe61057e565b151560011415610acd57600080fd5b6003546000908152600660209081526040808320338452909152902054610b16576003546000908152600560205260408120805460019290610b10908490611314565b90915550505b600354600090815260066020908152604080832033845290915281208054839290610b42908490611314565b909155505060035460009081526007602052604081208054839290610b68908490611314565b90915550506004546000908290610b7f904361135f565b600254610b8c919061135f565b610b969190611340565b6003546000908152600860209081526040808320338452909152812080549293508392909190610bc7908490611314565b909155505060035460009081526009602052604081208054839290610bed908490611314565b90915550506040516323b872dd60e01b815233600482015230602482015260448101839052730e09fabb73bd3ade0a17ecc321fd13a19e81ce82906323b872dd90606401602060405180830381600087803b158015610c4b57600080fd5b505af1158015610c5f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c839190611215565b506040516341441d3b60e01b8152600481018390527373feaa1ee314f8c655e354234017be2193c9e24e906341441d3b90602401600060405180830381600087803b158015610cd157600080fd5b505af1158015610ce5573d6000803e3d6000fd5b50505050336001600160a01b03166003547f5f67e0a44fbb8ec0f3794c6687c657244a50a7da2411d14707aa219d86b8549284604051610d2791815260200190565b60405180910390a35050565b601260205281600052604060002081815481106104fa57600080fd5b610d5761057e565b1515600114610d6557600080fd5b6003546000908152600560205260408082205490516393f1a40b60e01b8152600481018390523060248201529091907373feaa1ee314f8c655e354234017be2193c9e24e906393f1a40b90604401604080518083038186803b158015610dca57600080fd5b505afa158015610dde573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0291906112bb565b50604051631058d28160e01b8152600481018290529091507373feaa1ee314f8c655e354234017be2193c9e24e90631058d28190602401600060405180830381600087803b158015610e5357600080fd5b505af1158015610e67573d6000803e3d6000fd5b50506040516370a0823160e01b815230600482015260009250730e09fabb73bd3ade0a17ecc321fd13a19e81ce8291506370a082319060240160206040518083038186803b158015610eb857600080fd5b505afa158015610ecc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef09190611250565b90506000610efe838361135f565b905060006064610f0f866003611340565b610f19919061132c565b90506000600a610f2a846003611340565b610f34919061132c565b6003546000908152600a6020526040902083905590508115610f5f57610f5a828261132c565b610f62565b60005b6003546000908152600d60205260408120919091556064610f84886007611340565b610f8e919061132c565b90506000610f9d60058661132c565b6003546000908152600b6020526040902083905590508115610fc857610fc3828261132c565b610fcb565b60005b600380546000908152600e6020526040812092909255601490610fef908b90611340565b610ff9919061132c565b90506000611008600a8861132c565b6003546000908152600c60205260409020839055905081156110335761102e828261132c565b611036565b60005b6003546000908152600f6020526040902055898184611055888b61135f565b61105f919061135f565b611069919061135f565b611073919061132c565b6003805460009081526010602052604080822093909355905491517f2c03d2f09622b67ee91478a7e43219c7ced47eff3a3f8bda2eef920181e867669190a26001600360008282546110c59190611314565b9091555050436004556003546040517ff06a29c94c6f4edc1085072972d9441f7603e81c8535a308f214285d0653c85090600090a250505050505050505050565b6000546001600160a01b031633146111305760405162461bcd60e51b81526004016104d0906112df565b6001600160a01b0381166111955760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104d0565b61119e816111a1565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561120357600080fd5b813561120e816113b6565b9392505050565b60006020828403121561122757600080fd5b8151801515811461120e57600080fd5b60006020828403121561124957600080fd5b5035919050565b60006020828403121561126257600080fd5b5051919050565b6000806040838503121561127c57600080fd5b82359150602083013561128e816113b6565b809150509250929050565b600080604083850312156112ac57600080fd5b50508035926020909101359150565b600080604083850312156112ce57600080fd5b505080516020909101519092909150565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600082198211156113275761132761138a565b500190565b60008261133b5761133b6113a0565b500490565b600081600019048311821515161561135a5761135a61138a565b500290565b6000828210156113715761137161138a565b500390565b600082611385576113856113a0565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b6001600160a01b038116811461119e57600080fdfea26469706673582212207f017cb7e10977904bc9c29032470880891f29e91862053f266cd4bba25f6d4664736f6c63430008050033";
//# sourceMappingURL=CakePot__factory.js.map