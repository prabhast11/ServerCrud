import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "../Table.css";
import Models from "../../Models";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Pagination from "./Pagination";
import { updateServerData } from "../../services/EditApidataadd";
import { getServerDetails } from "../../services/getApi";
import { deleteServerDetails } from "../../services/deleteApi.js";
import { getServerData } from "../../services/EditApi";
import ServerDetailsModel from "../FORMS/ServerForm";
import EditServerDetailsForm from "../EditFormss/EditServerDetailsForm";

class Serverdetails extends Component {
  constructor() {
    super();
    this.state = {
      showTooltip: false,
      result: [],
      presult: [],
      id: null,
      ipAddresses: "",
      currentPage: 0,
      limit: 3,
      count: 1,
    };
  }

  handleEntriesPerPageChange = async (event) => {
    await this.setState({ limit: event.target.value });
    const res = await getServerDetails(
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
    if ( this.state.result[index].ipAddresses === "" ||
      this.state.result[index].providers === "" ||
      this.state.result[index].type === "" ||
      this.state.result[index].Interfaces === "" ||
      this.state.result[index].Ram === "" ||
      this.state.result[index].Core === "" ||
      this.state.result[index].Hdd === "" ||
      this.state.result[index].ServerType === ""
    ) {
      window.alert("data cannot be empty");
    } 
    else {
      e.preventDefault();
      var data = await updateServerData(
        this.state.result[index],
        this.state.result[index]._id
      );
      console.log("updated data", data);

      window.location.href = "/ServerDetails";
    }
  };

  handleMouseEnter = () => {
    this.setState({ showTooltip: true });
  };

  handleMouseLeave = () => {
    this.setState({ showTooltip: false });
  };

  rowEvents = {
    onClick: (e, row, rowIndex) => {
      this.setState({
        brand: this.state.cars[rowIndex].brand,
        model: this.state.cars[rowIndex].model,
        color: this.state.cars[rowIndex].color,
        topspeed: this.state.cars[rowIndex].top,
      });
    },
  };

  myClickHandler = (e, row) => {
    e.preventDefault();
    this.setState({ ipAddresses: row.ipAddresses });
    console.log("pt e.target.value", row);
  };

  fetchData1 = async (pno) => {
    await this.setState({ currentPage: pno });
    const res = await getServerDetails(
      this.state.limit,
      this.state.currentPage
    );
    await this.setState({ result: res.data.response });
    await this.setState({ count: res.data.count });
    console.log("fetch data of server details :", this.state.result);
  };

  componentDidMount() {
    const fetchData = async () => {
      const res = await getServerDetails(
        this.state.limit,
        this.state.currentPage
      );
      await this.setState({ result: res.data.response });
      await this.setState({ count: res.data.count });
      console.log("fetch data of server details :", this.state.result);
    };

    fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.result !== this.state.result) {
      // Now fetch the new data here.
      const fetchData = async () => {
        await getServerDetails(this.state.limit, this.state.currentPage);
      };
      fetchData();
    }
  }

  delete = async (id) => {
    var result = window.confirm("Want to delete?");
    if (result) {
      await deleteServerDetails(id);
      const res = await getServerDetails(
        this.state.limit,
        this.state.currentPage
      );

      await this.setState({ result: res.data.response });
      await this.setState({ count: res.data.count });
    }
  };

  render() {
    const columns = [
      { dataField: "Core", text: "CORE" },
      { dataField: "Hdd", text: "HDD" },
      { dataField: "Interfaces", text: "INTERFACES" },
      { dataField: "Ram", text: "RAM" },
      { dataField: "ServerType", text: "SERVER TYPE" },
      { dataField: "ServerType", text: "IP-ADDRESS" },
      { dataField: "Action", text: "Action" },
    ];

    return (
      <div className="">
        <div
          style={{
            float: "right",
            position: "relative",
            margin: "0px",
            padding: "0px",
            top: "0px",
          }}
        >
          <ServerDetailsModel />
        </div>
        <Table striped bordered hover className="" w-auto>
          <thead>
            <tr>
              <th>IP ADDRESS</th>
              <th>PROVIDERS</th>
              <th>TYPE</th>
              <th>INTERFACES</th>
              <th>RAM</th>
              <th>CORE</th>
              <th>HDD</th>
              <th>SERVER TYPE</th>
              <th colSpan="2">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {this.state.result.map((res, index, arr) => (
              <tr key={index}>
                <td>{res.ipAddresses}</td>
                <td>{res.providers}</td>
                <td>{res.type}</td>
                <td>{res.Interfaces}</td>
                <td>{res.Ram}</td>
                <td>{res.Core}</td>
                <td>{res.Hdd}</td>
                <td>{res.ServerType}</td>
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
                      <EditServerDetailsForm
                        index={index}
                        arr={arr}
                        func={this.propsHandler}
                        func1={this.handleSubmit}
                        id={res._id}
                        ipAddresses={res.ipAddresses}
                        providers={res.providers}
                        type={res.type}
                        Interfaces={res.Interfaces}
                        Ram={res.Ram}
                        Core={res.Core}
                        Hdd={res.Hdd}
                        ServerType={res.ServerType}
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

export default Serverdetails;
