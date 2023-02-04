import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
// import Models from './Models';

import { getCustomerDetails, getCustomerDetails1,getServicesDetails } from '../../services/getApi';
import { deleteServicesDetails } from '../../services/deleteApi';
import { updateServiceData } from "../../services/EditApidataadd";



import Servicesform from "../FORMS/ServicesForm"

import EditServicesForm from "../EditFormss/EditServicesForm"
// import { AuthContext } from '../context/Auth-Context'
import Pagination from "./Pagination";



class Services extends Component {
  // static contextType=AuthContext;

    
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


// propsHandler = async (myarr, index, e) => {
//   await this.setState((state, props) => {
//     const updatedArray = state.result.map((item, i) => {
//       if (i !== index) return item;
//       return { ...item, [e.target.name]: e.target.value };
//     });
//     return { result: updatedArray };
//   });

//   console.log("Printing updated array", this.state.result);
// };

propsHandler = async (myarr, index, e) => {
  await this.setState((state, props) => {
    const updatedArray = state.result.map((item, i) => {
      if (i !== index) return item;
      return { ...item, [e.target.name]: e.target.value };
    });
    return { result: updatedArray };
  });

  console.log("Printing updated array", this.state.result);
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

  console.log("Printing our best result ever.....", this.state.result[index]);
};

propsHandler4 = async (myarr, index, e) => {
  await this.setState((state, props) => {
    const updatedArray = state.result.map((item, i) => {
      if (i !== index) return item;
      return { ...item, showDropdown: false , selectedOption :e.target.value ,
        firstCustomer : []
        };
    });
    return { result: updatedArray };
  });

  console.log("Printing our best result ever.....", this.state.result[index]);
};


multiSelectHandler = async(data, index) =>{
  // await this.setState({selectedOption : data})
  console.log('..... my mutiselect.....', data.firstCustomer , index)

  this.setState((state) => {
    const result = [...state.result];
    // const index = items.findIndex((item) => item.id === id);
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
    // this.state.result[index].firstCustomer.length === 0 
  ) {
    window.alert("data cannot be empty");
  } else {
    e.preventDefault();
    var data = await updateServiceData(
      this.state.result[index],
      this.state.result[index]._id
    );
    console.log("updated data", data);

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
  console.log("providers", this.state.result);
};


  componentDidMount(){
    const fetchData=async()=>{
      // const response=await getServicesDetails();
      // const res=await getServicesDetails(this.state.limit,this.state.currentPage);
      
      // console.log('.......', res)
      
      const customersResponse = await getCustomerDetails1();    
      await this.setState({customerResult:customersResponse.data})
      
      const res=await getServicesDetails(this.state.limit, this.state.currentPage);
      await this.setState({result:res.data.response})
      await this.setState({ count: res.data.count });


      //  const customersResponse = await getCustomerDetails1();
      
      
      
      //  console.log('customer detail after 10:00',this.state.customersResponse)
      console.log('service detail after 10:00.........', this.state.result)
       console.log('customer detail after 10:00........', this.state.customerResult)
      //  console.log('customer detail after 10:00........', customersResponse)
 




    
      // console.log("customer res",customersResponse)
      //  console.log("services",this.state.result)
      //  console.log("customer",this.state.customerResult)
    }
    fetchData()
    
  }


//   mycode(){
//      const fetchData=async()=>{
//       const res=await getServicesDetails(this.state.limit,this.state.currentPage);
//       await this.setState({result:res.data.response})
//       await this.setState({count:res.data.count})
//       const customersResponse = await getCustomerDetails1();    

//       console.log('customer name for select option', customersResponse)

//       await this.setState({customerResult:customersResponse.data})

//       console.log("services",this.state.result)
//       console.log("customer......",this.state.customerResult)
//     }
//     fetchData()
// }

  componentDidUpdate(prevProps, prevState){
    if (prevState.result !== this.state.result) {
      // Now fetch the new data here.
      const fetchData=async()=>{
        await getServicesDetails(this.state.limit, this.state.currentPage);
        }
      fetchData()
      
    }
  }



   //delete api
 delete = async(id)=>{
  const  token=this.context.token

  await deleteServicesDetails(id,token);
    const res=await getServicesDetails(this.state.limit,
      this.state.currentPage);
  
      await this.setState({result:res.data.response})
    await this.setState({ count: res.data.count });
    console.log("All daaaaataa",this.state.result)
    
  
}


yesNodata=(selectedOptions)=>{
  this.setState({selectedOptions:selectedOptions})
}
  

 customerData=async(customerResult)=>{
  // this.setState({customerResult:customerData})
  this.setState({customerResult:customerResult});
  //  this.state.customerResult=await customerdata;

   console.log("Data coming from servicesForm",this.state.customerResult)
 }


  render() {
    console.log("customer data",this.state.result)

  

  //  const serviceData=async(selectedOption,showDropdown)=>{
  //     this.setState({selectedOption:selectedOption,showDropdown:showDropdown})
  //   }
    
    
    return (
      
      <div className="main">
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
          {/* {console.log("data from services for toggle", this.state.selectedOption,this.state.showDropdown)} */}
          {/* <Models></Models> */}
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
                console.log("map",res),
              
                <tr>
                  <td>{res.Name}</td>   
                  <td>{res.NodeVersion}</td>
                  <td>{res.Description}</td>
                  <td>{res.Port}</td>
                  <td>{res.ServiceType}</td>
                  <td> 
                  { !(res.selectedOption === "NO" ) ? res.firstCustomer.map((val,i)=>(
                    //  <td>{val.label},</td> 
                    // <td>{res.firstCustomer.length === i+1   ?  val.value :  ${val.value},}</td>
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
                // Name={res.Name}
                // NodeVersion={res.NodeVersion}
                // Description={res.Description}
                // Port={res.Port}
                // ServiceType={res.ServiceType} 
                // id={res._id}
                // customerRes={this.state.customerResult}
                // selectedOption={this.state.selectedOption}
               
                />
                  
                </td>
              </tr>
                {/* <Button variant="danger" style={{ float: "right" , background : "red"}} onClick={()=>this.delete(res._id)}
>
                  Delete Details
                  </Button>{" "} */}
                </td>
                </tr>

             
              ))}
            {/* <tr>
              <td>Ajay</td>
              <td>Mr.</td>
              <td>Pune</td>
              <td>13-01-2023</td>
              <td>12-08-2022</td>
              <td>pqr</td>
              <tr  className=''>
                <td>
                  <DeleteOutlineIcon tool style={{ color: "blueviolet", cursor : "pointer" }} />
                </td>
                <td>
                <DriveFileRenameOutlineIcon
                    onClick={this.editHandler}
                    style={{ color: "blueviolet", cursor : "pointer" }}
                  />
                  
                </td>
              </tr>
            </tr>
            
            */}
           
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
          // totalPage = {5}
          totalPage = {Math.ceil(this.state.count/ this.state.limit)}
        ></Pagination>
      </div>
    );
  }
}

export default Services;
