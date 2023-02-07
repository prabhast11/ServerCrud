import React, { Component } from "react";
import {  Form, Modal } from "react-bootstrap";
import { AddtelcoProviderDetails } from "../../services/addApi";
import Multiselect from 'multiselect-react-dropdown';
import { AuthContext } from '../context/Auth-Context'
import Button from '@mui/material/Button';



class TelcoProvidersForm extends Component {
  static contextType=AuthContext;


  constructor() {
    super();
    this.state = {
      Name: "",
      IP: "",
      Port: "",
      User: "",
      Password: "",
      MediaIP: [],
      SBCIPAndPort: "",
      GatewayIP: "",
      Domain: "",
      AccountManager: "",
      TechnicalManager: "",
      escalation_matrix_name: "",
      escalation_matrix_email: "",
      escalation_matrix_phoneno: "",
      Prompt: false,
    };

    this.handleChange2 = this.handleChange2.bind(this);
  }

  handleChange2(selectedItem) {
    this.setState({ MediaIP: selectedItem });
   
   
    }
  
  handleChange1 = (e) => {
    this.setState({
      mytestdata: Array.isArray(e) ? e.map((x) => x.value) : [],
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    if (
      this.state.Name === "" ||
      this.state.IP === "" ||
      this.state.Port === "" ||
      this.state.User === "" ||
      this.state.Password === "" ||
      this.state.MediaIP.length === 0 ||
      this.state.SBCIPAndPort === "" ||
      this.state.GatewayIP === "" ||
      this.state.Domain === "" ||
      this.state.AccountManager === "" ||
      this.state.TechnicalManager === "" ||
      this.state.escalation_matrix_name === "" ||
      this.state.escalation_matrix_email === "" ||
      this.state.escalation_matrix_phoneno === ""
    ) {
      this.setState({ Prompt: true });
      console.log("prompt variable11111", this.state.Prompt);
    } else {
      e.preventDefault();

      const  token=this.context.token

      await AddtelcoProviderDetails(this.state, token);
      console.log(this.state);
      window.location.href = "/telcoProviderDetails";
    }
  };

  render() {
    var media_ip = [
      "Media1",
    "Media2",
    "Media3",
    "Media4"
]

    return (
      <div className="App">
        <div class="container p-2">
        <Button
          variant="contained" size="small"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ background: "#673FBD" }}
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
                  <buttonasd
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></buttonasd>
                </div>
                <div class="modal-body">
                  <Form _lpchecked="1" onSubmit={this.handleSubmit}>
                    <div class="form-group">
                      <div class="row">
                        <div class="col">
                          <Form.Label
                            for="exampleInputEmail1"
                            class="form-label"
                          >
                            Name
                          </Form.Label>
                          <input
                            required
                            type="text"
                            class="form-control"
                            id="name"
                            placeholder="Name"
                            name="Name"
                            onChange={this.handleChange}
                            style={{margin : "0px"}}
                          />
                          {this.state.Prompt && this.state.Name === "" && (
                            <span style={{ color: "red" , fontSize: "14px"}}>
                              Above field is mandatory
                            </span>
                          )}
                        </div>

                        <div class="col">
                          <Form.Label
                            for="exampleInputEmail1"
                            class="form-label"
                          >
                            IP
                          </Form.Label>
                          <input
                            required
                            type="type"
                            class="form-control"
                            placeholder="IP"
                            name="IP"
                            onChange={this.handleChange}
                            style={{margin : "0px"}}
                          />
                          {this.state.Prompt && this.state.IP === "" && (
                            <span style={{ color: "red" , fontSize: "14px"}}>
                              Above field is mandatory
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="row">
                        <div class="col">
                          <Form.Label
                            for="exampleInputEmail1"
                            class="form-label"
                          >
                            Port
                          </Form.Label>
                          <input
                            required
                            type="number"
                            class="form-control"
                            placeholder="Port"
                            name="Port"
                            onChange={this.handleChange}
                            style={{margin : "0px"}}
                          />
                          {this.state.Prompt && this.state.Port === "" && (
                            <span style={{ color: "red", fontSize: "14px" }}>
                              Above field is mandatory
                            </span>
                          )}
                        </div>

                        <div class="col">
                          <Form.Label
                            for="exampleInputEmail1"
                            class="form-label"
                          >
                            Username
                          </Form.Label>
                          <input
                            required
                            type="text"
                            class="form-control"
                            placeholder="Username"
                            name="User"
                            onChange={this.handleChange}
                            style={{margin : "0px"}}
                          />
                          {this.state.Prompt && this.state.User === "" && (
                            <span style={{ color: "red" , fontSize: "14px"}}>
                              Above field is mandatory
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          password
                        </Form.Label>
                        <input
                          required
                          type="password"
                          class="form-control"
                          placeholder="password"
                          name="Password"
                          onChange={this.handleChange}
                          style={{margin : "0px"}}
                        />
                        {this.state.Prompt && this.state.Password === "" && (
                          <span style={{ color: "red", fontSize: "14px" }}>
                            Above field is mandatory
                          </span>
                        )}
                      </div>

                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          SBC IP and port
                        </Form.Label>
                        <input
                          required
                          type="number"
                          class="form-control"
                          placeholder="SBC IP and port"
                          name="SBCIPAndPort"
                          onChange={this.handleChange}
                          style={{margin : "0px"}}
                        />
                        {this.state.Prompt &&
                          this.state.SBCIPAndPort === "" && (
                            <span style={{ color: "red" , fontSize: "14px"}}>
                              Above field is mandatory
                            </span>
                          )}
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          Media IP
                        </Form.Label>
                        <Multiselect
                          isObject={false}
                        options={media_ip}
                      onSelect={this.handleChange2}
                  />
                  {this.state.Prompt && this.state.MediaIP.length === 0 && (
                            <span style={{ color: "red" , fontSize: "14px"}}>
                              Above field is mandatory
                            </span>
                          )}
                      </div>
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          Gateway IP and port
                        </Form.Label>
                        <input
                          required
                          type="text"
                          class="form-control"
                          placeholder="Gateway IP and port"
                          name="GatewayIP"
                          onChange={this.handleChange}
                          style={{margin : "0px"}}
                        />
                        {this.state.Prompt && this.state.GatewayIP === "" && (
                          <span style={{ color: "red", fontSize: "14px" }}>
                            Above field is mandatory
                          </span>
                        )}
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          Domain
                        </Form.Label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Domain"
                          name="Domain"
                          onChange={this.handleChange}
                          style={{margin : "0px"}}
                        />
                        {this.state.Prompt && this.state.Domain === "" && (
                            <span style={{ color: "red" , fontSize: "14px"}}>
                              Above field is mandatory
                            </span>
                          )}
                      </div>
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          Account Manager
                        </Form.Label>
                        <input
                          required
                          type="text"
                          class="form-control"
                          placeholder="Account Manager"
                          name="AccountManager"
                          onChange={this.handleChange}
                          style={{margin : "0px"}}
                        />
                        {this.state.Prompt &&
                          this.state.AccountManager === "" && (
                            <span style={{ color: "red", fontSize: "14px" }}>
                              Above field is mandatory
                            </span>
                          )}
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          Technical Manager
                        </Form.Label>
                        <input
                          required
                          type="text"
                          class="form-control"
                          placeholder="Technical Manager"
                          name="TechnicalManager"
                          onChange={this.handleChange}
                          style={{margin : "0px"}}
                        />
                        {this.state.Prompt &&
                          this.state.TechnicalManager === "" && (
                            <span style={{ color: "red" , fontSize: "14px"}}>
                              Above field is mandatory
                            </span>
                          )}
                      </div>
                      <div class="col">
                        <label>Escalation Matrix</label>
                        <br></br>
                        <Form.Control
                          required
                          style={{ paddingTop: "0px", marginBottom: "0px", margin : "0px" }}
                          type="text"
                          class=""
                          placeholder="Name"
                          name="escalation_matrix_name"
                          onChange={this.handleChange}
                          // style={{margin : "0px"}}
                        />
                        {this.state.Prompt &&
                          this.state.escalation_matrix_name === "" && (
                            <span style={{ color: "red", fontSize: "14px" }}>
                              Above field is mandatory
                            </span>
                          )}

                        <Form.Control
                          style={{ paddingTop: "0px", marginBottom: "0px" }}
                          required
                          type="email"
                          class=""
                          placeholder="Email"
                          name="escalation_matrix_email"
                          onChange={this.handleChange}
                        />
                        {this.state.Prompt &&
                          this.state.escalation_matrix_email === "" && (
                            <span style={{ color: "red", fontSize: "14px" }}>
                              Above field is mandatory
                            </span>
                          )}

                        <Form.Control
                          style={{ paddingTop: "0px" }}
                          required
                          type="number"
                          class=""
                          placeholder="Phone no"
                          name="escalation_matrix_phoneno"
                          onChange={this.handleChange}
                        />
                        {this.state.Prompt &&
                          this.state.escalation_matrix_phoneno === "" && (
                            <span style={{ color: "red", fontSize: "14px" }}>
                              Above field is mandatory
                            </span>
                          )}
                      </div>
                    </div>
                  </Form>
                  <br></br>
                  <Modal.Footer>
                    

                  <Button
                    variant="contained" size="small"
                      onClick={this.handleSubmit}
                      style={{
                        background: "green",
                        margin : "10px"
                      }}
                    >
                      Save
                    </Button>
                    <Button
                    variant="contained" size="small"
                      data-bs-dismiss="modal"
                      style={{
                        background: "red",
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

export default TelcoProvidersForm;
