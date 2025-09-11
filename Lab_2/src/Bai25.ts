export function downloadFile(filename: string): void {
    console.log(`Bai 25: downloading file: ${filename}`);
  
    setTimeout(() => {
      console.log(`Bai 25: download complete: ${filename}`);
    }, 3000);
  }

  