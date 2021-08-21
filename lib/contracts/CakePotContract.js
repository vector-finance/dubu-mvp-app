"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __importDefault(require("../Config"));
const CakePot_json_1 = __importDefault(require("./artifacts/contracts/CakePot.sol/CakePot.json"));
const Contract_1 = __importDefault(require("./Contract"));
class CakePotContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.CakePot, CakePot_json_1.default.abi, [
            "Start",
            "End",
            "Enter",
            "Exit",
        ]);
    }
    async getCurrentSeason() { return await this.contract.currentSeason(); }
    async getUserCounts(season) { return await this.contract.userCounts(season); }
    async getAmounts(season, who) { return await this.contract.amounts(season, who); }
    async getTotalAmounts(season) { return await this.contract.totalAmounts(season); }
    async checkEnd() { return await this.contract.checkEnd(); }
    async enter(amount) {
        const contract = await this.loadWalletContract();
        await (contract === null || contract === void 0 ? void 0 : contract.enter(amount));
    }
    async end() {
        const contract = await this.loadWalletContract();
        await (contract === null || contract === void 0 ? void 0 : contract.end());
    }
    async exit(season) {
        const contract = await this.loadWalletContract();
        await (contract === null || contract === void 0 ? void 0 : contract.exit(season));
    }
}
exports.default = new CakePotContract();
//# sourceMappingURL=CakePotContract.js.map