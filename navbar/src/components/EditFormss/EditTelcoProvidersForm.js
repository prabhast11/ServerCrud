import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Modal, Button } from "react-bootstrap";

import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

import Select from "react-select";

//update details
import { updateTelcoProviderData } from "../../services/EditApidataadd";
import reactSelect from "react-select";
import Multiselect from 'multiselect-react-dropdown';


class EditTelcoProvidersForm extends Component {
  state = {
    toggle: false,
    id: this.props.id,
    updatedDetails: {
      Name: this.props.Name,
      IP: this.props.IP,
      Port: this.props.Port,
      User: this.props.User,
      Password: this.props.Password,
      MediaIP: this.props.MediaIP,
      SBCIPAndPort: this.props.SBCIPAndPort,
      GatewayIP: this.props.GatewayIP,
      Domain: this.props.Domain,
      AccountManager: this.props.AccountManager,
      TechnicalManager: this.props.TechnicalManager,
      escalation_matrix_name: this.props.escalation_matrix_name,
      escalation_matrix_email: this.props.escalation_matrix_email,
      escalation_matrix_phoneno: this.props.escalation_matrix_phoneno,
    },
    Prompt: false,
  };

  toggleModal = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  handleSubmit = async (e) => {
    if (
      this.state.updatedDetails.Name === "" ||
      this.state.updatedDetails.IP === "" ||
      this.state.updatedDetails.Port === "" ||
      this.state.updatedDetails.User === "" ||
      this.state.updatedDetails.Password === "" ||
      // this.state.MediaIP === "" ||
      this.state.updatedDetails.SBCIPAndPort === "" ||
      this.state.updatedDetails.GatewayIP === "" ||
      this.state.updatedDetails.AccountManager === "" ||
      this.state.updatedDetails.TechnicalManager === "" ||
      this.state.updatedDetails.escalation_matrix_name === "" ||
      this.state.updatedDetails.escalation_matrix_email === "" ||
      this.state.updatedDetails.escalation_matrix_phoneno === ""
    ) {
      this.setState({ Prompt: true });
      console.log("prompt variable11111", this.state.Prompt);
    } else {
      e.preventDefault();
      await updateTelcoProviderData(this.state.updatedDetails, this.state.id);
      window.location.href = "/telcoProviderDetails";
    }
  };

  handleCustomerName=(selectedList, selectedItem)=>{
    var updatedDetails={...this.state.updatedDetails}
    updatedDetails.MediaIP=selectedList
      // this.setState({updatedDetails:{...this.state.updatedDetails,firstCustomer:selectedItem}})
      this.setState({updatedDetails})
      
      this.props.func2(updatedDetails, this.props.index);

    console.log("selectedList",selectedList);
    console.log("SelectedItem",selectedItem)
  }

  handleRemove=(selectedList,removedItem)=>{
    var updatedDetails={...this.state.updatedDetails}
    updatedDetails.MediaIP=selectedList
      // this.setState({updatedDetails:{...this.state.updatedDetails,firstCustomer:selectedItem}})
      this.setState({updatedDetails})

      this.props.func2(updatedDetails, this.props.index);

    console.log("removed item",removedItem)
    console.log("removed item",selectedList)
  }

  handleChange = (e) => {
    this.setState({ updatedDetails: { [e.target.name]: e.target.value } });
  };

