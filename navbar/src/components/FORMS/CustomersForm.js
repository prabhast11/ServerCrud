import React, { Component } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import { AddCustomerDetails } from "../../services/addApi";
import { Link } from "react-router-dom";
import { AuthContext } from '../context/Auth-Context'
class Customersform  extends Component {

  static contextType=AuthContext;

  constructor() {
    super();
    this.state = {
      Name: "",
      License: "",
      ChannelPartner: "",
      DidCount: "",
      CpassInfo: "",
      AccountManager: "",
      Prompt: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    if (
      this.state.Name === "" ||
      this.state.License === "" ||
      this.state.ChannelPartner === "" ||
      this.state.DidCount === "" ||
      this.state.CpassInfo === "" ||
      this.state.AccountManager === ""
    ) {
      this.setState({ Prompt: true });
      console.log("prompt variable11111", this.state.prompt);
    } else {
      e.preventDefault();

      const  token=this.context.token
          
      await AddCustomerDetails(this.state, token);
      window.location.href = "/CustomerDetails";
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
            AddDetails
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
                          <span style={{ color: "red", fontSize: "14px" }}>
                            Above field is mandatory
                          </span>
                        )}
                      </div>

                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          License
                        </Form.Label>
                        <Form.Control
                          name="License"
                          placeholder="License"
                          onChange={this.handleChange}
                          required
                          type="text"
                          class=" "
                          aria-label="First name"
                          style={{ margin: "0px" }}
                        />
                        {this.state.Prompt && this.state.License === "" && (
                          <span style={{ color: "red", fontSize: "14px" }}>
                            Above field is mandatory
                          </span>
                        )}
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          Channel Partner
                        </Form.Label>
                        <Form.Control
                          placeholder="Channel Partner"
                          name="ChannelPartner"
                          onChange={this.handleChange}
                          required
                          type="text"
                          class=" "
                          aria-label="Last name"
                          style={{ margin: "0px" }}
                        />
                        {this.state.Prompt &&
                          this.state.ChannelPartner === "" && (
                            <span style={{ color: "red", fontSize: "14px" }}>
                              Above field is mandatory
                            </span>
                          )}
                      </div>
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          CPASS Info
                        </Form.Label>
                        <Form.Control
                          placeholder="CPASS Info"
                          name="CpassInfo"
                          onChange={this.handleChange}
                          required
                          type="text"
                          class=" "
                          aria-label="First name"
                          style={{ margin: "0px" }}
                        />
                        {this.state.Prompt && this.state.CpassInfo === "" && (
                          <span style={{ color: "red", fontSize: "14px" }}>
                            Above field is mandatory
                          </span>
                        )}
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          DID Count
                        </Form.Label>
                        <Form.Control
                          placeholder="DID Count"
                          name="DidCount"
                          onChange={this.handleChange}
                          required
                          type="number"
                          class=" "
                          aria-label="Last name"
                          style={{ margin: "0px" }}
                        />
                        {this.state.Prompt && this.state.DidCount === "" && (
                          <span style={{ color: "red", fontSize: "14px" }}>
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
                          aria-label="First name"
                          style={{ margin: "0px" }}
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
                          Dialer link and domain
                        </Form.Label>
                        <Link
                          class="form-control row"
                          style={{ width: "50%" }}
                          to="/dialerlink"
                        >
                          Dialer link and domain
                        </Link>
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

export default Customersform ;
