import React,{Component, useId} from 'react';

import { BrowserRouter as Router,Routes,Route ,Navigate} from 'react-router-dom';

import MyNavbar from './components/MyNavbar';
import Myform from './components/Myform';








import Serverdetailsform from './forms/Serverdetailsform';
import Providersform from './forms/Providersform';
import Customersform from './forms/Customersform';
import Didform from './forms/Didform';
import Servicesform from './forms/Servicesform';
import Telcoproviderform from './forms/Telcoproviderform';
import Palatnumberform from './forms/Palatnumberform';
import Dialerlink from './Dialerlink';
import Myjquery from './Myjquery';



// import EditServerDetailsform   from "./components/EditFormss/EditServerDetailsform"
import EditProvidersform from './EditForms/EditProvidersform';
import EditCustomersform from './EditForms/EditCustomersform';
import EditServicesform from './EditForms/EditServicesform';
import EditTelcoproviderform from './EditForms/EditTelcoproviderform';
import EditPalatnumberform from './EditForms/EditPalatnumberform';
import EditDidform from './EditForms/EditDidform';
import Models from './Models';




import Serverdetails from './components/tables/Serverdetails';
import Providers from './components/tables/Providers';
import Customers from './components/tables/Customers';
import Did from './components/tables/Did';
import Services from './components/tables/Services';
import Telcoprovider from './components/tables/Telcoprovider';
import Palatnumber from './components/tables/Palatnumber';



import ServerForm from './components/FORMS/ServerForm';



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
        <Route path='*' element={<Navigate to='/ServerDetails' />} />
        </Routes>
        </>
      )
    }else{
      routes=(
        <Routes>       
        <Route path="/login" element={<LoginForm/>}/>
        <Route path='*' element={<Navigate to='/login' />} />
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
                
                {/* <MyNavbar/>
        <Routes>
        <Route path="/ServerDetails" element={<Serverdetails/>}/>
        <Route path="/ProvidersDetails" element={<Providers/>}/>
        <Route path="/CustomerDetails" element={<Customers/>}/>
        <Route path="/didDetails" element={<Did/>}/>
        <Route path="/ServicesDetails" element={<Services/>}/>
        <Route path="/telcoProviderDetails" element={<Telcoprovider/>}/>
        <Route path="/PalatNumberDetails" element={<Palatnumber/>}/>
        <Route path='*' element={<Navigate to='/ServerDetails' />} />
       
                <Route path="/ServerDetail" element={<Serverdetailsform/>}/>
                <Route path="/ProvidersDetail" element={<Providersform/>}/>
                <Route path="/CustomerDetail" element={<Customersform/>}/>
                <Route path="/didDetail" element={<Didform/>}/>
                <Route path="/ServicesDetail" element={<Servicesform/>}/>
                <Route path="/telcoProviderDetail" element={<Telcoproviderform/>}/>
                <Route path="/PalatNumberDetail" element={<Palatnumberform/>}/>
                <Route path="/dialerlink" element={<Dialerlink/>}/>
                 */}
                
                {/* <Route path="/serverdEdit/:id" element={<EditServerDetailsform/>}/> */}
                {/* <Route path="/Serverdetails" element={<ServerForm/>}/>
      
                <Route path="/providerdEdit/:id" element={<EditProvidersform/>}/>
                <Route path="/customerdEdit/:id" element={<EditCustomersform/>}/>
                <Route path="/diddEdit/:id" element={<EditDidform/>}/>
                <Route path="/servicesdEdit/:id" element={<EditServicesform/>}/>
                <Route path="/telecoproviderdEdit/:id" element={<EditTelcoproviderform/>}/>
                <Route path="/palatnumberdEdit/:id" element={<EditPalatnumberform/>}/>
                
                </Routes> */}
              
            </Router>
      
            </AuthContext.Provider> 
        );

  }
 
}

    

export default App;







