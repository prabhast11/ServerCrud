import axios from "axios"


const URL= "http://localhost:8000"  ||  process.env.REACT_APP_BACKEND_URL 

export const Login = async(data)=>{
    try{
      return  await axios.post(`${URL}/login`,data)
    }catch(error){
      return ("Error while login ",error)
    }
}