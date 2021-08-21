import { BigNumber, BigNumberish } from "ethers";
import Config from "../Config";
import CakePotArtifact from "./artifacts/contracts/CakePot.sol/CakePot.json";
import Contract from "./Contract";
import { CakePot } from "./typechain";

class CakePotContract extends Contract<CakePot> {

    constructor() {
        super(Config.contracts.CakePot, CakePotArtifact.abi, [
            "Start",
            "End",
            "Enter",
            "Exit",
        ]);
    }

    public async getCurrentSeason(): Promise<BigNumber> { return await this.contract.currentSeason(); }
    public async getUserCounts(season: BigNumberish): Promise<BigNumber> { return await this.contract.userCounts(season); }
    public async getAmounts(season: BigNumberish, who: string): Promise<BigNumber> { return await this.contract.amounts(season, who); }
    public async getTotalAmounts(season: BigNumberish): Promise<BigNumber> { return await this.contract.totalAmounts(season); }
    public async checkEnd(): Promise<boolean> { return await this.contract.checkEnd(); }

    public async enter(amount: BigNumberish) {
        const contract = await this.loadWalletContract();
        await contract?.enter(amount);
    }

    public async end() {
        const contract = await this.loadWalletContract();
        await contract?.end();
    }

    public async exit(season: BigNumberish) {
        const contract = await this.loadWalletContract();
        await contract?.exit(season);
    }
}

export default new CakePotContract();
