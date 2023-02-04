import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { getCustomerDetails, getServicesDetails } from '../services/getApi';
import { deleteServicesDetails } from '../services/deleteApi';



class Services extends Component {

  
  state={
    result:[],
    customerResult:[]
}

  componentDidMount(){
    const fetchData=async()=>{
      const response=await getServicesDetails();
      const customersResponse = await getCustomerDetails();
      this.setState({customerResult:customersResponse.data})
    
      this.setState({result:response.data})
      console.log("services",this.state.result)
      console.log("customer",this.state.customerResult)
    }
    fetchData()
    
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.result !== this.state.result) {
      // Now fetch the new data here.
      const fetchData=async()=>{
        await getServicesDetails();
      
      }
      fetchData()
      
    }
  }

   //delete api
 delete = async(id)=>{
  await deleteServicesDetails(id);
    const response=await getServicesDetails();
  
    this.setState({result:response.data})
    console.log(this.state.result)
    
  
}
  render() {
    return (
      <div className="container">
        <Link to="/ServicesDetail">
          {" "}
          <Button variant="primary" style={{ float: "right" ,background : "green"}}>
            Add Details
          </Button>{" "}
        </Link>
        <h1>Services</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Node Version</th>
              <th>Description</th>
              <th>Port</th>
              <th>Service Type</th>
              <th>Ist customer</th>
             
            </tr>
          </thead>
          <tbody>

          {
              this.state.result.map((res)=>(
                <tr>
                  <td>{res.Name}</td>
                  <td>{res.NodeVersion}</td>
                  <td>{res.Description}</td>
                  <td>{res.Port}</td>
                  <td>{res.ServiceType}</td>
                  <td>{res.firstCustomer}</td>
                 
                  <td>
                <Button variant="danger" style={{ float: "right" , background : "red"}} onClick={()=>this.delete(res._id)}
>
                  Delete Details
                  </Button>{" "}
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
              <td>
              <Button variant="danger" style={{ float: "right" , background : "red"}}>
                Delete Details
                </Button>{" "}
              </td>
            </tr>
            <tr>
              <td>Ajay</td>
              <td>Mr.</td>
              <td>Pune</td>
              <td>13-01-2023</td>
              <td>12-08-2022</td>
              <td>pqr</td>
              <td>
              <Button variant="danger" style={{ float: "right" , background : "red"}}>
                Delete Details
                </Button>{" "}
              </td>
            </tr>
            <tr>
              <td>Ajay</td>
              <td>Mr.</td>
              <td>Pune</td>
              <td>13-01-2023</td>
              <td>12-08-2022</td>
              <td>pqr</td>
              <td>
              <Button variant="danger" style={{ float: "right" , background : "red"}}>
                Delete Details
                </Button>{" "}
              </td>
            </tr> */}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Services;
