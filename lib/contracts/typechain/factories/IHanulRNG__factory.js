"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IHanulRNG__factory = void 0;
const ethers_1 = require("ethers");
class IHanulRNG__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IHanulRNG__factory = IHanulRNG__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "seed",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "generateRandomNumber",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
//# sourceMappingURL=IHanulRNG__factory.js.map