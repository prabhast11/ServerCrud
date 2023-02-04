import React, { Component } from "react";
import { AddServicesDetails } from "../services/addApi";
import "./tempform.css";
import Select from "react-select"



import { getCustomerDetails } from "../services/getApi";
// imPort './myjavascript.js'

class Servicesform extends Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      NodeVersion: "",
      Description: "",
      Port: "",
      ServiceType: "",
      firstCustomer: "",
      selectedOption: '',
      showDropdown: false,
      mytestdata : []
    };
  }

  // set value for default selection

  // handle onChange event of the dropdown
   handleChange1 = (e) => {
    this.setState({mytestdata :  Array.isArray(e) ? e.map(x => x.value) : []});
  }




   
  state={
    customerResult:[]
}

  componentDidMount(){
    const fetchData=async()=>{
      const customersResponse = await getCustomerDetails();
      this.setState({customerResult:customersResponse.data})
  
      console.log("customer",this.state.customerResult)
    }
    fetchData()
    
  }
  // servicesHandler = async (e) => {
  //   e.preventDefault();
  //   const obj = {
  //     Name: this.state.Name,
  //     NodeVersion: this.state.NodeVersion,
  //     Description: this.state.Description,
  //     Port: this.state.Port,
  //     ServiceType: this.state.ServiceType,
  //     firstCustomer: this.state.firstCustomer,
  //   };
  //   const result = await axios.post(
  //     "http://localhost:5000/servicesHandler",
  //     obj
  //   );
  //   console.log("Services submit result:", result);
  // };

  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value,});
  
  }
  
  
  
  handleSubmit = async (e)=>{
    e.preventDefault()
   await AddServicesDetails(this.state)
  console.log(this.state)
  window.location.href = "/ServicesDetails";
  }
  
//   my_customer =  [
      
//     this.state.customerResult.map((res)=>{
      
//       return { 
        
//         value : res.Name,
//               label :res.Name
//             }
             
           
// })
// ]
  render() {

    var my_customer =  []
    if(this.state.customerResult)
    {
        var data
      this.state.customerResult.map((val) =>{data =  { value : val.Name, label : val.Name } 
                                                 my_customer.push(data)                                                        
     })
    }
    console.log(this.state.customerResult)

    
   
    
    //   {
    //       value : "Media 1",
    //       label : "Media 1"
    //   },
    //   {
    //     value : "Media 2",
    //       label : "Media 2"

    //   },
    //   {
    //     value : "Media 3",
    //       label : "Media 3"

    //   }
     //]


    


    return (
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-5">
            <div class="card">
              <h2 class="card-title text-center">Add Service Deatils</h2>
              <div class="card-body py-md-4">
                <form _lpchecked="1" onSubmit={this.handleSubmit}>
                  <div class="form-group">
                    <input
                    required
                      type="text"
                      class="form-control"
                      id="Name"
                      placeholder="Name"
                      Name="Name"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <input
                    required
                      type="text"
                      class="form-control"
                      placeholder="Node Version"
                      Name="NodeVersion"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div class="form-group">
                    <input
                    required
                      type="text"
                      class="form-control"
                      placeholder="Description"
                      Name="Description"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <input
                    required
                      type="number"
                      class="form-control"
                      placeholder="Port"
                      Name="Port"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <input
                    required
                      type="text"
                      class="form-control"
                      placeholder="Service Type"
                      Name="ServiceType"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="form-group form-control">
                  First Customer : <br></br>
                    <input
                      required
                      type="radio"
                      Name="firstCustomer"
                      value="NO"
                      checked={this.state.selectedOption === "NO"}
                     
                         
                      onChange={ (e)=>{this.setState({
                            selectedOption: e.target.value,
                            showDropdown: e.target.value === "YES",
                            used : e.target.value,
                             })
                            this.handleChange() 
                            }}
                    />
                    <label>NO</label>
                    <input
                      type="radio"
                      Name="firstCustomer"
                      value="YES"
                      checked={this.state.selectedOption === "YES"}
                      onChange={(e) => this.setState({
                        selectedOption: e.target.value,
                        showDropdown: e.target.value === "YES"
                      })}
                      
                    />
                    <label>YES</label>
                    {this.state.showDropdown && (
                      // <select Name="firstCustomer"  required
                     
                      // onChange={this.handleChange} 
                      // >
                      //   {
                      //     this.state.customerResult.map((res,index)=>(
                            
                      //       <option value={res.Name}>{res.Name}</option>
                            
                            
                      //     ))
                      //   }
                        
                      // </select>
                      <div class="form-group form-control ">
                      <label htmlFor="">Media IP : </label><br></br>

                {/* <Select isMulti options={my_customer} onChange={this.handleChange} name="firstCustomer"></Select> */}
                <Select
                 isMulti 
                 options={my_customer}
                  Name="mytestdata"
                  c 
                   onChange={(a,b) => {b.name = a}} >

                   </Select>

                    </div>
                    )}
                  </div>

                

                  <div class="d-flex flex-row align-items-center justify-content-between">
                    <button class="btn btn-primary" type="submit">
                      Confirm
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Servicesform;
