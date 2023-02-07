import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Modal } from "react-bootstrap";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { updateServerData } from "../../services/EditApidataadd";
import Button from '@mui/material/Button';


class EditServerDetailsForm extends Component {
  state = {
    toggle: false,
    id: this.props.id,
    updatedDetails: {
      ipAddresses: this.props.ipAddresses,
      providers: this.props.providers,
      type: this.props.type,
      Interfaces: this.props.Interfaces,
      Ram: this.props.Ram,
      Core: this.props.Core,
      Hdd: this.props.Hdd,
      ServerType: this.props.ServerType,
    },
    prompt: false,
  };

  
  
async  shouldComponentUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {

     await this.setState({updatedDetails : {
      ...this.props.ipAddresses,
      ipAddresses : this.props.ipAddresses }})
      console.log('..............',this.state.updatedDetails.ipAddresses)
      return true;
    }
    else {
      return false;
    }
  }

  static getDerivedStateFromProps(props, state) {
    if(props.Core !== state.updatedDetails.Core){
        return{
          updatedDetails :{ Core: props.Core }
        };
    }
    return null; 
}

  toggleModal = () => {
    this.setState({ toggle: !this.state.toggle });
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
            <Form>
              <Row>
                <Col>
                  <Form.Label>IP Addresses</Form.Label>
                  <Form.Control
                    placeholder="IP Addresses"
                    name="ipAddresses"
                    onChange={(e) => { this.props.func(this.props.arr, this.props.index, e)  } }
                    value={this.props.arr[this.props.index].ipAddresses}
                  />
                  {this.state.prompt &&
                    this.state.updatedDetails.ipAddresses === "" && (
                      <span style={{ color: "red", fontSize: "14px" }}>
                        Above field is mandatory
                      </span>
                    )}
                </Col>
                <Col>
                  <Form.Label>providers</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="providers"
                    onChange={(e) => { this.props.func(this.props.arr, this.props.index, e)  } }
                    value={this.props.arr[this.props.index].providers}
                    
                  >
                    <option disabled selected value="">
                      Select Provider
                    </option>
                    <option value="vodafone">vodafone</option>
                    <option value="Airtel">Airtel</option>
                  </Form.Select>
                  {this.state.prompt &&
                    this.state.updatedDetails.providers === "" && (
                      <span style={{ color: "red", fontSize: "14px" }}>
                        Above field is mandatory
                      </span>
                    )}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>type</Form.Label>

                  <Form.Control
                    placeholder="type"
                    name="type"
                    onChange={(e) => { this.props.func(this.props.arr, this.props.index, e)  } }
                    value={this.props.arr[this.props.index].type}
                  />
                   {this.state.prompt &&
                    this.state.updatedDetails.type === "" && (
                      <span style={{ color: "red", fontSize: "14px" }}>
                        Above field is mandatory
                      </span>
                    )}
                </Col>
                <Col>
                  <Form.Label>Interfaces</Form.Label>

                  <Form.Control
                    placeholder="Interfaces"
                    name="Interfaces"
                    onChange={(e) => { this.props.func(this.props.arr, this.props.index, e)  } }
                    value={this.props.arr[this.props.index].Interfaces}
                  />
                   {this.state.prompt &&
                    this.state.updatedDetails.Interfaces === "" && (
                      <span style={{ color: "red", fontSize: "14px" }}>
                        Above field is mandatory
                      </span>
                    )}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Ram</Form.Label>

                  <Form.Control
                    placeholder="Ram"
                    name="Ram"
                    onChange={(e) => { this.props.func(this.props.arr, this.props.index, e)  } }
                    value={this.props.arr[this.props.index].Ram}
                  />
                   {this.state.prompt &&
                    this.state.updatedDetails.Ram === "" && (
                      <span style={{ color: "red", fontSize: "14px" }}>
                        Above field is mandatory
                      </span>
                    )}
                </Col>
                <Col>
                  <Form.Label>Core</Form.Label>

                  <Form.Control
                    placeholder="Core"
                    name="Core"
                    onChange={(e) => { this.props.func(this.props.arr, this.props.index, e)  } }
                    value={this.props.arr[this.props.index].Core}
                  />
                   {this.state.prompt &&
                    this.state.updatedDetails.Core === "" && (
                      <span style={{ color: "red", fontSize: "14px" }}>
                        Above field is mandatory
                      </span>
                    )}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Hdd</Form.Label>

                  <Form.Control
                    placeholder="Hdd"
                    name="Hdd"
                    onChange={(e) => { this.props.func(this.props.arr, this.props.index, e)  } }
                    value={this.props.arr[this.props.index].Hdd}
                  />
                   {this.state.prompt &&
                    this.state.updatedDetails.Hdd === "" && (
                      <span style={{ color: "red", fontSize: "14px" }}>
                        Above field is mandatory
                      </span>
                    )}
                </Col>
                <Col>
                  <Form.Label>ServerType</Form.Label>

                  <Form.Control
                    placeholder="ServerType"
                    name="ServerType"
                    onChange={(e) => { this.props.func(this.props.arr, this.props.index, e)  } }
                    value={this.props.arr[this.props.index].ServerType}
                  />
                   {this.state.prompt &&
                    this.state.updatedDetails.ServerType === "" && (
                      <span style={{ color: "red", fontSize: "14px" }}>
                        Above field is mandatory
                      </span>
                    )}
                </Col>
              </Row>
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

export default EditServerDetailsForm;