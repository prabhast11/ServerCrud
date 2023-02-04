import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


import { getTelcoProviderDetails } from '../services/getApi';
import { deleteTelcoProviderDetails } from '../services/deleteApi';


class Telcoprovider extends Component {
   
  state={
    result:[]
}

  componentDidMount(){
    const fetchData=async()=>{
      const response=await getTelcoProviderDetails();
    
      this.setState({result:response.data})
      console.log("telco",this.state.result)
    }
    fetchData()
    
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.result !== this.state.result) {
      // Now fetch the new data here.
      const fetchData=async()=>{
        await getTelcoProviderDetails();
      
      }
      fetchData()
      
    }
  }

   //delete api
 delete = async(id)=>{
  await deleteTelcoProviderDetails(id);
    const response=await getTelcoProviderDetails();
  
    this.setState({result:response.data})
    console.log(this.state.result)
    
  
}
  render() {
    return (
      <div className="">
        <Link to="/telcoProviderDetail">
          {" "}
          <Button variant="primary" style={{ float: "right", background :  "green" }}>
            Add Details
          </Button>{" "}
        </Link>
        <h1>Telco Provider</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>IP</th>
              <th>Port</th>
              <th>Username</th>
              <th>Media IP</th>
              <th>SBC IP and Port</th>
              <th>Gateway IP</th>
              <th>Domain</th>
              <th>Account Manager</th>
              <th>Technical Manager</th>
              <th>Escalation Matrix</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>

          {
              this.state.result.map((res)=>(
                <tr>
                  <td>{res.Name}</td>
                  <td>{res.IP}</td>
                  <td>{res.Port}</td>
                  <td>{res.User}</td>
                  <td>{res.MediaIP}</td>
                  <td>{res.SBCIPAndPort}</td>
                  <td>{res.GatewayIP}</td>
                  <td>{res.Domain}</td>
                  <td>{res.AccountManager}</td>
                  <td>{res.TechnicalManager}</td>
                  <td>{res.escalation_matrix_email},{res.escalation_matrix_name},{res.escalation_matrix_phoneno}</td>
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
              <td>abc</td>
              <td>abc</td>
              <td>abc</td>
              <td>abc</td>
              <td>abc</td>
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
              <td>abc</td>
              <td>abc</td>
              <td>abc</td>
              <td>abc</td>
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
              <td>abc</td>
              <td>abc</td>
              <td>abc</td>
              <td>abc</td>
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

export default Telcoprovider;
