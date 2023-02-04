import React, { Component } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import { AddProvidersDetails } from "../../services/addApi";
import { AuthContext } from '../context/Auth-Context'

class Providersform extends Component {

  static contextType=AuthContext;

  constructor() {
    super();
    this.state = {
      Name: "",
      Initial: "",
      Location: "",
      CurrentDate: "",
      UpdateDate: "",
      AccountManager: "",
      TechnicalContactManager: "",
      Prompt: false,
      toggle:false,
    };
  }

  toggleModal=()=>{
    this.setState({toggle:!this.state.toggle})
}

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };



  handleSubmit = async (e) => {
    if (
      this.state.Name === "" ||
      this.state.Initial === "" ||
      this.state.Location === "" ||
      this.state.CurrentDate === "" ||
      this.state.UpdateDate === "" ||
      this.state.AccountManager === "" ||
      this.state.TechnicalContactManager === ""
    ) {
      this.setState({ Prompt: true });
      console.log("prompt variable11111", this.state.Prompt);
    } else {
      e.preventDefault();
      const  token=this.context.token
      await AddProvidersDetails(this.state, token);
      window.location.href = "/ProvidersDetails";
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
                          Name
                        </Form.Label>
                        <Form.Control
                          required
                          name="Name"
                          type="text"
                          placeholder="Name"
                          onChange={this.handleChange}
                          aria-label="First name"
                          style={{ margin: "0px" }}
                        />
                        {this.state.Prompt && this.state.Name === "" && (
                          <span style={{ color: "red" , fontSize: "14px" }}>
                            Above field is mandatory
                          </span>
                        )}
                      </div>

                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          Initial
                        </Form.Label>
                        <Form.Select
                          required
                          name="Initial"
                          class="form-select  "
                          onChange={this.handleChange}
                          style={{ margin: "0px" }}
                        >
                          <option disabled selected value="">
                            Initials
                          </option>
                          <option value="Mr." required>
                            Mr.
                          </option>
                          <option value="Mrs.">Mrs.</option>
                          <option value="Ms.">Ms.</option>
                        </Form.Select>
                        {this.state.Prompt && this.state.Initial === "" && (
                          <span style={{ color: "red" , fontSize: "14px" }}>
                            Above field is mandatory
                          </span>
                        )}
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          Location
                        </Form.Label>
                        <Form.Control
                          name="Location"
                          placeholder="Location"
                          onChange={this.handleChange}
                          required
                          type="text"
                          class=" "
                          aria-label="First name"
                          style={{ margin: "0px" }}
                        />
                        {this.state.Prompt && this.state.Location === "" && (
                          <span style={{ color: "red" , fontSize: "14px" }}>
                            Above field is mandatory
                          </span>
                        )}
                      </div>
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          Current Date
                        </Form.Label>
                        <input
                          placeholder=" Current Date"
                          name="CurrentDate"
                          onChange={this.handleChange}
                          required
                          type="date"
                          class="form-control"
                          aria-label="Last name"
                          style={{ margin: "0px" }}
                        />
                        {this.state.Prompt && this.state.CurrentDate === "" && (
                          <span style={{ color: "red", fontSize: "14px"  }}>
                            Above field is mandatory
                          </span>
                        )}
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          Update Date
                        </Form.Label>
                        <Form.Control
                          placeholder="Update Date"
                          name="UpdateDate"
                          onChange={this.handleChange}
                          required
                          type="date"
                          class=" "
                          aria-label="First name"
                          style={{ margin: "0px" }}
                        />
                        {this.state.Prompt && this.state.UpdateDate === "" && (
                          <span style={{ color: "red" , fontSize: "14px" }}>
                            Above field is mandatory
                          </span>
                        )}
                      </div>
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          Account Manager
                        </Form.Label>
                        <Form.Control
                          placeholder="Account Manager"
                          name="AccountManager"
                          onChange={this.handleChange}
                          required
                          type="text"
                          class=" "
                          aria-label="Last name"
                          style={{ margin: "0px" }}
                        />
                        {this.state.Prompt &&
                          this.state.AccountManager === "" && (
                            <span style={{ color: "red", fontSize: "14px"  }}>
                              Above field is mandatory
                            </span>
                          )}
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          Technical Contact Manager
                        </Form.Label>
                        <Form.Control
                          style={{ width: "49%", margin: "0px" }}
                          placeholder="Technical Contact Manager"
                          name="TechnicalContactManager"
                          onChange={this.handleChange}
                          required
                          type="text"
                          class=" "
                          aria-label="First name"
                        />
                        {this.state.Prompt &&
                          this.state.TechnicalContactManager === "" && (
                            <span style={{ color: "red", fontSize: "14px"  }}>
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
                      style={{
                        background: "red",
                        borderRadius: "18px",
                        margin: "10px",
                        width: "75px",
                      }}
                      // onClick={this.handleClose}
                      onClick={this.toggleModal}
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

export default Providersform;
