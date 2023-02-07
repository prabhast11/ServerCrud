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
    
}

handleSubmit=async(e)=>{
    e.preventDefault()
     const data={
        username: this.state.username,
        password: this.state.Password
            }
            const Auth=this.context
            
            const response=await Login(data);
         
          if(response.status === 200 ){
              Auth.loginn(response.data.token,response.data.id)
              window.location.href = "/ServerDetails";

          }else{
            toast.error(response.response.data.msg);
          }
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