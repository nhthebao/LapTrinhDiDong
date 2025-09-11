import { numberAfter1s } from "./Bai14";

export async function runParallel() {
    var [a,b,c]= await Promise.all([numberAfter1s(2),numberAfter1s(4),numberAfter1s(3)])
    
    console.log("16/First:", a);
    console.log("16/Second:", b);
    console.log("16/Third:", c);
  }