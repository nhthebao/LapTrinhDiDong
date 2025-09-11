async function fetchTodo(id: number) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error(`Fetch for ID ${id} failed:`, error);
      throw error;
    }
  }
  
export async function fetchMultipleTodos(ids: number[]) {
    try {
      const results = await Promise.all(ids.map(id => fetchTodo(id)));
      console.log("Bai 22:", results);
    } catch (error) {
      console.error("One of the fetches failed:", error);
    }
  }
  