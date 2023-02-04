import React, { Component } from 'react'

import { Login } from '../../services/LoginUser'

import { AuthContext } from '../context/Auth-Context'
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default class LoginForm extends Component {

  static contextType=AuthContext;

    state={
        username:'',
        Password:''
}



handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
    console.log("print",this.state.username,this.state.Password)
     // console.log(this.state.userDetails.username)
      //console.log(this.state.userDetails.password)
     // this.setState({username:e.target.value})
}

handleSubmit=async(e)=>{
    e.preventDefault()
     const data={
        username: this.state.username,
        password: this.state.Password
            }
        console.log("username",data)
            const Auth=this.context
            
            console.log("data",this.context)
            const response=await Login(data);
            console.log(response)
         
          if(response.status === 200 ){
              Auth.loginn(response.data.token,response.data.id)
          }else{
            toast.error(response.response.data.msg);
          }
        //  const status=await responseData.response.status;
        //  if(status === 400){
        
        //  }else{
        //   toast.error("Hello")
        //  }

         //await Auth.loginn(response.data.token,response.data.id)
      

            // console.log("ress",response)
            // if(response.response.status === 401){
            //   toast.error('Hello World! This is a Toast message');
            // }
            //   console.log("DAAAA",response.response.data.token)
            
           
            
        }
       

  render() {
    
    return (
     
      <div className="body">

<ToastContainer />
          <div className="center">
              <h1>Login</h1>
              <form onSubmit={this.SubmitHandler}>
                  <div class="txt_field">
                      <input onChange={this.handleChange} name="username" type="text" required />
                      <span></span>
                      <label>Username</label>
                  </div>
                  <div class="txt_field">
                      <input onChange={this.handleChange} name="Password" type="password"required />
                      <span></span>
                      <label>Password</label>
                  </div>
                 
                  <input style={{marginBottom:"70px"}} type="submit" value="Login" onClick={this.handleSubmit}/>
                  
              </form>
             
          </div>

     
  </div>
      
    )
  }
}