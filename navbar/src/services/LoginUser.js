import axios from "axios"


const URL="http://localhost:8000";



export const Login = async(data)=>{
 // console.log(data)
    try{
      return  await axios.post(`${URL}/login`,data)
    }catch(error){
      return ("Error while login ",error)
    }
}