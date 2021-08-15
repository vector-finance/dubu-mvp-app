"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dubu__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class Dubu__factory extends contracts_1.ContractFactory {
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
exports.Dubu__factory = Dubu__factory;
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
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [],
        name: "DOMAIN_SEPARATOR",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "PERMIT_TYPEHASH",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
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
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "balanceOf",
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
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "factory",
        outputs: [
            {
                internalType: "contract IFarmFactory",
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
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "nonces",
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
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "v",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
            },
        ],
        name: "permit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
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
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "version",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x60a06040523480156200001157600080fd5b506040805180820182526004808252634475627560e01b602080840191825284518086018652928352634455425560e01b83820152845180860190955260018552603160f81b9085015282519293919284918491620000739160039162000134565b5080516200008990600490602084019062000134565b50508151620000a19150600590602084019062000134565b508251602080850191909120825183830120604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f94810194909452830191909152606082015246608082018190523060a08301529060c00160408051601f1981840301815291905280516020909101206080525050600780546001600160a01b0319163317905550620002179050565b8280546200014290620001da565b90600052602060002090601f016020900481019282620001665760008555620001b1565b82601f106200018157805160ff1916838001178555620001b1565b82800160010185558215620001b1579182015b82811115620001b157825182559160200191906001019062000194565b50620001bf929150620001c3565b5090565b5b80821115620001bf5760008155600101620001c4565b600181811c90821680620001ef57607f821691505b602082108114156200021157634e487b7160e01b600052602260045260246000fd5b50919050565b608051610eba6200023a600039600081816101bc01526106390152610eba6000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806354fd4d50116100a2578063a457c2d711610071578063a457c2d71461025f578063a9059cbb14610272578063c45a015514610285578063d505accf146102b0578063dd62ed3e146102c357600080fd5b806354fd4d501461020657806370a082311461020e5780637ecebe001461023757806395d89b411461025757600080fd5b806330adf81f116100e957806330adf81f14610181578063313ce567146101a85780633644e515146101b757806339509351146101de57806340c10f19146101f157600080fd5b806306fdde031461011b578063095ea7b31461013957806318160ddd1461015c57806323b872dd1461016e575b600080fd5b6101236102fc565b6040516101309190610df1565b60405180910390f35b61014c610147366004610d2f565b61038e565b6040519015158152602001610130565b6002545b604051908152602001610130565b61014c61017c366004610c80565b6103a4565b6101607f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b60405160128152602001610130565b6101607f000000000000000000000000000000000000000000000000000000000000000081565b61014c6101ec366004610d2f565b6103fb565b6102046101ff366004610d2f565b610432565b005b610123610457565b61016061021c366004610c2b565b6001600160a01b031660009081526020819052604090205490565b610160610245366004610c2b565b60066020526000908152604090205481565b6101236104e5565b61014c61026d366004610d2f565b6104f4565b61014c610280366004610d2f565b610592565b600754610298906001600160a01b031681565b6040516001600160a01b039091168152602001610130565b6102046102be366004610cbc565b61059f565b6101606102d1366004610c4d565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461030b90610e33565b80601f016020809104026020016040519081016040528092919081815260200182805461033790610e33565b80156103845780601f1061035957610100808354040283529160200191610384565b820191906000526020600020905b81548152906001019060200180831161036757829003601f168201915b5050505050905090565b600061039b33848461083d565b50600192915050565b6001600160a01b038316600090815260016020908152604080832033845290915281205460001981146103e5576103e585336103e08685610e1c565b61083d565b6103f0858585610961565b506001949350505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161039b9185906103e0908690610e04565b6007546001600160a01b0316331461044957600080fd5b6104538282610b30565b5050565b6005805461046490610e33565b80601f016020809104026020016040519081016040528092919081815260200182805461049090610e33565b80156104dd5780601f106104b2576101008083540402835291602001916104dd565b820191906000526020600020905b8154815290600101906020018083116104c057829003601f168201915b505050505081565b60606004805461030b90610e33565b3360009081526001602090815260408083206001600160a01b03861684529091528120548281101561057b5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b610588338585840361083d565b5060019392505050565b600061039b338484610961565b834211156105ac57600080fd5b6001600160a01b038781166000818152600660208181526040808420805482517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981860152808401889052978e166060890152608088018d905260a0880181905260c08089018d90528351808a03909101815260e08901845280519085012061190160f01b6101008a01527f00000000000000000000000000000000000000000000000000000000000000006101028a0152610122808a01919091528351808a039091018152610142909801909252865196830196909620948452919052919260019290919061069d908490610e04565b90915550506001600160a01b0387811690891614156106bb57600080fd5b873b1561079457604080516020810185905280820184905260f886901b6001600160f81b0319166060820152815160418183030181526061820192839052630b135d3f60e11b9092526001600160a01b038a1691631626ba7e91610723918591606501610dd0565b60206040518083038186803b15801561073b57600080fd5b505afa15801561074f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107739190610d59565b6001600160e01b031916631626ba7e60e01b1461078f57600080fd5b610828565b6040805160008082526020820180845284905260ff871692820192909252606081018590526080810184905260019060a0016020604051602081039080840390855afa1580156107e8573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661080857600080fd5b886001600160a01b0316816001600160a01b03161461082657600080fd5b505b61083388888861083d565b5050505050505050565b6001600160a01b03831661089f5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610572565b6001600160a01b0382166109005760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610572565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166109c55760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610572565b6001600160a01b038216610a275760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610572565b6001600160a01b03831660009081526020819052604090205481811015610a9f5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610572565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610ad6908490610e04565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b2291815260200190565b60405180910390a350505050565b6001600160a01b038216610b865760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610572565b8060026000828254610b989190610e04565b90915550506001600160a01b03821660009081526020819052604081208054839290610bc5908490610e04565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b80356001600160a01b0381168114610c2657600080fd5b919050565b600060208284031215610c3d57600080fd5b610c4682610c0f565b9392505050565b60008060408385031215610c6057600080fd5b610c6983610c0f565b9150610c7760208401610c0f565b90509250929050565b600080600060608486031215610c9557600080fd5b610c9e84610c0f565b9250610cac60208501610c0f565b9150604084013590509250925092565b600080600080600080600060e0888a031215610cd757600080fd5b610ce088610c0f565b9650610cee60208901610c0f565b95506040880135945060608801359350608088013560ff81168114610d1257600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610d4257600080fd5b610d4b83610c0f565b946020939093013593505050565b600060208284031215610d6b57600080fd5b81516001600160e01b031981168114610c4657600080fd5b6000815180845260005b81811015610da957602081850181015186830182015201610d8d565b81811115610dbb576000602083870101525b50601f01601f19169290920160200192915050565b828152604060208201526000610de96040830184610d83565b949350505050565b602081526000610c466020830184610d83565b60008219821115610e1757610e17610e6e565b500190565b600082821015610e2e57610e2e610e6e565b500390565b600181811c90821680610e4757607f821691505b60208210811415610e6857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220f5fa76101ef2275f3ec8ccc00ae7aaa7212f19db37a67fc46caa4c177159bac764736f6c63430008050033";
//# sourceMappingURL=Dubu__factory.js.map