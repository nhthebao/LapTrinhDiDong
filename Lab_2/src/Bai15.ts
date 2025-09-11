import { numberAfter1s } from "./Bai14";

export async function runSequential() {

    const b = await numberAfter1s(2);
    console.log("Second:", b);

    const a = await numberAfter1s(4);
    console.log("First:", a);

    const c = await numberAfter1s(3);
    console.log("Third:", c);
  }