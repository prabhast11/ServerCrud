import React, { Component } from "react";
import "./tempform.css";

import { AddServerDetails} from "../services/addApi"



class Serverdetailsform extends Component {
constructor()
{
  super()
  this.state={
    ipAddresses : '',
    providers : '',
    type : '',
    Interfaces : '',
    Ram : '',
    Core : '',
    Hdd : '',
    ServerType : '',
    data:{}
     }
}

handleChange=(e)=>{
  this.setState({[e.target.name]:e.target.value});

}



handleSubmit = async (e)=>{
  e.preventDefault()
 const response=await AddServerDetails(this.state)
    this.setState({data:response})
 window.location.href = "/ServerDetails";
}

// serverDetailsHandler =  async (e) =>{
//   e.preventDefault()
//   const obj = {  
//                 ip_address : this.state.ip_address,
//                 providers : this.state.providers,
//                 type : this.state.type,
//                 interfaces : this.state.interfaces,
//                 ram : this.state.ram,
//                 core : this.state.core,
//                 hdd : this.state.hdd,
//                 server_type : this.state.server_type,
//                 media_ip : this.state.media_ip           
//               }
//   const result1 =  await axios.post('http://localhost:5000/serverdetailhandler',obj)
//   console.log('serverDetails Handler')
// }
 
  render() {
    return (
      <div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-5">
              <div class="card">
                <h2 class="card-title text-center">Add Server Deatils</h2>
                <div class="card-body py-md-4">
                  <form _lpchecked="1" onSubmit={this.handleSubmit}  >
                    <div class="form-group">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="IP Addresses"
                        name="ipAddresses"
                        onChange={this.handleChange}
                        // onChange={(e) => {
                        //   this.setState({ip_address: e.target.value}) }}
                       
                      />
                    </div>

                    <div class="form-group">
                      <select
                      required
                      name="providers"
                        class="form-select form-control"
                        onChange={this.handleChange}
                      //  onChange={(e) => {this.setState({providers : e.target.value}) }}
                     >
                        <option disabled selected value="">Providers</option>
                        <option value="Airtel" >Airtel</option>
                        <option value="Vodafone">Vodafone</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <input
                      required
                        type="text"
                        class="form-control"
                        placeholder="Type"
                        name="type"
                        onChange={this.handleChange}
                        // onChange={(e) => {this.setState({type : e.target.value}) }}

                      />
                    </div>
                    <div class="form-group">
                      <input
                      required
                        type="text"
                        class="form-control"
                        placeholder="Interfaces"
                        name="Interfaces"
                        onChange={this.handleChange}
                        // onChange={(e) => {this.setState({interfaces : e.target.value}) }}

                      />
                    </div>

                    <div class="form-group">
                      <input
                      required
                        type="text"
                        class="form-control"
                        placeholder="RAM"
                        name="Ram"
                        onChange={this.handleChange}
                        // onChange={(e) => {this.setState({ram : e.target.value}) }}

                      />
                    </div>
                    <div class="form-group">
                      <input
                      required
                        type="text"
                        class="form-control"
                        placeholder="CORE"
                        name="Core"
                        onChange={this.handleChange}
                        // onChange={(e) => {this.setState({core : e.target.value}) }}

                      />
                    </div>
                    <div class="form-group">
                      <input
                      required
                        type="text"
                        class="form-control"
                        placeholder="HDD"
                        name="Hdd"
                        onChange={this.handleChange}
                        // onChange={(e) => {this.setState({hdd : e.target.value}) }}

                      />
                    </div>
                    <div class="form-group">
                      <input
                      required
                        type="text"
                        class="form-control"
                        placeholder="Server Type"
                        name="ServerType"
                        onChange={this.handleChange}
                        // onChange={(e) => {this.setState({server_type : e.target.value}) }}

                      />
                    </div>

                    <div class="d-flex flex-row align-items-center justify-content-between">
                      <button  type="submit" class="btn btn-primary">Confirm</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Serverdetailsform;
