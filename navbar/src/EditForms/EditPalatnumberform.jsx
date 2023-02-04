import React, { Component } from "react";
import "./tempform.css";
import {AddPalatNumberDetails} from "../services/addApi"

class EditPalatnumberform extends Component {
  constructor() {
    super();
    this.state = {
      did_number: "",
      channel: "",
    };
  }
  // palatNumberHandler = async (e) => {
  //   e.preventDefault();
  //   const obj = {
  //     did_number: this.state.did_number,
  //     channel: this.state.channel,
  //   };
  //   const result = await axios.post(
  //     "http://localhost:5000/telcoProviderHaandler",
  //     obj
  //   );
  //   console.log("Services submit result:", result);
  // };

  
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value,});
  
  }
  
  
  
  handleSubmit = async (e)=>{
    e.preventDefault()
   await AddPalatNumberDetails(this.state)
  console.log(this.state)
  window.location.href = "/PalatNumberDetails";
  }

  render() {
    return (
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-5">
            <div class="card">
              <h2 class="card-title text-center">Add Palat Number Deatils</h2>
              <div class="card-body py-md-4">
                <form _lpchecked="1" onSubmit={this.handleSubmit}>
                  <div class="form-group">
                    <input
                    required
                      type="number"
                      class="form-control"
                      placeholder="DID Number"
                      name="did_number"
                      onChange={this.handleChange}

                    />
                  </div>
                  <div class="form-group">
                    <input
                    required
                      type="number"
                      class="form-control"
                      placeholder="Channels"
                      name="channel"
                      onChange={this.handleChange}

                    />
                  </div>

                  <div class="d-flex flex-row align-items-center justify-content-between">
                    <button class="btn btn-primary" type="submit">
                      Confirm{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditPalatnumberform;
