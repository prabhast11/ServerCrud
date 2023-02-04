import axios from "axios"


const URL="http://localhost:8000";


//{ headers: {'Authorization' : `Bearer ${token}` } }

export const AddServerDetails =async(data,token)=>{
    try{
        console.log(`Bearer ${token}`)
        return await axios.post(`${URL}/ServerDetail`,data,{
            headers: {
              'Authorization': `Bearer ${token}`,

            }
          })
        
    }catch(error){
        console.log("Error while adding SERVER DETAILS",error);
    }
}

export const AddProvidersDetails =async(data,token)=>{
    try{
        return await axios.post(`${URL}/ProvidersDetail`,data,{
            headers: {
              'Authorization': `Bearer ${token}`,

            }
          })
    }catch(error){
        console.log("Error while adding PROVIDER DETAILS",error);
    }
}

export const AddCustomerDetails =async(data,token)=>{
    console.log(`Bearer ${token}` )
    try{
        //const headers = { 'Authorization': `Bearer ${token}` };
        return await axios.post(`${URL}/CustomerDetail`,data,{
            headers: {
              'Authorization': `Bearer ${token}`,

            }
          })

    }catch(error){
        console.log("Error while adding CUSTOMER DETAILS",error);
    }
}

export const AdddidDetails =async(data,token)=>{
    try{
        return await axios.post(`${URL}/didDetail`,data,{
            headers: {
              'Authorization': `Bearer ${token}`,

            }
          })
    }catch(error){
        console.log("Error while adding DID DETAILS",error);
    }
}

export const AddServicesDetails =async(data,token)=>{
    try{
        return await axios.post(`${URL}/ServicesDetail`,data,{
            headers: {
              'Authorization': `Bearer ${token}`,

            }
          })
    }catch(error){
        console.log("Error while adding SERVICES DETAILS",error);
    }
}

export const AddtelcoProviderDetails =async(data,token)=>{
    try{
        return await axios.post(`${URL}/telcoProviderDetail`,data,{
            headers: {
              'Authorization': `Bearer ${token}`,

            }
          })
    }catch(error){
        console.log("Error while adding TELCO PROVIDER DETAILS",error);
    }
}

export const AddPalatNumberDetails =async(data,token)=>{
    try{
        return await axios.post(`${URL}/PalatNumberDetail`,data,{
            headers: {
              'Authorization': `Bearer ${token}`,

            }
          })
    }catch(error){
        console.log("Error while adding PLATA NUMBER DETAILS",error);
    }
}





//call  this in component did mount
// const getAll = async ()=>{
//     let response = await getdata();
//     setdata(response.data)
// }

// //delete api
// const deleteusers = async(id)=>{
//     await deleteusers(id);
//     getAll()
// }

// state.map(s=>(
//     //all tabels cell
//     onclick={()=>delete(state._id)}
// ))
