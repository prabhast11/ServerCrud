import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./tempform.css";
import { AddCustomerDetails } from "../services/addApi";

// AddCustomerDetails
class EditCustomersform extends Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      License: "",
      ChannelPartner: "",
      DlinkAndDomain: "",
      CpassInfo: "",
      AccountManager:""
    };
   }

  // customersHandler = async (e) => {
  //   e.preventDefault();
  //   const obj = {
  //     Name: this.state.Name,
  //     License: this.state.License,
  //     ChannelPartner: this.state.ChannelPartner,
  //     cpass_info: this.state.cpass_info,
  //     DlinkAndDomain: this.state.DlinkAndDomain,
  //     CpassInfo: this.state.CpassInfo,
  //   };
  //   const result = await axios.post(
  //     "http://localhost:5000/customersHaandler",
  //     obj
  //   );
  //   console.log("customers submit result:", result);
  // };


  
handleChange=(e)=>{
  this.setState({[e.target.name]:e.target.value});

}



handleSubmit = async (e)=>{
  e.preventDefault()
 await AddCustomerDetails(this.state)
console.log(this.state)
window.location.href = "/CustomerDetails";
}

  render() {
    return (
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-5">
            <div class="card">
              <h2 class="card-title text-center">Add Customer Deatils</h2>
              <div class="card-body py-md-4">
                <form _lpchecked="1" onSubmit={this.handleSubmit}>
                  <div class="form-group">
                    <input
                    required
                      type="text"
                      class="form-control"
                      placeholder="Name"
                      name="Name"
                      onChange={this.handleChange}

                    />
                  </div>
                  <div class="form-group">
                    <input
                    required
                      class="form-control"
                      placeholder="License"
                      name="License"
                      onChange={this.handleChange}

                    />
                  </div>

                  <div class="form-group">
                    <input
                    required
                      type="text"
                      class="form-control"
                      placeholder="Channel Partner"
                      name="ChannelPartner"
                      onChange={this.handleChange}

                    />
                  </div>
                  <Link class="form-control" to="/dialerlink">
                    Dialer link and domain
                  </Link>
                  <div class="form-group">
                    <input
                    required
                      type="text"
                      class="form-control"
                      placeholder="CPASS Info"
                      name="CpassInfo"
                      onChange={this.handleChange}

                    />
                  </div>
                  <div class="form-group">
                    <input
                    required
                      type="number"
                      class="form-control"
                      placeholder="DID Count"
                      name="DlinkAndDomain"
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

export default EditCustomersform;
