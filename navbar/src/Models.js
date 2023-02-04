import React from 'react';

// import './models.css'

//Importing Bootstrap 5
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
function Models() {
  
  return (
    <div className="App">
    <div class="container p-5">
        
         
         <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        AddDetails
         </button>

        
         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
               <h5 class="modal-title text-danger" id="exampleModalLabel">Add Details</h5>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
               <form>

               <div class="row">
                <div class="col">.
                <label for="exampleInputEmail1" class="form-label">IP Addresses</label>
                    <input type="text" class="form-control" aria-label="First name"/>
                </div>
                <div class="col">
                <label for="exampleInputEmail1" class="form-label">IP Addresses</label>
                    <input type="text" class="form-control"  aria-label="Last name"/>
                 </div>
                  </div>

                  
               <div class="row">
                <div class="col">
                <label for="exampleInputEmail1" class="form-label">IP Addresses</label>
                    <input type="text" class="form-control"  aria-label="First name"/>
                </div>
                <div class="col">
                <label for="exampleInputEmail1" class="form-label">IP Addresses</label>
                    <input type="text" class="form-control"  aria-label="Last name"/>
                 </div>
                  </div>

                  
               <div class="row">
                <div class="col">
                <label for="exampleInputEmail1" class="form-label">IP Addresses</label>
                    <input type="text" class="form-control"  aria-label="First name"/>
                </div>
                <div class="col">
                <label for="exampleInputEmail1" class="form-label">IP Addresses</label>
                    <input type="text" class="form-control"  aria-label="Last name"/>
                 </div>
                  </div>

                  
               <div class="row">
                <div class="col">
                <label for="exampleInputEmail1" class="form-label">IP Addresses</label>
                    <input type="text" class="form-control"  aria-label="First name"/>
                </div>
                <div class="col">
                <label for="exampleInputEmail1" class="form-label">IP Addresses</label>
                    <input type="text" class="form-control"  aria-label="Last name"/>
                 </div>
                  </div>





{/* 

                  <div class="row">
                  <div class="mb-3 col">
                     <label for="exampleInputEmail1" class="form-label">IP Addresses</label>
                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                     
                  </div>
                  <div class="mb-3">
                     <label for="exampleInputPassword1" class="form-label">Providers</label>
                     <input type="password" class="form-control input-sm " id="exampleInputPassword1" />
                  </div>
                  <div class="mb-3">
                     <label for="exampleInputPassword1" class="form-label">Type</label>
                     <input type="password" class="form-control" id="exampleInputPassword1" />
                  </div>
                  <div class="mb-3">
                     <label for="exampleInputPassword1" class="form-label">Interfaces</label>
                     <input type="password" class="form-control" id="exampleInputPassword1" />
                  </div>
                  <div class="mb-3">
                     <label for="exampleInputPassword1" class="form-label">RAM</label>
                     <input type="password" class="form-control" id="exampleInputPassword1" />
                  </div>
                  <div class="mb-3">
                     <label for="exampleInputPassword1" class="form-label">CORE</label>
                     <input type="password" class="form-control" id="exampleInputPassword1" />
                  </div>
                  <div class="mb-3">
                     <label for="exampleInputPassword1" class="form-label">HDD</label>
                     <input type="password" class="form-control" id="exampleInputPassword1" />
                  </div>
                  <div class="mb-3">
                     <label for="exampleInputPassword1" class="form-label">Server Type</label>
                     <input type="password" class="form-control" id="exampleInputPassword1" />
                  </div>
                  </div> */}
                  
                  <button type="submit" class="btn btn-primary">Login</button>
               </form>
               </div>
               <div class="modal-footer">
               <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
               </div>
            </div>
         </div>
         </div>
         </div>
        
    </div>
  );
}

export default Models;