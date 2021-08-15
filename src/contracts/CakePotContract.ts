import Config from "../Config";
import Contract from "./Contract";
import { CakePot } from "./typechain";
import CakePotArtifact from "./artifacts/contracts/CakePot.sol/CakePot.json";

class CakePotContract extends Contract<CakePot> {

    constructor() {
        super(Config.contracts.CakePot, CakePotArtifact.abi, [
        ]);
    }

    
}

export default new CakePotContract();
