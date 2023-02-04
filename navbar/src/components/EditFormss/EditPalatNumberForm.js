import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Modal, Button } from "react-bootstrap";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { updatePalatNumberData } from "../../services/EditApidataadd";

class EditPalatNumberForm extends Component {
  state = {
    toggle: false,
    id: this.props.id,
    updatedDetails: {
      did_number: this.props.did_number,
      channel: this.props.channel,
    },
    Prompt: false,
  };

  toggleModal = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  handleChange = (e) => {
    this.setState({ updatedDetails: { [e.target.name]: e.target.value } });
  };

  toggleRadio = () => {
    return (e) => this.setState({ used: e.currentTarget.value });
  };
  render() {
    return (
      <div>
        {console.log(this.props.used)}
        <p onClick={this.toggleModal} btn bg-transparent>
          {" "}
          <DriveFileRenameOutlineIcon
            style={{ color: "blueviolet", cursor: "pointer" }}
          />
        </p>
        <Modal show={this.state.toggle} size="lg" onHide={this.toggleModal}>
          <Modal.Header closeButton onClick={this.toggleModal}>
            <Modal.Title>Update Details</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form _lpchecked="1">
              <div class="form-group">
                <Form.Label for="exampleInputEmail1" class="form-label">
                  DID Number
                </Form.Label>
                <input
                  defaultValue={this.props.arr[this.props.index].did_number}
                  required
                  type="number"
                  class="form-control"
                  placeholder="DID Number"
                  name="did_number"
                  onChange={(e) => {
                    this.props.func(this.props.arr, this.props.index, e);
                  }}
                />
                {this.state.Prompt &&
                  this.state.updatedDetails.did_number === "" && (
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
                  value={this.props.arr[this.props.index].channel}
                  required
                  type="number"
                  class="form-control"
                  placeholder="Channels"
                  name="channel"
                  onChange={(e) => {
                    this.props.func(this.props.arr, this.props.index, e);
                  }}
                />
                {this.state.Prompt &&
                  this.state.updatedDetails.channel === "" && (
                    <span style={{ color: "red" }}>
                      Above field is mandatory
                    </span>
                  )}
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={(e) => {
                this.props.func1(this.props.index, e);
              }}
              type="submit"
              class=""
              style={{
                background: "green",
                borderRadius: "18px",
                width: "75px",
              }}
            >
              Save
            </Button>

            <Button
              onClick={this.toggleModal}
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
        </Modal>
      </div>
    );
  }
}

export default EditPalatNumberForm;
