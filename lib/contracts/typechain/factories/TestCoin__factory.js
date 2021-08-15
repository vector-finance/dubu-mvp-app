"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestCoin__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class TestCoin__factory extends contracts_1.ContractFactory {
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
exports.TestCoin__factory = TestCoin__factory;
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
        name: "INITIAL_SUPPLY",
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
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
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
const _bytecode = "0x60a06040523480156200001157600080fd5b50604051806040016040528060088152602001672a32b9ba21b7b4b760c11b81525060405180604001604052806004815260200163151154d560e21b815250604051806040016040528060018152602001603160f81b815250828281600390805190602001906200008492919062000233565b5080516200009a90600490602084019062000233565b50508151620000b29150600590602084019062000233565b508251602080850191909120825183830120604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f94810194909452830191909152606082015246608082018190523060a08301529060c00160408051601f1981840301815291905280516020909101206080525062000145925033915069021e19e0c9bab240000090506200014b565b6200033d565b6001600160a01b038216620001a65760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620001ba9190620002d9565b90915550506001600160a01b03821660009081526020819052604081208054839290620001e9908490620002d9565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620002419062000300565b90600052602060002090601f016020900481019282620002655760008555620002b0565b82601f106200028057805160ff1916838001178555620002b0565b82800160010185558215620002b0579182015b82811115620002b057825182559160200191906001019062000293565b50620002be929150620002c2565b5090565b5b80821115620002be5760008155600101620002c3565b60008219821115620002fb57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200031557607f821691505b602082108114156200033757634e487b7160e01b600052602260045260246000fd5b50919050565b60805161101062000360600039600081816101d8015261062f01526110106000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806342966c68116100ad578063a0712d6811610071578063a0712d681461027b578063a457c2d71461028e578063a9059cbb146102a1578063d505accf146102b4578063dd62ed3e146102c757600080fd5b806342966c681461020d57806354fd4d501461022257806370a082311461022a5780637ecebe001461025357806395d89b411461027357600080fd5b80632ff2e9dc116100f45780632ff2e9dc1461018c57806330adf81f1461019d578063313ce567146101c45780633644e515146101d357806339509351146101fa57600080fd5b806306fdde0314610126578063095ea7b31461014457806318160ddd1461016757806323b872dd14610179575b600080fd5b61012e610300565b60405161013b9190610f47565b60405180910390f35b610157610152366004610e6c565b610392565b604051901515815260200161013b565b6002545b60405190815260200161013b565b610157610187366004610dbd565b6103a8565b61016b69021e19e0c9bab240000081565b61016b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b6040516012815260200161013b565b61016b7f000000000000000000000000000000000000000000000000000000000000000081565b610157610208366004610e6c565b6103ff565b61022061021b366004610ec0565b610436565b005b61012e610443565b61016b610238366004610d68565b6001600160a01b031660009081526020819052604090205490565b61016b610261366004610d68565b60066020526000908152604090205481565b61012e6104d1565b610220610289366004610ec0565b6104e0565b61015761029c366004610e6c565b6104ea565b6101576102af366004610e6c565b610588565b6102206102c2366004610df9565b610595565b61016b6102d5366004610d8a565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461030f90610f89565b80601f016020809104026020016040519081016040528092919081815260200182805461033b90610f89565b80156103885780601f1061035d57610100808354040283529160200191610388565b820191906000526020600020905b81548152906001019060200180831161036b57829003601f168201915b5050505050905090565b600061039f338484610833565b50600192915050565b6001600160a01b038316600090815260016020908152604080832033845290915281205460001981146103e9576103e985336103e48685610f72565b610833565b6103f4858585610958565b506001949350505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161039f9185906103e4908690610f5a565b6104403382610b27565b50565b6005805461045090610f89565b80601f016020809104026020016040519081016040528092919081815260200182805461047c90610f89565b80156104c95780601f1061049e576101008083540402835291602001916104c9565b820191906000526020600020905b8154815290600101906020018083116104ac57829003601f168201915b505050505081565b60606004805461030f90610f89565b6104403382610c6d565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156105715760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b61057e3385858403610833565b5060019392505050565b600061039f338484610958565b834211156105a257600080fd5b6001600160a01b038781166000818152600660208181526040808420805482517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981860152808401889052978e166060890152608088018d905260a0880181905260c08089018d90528351808a03909101815260e08901845280519085012061190160f01b6101008a01527f00000000000000000000000000000000000000000000000000000000000000006101028a0152610122808a01919091528351808a0390910181526101429098019092528651968301969096209484529190529192600192909190610693908490610f5a565b90915550506001600160a01b0387811690891614156106b157600080fd5b873b1561078a57604080516020810185905280820184905260f886901b6001600160f81b0319166060820152815160418183030181526061820192839052630b135d3f60e11b9092526001600160a01b038a1691631626ba7e91610719918591606501610f26565b60206040518083038186803b15801561073157600080fd5b505afa158015610745573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107699190610e96565b6001600160e01b031916631626ba7e60e01b1461078557600080fd5b61081e565b6040805160008082526020820180845284905260ff871692820192909252606081018590526080810184905260019060a0016020604051602081039080840390855afa1580156107de573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166107fe57600080fd5b886001600160a01b0316816001600160a01b03161461081c57600080fd5b505b610829888888610833565b5050505050505050565b6001600160a01b0383166108955760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610568565b6001600160a01b0382166108f65760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610568565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166109bc5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610568565b6001600160a01b038216610a1e5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610568565b6001600160a01b03831660009081526020819052604090205481811015610a965760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610568565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610acd908490610f5a565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b1991815260200190565b60405180910390a350505050565b6001600160a01b038216610b875760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610568565b6001600160a01b03821660009081526020819052604090205481811015610bfb5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610568565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610c2a908490610f72565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161094b565b6001600160a01b038216610cc35760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610568565b8060026000828254610cd59190610f5a565b90915550506001600160a01b03821660009081526020819052604081208054839290610d02908490610f5a565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b80356001600160a01b0381168114610d6357600080fd5b919050565b600060208284031215610d7a57600080fd5b610d8382610d4c565b9392505050565b60008060408385031215610d9d57600080fd5b610da683610d4c565b9150610db460208401610d4c565b90509250929050565b600080600060608486031215610dd257600080fd5b610ddb84610d4c565b9250610de960208501610d4c565b9150604084013590509250925092565b600080600080600080600060e0888a031215610e1457600080fd5b610e1d88610d4c565b9650610e2b60208901610d4c565b95506040880135945060608801359350608088013560ff81168114610e4f57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610e7f57600080fd5b610e8883610d4c565b946020939093013593505050565b600060208284031215610ea857600080fd5b81516001600160e01b031981168114610d8357600080fd5b600060208284031215610ed257600080fd5b5035919050565b6000815180845260005b81811015610eff57602081850181015186830182015201610ee3565b81811115610f11576000602083870101525b50601f01601f19169290920160200192915050565b828152604060208201526000610f3f6040830184610ed9565b949350505050565b602081526000610d836020830184610ed9565b60008219821115610f6d57610f6d610fc4565b500190565b600082821015610f8457610f84610fc4565b500390565b600181811c90821680610f9d57607f821691505b60208210811415610fbe57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220fa8894a18cc2c1fdf7cf06f29cc3935c5ee7e2a2fad920adf77bd8246e99f55b64736f6c63430008050033";
//# sourceMappingURL=TestCoin__factory.js.map