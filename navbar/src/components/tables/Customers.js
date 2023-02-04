import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Pagination from "./Pagination";
import { getCustomerDetails } from "../../services/getApi";
import { deleteCustomerDetails } from "../../services/deleteApi.js";
import Customersform from "../FORMS/CustomersForm";
import EditCustomersForm from "../EditFormss/EditCustomersForm";
import { updateCustomerData } from "../../services/EditApidataadd";

class Customers extends Component {
  state = {
    result: [],
    currentPage: 0,
    limit: 3,
    count: 1,
  };

  handleEntriesPerPageChange = async (event) => {
    await this.setState({ limit: event.target.value });

    const res = await getCustomerDetails(
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
      this.state.result[index].License === "" ||
      this.state.result[index].ChannelPartner === "" ||
      this.state.result[index].DidCount === "" ||
      this.state.result[index].CpassInfo === "" ||
      this.state.result[index].AccountManager === ""
    ) {
      window.alert("data cannot be empty");
    } else {
      e.preventDefault();
      var data = await updateCustomerData(
        this.state.result[index],
        this.state.result[index]._id
      );
      console.log("updated data", data);

      window.location.href = "/CustomerDetails";
    }
  };

  fetchData1 = async (pno) => {
    await this.setState({ currentPage: pno });
    const res = await getCustomerDetails(
      this.state.limit,
      this.state.currentPage
    );
    await this.setState({ result: res.data.response });
    await this.setState({ count: res.data.count });
    console.log("providers", this.state.result);
  };

  componentDidMount() {
    const fetchData = async () => {
      const res = await getCustomerDetails(
        this.state.limit,
        this.state.currentPage
      );
      await this.setState({ result: res.data.response });
      await this.setState({ count: res.data.count });
      console.log("customers", this.state.result);
    };
    fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.result !== this.state.result) {
      const fetchData = async () => {
        await getCustomerDetails(this.state.limit, this.state.currentPage);
      };
      fetchData();
    }
  }

  //delete api
  delete = async (id) => {
    var result = window.confirm("Want to delete?");
    if (result) {
      await deleteCustomerDetails(id);
      const res = await getCustomerDetails(
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
          <Customersform />
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>NAME</th>
              <th>LICENSE</th>
              <th>CHANNEL PARTNER</th>
              <th>CPASS INFO</th>
              <th>DID COUNT</th>
              <th>ACCOUNT MANAGER</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {this.state.result.map((res, index, arr) => (
              <tr>
                <td>{res.Name}</td>
                <td>{res.License}</td>
                <td>{res.ChannelPartner}</td>
                <td>{res.CpassInfo}</td>
                <td>{res.DidCount}</td>
                <td>{res.AccountManager}</td>
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
                      <EditCustomersForm
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

export default Customers;
