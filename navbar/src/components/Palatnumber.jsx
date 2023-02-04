import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


import { getPalatNumberDetails } from '../services/getApi';
import { deletePalatNumberDetails } from '../services/deleteApi';


class Palatnumber extends Component {
  state={
    result:[]
}

  componentDidMount(){
    const fetchData=async()=>{
      const response=await getPalatNumberDetails();
    
      this.setState({result:response.data})
      console.log("palat",this.state.result)
    }
    fetchData()
    
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.result !== this.state.result) {
      // Now fetch the new data here.
      const fetchData=async()=>{
        await getPalatNumberDetails();
      
      }
      fetchData()
      
    }
  }

   //delete api
 delete = async(id)=>{
  await deletePalatNumberDetails(id);
    const response=await getPalatNumberDetails();
  
    this.setState({result:response.data})
    console.log(this.state.result)
    
  
}
  render() {
    return (
      <div>
        <Link to="/PalatNumberDetail">
          {" "}
          <Button variant="primary" style={{ float: "right", background : "green" }}>
            Add Details
          </Button>{" "}
        </Link>{" "}
        <h1>Palat Number</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Did Number</th>
              <th>Channels</th>
            </tr>
          </thead>
          <tbody>

          {
              this.state.result.map((res)=>(
                <tr>
                  <td>{res.did_number}</td>
                  <td>{res.channel}</td>
                 
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

export default Palatnumber;
