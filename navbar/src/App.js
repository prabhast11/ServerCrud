import React,{Component, useId} from 'react';
import { BrowserRouter as Router,Routes,Route ,Navigate} from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import Serverdetails from './components/tables/Serverdetails';
import Providers from './components/tables/Providers';
import Customers from './components/tables/Customers';
import Did from './components/tables/Did';
import Services from './components/tables/Services';
import Telcoprovider from './components/tables/Telcoprovider';
import Palatnumber from './components/tables/Palatnumber';
import Dialerlink from './components/tables/Dialerlink';
import LoginForm from './components/Login/LoginForm';
import { AuthContext } from './components/context/Auth-Context';


let LogoutTimer;

class App extends Component {

state={
  token:false,
  userId:false,
  TokenExpirationDate:''
}


login=(token,id,expirationDate)=>{
  this.setState({token:token})
  this.setState({userId:id})
  
  const TokenExpirationDate= expirationDate || new Date(new Date().getTime()+ 1000 * 60 * 60)
  this.setState({TokenExpirationDate:TokenExpirationDate})
  localStorage.setItem('userData',JSON.stringify({userId:id,token:token,expiration:TokenExpirationDate.toISOString()
  }))
}



logout=()=>{
  this.setState({token:null})
  this.setState({TokenExpirationDate:null})
  this.setState({userId:null})
  localStorage.removeItem('userData')
  window.location.href = "/login";

}

componentDidMount (){
  if(this.state.token && this.state.TokenExpirationDate){
    const remainingTime = this.state.TokenExpirationDate.getTime() - new Date().getTime();
   LogoutTimer= setTimeout(this.logout,remainingTime)
  }else{
    clearTimeout(LogoutTimer)
  }
}

componentDidMount(){
const storedData= JSON.parse(localStorage.getItem('userData'))
if(storedData && storedData.token && new Date( storedData.expiration) > new Date() ){
  this.login(storedData.token,storedData.id,new Date( storedData.expiration))
}
}

  render(){
    let routes;
    if(this.state.token){
      routes=(
        <>
        <MyNavbar logout={this.logout}/>
        <Routes>
        <Route path="/ServerDetails" element={<Serverdetails/>}/>
        <Route path="/ProvidersDetails" element={<Providers/>}/>
        <Route path="/CustomerDetails" element={<Customers/>}/>
        <Route path="/didDetails" element={<Did/>}/>
        <Route path="/ServicesDetails" element={<Services/>}/>
        <Route path="/telcoProviderDetails" element={<Telcoprovider/>}/>
        <Route path="/PalatNumberDetails" element={<Palatnumber/>}/>
        <Route path="/dialerlink" element={<Dialerlink/>}/>
        <Route path='*' element={<Navigate to='/ServerDetails' />} />
        </Routes>
        </>
      )
    }
    else{
      routes=(

        <Routes> 
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path='*' element={<LoginForm/>} />
        </Routes>
      )
    }
    
    return (
      <AuthContext.Provider value={{
        isLoggedIn:!!this.state.token,
        token:this.state.token,
        loginn:this.login,
        logout:this.logout,
        userId:this.state.userId
      }}>
      
       <Router>
              {
                routes
              }
        </Router>
      
            </AuthContext.Provider> 
        );
  }
 }

export default App;







