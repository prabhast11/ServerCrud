import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { getdidDetails } from '../services/getApi';
import { deletedidDetails } from '../services/deleteApi';



class Did extends Component {

  state={
    result:[]
}

  componentDidMount(){
    const fetchData=async()=>{
      const response=await getdidDetails();
    
      this.setState({result:response.data})
      console.log("did",this.state.result)
    }
    fetchData()
    
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.result !== this.state.result) {
      // Now fetch the new data here.
      const fetchData=async()=>{
        await getdidDetails();
      
      }
      fetchData()
      
    }
  }

   //delete api
 delete = async(id)=>{
  await deletedidDetails(id);
    const response=await getdidDetails();
  
    this.setState({result:response.data})
    console.log(this.state.result)
    
  
}
  render() {
    return (
      
      <div class="container"> 
 <Link to='/didDetail'>        <Button variant="primary" style={{float : 'right', background : "green"}}>Add Details
</Button>{' '}</Link >        <h1>DID</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Listing</th>
          <th>Used</th>
         
        </tr>
      </thead>
      <tbody>

      {
              this.state.result.map((res)=>(
                <tr>
                  <td>{res.listing}</td>
                  <td>{res.used}</td>
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
          <td>
              <Button variant="danger" style={{ float: "right" , background : "red"}}>
                Delete Details
                </Button>{" "}
              </td>
        </tr>
        <tr>
          <td>Ajay</td>
          <td>Mr.</td>
          <td>
              <Button variant="danger" style={{ float: "right" , background : "red"}}>
                Delete Details
                </Button>{" "}
              </td>
        </tr>
        <tr>
          <td>Ajay</td>
          <td>Mr.</td>
          <td>
              <Button variant="danger" style={{ float: "right" , background : "red"}}>
                Delete Details
                </Button>{" "}
              </td>
        </tr> */}
        
      </tbody>
    </Table></div>
    )
  }
}

export default Did