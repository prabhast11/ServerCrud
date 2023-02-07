

import axios from "axios"



const URL=  process.env.REACT_APP_BACKEND_URL ||  "http://localhost:8000"


export const updateServerData = async(data,id) =>{
    try{
        return await axios.post(`${URL}/serverdEdit/${id}`,data)
    }catch(error){
        console.log("Error while calling getdata ",error)
    }
}

export const updateProviderData = async(data,id) =>{
    try{
        return await axios.post(`${URL}/providerdEdit/${id}`,data)
    }catch(error){
        console.log("Error while calling getdata ",error)
    }
}
export const updateCustomerData = async(data,id) =>{
    try{
        return await axios.post(`${URL}/customerdEdit/${id}`,data)
    }catch(error){
        console.log("Error while calling getdata ",error)
    }
}
export const updateDidData = async(data,id) =>{
    try{
        return await axios.post(`${URL}/diddEdit/${id}`,data)
    }catch(error){
        console.log("Error while calling getdata ",error)
    }
}
export const updateServiceData = async(data,id) =>{
    try{
        return await axios.post(`${URL}/servicesdEdit/${id}`,data)
    }catch(error){
        console.log("Error while calling getdata ",error)
    }
}
export const updateTelcoProviderData = async(data,id) =>{
    try{
        console.log(data)
        return await axios.post(`${URL}/telecoproviderdEdit/${id}`,data)
    }catch(error){
        console.log("Error while calling getdata ",error)
    }
}
export const updatePalatNumberData = async(data,id) =>{
    try{
        return await axios.post(`${URL}/palatnumberdEdit/${id}`,data)
    }catch(error){
        console.log("Error while calling getdata ",error)
    }
}
