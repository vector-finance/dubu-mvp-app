"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __importDefault(require("../Config"));
const Contract_1 = __importDefault(require("./Contract"));
const CakePot_json_1 = __importDefault(require("./artifacts/contracts/CakePot.sol/CakePot.json"));
class CakePotContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.CakePot, CakePot_json_1.default.abi, []);
    }
}
exports.default = new CakePotContract();
//# sourceMappingURL=CakePotContract.js.map