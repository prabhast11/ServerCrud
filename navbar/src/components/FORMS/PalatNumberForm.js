import React, { Component } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { AddPalatNumberDetails } from "../../services/addApi";
import { AuthContext } from '../context/Auth-Context'

class PalatNumberForm extends Component {

  static contextType=AuthContext;

  constructor() {
    super();
    this.state = {
      did_number: "",
      channel: "",
      Prompt: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    console.log("inside handle submit");
    if (this.state.did_number === "" || this.state.channel === "") {
      this.setState({ Prompt: true });
      console.log("prompt variable11111", this.state.Prompt);
    } else {
      e.preventDefault();
      const  token=this.context.token

      await AddPalatNumberDetails(this.state, token);
      console.log(this.state);
      window.location.href = "/PalatNumberDetails";
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
                        DID Number
                      </Form.Label>
                      <input
                        required
                        type="number"
                        class="form-control"
                        placeholder="DID Number"
                        name="did_number"
                        onChange={this.handleChange}
                        style={{ margin: "0px" }}
                      />
                      {this.state.Prompt && this.state.did_number === "" && (
                        <span style={{ color: "red" }}>
                          Above field is mandatory
                        </span>
                      )}
                    </div>
                    <div class="form-group">
                      <Form.Label for="exampleInputEmail1" class="form-label">
                        Channels
                      </Form.Label>
                      <input
                        required
                        type="number"
                        class="form-control"
                        placeholder="Channels"
                        name="channel"
                        onChange={this.handleChange}
                        style={{ margin: "0px" }}
                      />
                      {this.state.Prompt && this.state.channel === "" && (
                        <span style={{ color: "red" }}>
                          Above field is mandatory
                        </span>
                      )}
                    </div>
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

export default PalatNumberForm;
