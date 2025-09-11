import myPromise from "./Bai01";

export async function runTask() {
    const result = await myPromise;
    console.log("Bai 11: "+ result);
}
