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
const _bytecode = "0x6080604052600180546001600160a01b0319167392ee48b37386b997faf1571789cd53a7f9b7cdd71790556102d0600255600060035534801561004157600080fd5b5061004b336100e1565b60405163095ea7b360e01b81523060048201526000196024820152730e09fabb73bd3ade0a17ecc321fd13a19e81ce829063095ea7b390604401602060405180830381600087803b15801561009f57600080fd5b505af11580156100b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100d79190610131565b504360045561015a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561014357600080fd5b8151801515811461015357600080fd5b9392505050565b611339806101696000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80637f8661a1116100de578063b62e1efc11610097578063c7ac86a311610071578063c7ac86a3146103ec578063ef78d4fd146103ff578063efbe1c1c14610408578063f2fde38b1461041057600080fd5b8063b62e1efc146103a3578063bcb39621146103c3578063c049b94d146103cc57600080fd5b80637f8661a11461030157806382af4dcf146103145780638da5cb5b1461033f578063a3bea2fd14610350578063a59f3e0c14610370578063a92cbb071461038357600080fd5b806335eeeadf1161013057806335eeeadf146102525780633b84edbd1461027b5780634164c3671461028e5780636051b1a8146102b9578063715018a6146102d957806375b6a4f2146102e157600080fd5b80630f3a9f6514610178578063129a4d6f1461018d5780631646d235146101c05780631a689179146101c95780631cb77205146102075780632bfeef8a14610227575b600080fd5b61018b61018636600461116f565b610423565b005b6101ad61019b36600461116f565b600a6020526000908152604090205481565b6040519081526020015b60405180910390f35b6101ad60045481565b6101f76101d73660046111a1565b601260209081526000928352604080842090915290825290205460ff1681565b60405190151581526020016101b7565b6101ad61021536600461116f565b60056020526000908152604090205481565b61023a6102353660046111d1565b61045b565b6040516001600160a01b0390911681526020016101b7565b61023a61026036600461116f565b600f602052600090815260409020546001600160a01b031681565b61018b610289366004611129565b610493565b6101ad61029c3660046111a1565b600760209081526000928352604080842090915290825290205481565b6101ad6102c736600461116f565b600b6020526000908152604090205481565b61018b6104df565b6101ad6102ef36600461116f565b600e6020526000908152604090205481565b61018b61030f36600461116f565b610515565b6101ad6103223660046111a1565b600660209081526000928352604080842090915290825290205481565b6000546001600160a01b031661023a565b6101ad61035e36600461116f565b600c6020526000908152604090205481565b61018b61037e36600461116f565b610b1a565b6101ad61039136600461116f565b60096020526000908152604090205481565b6101ad6103b136600461116f565b60086020526000908152604090205481565b6101ad60035481565b6101ad6103da36600461116f565b600d6020526000908152604090205481565b61023a6103fa3660046111d1565b610d3c565b6101ad60025481565b61018b610d58565b61018b61041e366004611129565b61103e565b6000546001600160a01b031633146104565760405162461bcd60e51b815260040161044d90611217565b60405180910390fd5b600255565b6011602052816000526040600020818154811061047757600080fd5b6000918252602090912001546001600160a01b03169150829050565b6000546001600160a01b031633146104bd5760405162461bcd60e51b815260040161044d90611217565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146105095760405162461bcd60e51b815260040161044d90611217565b61051360006110d9565b565b600354811061052357600080fd5b600081815260126020908152604080832033845290915290205460ff1615156001141561054f57600080fd5b60008181526007602090815260408083203384528252808320548484526008835281842054600590935290832054909161058891611278565b6105929190611264565b6001546040516344a0a49160e01b81526004810185905233602482015291925060009183916064916001600160a01b03909116906344a0a49190604401602060405180830381600087803b1580156105e957600080fd5b505af11580156105fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106219190611188565b61062b91906112ae565b6106359190611278565b6000848152600f60205260409020549091506001600160a01b031615801561065b575080155b1561071d576000838152600f6020908152604080832080546001600160a01b03191633908117909155600b9092529182902054915163a9059cbb60e01b815260048101919091526024810191909152730e09fabb73bd3ade0a17ecc321fd13a19e81ce829063a9059cbb90604401602060405180830381600087803b1580156106e357600080fd5b505af11580156106f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071b919061114d565b505b6001546040516344a0a49160e01b81526004810185905233602482015283916064916001600160a01b03909116906344a0a49190604401602060405180830381600087803b15801561076e57600080fd5b505af1158015610782573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a69190611188565b6107b091906112ae565b6107ba9190611278565b6000848152600960209081526040808320546010909252909120549192501180156107e55750600a81105b156108b957600083815260106020908152604080832080546001810182559084528284200180546001600160a01b03191633908117909155868452600c9092529182902054915163a9059cbb60e01b815260048101919091526024810191909152730e09fabb73bd3ade0a17ecc321fd13a19e81ce829063a9059cbb90604401602060405180830381600087803b15801561087f57600080fd5b505af1158015610893573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b7919061114d565b505b6001546040516344a0a49160e01b81526004810185905233602482015283916064916001600160a01b03909116906344a0a49190604401602060405180830381600087803b15801561090a57600080fd5b505af115801561091e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109429190611188565b61094c91906112ae565b6109569190611278565b6000848152600a60209081526040808320546011909252909120549192501180156109815750601481105b15610a5557600083815260116020908152604080832080546001810182559084528284200180546001600160a01b03191633908117909155868452600d9092529182902054915163a9059cbb60e01b815260048101919091526024810191909152730e09fabb73bd3ade0a17ecc321fd13a19e81ce829063a9059cbb90604401602060405180830381600087803b158015610a1b57600080fd5b505af1158015610a2f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a53919061114d565b505b6000838152600e60205260409081902054905163a9059cbb60e01b81523360048201526024810191909152730e09fabb73bd3ade0a17ecc321fd13a19e81ce829063a9059cbb90604401602060405180830381600087803b158015610ab957600080fd5b505af1158015610acd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af1919061114d565b50505060009081526012602090815260408083203384529091529020805460ff19166001179055565b60008111610b2757600080fd5b600254600454610b379043611297565b1115610b4257600080fd5b6003546000908152600660209081526040808320338452909152902054610b8b576003546000908152600560205260408120805460019290610b8590849061124c565b90915550505b600354600090815260066020908152604080832033845290915281208054839290610bb790849061124c565b90915550506004546000908290610bce9043611297565b600254610bdb9190611297565b610be59190611278565b6003546000908152600760209081526040808320338452909152812080549293508392909190610c1690849061124c565b909155505060035460009081526008602052604081208054839290610c3c90849061124c565b90915550506040516323b872dd60e01b815233600482015230602482015260448101839052730e09fabb73bd3ade0a17ecc321fd13a19e81ce82906323b872dd90606401602060405180830381600087803b158015610c9a57600080fd5b505af1158015610cae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cd2919061114d565b506040516341441d3b60e01b8152600481018390527373feaa1ee314f8c655e354234017be2193c9e24e906341441d3b90602401600060405180830381600087803b158015610d2057600080fd5b505af1158015610d34573d6000803e3d6000fd5b505050505050565b6010602052816000526040600020818154811061047757600080fd5b600254600454610d689043611297565b11610d7257600080fd5b6003546000908152600560205260408082205490516393f1a40b60e01b8152600481018390523060248201529091907373feaa1ee314f8c655e354234017be2193c9e24e906393f1a40b90604401604080518083038186803b158015610dd757600080fd5b505afa158015610deb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0f91906111f3565b50604051631058d28160e01b8152600481018290529091507373feaa1ee314f8c655e354234017be2193c9e24e90631058d28190602401600060405180830381600087803b158015610e6057600080fd5b505af1158015610e74573d6000803e3d6000fd5b50506040516370a0823160e01b815230600482015260009250730e09fabb73bd3ade0a17ecc321fd13a19e81ce8291506370a082319060240160206040518083038186803b158015610ec557600080fd5b505afa158015610ed9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610efd9190611188565b90506000610f0b8383611297565b90506000600a610f1c836003611278565b610f269190611264565b6003546000908152600b60205260408120829055909150610f48600a87611264565b90506000610f57600585611264565b60035460009081526009602052604090208390559050610f778282611264565b6003546000908152600c6020526040812091909155610f97600589611264565b90506000610fa6600a87611264565b6003546000908152600a602052604090208390559050610fc68282611264565b6003546000908152600d6020526040902055888184610fe5888a611297565b610fef9190611297565b610ff99190611297565b6110039190611264565b600380546000908152600c602052604081209290925580546001929061102a90849061124c565b909155505043600455505050505050505050565b6000546001600160a01b031633146110685760405162461bcd60e51b815260040161044d90611217565b6001600160a01b0381166110cd5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161044d565b6110d6816110d9565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561113b57600080fd5b8135611146816112ee565b9392505050565b60006020828403121561115f57600080fd5b8151801515811461114657600080fd5b60006020828403121561118157600080fd5b5035919050565b60006020828403121561119a57600080fd5b5051919050565b600080604083850312156111b457600080fd5b8235915060208301356111c6816112ee565b809150509250929050565b600080604083850312156111e457600080fd5b50508035926020909101359150565b6000806040838503121561120657600080fd5b505080516020909101519092909150565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000821982111561125f5761125f6112c2565b500190565b600082611273576112736112d8565b500490565b6000816000190483118215151615611292576112926112c2565b500290565b6000828210156112a9576112a96112c2565b500390565b6000826112bd576112bd6112d8565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b6001600160a01b03811681146110d657600080fdfea2646970667358221220a79251ad617a29368ce1cbe1e897a0c107c9fb87398929e9d8ac904f021d580964736f6c63430008050033";
//# sourceMappingURL=CakePot__factory.js.map