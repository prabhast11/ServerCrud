import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Modal} from "react-bootstrap";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import moment from "moment";
import { updateProviderData } from "../../services/EditApidataadd";
import { timers } from "jquery";
import Button from '@mui/material/Button';


class EditProvidersForm extends Component {
  state = {
    toggle: false,
    id: this.props.id,
    Prompt: false,
  };

  toggleModal = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  handleChange = (e) => {
    this.setState({
      updatedDetails: {
        ...this.state.updatedDetails,
        [e.target.name]: e.target.value,
      },
    });
  };


  render() {
    return (
      <div>
        <p onClick={this.toggleModal} btn bg-transparent>
          {" "}
          <DriveFileRenameOutlineIcon
            style={{ color: "blueviolet", cursor: "pointer" }}
            onClick={() => {
              this.props.func();
              this.props.func1(this.props.pno);
            }}
          />
        </p>
        <Modal show={this.state.toggle} size="lg" onHide={this.toggleModal}>
          <Modal.Header closeButton onClick={this.toggleModal}>
            <Modal.Title>Update Details</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
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
                    aria-label="First name"
                    onChange={(e) => {
                      this.props.func(this.props.arr, this.props.index, e);
                    }}
                    value={this.props.arr[this.props.index].Name}
                  />
                  {this.state.Prompt && this.props.Name === "" && (
                    <span style={{ color: "red", fontSize: "14px" }}>
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
                    onChange={(e) => {
                      this.props.func(this.props.arr, this.props.index, e);
                    }}
                    value={this.props.arr[this.props.index].Initial}
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
                  {this.state.Prompt &&
                    this.state.updatedDetails.Initial === "" && (
                      <span style={{ color: "red", fontSize: "14px" }}>
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
                    required
                    type="text"
                    class=" "
                    aria-label="First name"
                    onChange={(e) => {
                      this.props.func(this.props.arr, this.props.index, e);
                    }}
                    value={this.props.arr[this.props.index].Location}
                  />
                  {this.state.Prompt &&
                    this.state.updatedDetails.Location === "" && (
                      <span style={{ color: "red", fontSize: "14px" }}>
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
                    required
                    type="date"
                    class="form-control"
                    aria-label="Last name"
                    onChange={(e) => {
                      this.props.func(this.props.arr, this.props.index, e);
                    }}
                    value={moment(this.props.arr[this.props.index].CurrentDate).utc().format('yyyy-MM-DD')  }
                  />
                  {this.state.Prompt &&
                    this.state.updatedDetails.CurrentDate === "" && (
                      <span style={{ color: "red", fontSize: "14px" }}>
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
                    required
                    type="date"
                    class=" "
                    aria-label="First name"
                    onChange={(e) => {
                      this.props.func(this.props.arr, this.props.index, e);
                    }}
                    value={moment(this.props.arr[this.props.index].UpdateDate).utc().format('yyyy-MM-DD')  }
                  />
                  {this.state.Prompt &&
                    this.state.updatedDetails.UpdateDate === "" && (
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
                    required
                    type="text"
                    class=" "
                    aria-label="Last name"
                    onChange={(e) => {
                      this.props.func(this.props.arr, this.props.index, e);
                    }}
                    value={this.props.arr[this.props.index].AccountManager}
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
                    Technical Contact Manager
                  </Form.Label>
                  <Form.Control
                    style={{ width: "49%" }}
                    placeholder="Technical Contact Manager"
                    name="TechnicalContactManager"
                    required
                    type="text"
                    class=" "
                    aria-label="First name"
                    onChange={(e) => {
                      this.props.func(this.props.arr, this.props.index, e);
                    }}
                    value={
                      this.props.arr[this.props.index].TechnicalContactManager
                    }
                  />
                  {this.state.Prompt &&
                    this.state.updatedDetails.TechnicalContactManager ===
                      "" && (
                      <span style={{ color: "red", fontSize: "14px" }}>
                        Above field is mandatory
                      </span>
                    )}
                </div>
              </div>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          <Button
                    variant="contained" size="small"
                      onClick={(e) => { this.props.func1(this.props.index,e) } }
                      style={{
                        background: "green",
                        margin : "10px"
                      }}
                    >
                      Save
                    </Button>

                    <Button
                    variant="contained" size="small"
                    onClick={this.toggleModal}

                      data-bs-dismiss="modal"
                      style={{
                        background: "red",
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

export default EditProvidersForm;
