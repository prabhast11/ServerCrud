import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import {getServerDetails} from "../services/getApi"

import {deleteServerDetails} from "../services/deleteApi.js"
import Models from "../Models";
import Models2 from "../Models2";

class Serverdetails extends Component {

  state={
      result:[]
  }

    // componentDidMount(){
    //   const fetchData=async()=>{
    //     const response=await getServerDetails();
      
    //     this.setState({result:response.data})
    //     console.log(this.state.result)
    //   }
    //   fetchData()
      
    // }
    componentDidMount(){
      const fetchData=async()=>{
        const response=await getServerDetails();
      
        this.setState({result:response.data})
        console.log("fetch data of server detail :",this.state.result)
      }
      fetchData()
      
    }

    componentDidUpdate(prevProps, prevState){
      if (prevState.result !== this.state.result) {
        // Now fetch the new data here.
        const fetchData=async()=>{
          await getServerDetails();
        
        }
        fetchData()
        
      }
    }


    //delete api
 delete = async(id)=>{
    await deleteServerDetails(id);
      const response=await getServerDetails();
    
      this.setState({result:response.data})
      console.log(this.state.result)
      
    
}
  render() {

    const columns = [
      { dataField: "timepoint", text: "Prabhas timepoint" },
      { dataField: "prec_type", text: "Presciption type" },
      { dataField: "name", text: "Animation name" },
      { dataField: "email", text: "Animator email" },
      { dataField: "name", text: "Animation name" },
      { dataField: "email", text: "Animator email" },
      { dataField: "email", text: "Animator email" },
    ];

    return (
      <div>
        <Link to="/ServerDetail">
          {" "}
          
          {/* <Button variant="" style={{ float: "right" , background : "green" }}>
            Add Details
          </Button>{" "} */}
        </Link>
        {/* <Models2/> */}
        <Models/>
        <h1>Server Details</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>IP Addresses</th>
              <th>Providers</th>
              <th>Type</th>
              <th>Interfaces</th>
              <th>RAM</th>
              <th>CORE</th>
              <th>HDD</th>
              <th>Server Type</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            
            {
              this.state.result.map((res, index)=>(
                <tr key={index}>
                  <td>{res.ipAddresses}</td>
                  <td>{res.providers}</td>
                  <td>{res.type}</td>
                  <td>{res.Interfaces}</td>
                  <td>{res.Ram}</td>
                  <td>{res.Core}</td>
                  <td>{res.Hdd}</td>
                  <td>{res.ServerType}</td>
                  <td>
                <Button variant="danger" style={{ float: "right" , background : "red"}} onClick={()=>this.delete(res._id)}
>
                  Delete Details
                  </Button>{" "}
                </td>
                </tr>

             
              ))}
            
           
                {/* <td>Mr.</td>
                <td>Pune</td>
                <td>13-01-2023</td>
                <td>12-08-2022</td>
                <td>pqr</td>
                <td>abc</td>
                <td>Fast server</td>
                <td>
                <Button variant="danger" style={{ float: "right" , background : "red"}}>
                  Delete Details
                  </Button>{" "}
                </td>
              </tr> */}
             
            
            {/* <tr>
              <td>Ajay</td>
              <td>Mr.</td>
              <td>Pune</td>
              <td>13-01-2023</td>
              <td>12-08-2022</td>
              <td>pqr</td>
              <td>abc</td>
              <td>Fast server</td>
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
              <td>abc</td>
              <td>Fast server</td>
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
              <td>abc</td>
              <td>Fast server</td>
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

export default Serverdetails;
