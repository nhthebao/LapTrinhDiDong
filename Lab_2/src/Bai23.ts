export async function fectchCompleted(){
    try{
        const response= await fetch("https://jsonplaceholder.typicode.com/todos")
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data= await response.json()
        
        const completedTodos = data.filter((todo:any)=> todo.completed)// dung any de tranh khi fech du lieu ve thanh file json thi trinh duyen ko nhan dien duoc
        console.log("Bai 23:", completedTodos);
    }catch(error){
        console.error("Failed to fetch todos:", error);
    }

}