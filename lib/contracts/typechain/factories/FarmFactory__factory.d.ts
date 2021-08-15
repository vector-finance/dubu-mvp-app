import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { FarmFactory } from "../FarmFactory";
export declare class FarmFactory__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_rewardPerBlock: BigNumberish, _startBlock: BigNumberish, overrides?: Overrides): Promise<FarmFactory>;
    getDeployTransaction(_rewardPerBlock: BigNumberish, _startBlock: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): FarmFactory;
    connect(signer: Signer): FarmFactory__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): FarmFactory;
}
//# sourceMappingURL=FarmFactory__factory.d.ts.map