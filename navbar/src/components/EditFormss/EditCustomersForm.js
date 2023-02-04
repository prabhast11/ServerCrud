import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Modal, Button } from "react-bootstrap";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { Link } from "react-router-dom";
import { updateCustomerData } from "../../services/EditApidataadd";

class EditCustomersForm extends Component {
  state = {
    toggle: false,
    id: this.props.id,
    Prompt: false,
    updatedDetails: {
      Name: this.props.Name,
      License: this.props.License,
      ChannelPartner: this.props.ChannelPartner,
      DidCount: this.props.DidCount,
      CpassInfo: this.props.CpassInfo,
      AccountManager: this.props.AccountManager,
    },
  };

  toggleModal = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  handleSubmit = async (e) => {
    if (
      this.state.updatedDetails.Name === "" ||
      this.state.updatedDetails.License === "" ||
      this.state.updatedDetails.ChannelPartner === "" ||
      this.state.updatedDetails.DidCount === "" ||
      this.state.updatedDetails.CpassInfo === "" ||
      this.state.updatedDetails.AccountManager === ""
    ) {
      this.setState({ Prompt: true });
      console.log("prompt variable11111", this.state.Prompt);
    } else {
      e.preventDefault();
      await updateCustomerData(this.state.updatedDetails, this.state.id);
      window.location.href = "/CustomerDetails";
    }
  };

  handleChange = (e) => {
    this.setState({ updatedDetails: { [e.target.name]: e.target.value } });
  };
  render() {
    return (
      <div>
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
                    value={this.props.arr[this.props.index].Name}
                    onChange={(e) => {
                      this.props.func(this.props.arr, this.props.index, e);
                    }}
                    aria-label="First name"
                  />
                  {this.state.Prompt &&
                    this.state.updatedDetails.Name === "" && (
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
                    value={this.props.arr[this.props.index].License}
                    onChange={(e) => {
                      this.props.func(this.props.arr, this.props.index, e);
                    }}
                    required
                    type="text"
                    class=" "
                    aria-label="First name"
                  />
                  {this.state.Prompt &&
                    this.state.updatedDetails.License === "" && (
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
                    value={this.props.arr[this.props.index].ChannelPartner}
                    placeholder="Channel Partner"
                    name="ChannelPartner"
                    onChange={(e) => {
                      this.props.func(this.props.arr, this.props.index, e);
                    }}
                    required
                    type="text"
                    class=" "
                    aria-label="Last name"
                  />
                  {this.state.Prompt &&
                    this.state.updatedDetails.ChannelPartner === "" && (
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
                    value={this.props.arr[this.props.index].CpassInfo}
                    placeholder="CPASS Info"
                    name="CpassInfo"
                    onChange={(e) => {
                      this.props.func(this.props.arr, this.props.index, e);
                    }}
                    required
                    type="text"
                    class=" "
                    aria-label="First name"
                  />
                  {this.state.Prompt &&
                    this.state.updatedDetails.CpassInfo === "" && (
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
                    value={this.props.arr[this.props.index].DidCount}
                    placeholder="DID Count"
                    name="DidCount"
                    onChange={(e) => {
                      this.props.func(this.props.arr, this.props.index, e);
                    }}
                    required
                    type="number"
                    class=" "
                    aria-label="Last name"
                  />
                  {this.state.Prompt &&
                    this.state.updatedDetails.DidCount === "" && (
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
                    value={this.props.arr[this.props.index].AccountManager}
                    onChange={(e) => {
                      this.props.func(this.props.arr, this.props.index, e);
                    }}
                    required
                    type="text"
                    class=" "
                    aria-label="First name"
                  />
                  {this.state.Prompt &&
                    this.state.updatedDetails.AccountManager === "" && (
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

export default EditCustomersForm;
