import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Pagination from "./Pagination";
import { getTelcoProviderDetails } from '../../services/getApi';
import { deleteTelcoProviderDetails } from '../../services/deleteApi';
import TelcoProvidersForm from '../FORMS/TelcoProvidersForm'
import EditTelcoProvidersForm from '../EditFormss/EditTelcoProvidersForm'
import { updateTelcoProviderData } from "../../services/EditApidataadd";
import { AuthContext } from '../context/Auth-Context'


class Telcoprovider extends Component {
    static contextType=AuthContext;
    state={
    result:[],
    MediaIP : [],
    limit : 3,
    currentPage:0,
    count : 1
}

handleEntriesPerPageChange = async (event) =>{
  await this.setState({limit : event.target.value})
   const res=await getTelcoProviderDetails(this.state.limit, this.state.currentPage);
   await this.setState({result:res.data.response})
   await this.setState({count:res.data.count}) 
}

propsHandler = async (myarr,index, e) =>{
  await  this.setState((state, props) => {
  const updatedArray = state.result.map((item, i) => {
    if (i !== index) return item;
    return { ...item, [e.target.name]: e.target.value };
  });
  return { result: updatedArray };
});
}

multiSelectHandler = async(data, index) =>{
  this.setState((state) => {
    const result = [...state.result];
    result[index] = { ...result[index], MediaIP : data.MediaIP };
    return { result };
  });


}


handleSubmit = async (index,e) => {
if (
  this.state.result[index].Name === "" ||
  this.state.result[index].IP === "" ||
  this.state.result[index].Port === "" ||
  this.state.result[index].User === "" ||
  this.state.result[index].Password === "" ||
  this.state.result[index].SBCIPAndPort === "" ||
  this.state.result[index].MediaIP.length === 0 ||
  this.state.result[index].GatewayIP === "" ||
  this.state.result[index].Domain === "" ||
  this.state.result[index].AccountManager === "" ||
  this.state.result[index].escalation_matrix_name === "" ||
  this.state.result[index].escalation_matrix_email === "" ||
  this.state.result[index].escalation_matrix_phoneno === "" 
) {
  window.alert('data cannot be empty')
} else {
  e.preventDefault();
  var data = await updateTelcoProviderData(this.state.result[index], this.state.result[index]._id);
    window.location.href = "/telcoProviderDetails";
}
};

fetchData1=async(pno)=>{
  await this.setState({currentPage : pno})
  const res=await getTelcoProviderDetails(this.state.limit, this.state.currentPage);
await this.setState({result:res.data.response})
      await this.setState({count:res.data.count})
 }

  componentDidMount(){
    const fetchData=async()=>{
      const res=await getTelcoProviderDetails(this.state.limit, this.state.currentPage);
     await this.setState({result:res.data.response})
      await this.setState({count:res.data.count})
    }
    fetchData()
    
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.result !== this.state.result) {
      const fetchData=async()=>{
        await getTelcoProviderDetails(this.state.limit, this.state.currentPage);
        }
      fetchData()
        }
  }

  delete = async(id)=>{
    const  token=this.context.token

  var result = window.confirm("Want to delete?");
  if (result) {
    await deleteTelcoProviderDetails(id, token);
    const res=await getTelcoProviderDetails(this.state.limit, this.state.currentPage);
    await this.setState({result:res.data.response})
        await this.setState({count:res.data.count})
}
 }

  render() {
    return (
      <div style={{ padding: "20px" }}  >
         <div
          style={{
            float: "right",
            position: "relative",
            margin: "0px",
            padding: "0px",
            top: "0px",
          }}
        >
          <TelcoProvidersForm/>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>NAME</th>
              <th>IP</th>
              <th>PORT</th>
              <th>USERNAME</th>
              <th>SBC IP AND PORT</th>
              <th>MEDIA IP</th>
              <th>GATEWAY IP</th>
              <th>DOMAIN</th>
              <th>ACCOUNT MANAGER</th>
              <th>TECHNICAL MANAGER</th>
              <th>ESCALATION MATRIX(name,email,phone no)</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
          {
              this.state.result.map((res,index,arr)=>(
                <tr key={index}>
                  <td>{res.Name}</td>
                  <td>{res.IP}</td>
                  <td>{res.Port}</td>
                  <td>{res.User}</td>
                  <td>{res.SBCIPAndPort}</td>
                  <td> {res.MediaIP.map((val,i)=>(
                    <td>{res.MediaIP.length === i+1   ?  val:  `${val},`}</td>
                  ))}</td>
                  <td>{res.GatewayIP}</td>
                  <td>{res.Domain}</td>
                  <td>{res.AccountManager}</td>
                  <td>{res.TechnicalManager}</td>
                  <td>{res.escalation_matrix_name},{res.escalation_matrix_email},{res.escalation_matrix_phoneno}</td>
                  <td>
                  <tr  key={index} className=''>
                <td>
                  <DeleteOutlineIcon onClick={()=>this.delete(res._id)} tool style={{ color: "blueviolet", cursor : "pointer" }} />
                </td>
                <td>
               <EditTelcoProvidersForm 
                index={index}
                arr={arr}
                func={this.propsHandler}
                func1={this.handleSubmit}
                func2={this.multiSelectHandler}
                MediaIP={res.MediaIP}
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

export default Telcoprovider;
