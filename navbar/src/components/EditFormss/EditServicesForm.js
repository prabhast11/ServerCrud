import React,{Component} from "react";
import Form from "react-bootstrap/Form"
import {Modal} from "react-bootstrap"
import Multiselect from 'multiselect-react-dropdown';
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Button from '@mui/material/Button';


class UpdateModal extends Component {
    state = {
        toggle:false,
        id:this.props.id,
        selectedOption:this.props.selectedOption,
        isChecked:null,
        arr:[],
        Prompt: false,
        customerRes:this.props.customerRes,
        customerName:[],
        visibleDropdown : true,
        updatedDetails:{
            Name:this.props.Name,
            NodeVersion:this.props.NodeVersion,
            Description:this.props.Description,
            Port:this.props.Port,
            ServiceType:this.props.ServiceType,
            firstCustomer:[],
            // firstCustomer:this.props.firstCustomer,
            selectedOption:this.props.arr[this.props.index].selectedOption,
            showDropdown:this.props.arr[this.props.index].showDropdown
        }
    } 

    handleChange1 = (e) => {
        this.setState({mytestdata :  Array.isArray(e) ? e.map(x => x.value) : []});
      }
      
      

     toggleModal=()=>{
        this.setState({toggle:!this.state.toggle})
    }


    handleChange=(e)=>{
        this.setState({updatedDetails:{[e.target.name]:e.target.value}});
        this.setState({updatedDetails:{selectedOption:e.target.value}});
        this.setState({updatedDetails:{showDropdown:e.target.value}});
      
      }
    handleChange2=(e)=>{
        console.log('reading target of e', e)
        this.setState({updatedDetails:{firstCustomer:e.target.value}});
      
      }


      handleCustomerName=(selectedList, selectedItem)=>{
        console.log('data ok pls thanku', selectedList)
        var updatedDetails={...this.state.updatedDetails}
        updatedDetails.firstCustomer=selectedList
          this.setState({updatedDetails})


          this.props.func2(updatedDetails, this.props.index);
        console.log("selectedList",selectedList);
        console.log("SelectedItem",selectedItem)
      }

      handleRemove=(selectedList,removedItem)=>{
        var updatedDetails={...this.state.updatedDetails}
        updatedDetails.firstCustomer=selectedList
          this.setState({updatedDetails})

          this.props.func2(updatedDetails, this.props.index);

      }
      
     
  gettingdata=()=>{

    this.setState({arr:this.state.updatedDetails.firstCustomer.map((data) => data)})

  }

  mappingcustomername=()=>{
    this.setState({customerName:this.state.customerRes.map(data=>data.Name)})
    

}


  componentDidMount(){
    this.gettingdata()
    this.mappingcustomername()
  }

  
    render() {   
      var list=["pr"];
      var li;
         return (
            <div>
                    <p onClick={this.toggleModal} btn bg-transparent> <DriveFileRenameOutlineIcon
                 
                 style={{ color: "blueviolet", cursor : "pointer" }}
               /></p>
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
                          placeholder='Name'
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
                        Node Version
                        </Form.Label>
                        <Form.Control
                        name="NodeVersion"
                        placeholder='Node Version'
                        value={this.props.arr[this.props.index].NodeVersion}
                    onChange={(e) => {
                      this.props.func(this.props.arr, this.props.index, e);
                    }}
                        required
                          type="text"
                          class=" "
                          aria-label="First name"
                        />
                      </div>
                      </div>
                    <div class="row">
                     
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                        Description
                        </Form.Label>
                        <Form.Control
                         placeholder='Description'
                        name="Description"
                        value={this.props.arr[this.props.index].Description}
                    onChange={(e) => {
                      this.props.func(this.props.arr, this.props.index, e);
                    }}
                        required
                          type="text"
                          class=" "
                          aria-label="Last name"
                        />
                      </div>
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          PORT
                        </Form.Label>
                        <Form.Control
                        type="number"
                        placeholder='Port'
                         name="Port"
                        value={this.props.arr[this.props.index].Port}
                    onChange={(e) => {
                      this.props.func(this.props.arr, this.props.index, e);
                    }}
                        required
                          class=" "
                          aria-label="First name"
                        />
                      </div>

                    </div>
  
                    <div class="row">
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                        Service Type
                        </Form.Label>
                        <Form.Control
                        placeholder='Service Type'
                         name="ServiceType"
                        value={this.props.arr[this.props.index].ServiceType}
                    onChange={(e) => {
                      this.props.func(this.props.arr, this.props.index, e);
                    }}
                        required
                          type="text"
                          class=" "
                          aria-label="Last name"
                        />
                      </div>
                   <div class="col">  
                  <label for="exampleInputEmail1" class="form-label">First Customer</label>
                    <div class="form-group form-control col">
                    <input
                      required
                      type="radio"
                      name="firstCustomer"
                     
                      value="NO"
                      checked={this.props.arr[this.props.index].selectedOption === "NO"}   
                      onChange={ async (e)=>{
                        await this.setState({visibleDropdown : false})
                      this.props.func4(this.props.arr, this.props.index, e);

                        console.log('final touch', this.state.updatedDetails.firstCustomer)
                            }}
                    />
                    <label for="exampleInputEmail1" class="form-label">NO</label>
                    <input
                      type="radio"
                      name="firstCustomer"
                      value="YES"
                      checked={this.props.arr[this.props.index].selectedOption === "YES"}
                      onChange={async (e) => {
                        await this.setState({visibleDropdown : true})
                        this.props.func3(this.props.arr, this.props.index, e);


                        console.log('ok bhai inside yes inside selectedOption', this.state.updatedDetails.selectedOption)
                        console.log('ok bhai inside yes inside showDropdown', this.state.updatedDetails.showDropdown)
                      
                    }
                    }
                      
                    />
                    <label for="exampleInputEmail1" class="form-label">YES</label>
                    {this.props.arr[this.props.index].showDropdown &&  this.state.visibleDropdown &&
                      this.props.arr[this.props.index].firstCustomer  &&
                    (
                     
                      <div class="form-group form-control ">
                      

               
                  <Multiselect
                 
                  isObject={false}
                  selectedValues={this.props.firstCustomer}
                   options={ this.state.customerName}
                   onSelect={this.handleCustomerName}
                   onRemove={this.handleRemove}
                  />
              </div>
                    )}
                </div>
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
 
export default UpdateModal;