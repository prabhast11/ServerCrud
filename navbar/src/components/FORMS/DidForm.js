import React, { Component } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import { AdddidDetails } from "../../services/addApi";
import { AuthContext } from '../context/Auth-Context'

class DidForm extends Component {

  static contextType=AuthContext;

  constructor() {
    super();
    this.state = {
      listing: "",
      used: "",
      Prompt: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    if (this.state.listing === "" || this.state.used === "") {
      this.setState({ Prompt: true });
      console.log("prompt variable11111", this.state.Prompt);
    } else {
      e.preventDefault();
      const  token=this.context.token
      await AdddidDetails(this.state, token);
      console.log(this.state);
      window.location.href = "/didDetails";
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
                  <form _lpchecked="1">
                    <div class="form-group">
                      <Form.Label for="exampleInputEmail1" class="form-label">
                        Listing
                      </Form.Label>
                      <input
                        required
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Listing"
                        name="listing"
                        onChange={this.handleChange}
                        style={{ margin: "0px" }}
                      />
                     
                      {this.state.Prompt && this.state.listing === "" && (
                        <span style={{ color: "red", fontSize: "14px"  }}>
                          Above field is mandatory
                        </span>
                      )}
                    </div>
                    Used :
                    <div
                      class="form-group form-control"
                      style={{ margin: "0px" }}
                    >
                      <input
                        type="radio"
                        id="yes"
                        name="used"
                        value="Yes"
                        required
                        onChange={this.handleChange}
                      />
                      <label for="yes">Yes</label>
                      <br />
                      <input
                        type="radio"
                        id="no"
                        name="used"
                        value="No"
                        onChange={this.handleChange}
                      />
                      <label for="no">No</label>
                      <br />
                    </div>
                      {this.state.Prompt && this.state.used === "" && (
                        <span style={{ color: "red", fontSize: "14px"  }}>
                          Above field is mandatory
                        </span>
                      )}
                  </form>
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

export default DidForm;
