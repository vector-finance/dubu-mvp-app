"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __importDefault(require("../Config"));
const FungibleToken_json_1 = __importDefault(require("./artifacts/contracts/FungibleToken.sol/FungibleToken.json"));
const ERC20Contract_1 = __importDefault(require("./standard/ERC20Contract"));
class CakeContract extends ERC20Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.Cake, FungibleToken_json_1.default.abi, []);
    }
}
exports.default = new CakeContract();
//# sourceMappingURL=CakeContract.js.map