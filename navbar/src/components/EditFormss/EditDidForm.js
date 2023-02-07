import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Modal} from "react-bootstrap";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { updateDidData } from "../../services/EditApidataadd";
import Button from '@mui/material/Button';


class EditDidForm extends Component {
  state = {
    toggle: false,
    yes: "Yes",
    No: "No",
    id: this.props.id,
    Prompt: false,
  };

 

  toggleModal = async () => {
    await this.setState({ toggle: !this.state.toggle });

    if (!this.state.toggle) {
      this.props.func(this.props.pno);
    }
  };

  handleChange = (e) => {
    this.setState({ updatedDetails: { [e.target.name]: e.target.value } });
  };

  render() {
    const onSelect = ({ target: { value } }) => {
      this.setState({ used: value });
    };

    const isChecked = (value) => {
      return value === this.state.updatedDetails.used;
    };
    return (
      <div>
        <p onClick={this.toggleModal} btn bg-transparent>
          {" "}
          <DriveFileRenameOutlineIcon
            style={{ color: "blueviolet", cursor: "pointer" }}
          />
        </p>
        <Modal
          show={this.state.toggle}
          size="lg"
        >
          <Modal.Header closeButton onClick={this.toggleModal}>
            <Modal.Title>Update Details</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form _lpchecked="1" onSubmit={this.handleSubmit}>
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
                  onChange={(e) => { this.props.func(this.props.arr, this.props.index, e)  } }
                  value={this.props.arr[this.props.index].listing}
                />
                {this.state.Prompt &&
                  this.state.updatedDetails.listing === "" && (
                    <span style={{ color: "red", fontSize: "14px" }}>
                      Above field is mandatory
                    </span>
                  )}
              </div>
              Used :
              <div class="form-group form-control">
                <input
                  type="radio"
                  id="yes"
                  name="used"
                  required
                  checked={this.props.arr[this.props.index].used === "Yes"}
                  onChange={(e) => { this.props.func(this.props.arr, this.props.index, e)  } }
                  value={this.state.yes}
                />
                <label for="yes">Yes</label>
                <br />
                <input
                  type="radio"
                  id="no"
                  name="used"
                  value="No"
                  onChange={(e) => { this.props.func(this.props.arr, this.props.index, e)  } }
                  checked={this.props.arr[this.props.index].used === "No"}
                />
                <label for="no">No</label>
                <br />
                {this.state.Prompt && this.state.updatedDetails.used === "" && (
                  <span style={{ color: "red", fontSize: "14px" }}>
                    Above field is mandatory
                  </span>
                )}
              </div>
            </form>
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

export default EditDidForm;
