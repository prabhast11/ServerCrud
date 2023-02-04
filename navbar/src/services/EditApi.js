import axios from "axios"


const URL="http://localhost:8000";


export const getServerData = async(id) =>{
    try{
        return await axios.get(`${URL}/serverdEdit/${id}`)
    }catch(error){
        console.log("Error while calling getdata ",error)
    }
}

export const getProviderData = async(id) =>{
    try{
        return await axios.get(`${URL}/providerdEdit/${id}`)
    }catch(error){
        console.log("Error while calling getdata ",error)
    }
}
export const getCustomerData = async(id) =>{
    try{
        return await axios.get(`${URL}/customerdEdit/${id}`)
    }catch(error){
        console.log("Error while calling getdata ",error)
    }
}
export const getDidData = async(id) =>{
    try{
        return await axios.get(`${URL}/diddEdit/${id}`)
    }catch(error){
        console.log("Error while calling getdata ",error)
    }
}
export const getServiceData = async(id) =>{
    try{
        return await axios.get(`${URL}/servicesdEdit/${id}`)
    }catch(error){
        console.log("Error while calling getdata ",error)
    }
}
export const getTelcoProviderData = async(id) =>{
    try{
        return await axios.get(`${URL}/telecoproviderdEdit/${id}`)
    }catch(error){
        console.log("Error while calling getdata ",error)
    }
}
export const getPalatNumberData = async(id) =>{
    try{
        return await axios.get(`${URL}/palatnumberdEdit/${id}`)
    }catch(error){
        console.log("Error while calling getdata ",error)
    }
}
