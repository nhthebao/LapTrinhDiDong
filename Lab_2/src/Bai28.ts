export async function batchProcess(tasks: Promise<any>[]) {
    const results = await Promise.all(tasks);
    console.log("Bai 28:", results);
  }