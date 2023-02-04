import React,{Component} from "react";
import './Models2.css'

class Models2 extends Component {
    state = {  } 
    render() { 
        return (
            <div>

            
          <form class="civildaily-form">
          <div class="form-group">
            <input class="form-control" id="name" type="text" placeholder="" required/>
            <label for="name">Name</label>
          </div>
          <div class="form-group">
            <input class="form-control" id="email" type="email" required/>
            <label for="email">Email</label>
          </div>
          <div class="form-group">
            <input class="form-control" id="phone" type="text"/>
            <label for="phone">Phone</label>
          </div>
          <div class="form-group">
            <input class="form-control" id="company" type="text"/>
            <label for="company">Company Name</label>
          </div>
        </form>
        </div>
        );
    }
}
 
export default Models2;