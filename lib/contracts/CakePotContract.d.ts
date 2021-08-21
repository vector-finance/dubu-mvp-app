import { BigNumber, BigNumberish } from "ethers";
import Contract from "./Contract";
import { CakePot } from "./typechain";
declare class CakePotContract extends Contract<CakePot> {
    constructor();
    getCurrentSeason(): Promise<BigNumber>;
    getUserCounts(season: BigNumberish): Promise<BigNumber>;
    getAmounts(season: BigNumberish, who: string): Promise<BigNumber>;
    getTotalAmounts(season: BigNumberish): Promise<BigNumber>;
    checkEnd(): Promise<boolean>;
    enter(amount: BigNumberish): Promise<void>;
    end(): Promise<void>;
    exit(season: BigNumberish): Promise<void>;
}
declare const _default: CakePotContract;
export default _default;
//# sourceMappingURL=CakePotContract.d.ts.map