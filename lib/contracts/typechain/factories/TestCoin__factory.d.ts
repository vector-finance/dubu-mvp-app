import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { TestCoin } from "../TestCoin";
export declare class TestCoin__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<TestCoin>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): TestCoin;
    connect(signer: Signer): TestCoin__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TestCoin;
}
//# sourceMappingURL=TestCoin__factory.d.ts.map