import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


import { getCustomerDetails } from '../services/getApi';
import { deleteCustomerDetails } from '../services/deleteApi';



class Customers extends Component {

  state={
    result:[]
}

  componentDidMount(){
    const fetchData=async()=>{
      const response=await getCustomerDetails();
    
      this.setState({result:response.data})
      console.log("customers",this.state.result)
    }
    fetchData()
    
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.result !== this.state.result) {
      // Now fetch the new data here.
      const fetchData=async()=>{
        await getCustomerDetails();
      
      }
      fetchData()
      
    }
  }

   //delete api
 delete = async(id)=>{
  await deleteCustomerDetails(id);
    const response=await getCustomerDetails();
  
    this.setState({result:response.data})
    console.log(this.state.result)
    
  
}
  render() {
    return (
      <div>
 <Link to='/CustomerDetail'>        <Button variant="primary" style={{float : 'right', background : "green"}}>Add Details
</Button>{' '}</Link >        <h1>Customer Table</h1>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>License</th>
          <th>Channel Partner</th>
          <th>Dialer link and domain</th>
          <th>CPASS Info</th>
          <th>Did Count</th>
          <th>Account Manager</th>
          {/* <th>Account Manager</th> */}
          {/* <th>Technical Contact Manager</th> */}
        </tr>
      </thead>
      <tbody>

      {
              this.state.result.map((res)=>(
                <tr>
                  <td>{res.Name}</td>
                  <td>{res.License}</td>
                  <td>{res.ChannelPartner}</td>
                  <td>{res.DlinkAndDomain}</td>
                  <td>{res.CpassInfo}</td>
                  <td>{res.DidCount}</td>
                  <td>{res.AccountManager}</td>
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
          <td><td>
              <Button variant="danger" style={{ float: "right" , background : "red"}}>
                Delete Details
                </Button>{" "}
              </td></td>
        </tr>
        <tr>
          <td>Ajay</td>
          <td>Mr.</td>
          <td>Pune</td>
          <td>13-01-2023</td>
          <td>12-08-2022</td>
          <td><td>
              <Button variant="danger" style={{ float: "right" , background : "red"}}>
                Delete Details
                </Button>{" "}
              </td></td>
        </tr>
        <tr>
          <td>Ajay</td>
          <td>Mr.</td>
          <td>Pune</td>
          <td>13-01-2023</td>
          <td>12-08-2022</td>
          <td><td>
              <Button variant="danger" style={{ float: "right" , background : "red"}}>
                Delete Details
                </Button>{" "}
              </td></td>
        </tr> */}
        
      </tbody>
    </Table>
      </div>
    )
  }
}

export default Customers