"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FungibleToken__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class FungibleToken__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(name, symbol, _version, overrides) {
        return super.deploy(name, symbol, _version, overrides || {});
    }
    getDeployTransaction(name, symbol, _version, overrides) {
        return super.getDeployTransaction(name, symbol, _version, overrides || {});
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
exports.FungibleToken__factory = FungibleToken__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "symbol",
                type: "string",
            },
            {
                internalType: "string",
                name: "_version",
                type: "string",
            },
        ],
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
const _bytecode = "0x60a06040523480156200001157600080fd5b50604051620010c2380380620010c2833981016040819052620000349162000259565b8251839083906200004d906003906020850190620000fc565b50805162000063906004906020840190620000fc565b505081516200007b91506005906020840190620000fc565b508251602080850191909120825183830120604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f94810194909452830191909152606082015246608082018190523060a08301529060c00160408051601f198184030181529190528051602090910120608052506200033d92505050565b8280546200010a90620002ea565b90600052602060002090601f0160209004810192826200012e576000855562000179565b82601f106200014957805160ff191683800117855562000179565b8280016001018555821562000179579182015b82811115620001795782518255916020019190600101906200015c565b50620001879291506200018b565b5090565b5b808211156200018757600081556001016200018c565b600082601f830112620001b457600080fd5b81516001600160401b0380821115620001d157620001d162000327565b604051601f8301601f19908116603f01168101908282118183101715620001fc57620001fc62000327565b816040528381526020925086838588010111156200021957600080fd5b600091505b838210156200023d57858201830151818301840152908201906200021e565b838211156200024f5760008385830101525b9695505050505050565b6000806000606084860312156200026f57600080fd5b83516001600160401b03808211156200028757600080fd5b6200029587838801620001a2565b94506020860151915080821115620002ac57600080fd5b620002ba87838801620001a2565b93506040860151915080821115620002d157600080fd5b50620002e086828701620001a2565b9150509250925092565b600181811c90821680620002ff57607f821691505b602082108114156200032157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b608051610d6262000360600039600081816101a601526105c00152610d626000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806354fd4d5011610097578063a457c2d711610066578063a457c2d714610234578063a9059cbb14610247578063d505accf1461025a578063dd62ed3e1461026f57600080fd5b806354fd4d50146101db57806370a08231146101e35780637ecebe001461020c57806395d89b411461022c57600080fd5b806330adf81f116100d357806330adf81f1461016b578063313ce567146101925780633644e515146101a157806339509351146101c857600080fd5b806306fdde0314610105578063095ea7b31461012357806318160ddd1461014657806323b872dd14610158575b600080fd5b61010d6102a8565b60405161011a9190610c99565b60405180910390f35b610136610131366004610bd7565b61033a565b604051901515815260200161011a565b6002545b60405190815260200161011a565b610136610166366004610b28565b610350565b61014a7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b6040516012815260200161011a565b61014a7f000000000000000000000000000000000000000000000000000000000000000081565b6101366101d6366004610bd7565b6103a7565b61010d6103de565b61014a6101f1366004610ad3565b6001600160a01b031660009081526020819052604090205490565b61014a61021a366004610ad3565b60066020526000908152604090205481565b61010d61046c565b610136610242366004610bd7565b61047b565b610136610255366004610bd7565b610519565b61026d610268366004610b64565b610526565b005b61014a61027d366004610af5565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546102b790610cdb565b80601f01602080910402602001604051908101604052809291908181526020018280546102e390610cdb565b80156103305780601f1061030557610100808354040283529160200191610330565b820191906000526020600020905b81548152906001019060200180831161031357829003601f168201915b5050505050905090565b60006103473384846107c4565b50600192915050565b6001600160a01b0383166000908152600160209081526040808320338452909152812054600019811461039157610391853361038c8685610cc4565b6107c4565b61039c8585856108e8565b506001949350505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161034791859061038c908690610cac565b600580546103eb90610cdb565b80601f016020809104026020016040519081016040528092919081815260200182805461041790610cdb565b80156104645780601f1061043957610100808354040283529160200191610464565b820191906000526020600020905b81548152906001019060200180831161044757829003601f168201915b505050505081565b6060600480546102b790610cdb565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156105025760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b61050f33858584036107c4565b5060019392505050565b60006103473384846108e8565b8342111561053357600080fd5b6001600160a01b038781166000818152600660208181526040808420805482517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981860152808401889052978e166060890152608088018d905260a0880181905260c08089018d90528351808a03909101815260e08901845280519085012061190160f01b6101008a01527f00000000000000000000000000000000000000000000000000000000000000006101028a0152610122808a01919091528351808a0390910181526101429098019092528651968301969096209484529190529192600192909190610624908490610cac565b90915550506001600160a01b03878116908916141561064257600080fd5b873b1561071b57604080516020810185905280820184905260f886901b6001600160f81b0319166060820152815160418183030181526061820192839052630b135d3f60e11b9092526001600160a01b038a1691631626ba7e916106aa918591606501610c78565b60206040518083038186803b1580156106c257600080fd5b505afa1580156106d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106fa9190610c01565b6001600160e01b031916631626ba7e60e01b1461071657600080fd5b6107af565b6040805160008082526020820180845284905260ff871692820192909252606081018590526080810184905260019060a0016020604051602081039080840390855afa15801561076f573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661078f57600080fd5b886001600160a01b0316816001600160a01b0316146107ad57600080fd5b505b6107ba8888886107c4565b5050505050505050565b6001600160a01b0383166108265760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104f9565b6001600160a01b0382166108875760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104f9565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03831661094c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104f9565b6001600160a01b0382166109ae5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104f9565b6001600160a01b03831660009081526020819052604090205481811015610a265760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104f9565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610a5d908490610cac565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610aa991815260200190565b60405180910390a350505050565b80356001600160a01b0381168114610ace57600080fd5b919050565b600060208284031215610ae557600080fd5b610aee82610ab7565b9392505050565b60008060408385031215610b0857600080fd5b610b1183610ab7565b9150610b1f60208401610ab7565b90509250929050565b600080600060608486031215610b3d57600080fd5b610b4684610ab7565b9250610b5460208501610ab7565b9150604084013590509250925092565b600080600080600080600060e0888a031215610b7f57600080fd5b610b8888610ab7565b9650610b9660208901610ab7565b95506040880135945060608801359350608088013560ff81168114610bba57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610bea57600080fd5b610bf383610ab7565b946020939093013593505050565b600060208284031215610c1357600080fd5b81516001600160e01b031981168114610aee57600080fd5b6000815180845260005b81811015610c5157602081850181015186830182015201610c35565b81811115610c63576000602083870101525b50601f01601f19169290920160200192915050565b828152604060208201526000610c916040830184610c2b565b949350505050565b602081526000610aee6020830184610c2b565b60008219821115610cbf57610cbf610d16565b500190565b600082821015610cd657610cd6610d16565b500390565b600181811c90821680610cef57607f821691505b60208210811415610d1057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220a18e962b3411d1895177f7dc3ea8a133ac673e98e52505a1e9b96b83000d2e3464736f6c63430008050033";
//# sourceMappingURL=FungibleToken__factory.js.map