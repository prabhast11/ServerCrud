import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Pagination from "./Pagination";
import { getdidDetails } from "../../services/getApi";
import { deletedidDetails } from "../../services/deleteApi";
import DidForm from "../FORMS/DidForm";
import EditDidForm from "../EditFormss/EditDidForm";
import { updateDidData } from "../../services/EditApidataadd";

class Did extends Component {
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
      console.log(
        "my acutal desired  inside fetch result 1",
        res1.data.response
      );
      console.log(
        "my acutal desired  inside fetch result 2",
        this.state.modelResult
      );
    });
    console.log("heloooooooooooooo");
  };

  componentDidMount() {
    const fetchData = async () => {
      const res = await getdidDetails(this.state.limit, this.state.currentPage);
      await this.setState({ result: res.data.response });
      await this.setState({ count: res.data.count });
      console.log("did", this.state.result);

      const res1 = await getdidDetails(this.state.count, 0);
      await this.setState({ modelResult: res1.data.response }, () => {
        console.log(
          "my acutal desired  inside fetch result 1",
          res1.data.response
        );
        console.log(
          "my acutal desired  inside fetch result 2",
          this.state.modelResult
        );
      });
    };
    fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    // var limit = 3
    if (prevState.result !== this.state.result) {
      const fetchData = async () => {};
      fetchData();
    }
  }

  delete = async (id) => {
    var result = window.confirm("Want to delete?");
    if (result) {
      await deletedidDetails(id);
      const res = await getdidDetails(this.state.limit, this.state.currentPage);
      await this.setState({ result: res.data.response });
      await this.setState({ count: res.data.count });
      console.log(this.state.result);
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
    console.log(
      "select option value and it's type is ",
      this.state.limit,
      typeof this.state.limit
    );
  };

  updateListing123 = async (event, index) => {
    event.preventDefault();
    await this.setState({ listing123: this.state.result[index].listing });
  };

  render() {
    let myvar;
    return (
      <div class="">
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
              <tr>
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
