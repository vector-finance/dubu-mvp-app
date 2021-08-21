"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const CakeContract_1 = __importDefault(require("./contracts/CakeContract"));
const CakePotContract_1 = __importDefault(require("./contracts/CakePotContract"));
const Wallet_1 = __importDefault(require("./ethereum/Wallet"));
(async () => {
    const currentSeason = await CakePotContract_1.default.getCurrentSeason();
    const ended = await CakePotContract_1.default.checkEnd();
    const owner = await Wallet_1.default.loadAddress();
    skynode_1.el("", skynode_1.el("h1", "Dubu MVP App"), skynode_1.el(".season", `Season: ${currentSeason}`), skynode_1.el(".status", `Status: ${ended === true ? "Ended" : "Proceeding"}`), skynode_1.el(".user-count", `User Count: ${await CakePotContract_1.default.getUserCounts(currentSeason)}`), skynode_1.el(".total-amount", `Total Amount: ${ethers_1.utils.formatEther(await CakePotContract_1.default.getTotalAmounts(currentSeason))}`), owner === undefined ? undefined : skynode_1.el(".your-amount", `Your Amount: ${ethers_1.utils.formatEther(await CakePotContract_1.default.getAmounts(currentSeason, owner))}`), ended === true ? skynode_1.el("a.end-button", "End POT", { href: "#" }, {
        click: async () => {
            await CakePotContract_1.default.end();
        },
    }) : skynode_1.el("", skynode_1.el("", skynode_1.el("a.approve-button", "Approve CAKE", { href: "#" }, {
        click: async () => {
            const amount = prompt("How much amount CAKE to approve?");
            if (amount !== null) {
                await CakeContract_1.default.approve(CakePotContract_1.default.address, ethers_1.utils.parseEther(amount));
            }
        },
    })), skynode_1.el("", skynode_1.el("a.enter-button", "Enter POT", { href: "#" }, {
        click: async () => {
            const amount = prompt("How much amount CAKE to enter?");
            if (amount !== null) {
                await CakePotContract_1.default.enter(ethers_1.utils.parseEther(amount));
            }
        },
    })), skynode_1.el("", skynode_1.el("a.exit-button", "Exit Previous POT", { href: "#" }, {
        click: async () => {
            const season = prompt("Enter season to exit.");
            if (season !== null) {
                await CakePotContract_1.default.exit(season);
            }
        },
    })))).appendTo(skynode_1.BodyNode);
})();
//# sourceMappingURL=main.js.map