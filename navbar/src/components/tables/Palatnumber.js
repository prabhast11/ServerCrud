import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Pagination from "./Pagination";
import { getPalatNumberDetails } from "../../services/getApi";
import { updatePalatNumberData } from "../../services/EditApidataadd";
import { deletePalatNumberDetails } from "../../services/deleteApi";
import EditPalatNumberForm from "../EditFormss/EditPalatNumberForm";
import PalatNumberForm from "../FORMS/PalatNumberForm";
import { AuthContext } from '../context/Auth-Context'


class Palatnumber extends Component {
  static contextType=AuthContext;
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
  };

  propsHandler = async (myarr, index, e) => {
    await this.setState((state, props) => {
      const updatedArray = state.result.map((item, i) => {
        if (i !== index) return item;
        return { ...item, [e.target.name]: e.target.value };
      });
      return { result: updatedArray };
    });
  };

  handleSubmit = async (index, e) => {
    if (
      this.state.result[index].did_number === "" ||
      this.state.result[index].channel === ""
    ) {
      window.alert("data cannot be empty");
    } else {
      var data = await updatePalatNumberData(
        this.state.result[index],
        this.state.result[index]._id
      );
      window.location.href = "/PalatNumberDetails";
    }
  };

  componentDidMount() {
    const fetchData = async () => {
      const res = await getPalatNumberDetails(
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
        await getPalatNumberDetails(this.state.limit, this.state.currentPage);
      };
      fetchData();
    }
  }

  delete = async (id) => {

    const  token=this.context.token

    var result = window.confirm("Want to delete?");
    if (result) {
      await deletePalatNumberDetails(id, token);
      const res = await getPalatNumberDetails(
        this.state.limit,
        this.state.currentPage
      );
      await this.setState({ result: res.data.response });
      await this.setState({ count: res.data.count });
    }
  };

  render() {
    return (
      <div style={{ padding: "20px" }} >
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
        <Table striped bordered hover  class="" >
          <thead>
            <tr>
              <th>DID NUMBER</th>
              <th>CHANNELS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {this.state.result.map((res, index, arr) => (
              <tr key={index}>
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
