import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { getCustomerDetails, getCustomerDetails1,getServicesDetails } from '../../services/getApi';
import { deleteServicesDetails } from '../../services/deleteApi';
import { updateServiceData } from "../../services/EditApidataadd";
import Servicesform from "../FORMS/ServicesForm"
import EditServicesForm from "../EditFormss/EditServicesForm"
import Pagination from "./Pagination";

import { AuthContext } from '../context/Auth-Context'

class Services extends Component {

  static contextType=AuthContext;

  state={
    result:[],
    customerResult : [],
    selectedOption:'',
    showDropdown:'',
    count : 1,
    limit: 3,
    currentPage : 0
}

handleEntriesPerPageChange = async (event) => {
  await this.setState({ limit: event.target.value });
  const res = await getServicesDetails(this.state.limit, this.state.currentPage);
  await this.setState({ result: res.data.response });
  await this.setState({ count: res.data.count });
};


propsHandler = async (myarr, index, e) => {
  await this.setState((state, props) => {
    const updatedArray = state.result.map((item, i) => {
      if (i !== index) return item;
      return { ...item, [e.target.name]: e.target.value };
    });
    return { result: updatedArray };
  });
};

propsHandler3 = async (myarr, index, e) => {
  await this.setState((state, props) => {
    const updatedArray = state.result.map((item, i) => {
      if (i !== index) return item;
      return { ...item, showDropdown: true , selectedOption :e.target.value ,
        };
    });
    return { result: updatedArray };
  });
};

propsHandler4 = async (myarr, index, e) => {
  await this.setState((state, props) => {
    const updatedArray = state.result.map((item, i) => {
      if (i !== index) return item;
      return { ...item, showDropdown: false , selectedOption :e.target.value ,
        };
    });
    return { result: updatedArray };
  });
};


multiSelectHandler = async(data, index) =>{
  this.setState((state) => {
    const result = [...state.result];
    result[index] = { ...result[index], firstCustomer : data.firstCustomer };
    return { result };
  });


}

handleUpdate = (id, newName) => {
  this.setState((state) => {
    const items = [...state.items];
    const index = items.findIndex((item) => item.id === id);
    items[index] = { ...items[index], name: newName };
    return { items };
  });
};



handleSubmit = async (index, e) => {
  if (
    this.state.result[index].Name === "" ||
    this.state.result[index].NodeVersion === "" ||
    this.state.result[index].Description === "" ||
    this.state.result[index].Port === "" ||
    this.state.result[index].ServiceType === "" ||
    (this.state.result[index].selectedOption === "YES" &&  
    this.state.result[index].firstCustomer.length === 0)
  ) {
    window.alert("data cannot be empty");
  } else {
    e.preventDefault();
    var data = await updateServiceData(
      this.state.result[index],
      this.state.result[index]._id
    );
    window.location.href = "/ServicesDetails";
  }
};


fetchData1 = async (pno) => {
  await this.setState({ currentPage: pno });
  const res = await getServicesDetails(
    this.state.limit,
    this.state.currentPage
  );
  await this.setState({ result: res.data.response });
  await this.setState({ count: res.data.count });
};


  componentDidMount(){
    const fetchData=async()=>{
      const customersResponse = await getCustomerDetails1();    
      await this.setState({customerResult:customersResponse.data})
      
      const res=await getServicesDetails(this.state.limit, this.state.currentPage);
      await this.setState({result:res.data.response})
      await this.setState({ count: res.data.count });
    }
    fetchData()
    
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.result !== this.state.result) {
      const fetchData=async()=>{
        await getServicesDetails(this.state.limit, this.state.currentPage);
        }
      fetchData()
      
    }
  }

   //delete api
 delete = async(id)=>{
  const  token=this.context.token
  var result = window.confirm("Want to delete?");

if(result){
  await deleteServicesDetails(id,token);
    const res=await getServicesDetails(this.state.limit,
      this.state.currentPage);
  
      await this.setState({result:res.data.response})
    await this.setState({ count: res.data.count });
}
    
  
}


yesNodata=(selectedOptions)=>{
  this.setState({selectedOptions:selectedOptions})
}
  

 customerData=async(customerResult)=>{
  this.setState({customerResult:customerResult});
 }


  render() { 
    return (
      <div className="main" 
      style={{
        padding: "20px"
      }}
      >
        <div
          style={{
            float: "right",
            position: "relative",
            margin: "0px",
            padding: "0px",
            top: "0px",
          }}
        >
          <Servicesform customerData={this.customerData} yesNodata={this.yesNodata} />
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>NAME</th>
              <th>NODE VERSION</th>
              <th>DESCRIPTION</th>
              <th>PORT</th>
              <th>SERVICE TYPE</th>
              <th>FIRST CUSTOMER</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>

          {
              this.state.result.map((res,index, arr)=>(
              
                <tr key={index}>
                  <td>{res.Name}</td>   
                  <td>{res.NodeVersion}</td>
                  <td>{res.Description}</td>
                  <td>{res.Port}</td>
                  <td>{res.ServiceType}</td>
                  <td> 
                  { !(res.selectedOption === "NO" ) ? res.firstCustomer.map((val,i)=>(
                    <td>{res.firstCustomer.length === i+1   ?  val: `${val},`}</td>
                  )):  <td>NO</td>}
                  </td>
                 
                  <td>
                  <tr>
                <td>
                  <DeleteOutlineIcon onClick={()=>this.delete(res._id)} tool style={{ color: "blueviolet", cursor : "pointer" }} />
                </td>
                <td>
               <EditServicesForm
                  index={index}
                  arr={arr}
                  func={this.propsHandler}
                  func1={this.handleSubmit}
                  func2={this.multiSelectHandler}
                  func3={this.propsHandler3}
                  func4={this.propsHandler4}
                  customerRes={this.state.customerResult}
                  firstCustomer={res.firstCustomer}
               />
                  
                </td>
              </tr>
                </td>
                </tr>

             
              ))}
           </tbody>
        </Table>

        <p>Entries per page: {this.state.entriesPerPage}</p>
        <select 
          onChange={this.handleEntriesPerPageChange}
          className="select-large"
          style={{
            backgroundColor: "#D3D3D3",
            color: "black",
            border: "1px solid grey",
            borderRadius: "5px",
            padding: "5px 10px",
            fontSize: "16px",
            width: "80px"
          }}
          >
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={7}>7</option>
        </select>

        <Pagination func={this.fetchData1}
          totalPage = {Math.ceil(this.state.count/ this.state.limit)}
        ></Pagination>
      </div>
    );
  }
}

export default Services;
