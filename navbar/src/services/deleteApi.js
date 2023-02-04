import axios from "axios"


const URL="http://localhost:8000";

export const deleteServerDetails = async(id,token)=>{
    try{
      return  await axios.post(`${URL}/ServerDetails/d`, { id : id },{
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
      return  await axios.post(`${URL}/ProvidersDetails/d`, { id : id },{
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
      return  await axios.post(`${URL}/CustomerDetails/d`, { id : id },{
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
      return  await axios.post(`${URL}/didDetails/d`,{ id : id },{
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
      return  await axios.post(`${URL}/ServicesDetails/d`, { id : id },{
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
      return  await axios.post(`${URL}/telcoProviderDetails/d`, { id : id },{
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
      return  await axios.post(`${URL}/PalatNumberDetails/d`, { id : id },{
        headers: {
          'Authorization': `Bearer ${token}`,

        }
      })
    }catch(error){
        console.log("Error while deleting Palat Number data",error)
    }
}
