import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { CakePot } from "../CakePot";
export declare class CakePot__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<CakePot>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): CakePot;
    connect(signer: Signer): CakePot__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): CakePot;
}
//# sourceMappingURL=CakePot__factory.d.ts.map