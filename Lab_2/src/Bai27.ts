export async function fetchWithRetry(url: string, retries: number) {
    for (let i = 0; i <retries; i++) {
      try {
        const response = await fetch(url);
        if (!response.ok)
        {
            throw new Error(`HTTP error: ${response.status}`);
        }
            return await response.json();
      } catch (error) {
        console.error(`Bai 27: failed: ${i + 1}`, error);
      }
    }
  }
  