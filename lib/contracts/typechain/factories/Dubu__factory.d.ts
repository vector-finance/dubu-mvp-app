import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { Dubu } from "../Dubu";
export declare class Dubu__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<Dubu>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): Dubu;
    connect(signer: Signer): Dubu__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Dubu;
}
//# sourceMappingURL=Dubu__factory.d.ts.map