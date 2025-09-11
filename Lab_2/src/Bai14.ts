export async function numberAfter1s(num: number){
    return await new Promise((resolve) => {
      setTimeout(() => resolve(num * 3), 1000);
    });
}
  