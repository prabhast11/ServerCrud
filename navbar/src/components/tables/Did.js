import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Pagination from "./Pagination";
import { getdidDetails } from "../../services/getApi";
import { deletedidDetails } from "../../services/deleteApi";
import DidForm from "../FORMS/DidForm";
import EditDidForm from "../EditFormss/EditDidForm";
import { updateDidData } from "../../services/EditApidataadd";

import { AuthContext } from '../context/Auth-Context'

class Did extends Component {

  static contextType=AuthContext;


  state = {
    result: [],
    data: [],
    currentPage: 0,
    limit: 3,
    count: 1,
    selectedOption: "",
    listing123: "",
    modelResult: "",
    modelResult1: [{ listing: 5 }],
  };

  handleEntriesPerPageChange = async (event) => {
    await this.setState({ limit: event.target.value });
    const res = await getdidDetails(this.state.limit, this.state.currentPage);
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
    console.log("Printing updated array", this.state.result);
  };

  handleSubmit = async (index, e) => {
    if (
      this.state.result[index].listing === "" ||
      this.state.result[index].used === ""
    ) {
      window.alert("data cannot be empty");
    } else {
      e.preventDefault();
      var data = await updateDidData(
        this.state.result[index],
        this.state.result[index]._id
      );
      console.log("updated data", data);

      window.location.href = "/didDetails";
    }
  };

  fetchData1 = async (pno) => {
    await this.setState({ currentPage: pno });
    const res = await getdidDetails(this.state.limit, this.state.currentPage);
    await this.setState({ result: res.data.response });
    await this.setState({ count: res.data.count });
   const res1 = await getdidDetails(this.state.count, 0);
    await this.setState({ modelResult: res1.data.response }, () => {
    });
  };

  componentDidMount() {
    const fetchData = async () => {
      const res = await getdidDetails(this.state.limit, this.state.currentPage);
      await this.setState({ result: res.data.response });
      await this.setState({ count: res.data.count });
      const res1 = await getdidDetails(this.state.count, 0);
      await this.setState({ modelResult: res1.data.response }, () => {
      });
    };
    fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.result !== this.state.result) {
      const fetchData = async () => {};
      fetchData();
    }
  }

  delete = async (id) => {
    const  token=this.context.token


    var result = window.confirm("Want to delete?");
    if (result) {
      await deletedidDetails(id, token);
      const res = await getdidDetails(this.state.limit, this.state.currentPage);
      await this.setState({ result: res.data.response });
      await this.setState({ count: res.data.count });
    }
  };
  handleNextPage = () => {
    this.setState(
      (prevState) => ({
        currentPage: prevState.currentPage + 1,
      }),
      this.fetchData
    );
  };
  getdidDetails;
  handlePreviousPage = () => {
    this.setState(
      (prevState) => ({
        currentPage: prevState.currentPage - 1,
      }),
      this.fetchData
    );
  };

  handleChange = async (event) => {
    event.preventDefault();
    await this.setState({ limit: parseInt(event.target.value) });
  };

  updateListing123 = async (event, index) => {
    event.preventDefault();
    await this.setState({ listing123: this.state.result[index].listing });
  };

  render() {
    let myvar;
    return (
      <div style={{ padding: "20px" }}   >
        <div
          style={{
            float: "right",
            position: "relative",
            margin: "0px",
            padding: "0px",
            top: "0px",
          }}
        >
          <DidForm />
        </div>
        <Table striped bordered hover>
          <thead>
            <tr className=" ">
              <th>Listing</th>
              <th>USED</th>
              <th className="">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {this.state.result.map((res, index, arr) => (
              <tr key={index}>
                <td>{res.listing}</td>
                <td>{res.used}</td>
                <td>
                  <td>
                    <DeleteOutlineIcon
                      tool
                      onClick={() => this.delete(res._id)}
                      style={{ color: "blueviolet", cursor: "pointer" }}
                    />
                  </td>
                  <td>
                    <EditDidForm
                      index={index}
                      arr={arr}
                      func={this.propsHandler}
                      func1={this.handleSubmit}
                    />
                  </td>
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
            width: "80px",
          }}
        >
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={7}>7</option>
        </select>

        <Pagination
          func={this.fetchData1}
          totalPage={Math.ceil(this.state.count / this.state.limit)}
        ></Pagination>
      </div>
    );
  }
}

export default Did;
