import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './MyNavbar.css'
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
class MyNavbar extends Component {

    
  render() {
    return (
      <div>
        <div class="">
    <nav class="navbar navbar-expand-sm navbar-dark bg-secondary">
        <div class="container-fluid">
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-
              target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarCollapse" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    
                    <li class="nav-item hover-box">
                        <Link to="/ServerDetails" class="nav-link"
                        style={{color : "white"}}
                        >Server Details</Link>
                    </li>
                    <li class="nav-item hover-box">
                        <Link to="/ProvidersDetails" class="nav-link"
                        style={{color : "white"}}
                        >Providers</Link>
                    </li>
                    <li class="nav-item hover-box">
                        <Link to="/CustomerDetails" class="nav-link"
                        style={{color : "white"}}
                        >Customers</Link>
                    </li>
                    <li class="nav-item hover-box">
                        <Link to="/didDetails" class="nav-link hover-box"
                        style={{color : "white"}}
                        >DID</Link>
                    </li>
                    <li class="nav-item hover-box">
                        <Link to="/ServicesDetails" class="nav-link"
                        style={{color : "white"}}
                        >Services</Link>
                    </li>
                    <li class="nav-item hover-box">
                        <Link to="/telcoProviderDetails" class="nav-link"
                        style={{color : "white"}}
                        >Telco Providers</Link>
                    </li>
                    <li class="nav-item hover-box">
                        <Link to="/PalatNumberDetails" class="nav-link"
                        style={{color : "white"}}
                        >Palat Number</Link>
                    </li>
                  
                </ul>
                    <div  onClick={this.props.logout} style={{marginLeft:"45%",display:"flex",cursor:"pointer",paddingTop:"10px"}}>
                    <LogoutTwoToneIcon/>
                    <p  style={{fontSize:"1.1rem", fontWeight:"200",color:"white"}} class=" btn-danger">Logout</p>

                    </div>
                
                {/* <ul class="nav navbar-nav ms-auto">
                    <li class="nav-item dropdown">
                        <Link to="/hello" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Admin</Link>
                        <div class="dropdown-menu dropdown-menu-end">
                            <Link to="/hello" class="dropdown-item">Reports</Link>
                            <a href="#" class="dropdown-item">Settings</a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">Logout</a>
                        </div>
                    </li>
                </ul> */}
            </div>
        </div>
    </nav>    
</div>

      </div>
    )
  }
}

export default MyNavbar