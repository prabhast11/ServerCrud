import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { getProvidersDetails } from '../services/getApi';
import { deleteProvidersDetails } from '../services/deleteApi';

class Providers extends Component {
  
  state={
    result:[]
}

  componentDidMount(){
    const fetchData=async()=>{
      const response=await getProvidersDetails();
    
      this.setState({result:response.data})
      console.log("providers",this.state.result)
    }
    fetchData()
    
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.result !== this.state.result) {
      // Now fetch the new data here.
      const fetchData=async()=>{
        await getProvidersDetails();
      
      }
      fetchData()
      
    }
  }

   //delete api
 delete = async(id)=>{
  await deleteProvidersDetails(id);
    const response=await getProvidersDetails();
  
    this.setState({result:response.data})
    console.log(this.state.result)
    
  
}
  render() {  
    return (
      <div>
 <Link to='/ProvidersDetail'><Button variant="primary" style={{float : 'right', background : "green"}}>Add Details
</Button>{' '}</Link >        <h1>Providers</h1>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Initial</th>
          <th>Location</th>
          <th>CurrentDate</th>
          <th>UpdateDate</th>
          <th>Account Manager</th>
          <th>Technical Contact Manager</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {
              this.state.result.map((res)=>(
                <tr>
                  <td>{res.Name}</td>
                  <td>{res.Initial}</td>
                  <td>{res.Location}</td>
                  <td>{res.CurrentDate}</td>
                  <td>{res.UpdateDate}</td>
                  <td>{res.AccountManager}</td>
                  <td>{res.TechnicalContactManager}</td>
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
        </tr>
         */}
      </tbody>
    </Table>
      </div>
    )
  }
}

export default Providers