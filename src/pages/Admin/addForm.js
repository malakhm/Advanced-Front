import React from 'react'
import './Styles/editForm.css'
const AddForm =() =>{
  
  return (
	<div class="form-bg container">
    <div class="container">
      <div class="row">
        <div class="col-md-offset-3 col-md-6">
          <div class="form-container">
            <h3 class="title">Register Company</h3>
            <form class="form-horizontal">
              <div class="form-group">
                <label>Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="User Name"
                />
              </div>
              <div class="form-group">
                <label>Email</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email Address"
                />
              </div>
              <div class="form-group">
                <label>Logo</label>
                <input
                  type="file"
                  class="form-control"
                  
                />
              </div>
              <div class="form-group">
                <label>Location</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Location"
                />
              </div>
              <div class="form-group">
                <label>Phone No.</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Phone Number"
                />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="password"
                class="form-control"
                placeholder="Password"
                />
              </div>
              
              <div class="form-group">
                <label>Confirm Password</label>
                <input type="password"
                 class="form-control"
                 placeholder="Confirm Password"
                 />
              </div>

              <div class="form-group">
                <label>Website Url</label>
                <input type="text"
                class="form-control"
                placeholder="https://www.google.com"
                />
              </div>
              
              <button class="btn signup">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AddForm
