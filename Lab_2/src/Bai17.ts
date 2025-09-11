import { numberAfter1s } from "./Bai14";

export async function iteratePromises() {
    const promises = [numberAfter1s(1), numberAfter1s(2), numberAfter1s(3)];
  
    for await (const p of promises) {
      console.log("number:", p);
    }

}