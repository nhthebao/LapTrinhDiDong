import { fetchUser } from "./Bai18";

export async function fetchUsers(ids:number[]){
    const promises=ids.map((id)=>fetchUser(id))
    const result= await Promise.all(promises)

    return result
}