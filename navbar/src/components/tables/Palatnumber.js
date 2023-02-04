import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Pagination from "./Pagination";
import { getPalatNumberDetails } from "../../services/getApi";
import { updatePalatNumberData } from "../../services/EditApidataadd";
import { getPalatNumberDetailsCount } from "../../services/getApi";
import { deletePalatNumberDetails } from "../../services/deleteApi";
import PalModel from "../FORMS/PalatNumberForm";
import EditPalatNumberForm from "../EditFormss/EditPalatNumberForm";
import PalatNumberForm from "../FORMS/PalatNumberForm";
import { event } from "jquery";

class Palatnumber extends Component {
  state = {
    result: [],
    limit: 3,
    currentPage: 0,
    count: 1,
  };

  handleEntriesPerPageChange = async (event) => {
    await this.setState({ limit: event.target.value });

    const res = await getPalatNumberDetails(
      this.state.limit,
      this.state.currentPage
    );
    await this.setState({ result: res.data.response });
    await this.setState({ count: res.data.count });
  };

  fetchData1 = async (pno) => {
    await this.setState({ currentPage: pno });

    const res = await getPalatNumberDetails(
      this.state.limit,
      this.state.currentPage
    );

    this.setState({ result: res.data.response });
    this.setState({ count: res.data.count });
    console.log("fetch data of server details :", this.state.result);
    console.log("fetch data of server details count :", this.state.limit);
  };

  propsHandler = async (myarr, index, e) => {
    console.log("updated array from edit form", e.target.name);
    console.log("updated array from edit form", myarr, index, event);
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
      this.state.result[index].did_number === "" ||
      this.state.result[index].channel === ""
    ) {
      window.alert("data cannot be empty");
    } else {
      e.preventDefault();
      var data = await updatePalatNumberData(
        this.state.result[index],
        this.state.result[index]._id
      );
      console.log("updated data", data);
      window.location.href = "/PalatNumberDetails";
    }
  };

  componentDidMount() {
    const fetchData = async () => {
      const res = await getPalatNumberDetails(
        this.state.limit,
        this.state.currentPage
      );
      console.log("printing only res ahter 10:00 o clock", res);
      await this.setState({ result: res.data.response });
      await this.setState({ count: res.data.count });
      console.log("palat no  final data", this.state.result);
      console.log("palat no  final limit", this.state.limit);
    };
    fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.result !== this.state.result) {
      const fetchData = async () => {
        await getPalatNumberDetails(this.state.limit, this.state.currentPage);
      };
      fetchData();
    }
  }

  delete = async (id) => {

    console.log('...deleted id...', id)
    var result = window.confirm("Want to delete?");
    if (result) {
      console.log('...inside delete block...',result)
      await deletePalatNumberDetails(id);
      const res = await getPalatNumberDetails(
        this.state.limit,
        this.state.currentPage
      );
      await this.setState({ result: res.data.response });
      await this.setState({ count: res.data.count });
      console.log('.....data after deletion.......',this.state.result);
    }
  };

  render() {
    return (
      <div>
        <div
          style={{
            float: "right",
            position: "relative",
            margin: "0px",
            padding: "0px",
            top: "0px",
          }}
        >
          <PalatNumberForm />
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>DID NUMBER</th>
              <th>CHANNELS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {this.state.result.map((res, index, arr) => (
              <tr>
                <td>{res.did_number}</td>
                <td>{res.channel}</td>
                <td>
                  <tr className="">
                    <td>
                      <DeleteOutlineIcon
                        tool
                        onClick={() => this.delete(res._id)}
                        style={{ color: "blueviolet", cursor: "pointer" }}
                      />
                    </td>
                    <td>
                      <EditPalatNumberForm
                        index={index}
                        arr={arr}
                        func={this.propsHandler}
                        func1={this.handleSubmit}
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

export default Palatnumber;
