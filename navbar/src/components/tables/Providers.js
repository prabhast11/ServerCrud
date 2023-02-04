import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../Table.css";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Pagination from "./Pagination";
import { getProvidersDetails } from "../../services/getApi";
import { deleteProvidersDetails } from "../../services/deleteApi.js";
import Providersform from "../FORMS/ProvidersForm";
import { updateProviderData } from "../../services/EditApidataadd";
import moment from "moment";
import EditProvidersForm from "../EditFormss/EditProvidersForm";
class Providers extends Component {
  state = {
    result: [],
    currentPage: 0,
    limit: 3,
    count: 1,
    toggle : false
  };

  handleEntriesPerPageChange = async (event) => {
    await this.setState({ limit: event.target.value });

    const res = await getProvidersDetails(
      this.state.limit,
      this.state.currentPage
    );
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
      this.state.result[index].Name === "" ||
      this.state.result[index].Initial === "" ||
      this.state.result[index].Location === "" ||
      this.state.result[index].CurrentDate === "" ||
      this.state.result[index].UpdateDate === "" ||
      this.state.result[index].AccountManager === "" ||
      this.state.result[index].TechnicalContactManager === "" 
    ) {
      window.alert("data cannot be empty");
    } else {
      e.preventDefault();
      var data = await updateProviderData(
        this.state.result[index],
        this.state.result[index]._id
      );
      console.log("updated data", data);

      // this.setState({toggle : ! this.state.toggle})

      window.location.href = "/ProvidersDetails";
    }
  };

  editClickHandler = async () => {
    console.log("you updated the edit data");
  };

  fetchData1 = async (pno) => {
    await this.setState({ currentPage: pno });
    const res = await getProvidersDetails(
      this.state.limit,
      this.state.currentPage
    );
    await this.setState({ result: res.data.response });
    await this.setState({ count: res.data.count });
  };

  componentDidMount() {
    const fetchData = async () => {
      const res = await getProvidersDetails(
        this.state.limit,
        this.state.currentPage
      );
      await this.setState({ result: res.data.response });
      await this.setState({ count: res.data.count });
    };
    fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.result !== this.state.result) {
      const fetchData = async () => {
        await getProvidersDetails(this.state.limit, this.state.currentPage);
      };
      fetchData();
    }
  }

  delete = async (id) => {
    var result = window.confirm("Want to delete?");
    if (result) {
      await deleteProvidersDetails(id);
      const res = await getProvidersDetails(
        this.state.limit,
        this.state.currentPage
      );
      await this.setState({ result: res.data.response });
      await this.setState({ count: res.data.count });
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
          {" "}
          <Providersform />
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>NAME</th>
              <th>INITIAL</th>
              <th>LOCATION</th>
              <th>CURRENT DATE</th>
              <th>UPDATE DATE</th>
              <th>ACCOUNT MANAGER</th>
              <th>TECHNICAL CONTACT MANAGER</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {this.state.result.map((res, index, arr) => (
              <tr>
                <td>{res.Name}</td>
                <td>{res.Initial}</td>
                <td>{res.Location}</td>
                <td>{moment(res.CurrentDate).utc().format("yyyy-MM-DD")}</td>
                <td>{moment(res.UpdateDate).utc().format("yyyy-MM-DD")}</td>
                <td>{res.AccountManager}</td>
                <td>{res.TechnicalContactManager}</td>
                <td>
                  <tr>
                    <td>
                      <DeleteOutlineIcon
                        onClick={() => this.delete(res._id)}
                        tool
                        style={{ color: "blueviolet", cursor: "pointer" }}
                      />
                    </td>
                    <td>
                      <EditProvidersForm
                        arr={arr}
                        index={index}
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

export default Providers;
