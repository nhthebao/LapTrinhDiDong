export function fetchUser(id:number){
    return new Promise<{id:number; name:string }>((resolve)=>{
        setTimeout(() => {
            resolve({id,name:`Bai18: UserId= ${id}`})
        }, 1000);
    })
}