 function wait(){
    return new Promise((resolve) => setTimeout(resolve, 5000));
  }
  
 export  async function downloadFileWait5(filename: string) {
    console.log(`Bai 26: downloading file: ${filename}`);

    await wait();
  
    console.log(`Bai 26: download complete: ${filename}`);
}
  

  