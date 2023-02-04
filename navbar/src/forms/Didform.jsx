import React, { Component } from "react";
import "./tempform.css";

import {AdddidDetails} from "../services/addApi.js"

class Didform extends Component {
  constructor() {
    super();
    this.state = {
      listing: "",
      used: "",
    };
  }

  // didHandler = async (e) => {
  //   e.preventDefault();
  //   const obj = {
  //     listing: this.state.listing,
  //     used: this.state.used,
  //   };
  //  await AdddidDetails(obj)
  //   // const result = await axios.post("http://localhost:5000/didHaandler", obj);
  //   // console.log("DID submit result:", result);
  // };


  
handleChange=(e)=>{
  this.setState({[e.target.name]:e.target.value});

}



handleSubmit = async (e)=>{
  e.preventDefault()
 await AdddidDetails(this.state)
console.log(this.state)
window.location.href = "/didDetails";
}

  render() {
    return (
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-5">
            <div class="card">
              <h2 class="card-title text-center">Add DID Deatils</h2>
              <div class="card-body py-md-4">
                <form _lpchecked="1" onSubmit={this.handleSubmit}>
                  <div class="form-group">
                    <input
                    required
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Listing"
                      name="listing"
                      onChange={this.handleChange}

                    />
                  </div>
                  Used :
                  <div class="form-group form-control">
                    <input type="radio" id="yes" name="used" value="Yes" required
                    onChange={this.handleChange}
                    />
                    <label for="yes">Yes</label>
                    <br />
                    <input type="radio" id="no" name="used" value="No"
                     onChange={this.handleChange}
                   />
                    <label for="no">No</label>
                    <br />
                  </div>
                  <div class="d-flex flex-row align-items-center justify-content-between">
                    <button class="btn btn-primary" type="submit">
                      Confirm
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

export default Didform;
