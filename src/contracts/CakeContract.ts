import Config from "../Config";
import FungibleTokenArtifact from "./artifacts/contracts/FungibleToken.sol/FungibleToken.json";
import ERC20Contract from "./standard/ERC20Contract";
import { ERC20 } from "./typechain";

class CakeContract extends ERC20Contract<ERC20> {

    constructor() {
        super(Config.contracts.Cake, FungibleTokenArtifact.abi, []);
    }
}

export default new CakeContract();
