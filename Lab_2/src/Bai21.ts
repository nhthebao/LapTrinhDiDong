export async function fetchTodo() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      if (response.ok) {
        return  await response.json();
      }

    } catch (error) {
      console.error("Fetch failed:", error);
    }
  }
  