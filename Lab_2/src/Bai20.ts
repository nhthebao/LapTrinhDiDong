export async function fetchUser20(id:number){
    const delay = Math.floor(Math.random()*3000)+200
    return new Promise<{id:number,name:string}>((resolve,reject)=>{
     
        if(delay <= 2000){
            resolve({id,name:`Bai 20: UserId:${id}`})
        }else{
            reject(new Error(`Timeout: ${delay} API call for user ${id}  took more than 2s`))
        }
    })
}