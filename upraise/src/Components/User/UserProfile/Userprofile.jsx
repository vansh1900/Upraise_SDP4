import React, { useState, useEffect } from 'react'
import './userprofile.css'
import defaultpic from './defaultpicimg.png'
import Usernav from '../UserNavbar/Usernav'

export default function Userprofile() {

  const [username, setusername] = useState("")

  useEffect(() => {
    const det = JSON.parse(localStorage.getItem('details'));
    // console.log(det);
  }, [])

  return (
    <div>
      <Usernav />
      <div className="container">
        <br />
        <div className="profile">
          <div className="left">
            <div className="d-flex justify-content-center">
              <img src={defaultpic} />
            </div>
            <br/>
            <div className="d-flex justify-content-center">
              <form id="profileUpload">
                {/* <input type="file" className="fileinput" id="id_file" name="profilepic" accept="image/png, image/jpeg" /> */}
              </form>
            </div>
            <div>
              <div>
                <small style={{ color: 'rgb(73, 67, 67)' }}><i className="fa fa-user"></i> Name</small>
                <p>Imran Ali Khan</p>
              </div>
              <div>
                <small style={{ color: 'rgb(73, 67, 67)' }}><i className="fa fa-phone"></i> Phone</small>
                <p>6303488659</p>
              </div>
              <div>
                <small style={{ color: 'rgb(73, 67, 67)' }}><i className="fa fa-envelope"></i> Address</small>
                <p>mangalagiri</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div>
              <div class="d-flex justify-content-center">
                <ul id="nav-tabs" class="nav nav-pills">
                  <li class="active"><a data-toggle="tab" class="nav-link active" href="#account">Account</a></li>
                  <li><a data-toggle="tab" class="nav-link" href="#password">Password</a></li>
                </ul>
              </div>
            </div>
            <br /><br />
            <div className="tab-content">
              <div id="account" className="tab-pane fade in active show">
                <h3 className="m-b-10">Profile Details</h3>
                <form >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>User Name</label>
                        <input type="text" className="form-control" name="name" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Phone number</label>
                        <input type="tel" className="form-control" name="mobile" disabled/>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Address</label>
                        <textarea className='form-control' name="address" rows="3"></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Bio</label>
                        <textarea rows="3" className="form-control" name="bio"></textarea>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="btn btn-primary" type="submit" name="updatedetails">Update</button>
                    <span className="btn btn-secondary cancel" onclick="goBack()">Cancel</span>
                  </div>
                </form>
              </div>
              <div id="password" className="tab-pane fade">
                <h3 className="m-b-10">Change Password</h3>
                <form >
                  <div className="row">
                    <div className="col-md-10">
                      <div className="form-group">
                        <label>Old password</label>
                        <input type="password" className="form-control" name="oldpass" required />
                        <small style={{ color: 'red' }}>Error in old password</small>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="form-group">
                        <label>New password</label>
                        <input type="password" className="form-control" name="newpass" required />
                        <small style={{ color: 'red' }}>Error in old password</small>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="form-group">
                        <label>Confirm new password</label>
                        <input type="password" className="form-control" name="confirmpass" required />
                        <small style={{ color: 'red' }}>error in confirm password</small>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="btn btn-primary" type="submit" name="updatepassword">Update</button>
                    <span className="btn btn-secondary cancel" onclick="goBack()">Cancel</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}