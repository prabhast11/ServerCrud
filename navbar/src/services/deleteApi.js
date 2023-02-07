import axios from "axios"


const URL=  process.env.REACT_APP_BACKEND_URL ||  "http://localhost:8000"

export const deleteServerDetails = async(id,token)=>{
    try{
      return  await axios.post(`${URL}/ServerDetails`, { id : id },{
        headers: {
          'Authorization': `Bearer ${token}`,

        }
      })
    }catch(error){  
        console.log("Error while deleting Server data",error)
    }
}

export const deleteProvidersDetails = async(id,token)=>{
    try{
      return  await axios.post(`${URL}/ProvidersDetails`, { id : id },{
        headers: {
          'Authorization': `Bearer ${token}`,

        }
      })
    }catch(error){
        console.log("Error while deleting Provider data",error)
    }
}
export const deleteCustomerDetails = async(id,token)=>{
    try{
      return  await axios.post(`${URL}/CustomerDetails`, { id : id },{
        headers: {
          'Authorization': `Bearer ${token}`,

        }
      })
    }catch(error){
        console.log("Error while deleting Customer data",error)
    }
}
export const deletedidDetails = async(id,token)=>{
    try{
      return  await axios.post(`${URL}/didDetails`,{ id : id },{
        headers: {
          'Authorization': `Bearer ${token}`,

        }
      })
    }catch(error){
        console.log("Error while deleting DID data",error)
    }
}
export const deleteServicesDetails = async(id,token)=>{
    try{
      return  await axios.post(`${URL}/ServicesDetails`, { id : id },{
        headers: {
          'Authorization': `Bearer ${token}`,

        }
      })
    }catch(error){
        console.log("Error while deleting Services  data",error)
    }
}
export const deleteTelcoProviderDetails = async(id,token)=>{
    try{
      return  await axios.post(`${URL}/telcoProviderDetails`, { id : id },{
        headers: {
          'Authorization': `Bearer ${token}`,

        }
      })
    }catch(error){
        console.log("Error while deleting Telco Provider data",error)
    }
}
export const deletePalatNumberDetails = async(id,token)=>{
    try{
      return  await axios.post(`${URL}/PalatNumberDetails`, { id : id },{
        headers: {
          'Authorization': `Bearer ${token}`,

        }
      })
    }catch(error){
        console.log("Error while deleting Palat Number data",error)
    }
}