  render() {
    var media_ip = [
      "Media1",
    "Media2",
    "Media3",
    "Media4"
]

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
            <Form _lpchecked="1" onSubmit={this.handleSubmit}>
              <div class="form-group">
                <div class="row">
                  <div class="col">
                    <Form.Label for="exampleInputEmail1" class="form-label">
                      Name
                    </Form.Label>
                    <input
                      required
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Name"
                      name="Name"
                      onChange={(e) => {
                        this.props.func(this.props.arr, this.props.index, e);
                      }}
                      value={this.props.arr[this.props.index].Name}
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
                      IP
                    </Form.Label>
                    <input
                      required
                      type="type"
                      class="form-control"
                      placeholder="IP"
                      name="IP"
                      onChange={(e) => {
                        this.props.func(this.props.arr, this.props.index, e);
                      }}
                      value={this.props.arr[this.props.index].IP}
                    />
                    {this.state.Prompt &&
                      this.state.updatedDetails.IP === "" && (
                        <span style={{ color: "red", fontSize: "14px" }}>
                          Above field is mandatory
                        </span>
                      )}
                  </div>
                </div>
              </div>

              <div class="form-group">
                <div class="row">
                  <div class="col">
                    <Form.Label for="exampleInputEmail1" class="form-label">
                      Port
                    </Form.Label>
                    <input
                      required
                      type="number"
                      class="form-control"
                      placeholder="Port"
                      name="Port"
                      onChange={(e) => {
                        this.props.func(this.props.arr, this.props.index, e);
                      }}
                      value={this.props.arr[this.props.index].Port}
                    />
                    {this.state.Prompt &&
                      this.state.updatedDetails.Port === "" && (
                        <span style={{ color: "red", fontSize: "14px" }}>
                          Above field is mandatory
                        </span>
                      )}
                  </div>

                  <div class="col">
                    <Form.Label for="exampleInputEmail1" class="form-label">
                      User
                    </Form.Label>
                    <input
                      required
                      type="text"
                      class="form-control"
                      placeholder="User"
                      name="User"
                      onChange={(e) => {
                        this.props.func(this.props.arr, this.props.index, e);
                      }}
                      value={this.props.arr[this.props.index].User}
                    />
                    {this.state.Prompt &&
                      this.state.updatedDetails.User === "" && (
                        <span style={{ color: "red", fontSize: "14px" }}>
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
                    onChange={(e) => {
                      this.props.func(this.props.arr, this.props.index, e);
                    }}
                    value={this.props.arr[this.props.index].Password}
                  />
                  {this.state.Prompt &&
                    this.state.updatedDetails.Password === "" && (
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
                    onChange={(e) => {
                      this.props.func(this.props.arr, this.props.index, e);
                    }}
                    value={this.props.arr[this.props.index].SBCIPAndPort}
                  />
                  {this.state.Prompt &&
                    this.state.updatedDetails.SBCIPAndPort === "" && (
                      <span style={{ color: "red", fontSize: "14px" }}>
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
                  selectedValues={this.props.MediaIP}
                  onSelect={this.handleCustomerName}
                  onRemove={this.handleRemove}
                 />                </div>
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
                    onChange={(e) => {
                      this.props.func(this.props.arr, this.props.index, e);
                    }}
                    value={this.props.arr[this.props.index].GatewayIP}
                  />
                  {this.state.Prompt &&
                    this.state.updatedDetails.GatewayIP === "" && (
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
                    onChange={(e) => {
                      this.props.func(this.props.arr, this.props.index, e);
                    }}
                    value={this.props.arr[this.props.index].Domain}
                  />
                  {this.state.Prompt &&
                    this.state.updatedDetails.Domain === "" && (
                      <span style={{ color: "red", fontSize: "14px" }}>
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
                    Technical Manager
                  </Form.Label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    placeholder="Technical Manager"
                    name="TechnicalManager"
                    onChange={(e) => {
                      this.props.func(this.props.arr, this.props.index, e);
                    }}
                    value={this.props.arr[this.props.index].TechnicalManager}
                  />
                  {this.state.Prompt &&
                    this.state.updatedDetails.TechnicalManager === "" && (
                      <span style={{ color: "red", fontSize: "14px" }}>
                        Above field is mandatory
                      </span>
                    )}
                </div>
                <div class="col">
                  <label>Escalation Matrix</label>
                  <br></br>
                  <Form.Control
                    required
                    style={{ paddingTop: "0px", marginBottom: "0px" }}
                    type="text"
                    class=""
                    placeholder="Name"
                    name="escalation_matrix_name"
                    onChange={(e) => {
                      this.props.func(this.props.arr, this.props.index, e);
                    }}
                    value={
                      this.props.arr[this.props.index].escalation_matrix_name
                    }
                  />
                  {this.state.Prompt &&
                    this.state.updatedDetails.escalation_matrix_name === "" && (
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
                    onChange={(e) => {
                      this.props.func(this.props.arr, this.props.index, e);
                    }}
                    value={
                      this.props.arr[this.props.index].escalation_matrix_email
                    }
                  />
                  {this.state.Prompt &&
                    this.state.updatedDetails.escalation_matrix_email ===
                      "" && (
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
                    onChange={(e) => {
                      this.props.func(this.props.arr, this.props.index, e);
                    }}
                    value={
                      this.props.arr[this.props.index].escalation_matrix_phoneno
                    }
                  />
                  {this.state.Prompt &&
                    this.state.updatedDetails.escalation_matrix_phoneno ===
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

export default EditTelcoProvidersForm;
