import React, { Component } from "react";
import "./tempform.css";

import {AddProvidersDetails} from "../services/addApi.js"

class EditProvidersform extends Component {
  constructor()
  {
    super()
    this.state={
      Name : '',
      Initial : '',
      Location: '',
      CurrentDate : '',
      UpdateDate : '',
      AccountManager : '',
      TechnicalContactManager : '',

    }
   }

  //  providersHandler =  async (e) =>{
  //     e.preventDefault()
  //    const obj = {
  //       name : this.state.name,
  //       Initial : this.state.Initial,
  //       Location: this.state.Location,
  //       CurrentDate : this.state.CurrentDate,
  //       UpdateDate : this.state.UpdateDate,
  //       AccountManager : this.state.AccountManager,
  //       TechnicalContactManager : this.state.TechnicalContactManager,
  //    }
  //   const result = await axios.post('http://localhost:5000/providershandler',obj) 
  //   console.log("provisers submit result:",result)

  // }
  
handleChange=(e)=>{
  this.setState({[e.target.name]:e.target.value});

}



handleSubmit = async (e)=>{
  e.preventDefault()
 await AddProvidersDetails(this.state)
console.log(this.state)
window.location.href = "/ProvidersDetails";
}

  render() {
    return (
      <div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-5">
              <div class="card">
                <h2 class="card-title text-center">
                Add Providers Deatils
                </h2>
                <div class="card-body py-md-4">
                  <form _lpchecked="1" onSubmit={this.handleSubmit}>
                    <div class="form-group">
                      <input
                      required
                        type="text"
                        class="form-control"
                        placeholder="Name"
                        name="Name"
                        onChange={this.handleChange}

                      />
                    </div>
                    <div class="form-group">
                      <select
                      required
                        class="form-select form-control"
                        aria-label="Default select example"
                        name="Initial"
                        onChange={this.handleChange}

                      >
                        <option selected disabled>Initials</option>
                        <option value="Mr." required>Mr.</option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="Ms.">Ms.</option>
                      </select>
                    </div>

                    <div class="form-group">
                      <input
                      required
                        type="text"
                        class="form-control"
                        placeholder="Location"
                        name="Location"
                        onChange={this.handleChange}

                      />
                    </div>
                    <div class="form-group form-control">
                      <label htmlFor="" style={{color : 'grey'}}>Current Date</label>
                      <input
                        required
                        type="date"
                        placeholder="Current Date"
                        name="CurrentDate"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="form-group form-control">
                      <label htmlFor="" style={{color : 'grey'}}>Updated Date</label>
                      <input
                        required
                        type="date"
                        placeholder="Current Date"
                        name="UpdateDate"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="form-group">
                      <input
                      required
                        type="text"
                        class="form-control"
                        placeholder="Account Manager"
                        name="AccountManager"
                        onChange={this.handleChange}

                      />
                    </div>
                    <div class="form-group">
                      <input
                      required
                        type="text"
                        class="form-control"
                        placeholder="Technical Contact Manager"
                        name="TechnicalContactManager"
                        onChange={this.handleChange}

                      />
                    </div>
                   
                    <div class="d-flex flex-row align-items-center justify-content-between">
                      <button class="btn btn-primary" type="submit">Confirm</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProvidersform;
