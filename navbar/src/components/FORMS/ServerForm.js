import React, { Component } from "react";
import { Button, Form, Modal, Col, Ro } from "react-bootstrap";

import { AddServerDetails } from "../../services/addApi";
import { AuthContext } from '../context/Auth-Context'

class ServerDetailsModel extends Component {

  static contextType=AuthContext;
  constructor() {
    super();
    this.state = {
      ipAddresses: "",
      error: "",
      prompt: false,
      ipPrompt: false,
      ipPrompt1 : false,
      providers: "",
      type: "",
      Interfaces: "",
      Ram: "",
      Core: "",
      Hdd: "",
      ServerType: "",
      data: {},
      currentPage: 1,
      toggle:false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    if (
      this.state.ipAddresses === "" ||
      this.state.providers === "" ||
      this.state.type === "" ||
      this.state.Interfaces === "" ||
      this.state.Ram === "" ||
      this.state.Core === "" ||
      this.state.Hdd === "" ||
      this.state.ServerType === ""
    ) {
      this.setState({ prompt: true });
      console.log("prompt variable11111", this.state.prompt);

    } else {
      const ipAddressRegex =
        /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
      if (ipAddressRegex.test(this.state.ipAddresses)) {
        
        console.log("Valid IP address");
        e.preventDefault();
        this.setState({ ipPrompt: false });

        const  token=this.context.token

        const response = await AddServerDetails(this.state, token);
        console.log("token in server form",token)
        this.setState({ data: response });
        window.location.href = "/ServerDetails";
      } 
    }
    const ipAddressRegex =
        /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
   if(this.state.ipAddresses === '') 
      {
        this.setState({ ipPrompt1: true });
        this.setState({ ipPrompt: false });
       } 
      else{
          if(!ipAddressRegex.test(this.state.ipAddresses))
            {
               this.setState({ ipAddresses: "" });
              this.setState({ ipPrompt: true });
              this.setState({ ipPrompt1: false });
            }
          }
  };



  render() {
    return (
      <div className="App">
        <div class="container p-2">
          <Button
            type="button"
            class=""
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ background: "blueviolet", borderRadius: "18px" }}
          >
            Add Details
          </Button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title " id="exampleModalLabel">
                    Add Details
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    // onClick={this.handleClose}
                    onClick={this.toggleModal}
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <Form onSubmit={this.handleSubmit}>
                    <div class="row">
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          IP Addresses
                        </Form.Label>
                        <input
                          class="form-control"
                          required
                          name="ipAddresses"
                          type="text"
                          placeholder="Ip Address"
                          onChange={this.handleChange}
                          aria-label="First name"
                          style={{ margin: "0px" }}
                        />
                        {this.state.ipPrompt1 && this.state.ipAddresses === "" && (
                          <span style={{ color: "red", fontSize: "14px" }}>
                            Above field is mandatory
                          </span>
                        )}
                        {this.state.ipPrompt && (
                          <span style={{ color: "red", fontSize: "14px" }}>
                            Above is not a valid IP Address
                          </span>
                        )}
                      </div>

                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          Providers
                        </Form.Label>
                        <Form.Select
                          required
                          name="providers"
                          class="form-select  "
                          onChange={this.handleChange}
                          style={{ margin: "0px" }}
                        >
                          <option disabled selected value="">
                            Providers
                          </option>
                          <option value="vodafone">vodafone</option>
                          <option value="Airtel">Airtel</option>
                        </Form.Select>
                        {this.state.prompt && this.state.providers === "" && (
                          <span style={{ color: "red", fontSize: "14px" }}>
                            Above field is mandatory
                          </span>
                        )}
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          Type
                        </Form.Label>
                        <Form.Control
                          name="type"
                          placeholder="Type"
                          onChange={this.handleChange}
                          required
                          type="text"
                          class=" "
                          aria-label="First name"
                          style={{ margin: "0px" }}
                        />
                        {this.state.prompt && this.state.type === "" && (
                          <span style={{ color: "red", fontSize: "14px" }}>
                            Above field is mandatory
                          </span>
                        )}
                      </div>
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          Interfaces
                        </Form.Label>
                        <Form.Control
                          placeholder="Interfaces"
                          name="Interfaces"
                          onChange={this.handleChange}
                          required
                          type="text"
                          class=" "
                          aria-label="Last name"
                          style={{ margin: "0px" }}
                        />
                        {this.state.prompt && this.state.Interfaces === "" && (
                          <span style={{ color: "red", fontSize: "14px" }}>
                            Above field is mandatory
                          </span>
                        )}
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          RAM
                        </Form.Label>
                        <Form.Control
                          placeholder="Ram"
                          name="Ram"
                          onChange={this.handleChange}
                          required
                          type="text"
                          class=" "
                          aria-label="First name"
                          style={{ margin: "0px" }}
                        />
                        {this.state.prompt && this.state.Ram === "" && (
                          <span style={{ color: "red", fontSize: "14px" }}>
                            Above field is mandatory
                          </span>
                        )}
                      </div>
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          CORE
                        </Form.Label>
                        <Form.Control
                          placeholder="Core"
                          name="Core"
                          onChange={this.handleChange}
                          required
                          type="text"
                          class=" "
                          aria-label="Last name"
                          style={{ margin: "0px" }}
                        />
                        {this.state.prompt && this.state.Core === "" && (
                          <span style={{ color: "red", fontSize: "14px" }}>
                            Above field is mandatory
                          </span>
                        )}
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          HDD
                        </Form.Label>
                        <Form.Control
                          placeholder="Hdd"
                          name="Hdd"
                          onChange={this.handleChange}
                          required
                          type="text"
                          class=" "
                          aria-label="First name"
                          style={{ margin: "0px" }}
                        />
                        {this.state.prompt && this.state.Hdd === "" && (
                          <span style={{ color: "red" , fontSize: "14px"}}>
                            Above field is mandatory
                          </span>
                        )}
                      </div>
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          Server Type
                        </Form.Label>
                        <Form.Control
                          placeholder="Server Type"
                          required
                          name="ServerType"
                          onChange={this.handleChange}
                          type="text"
                          class=" "
                          aria-label="Last name"
                          style={{ margin: "0px" }}
                        />
                        {this.state.prompt && this.state.ServerType === "" && (
                          <span style={{ color: "red" , fontSize: "14px"}}>
                            Above field is mandatory
                          </span>
                        )}
                      </div>
                    </div>
                  </Form>
                  <br></br>
                  <Modal.Footer>
                    <Button
                      type="submit"
                      class=""
                      onClick={this.handleSubmit}
                      style={{
                        background: "green",
                        borderRadius: "18px",
                        width: "75px",
                      }}
                    >
                      Save
                    </Button>

                    <Button
                      type="button"
                      class=""
                      data-bs-dismiss="modal"
                      // onClick={this.handleClose}
                      onClick={this.toggleModal}
                      style={{
                        background: "red",
                        borderRadius: "18px",
                        margin: "10px",
                        width: "75px",
                      }}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServerDetailsModel;
