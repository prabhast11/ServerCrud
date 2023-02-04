import React, { Component } from "react";
import "./tempform.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { AddtelcoProviderDetails } from "../services/addApi";


import Select from "react-select"

class Telcoproviderform extends Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      IP: "",
      Port: "",
      User: "",
      Password: "",
      MediaIP :'',
      SBCIPAndPort: "",
      GatewayIP: "",
      Domain: "",
      AccountManager: "",
      TechnicalManager: "",
      escalation_matrix_name: "",
      escalation_matrix_email: "",
      escalation_matrix_phoneno: "",
    };
  }

  // telcoProviderHandler = async (e) => {
  //   e.preventDefault();
  //   const obj = {
  //     name: this.state.name,
  //     ip: this.state.ip,
  //     port: this.state.port,
  //     user: this.state.user,
  //     password: this.state.password,
  //     media_ip: this.state.media_ip,
  //     sbc_ip_and_port: this.state.sbc_ip_and_port,
  //     gateway_ip: this.state.gateway_ip,
  //     domain: this.state.domain,
  //     account_manager: this.state.account_manager,
  //     technical_manager: this.state.technical_manager,
  //     escalation_matrix_name: this.state.escalation_matrix_name,
  //     escalation_matrix_email: this.state.escalation_matrix_email,
  //     escalation_matrix_phoneno: this.state.escalation_matrix_phoneno,
  //   };
  //   const result = await axios.post(
  //     "http://localhost:5000/telcoProviderHaandler",
  //     obj
  //   );
  //   console.log("Services submit result:", result);
  // };
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value,});
  
  }
  
  
  
  handleSubmit = async (e)=>{
    e.preventDefault()
   await  AddtelcoProviderDetails(this.state)
  console.log(this.state)
  window.location.href = "/telcoProviderDetails";
  }
  
  render() {
    var media_ip = [
      {
          value : "Media 1",
          label : "Media 1"
      },
      {
        value : "Media 2",
          label : "Media 2"

      },
      {
        value : "Media 3",
          label : "Media 3"

      }
    ]
﻿

    return (
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-5">
            <div class="card">
              <h2 class="card-title text-center">Add Deatils</h2>
              <div class="card-body py-md-4">
                <form _lpchecked="1" onSubmit={this.handleSubmit}>
                  <div class="form-group">
                    <input
                    required
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Name"
                      name="Name"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <input
                    required
                      type="type"
                      class="form-control"
                      placeholder="IP"
                      name="IP"
                      
                      onChange={this.handleChange}
                    />
                  </div>

                  <div class="form-group">
                    <input
                    required
                      type="number"
                      class="form-control"
                      placeholder="Port"
                      name="Port"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <input
                    required
                      type="text"
                      class="form-control"
                      placeholder="User"
                      name="User"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <input
                    required
                      type="password"
                      class="form-control"
                      placeholder="password"
                      name="Password"
                      onChange={this.handleChange}
                    />
                  </div>
                  {/* <div class="form-group">
                    <input
                    required
                      type="text"
                      class="form-control"
                      placeholder="Enter multiple ip seperated by comma"
                      name="MediaIP"
                      multiple
                      onChange={this.handleChange}
                    />
                  </div> */}
                  
                      <div class="form-group form-control ">
                        <label htmlFor="">Media IP : </label><br></br>

                  <Select isMulti options={media_ip}></Select>
                      </div>
                  <div class="form-group">
                    <input
                    required
                      type="number"
                      class="form-control"
                      placeholder="SBC IP and port"
                      name="SBCIPAndPort"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <input
                    required
                      type="text"
                      class="form-control"
                      placeholder="Gateway IP and port"
                      name="GatewayIP"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Domain"
                      name="Domain"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <input
                    required
                      type="text"
                      class="form-control"
                      placeholder="Account Manager"
                      name="AccountManager"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <input
                    required
                      type="text"
                      class="form-control"
                      placeholder="Technical Manager"
                      name="TechnicalManager"
                      onChange={this.handleChange}
                    />
                  </div>
                  {/* <div class="form-group">
                    <input
                    required
                      type="text"
                      class="form-control"
                      placeholder="Escalation matrix name"
                      name="escalation_matrix_name"
                      onChange={(e) => {
                        this.setState({
                          escalation_matrix_name:
                            e.target.escalation_matrix_name,
                        });
                      }}
                    />
                  </div>
                  <div class="form-group">
                    <input
                    required
                      type="text"
                      class="form-control"
                      placeholder="Escalation matric email"
                      name="escalation_matrix_email"
                      onChange={(e) => {
                        this.setState({
                          escalation_matrix_email:
                            e.target.escalation_matrix_email,
                        });
                      }}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Escalation matrix phone no"
                      name="escalation_matrix_phoneno"
                      onChange={(e) => {
                        this.setState({
                          escalation_matrix_phoneno:
                            e.target.escalation_matrix_phoneno,
                        });
                      }}
                    />
                  </div> */}
                  <div class="form-group form-control">
                  <div class="form-group">
                    <label>Escalation Matrix</label><br></br>
                    <input
                    required
                      type="text"
                      class=""
                      placeholder="Name"
                      name="escalation_matrix_name"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <label></label>
                    <input
                    required
                      type="text"
                      class=""
                      placeholder="Email"
                      name="escalation_matrix_email"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <input
                    required
                      type="text"
                      class=""
                      placeholder="Phone no"
                      name="escalation_matrix_phoneno"
                      onChange={this.handleChange}
                    />
                  </div>
                  </div>

                  {/* <input type="text" pattern="[a-zA-Z0-9,]+" multiple/> */}

                  <div class="d-flex flex-row align-items-center justify-content-between">
                    <button class="btn btn-primary" type="submit">
                      Confirm
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Telcoproviderform;
