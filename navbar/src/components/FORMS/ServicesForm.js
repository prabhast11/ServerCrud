import React, { Component } from 'react'
import {  Form, Modal} from 'react-bootstrap'
import { AddServicesDetails} from "../../services/addApi"
import { getCustomerDetails1 } from "../../services/getApi";
import Multiselect from 'multiselect-react-dropdown';
import { AuthContext } from '../context/Auth-Context'
import Button from '@mui/material/Button';


 class ServerDetailsModel extends Component {

static contextType=AuthContext;

  constructor()
{
  super()
  this.state={
    Name: "",
    NodeVersion: "",
    Description: "",
    Port: "",
    ServiceType: "",
    selectedOption: '',
    showDropdown: false,
    firstCustomer : [],
    toggle: false,
     }

     this.handleChange2 = this.handleChange2.bind(this);

}



handleChange2(selectedItem) {
  
  
  this.setState({ firstCustomer: selectedItem });
  console.log('multi select ... ok',  selectedItem)
  
}

  handleChange1 = (newValue) => {
  this.setState({ firstCustomer: newValue });
}

state={
  customerResult:[],
  my_customer:[]
}

componentDidMount(){
  const fetchData=async()=>{
    const customersResponse = await getCustomerDetails1();
    this.setState({customerResult:customersResponse.data})
   await this.mappingcustomerdata()
    this.props.customerData(this.state.customerResult)

  }
  fetchData()
  
}


  mappingcustomerdata=async ()=>{
  await  this.setState({my_customer:this.state.customerResult.map((val) =>(val.Name))})
    this.props.yesNodata(this.state.selectedOption)
  }

handleChange=(e)=>{
  this.setState({[e.target.name]:e.target.value});
 

}

toggleModal = () => {
  this.setState({ toggle: !this.state.toggle });
};


handleSubmit = async (e) => {
  if (
    this.state.Name === "" ||
    this.state.NodeVersion === "" ||
    this.state.Description === "" ||
    this.state.Port === "" ||
    this.state.ServiceType === "" ||
    this.state.selectedOption === "" ||
    (this.state.selectedOption === "YES" &&
    this.state.firstCustomer.length === 0 )
  ) 
  {
    this.setState({ Prompt: true });
    console.log("prompt variable11111", this.state.Prompt);
  } 
  
  
  else {
    e.preventDefault();

    const  token=this.context.token
    await AddServicesDetails(this.state, token);

    console.log('printing the whole new state of service detail',this.state )
    window.location.href = "/ServicesDetails";
  }
};


  render() {
    
    return (
        <div className="App">
         
        <div class="container p-2">
        <Button
          variant="contained" size="small"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ background: "#673FBD" }}
          >
            Add Details
          </Button>

  
           <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content" >
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
                          placeholder='Name'
                          onChange={this.handleChange}
                          aria-label="First name"
                        />
                         {this.state.Prompt &&
                    this.state.Name === "" && (
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
                         onChange={this.handleChange}
                        required
                          type="text"
                          class=" "
                          aria-label="First name"
                        />
                        {this.state.Prompt && this.state.NodeVersion === "" && (
                          <span style={{ color: "red", fontSize: "14px" }}>
                            Above field is mandatory
                          </span>
                        )}
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
                         onChange={this.handleChange}
                        required
                          type="text"
                          class=" "
                          aria-label="Last name"
                        />
                        {this.state.Prompt && this.state.Description === "" && (
                          <span style={{ color: "red", fontSize: "14px" }}>
                            Above field is mandatory
                          </span>
                        )}
                      </div>
                      <div class="col">
                        <Form.Label for="exampleInputEmail1" class="form-label">
                          PORT
                        </Form.Label>
                        <Form.Control
                        placeholder='Port'
                         name="Port"
                         onChange={this.handleChange}
                        required
                          type="number"
                          class=" "
                          aria-label="First name"
                        />
                        {this.state.Prompt && this.state.Port === "" && (
                          <span style={{ color: "red", fontSize: "14px" }}>
                            Above field is mandatory
                          </span>
                        )}
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
                         onChange={this.handleChange}
                        required
                          type="text"
                          class=" "
                          aria-label="Last name"
                        />
                        {this.state.Prompt && this.state.ServiceType === "" && (
                          <span style={{ color: "red", fontSize: "14px" }}>
                            Above field is mandatory
                          </span>
                        )}
                      </div>
                   <div class="col">  
                  <label for="exampleInputEmail1" class="form-label">First Customer</label>
                    <div class="form-group form-control col">
                    <input
                      required
                      type="radio"
                      name="firstCustomer"
                      value="NO"
                      checked={this.state.selectedOption === "NO"}
                        
                      onChange={ 
                      async (e)=>{ 
                       await this.setState({
                            selectedOption: e.target.value,
                            showDropdown: e.target.value === "YES",
                            used : e.target.value,
                            Prompt : false
                             })
                            }
                             }
                    />
                    <label for="exampleInputEmail1" class="form-label">NO</label>
                    <input
                      type="radio"
                      name="firstCustomer"
                      value="YES"
                      checked={this.state.selectedOption === "YES"}
                      onChange={(e) => this.setState({
                        selectedOption: e.target.value,
                        showDropdown: e.target.value === "YES",
                      })
                      
                    }
                      
                    />
                    <label for="exampleInputEmail1" class="form-label">YES</label>
                    {this.state.showDropdown && (
                     
                      <div class="form-group form-control ">
                      <Form.Label htmlFor="">Media IP : </Form.Label><br></br>

              
         <Multiselect
        isObject={false}
        options={this.state.my_customer}
        onSelect={this.handleChange2}
        />
                   </div>
                    )}
                </div>
                {((this.state.Prompt && this.state.selectedOption === "" )|| 
        (this.state.Prompt  && this.state.selectedOption === "YES" && 
        this.state.firstCustomer.length === 0)) &&
        (
                          <span style={{ color: "red", fontSize: "14px" }}>
                            Above field is mandatory
                          </span>
                        )}
                        
                    </div>
                    </div>
                  </Form>
                  <br></br>
                      <Modal.Footer>            
                    
                  <Button
                    variant="contained" size="small"
                      onClick={this.handleSubmit}
                      style={{
                        background: "green",
                        margin : "10px"
                      }}
                    >
                      Save
                    </Button>
                    <Button
                    variant="contained" size="small"
                      data-bs-dismiss="modal"
                      style={{
                        background: "red",
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
    )
  }
}

export default ServerDetailsModel