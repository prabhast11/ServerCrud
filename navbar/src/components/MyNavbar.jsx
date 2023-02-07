import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './MyNavbar.css'
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
class MyNavbar extends Component {
    constructor(props){
        super(props)

        this.state = {
            clicked : 'serverdeatil'
        }
    }

    handleClick = async (value) =>{
      await  this.setState({clicked : value})
    }

    
  render() {
    return (
      <div>
        <div class="">
    <nav class="navbar navbar-expand-sm navbar-dark"
        style={{background : "#673FBD"}}
    >
        <div class="container-fluid">
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-
              target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarCollapse" class="collapse navbar-collapse">
                <div 
                    style={{width : "70%"}}
                >
                <ul class="nav navbar-nav">
                    
                    <li class="nav-item hover-box">
                        <Link to="/ServerDetails"
                         className={this.state.clicked === 'serverdetail' ? 'mylinkactive ': 'mylinknonactive'}
                        onClick={() =>{ this.handleClick('serverdetail')}}
                        
                        >Server Details</Link>
                    </li>
                    <li class="nav-item hover-box">
                        <Link to="/ProvidersDetails" 
                        className={this.state.clicked === 'providers' ? 'mylinkactive ': 'mylinknonactive'}
                        onClick={() =>{ this.handleClick('providers')}}
                        >Providers</Link>
                    </li>
                    <li class="nav-item hover-box">
                        <Link to="/CustomerDetails"
                         className={this.state.clicked === 'customers' ? 'mylinkactive ': 'mylinknonactive'}
                        onClick={() =>{ this.handleClick('customers')}}
                        >Customers</Link>
                    </li>
                    <li class="nav-item hover-box">
                        <Link to="/didDetails"
                        onClick={() =>{ this.handleClick('did')}}
                        className={this.state.clicked === 'did' ? 'mylinkactive ': 'mylinknonactive'}
                        >DID</Link>
                    </li>
                    <li class="nav-item hover-box">
                        <Link to="/ServicesDetails" 
                        onClick={() =>{ this.handleClick('services')}}
                        className={this.state.clicked === 'services' ? 'mylinkactive ': 'mylinknonactive'}
                        >Services</Link>
                    </li>
                    <li class="nav-item hover-box">
                        <Link to="/telcoProviderDetails" 
                        onClick={() =>{ this.handleClick('telcoprovider')}}
                        className={this.state.clicked === 'telcoprovider' ? 'mylinkactive ': 'mylinknonactive'}
                        >Telco Providers</Link>
                    </li>
                    <li class="nav-item hover-box">
                        <Link to="/PalatNumberDetails"
                        onClick={() =>{ this.handleClick('palatnumber')}}
                        className={this.state.clicked === 'palatnumber' ? 'mylinkactive ': 'mylinknonactive'}
                        >Palat Number</Link>
                    </li>
                  
                </ul>
                </div>
                    <div  onClick={this.props.logout} 
                    style={{display:"flex",cursor:"pointer",paddingTop:"10px", width : "30%",
                    flexDirection : "row-reverse"
                }}
                    >
                    <LogoutTwoToneIcon/>
                    <p  style={{fontSize:"1.1rem", fontWeight:"200",color:"white"}} class=" btn-danger">Logout</p>
                    </div>
                
                
            </div>
        </div>
    </nav>    
</div>

      </div>
    )
  }
}

export default MyNavbar