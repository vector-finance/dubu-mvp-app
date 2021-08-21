import { BodyNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import CakeContract from "./contracts/CakeContract";
import CakePotContract from "./contracts/CakePotContract";
import Wallet from "./ethereum/Wallet";

(async () => {

    const currentSeason = await CakePotContract.getCurrentSeason();
    const ended = await CakePotContract.checkEnd();
    const owner = await Wallet.loadAddress();

    el("",
        el("h1", "Dubu MVP App"),
        el(".season", `Season: ${currentSeason}`),
        el(".status", `Status: ${ended === true ? "Ended" : "Proceeding"}`),
        el(".user-count", `User Count: ${await CakePotContract.getUserCounts(currentSeason)}`),
        el(".total-amount", `Total Amount: ${utils.formatEther(await CakePotContract.getTotalAmounts(currentSeason))}`),
        owner === undefined ? undefined : el(".your-amount", `Your Amount: ${utils.formatEther(await CakePotContract.getAmounts(currentSeason, owner))}`),

        ended === true ? el("a.end-button", "End POT", { href: "#" }, {
            click: async () => {
                await CakePotContract.end();
            },
        }) : el("",
            el("",
                el("a.approve-button", "Approve CAKE", { href: "#" }, {
                    click: async () => {
                        const amount = prompt("How much amount CAKE to approve?");
                        if (amount !== null) {
                            await CakeContract.approve(CakePotContract.address, utils.parseEther(amount));
                        }
                    },
                }),
            ),
            el("",
                el("a.enter-button", "Enter POT", { href: "#" }, {
                    click: async () => {
                        const amount = prompt("How much amount CAKE to enter?");
                        if (amount !== null) {
                            await CakePotContract.enter(utils.parseEther(amount));
                        }
                    },
                }),
            ),
            el("",
                el("a.exit-button", "Exit Previous POT", { href: "#" }, {
                    click: async () => {
                        const season = prompt("Enter season to exit.");
                        if (season !== null) {
                            await CakePotContract.exit(season);
                        }
                    },
                }),
            ),
        ),
    ).appendTo(BodyNode);
})();