import { network } from "hardhat";
import { networkInterfaces } from "os";

export async function moveBlocks(amount: number) {
    console.log("Moving blocks...");
    for (let index = 0; index < amount; index++) {
        await network.provider.request({
            method: "evm_mine",
            params: [],
        });
    }
}