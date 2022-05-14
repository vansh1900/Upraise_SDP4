import React, { useState, useEffect } from 'react'
import './donate.css';
import Usernav from '../UserNavbar/Usernav';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Donate() {

  const [category, setcategory] = useState("")
  const [quantity, setquantity] = useState("")
  const [description, setdescription] = useState("")
  const [address, setaddress] = useState("")
  const [userdetails, setuserdetails] = useState(JSON.parse(localStorage.getItem('details')) || {})
  const [mobile, setmobile] = useState()
  const [errormessage, seterrormessage] = useState("")
  const [successmessage, setsuccessmessage] = useState("")

  useEffect(() => {
    console.log(userdetails);
  }, [])

  const DonateHandle = () => {
    const obj = {
      "donator_email": userdetails.email,
      "category": category,
      "quantity": quantity,
      "description_of_item": description,
      "pickup_address": address,
      "mobile": mobile
    }

    axios.post('http://localhost:9000/user/donations/add', obj)
      .then((resp) => {
        console.log(resp);
        seterrormessage("")
        setcategory("")
        setquantity("")
        setaddress("")
        setmobile("")
        setdescription("")
        setsuccessmessage("Thank you! Your donation helps us a lot and please wait our Valunteer approaches you and collect them.")
      })
      .catch((Err) => {
        setsuccessmessage("")
        seterrormessage("Please try agian")
        console.log(Err);
      })

  }


  return (
    <div>
      <Usernav />
      <div>
        {
          errormessage ?
            <div>
              <div className="alert alert-danger">
                {errormessage}
              </div>
            </div>
            : ""}
        {
          successmessage ?
            <div>
              <div className="alert alert-success">
                {successmessage}
              </div>
            </div>
            : ""}
        <div className="container">
          <div className="signupform">

            <h3 className="heading">Donate</h3>
            <div className="main">
              <div className="form-group">
                <select name='category' className='form-control' value={category} onChange={(e) => { setcategory(e.target.value) }}>
                  <option value="" disabled>click to select</option>
                  <option value="clothes">Clothes</option>
                  <option value="furniture">Furniture</option>
                  <option value="vessels">Vessels</option>
                  <option value="electronic_items">Electronic Items</option>
                  <option value="toys">Toys</option>
                  <option value="footware">Footware</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div className="form-group">
                <input type="text" name="quantity" placeholder="Quantity" value={quantity} onChange={(e) => { setquantity(e.target.value) }} className="form-control" required />
              </div>
              <div className="form-group">
                <input type="tel" className="form-control" placeholder="Mobile Number" value={mobile} onChange={(e) => { setmobile(e.target.value) }} required />

              </div>
              <div className="form-group">
                <textarea placeholder='Any description...' className="form-control" rows="3" value={description} onChange={(e) => { setdescription(e.target.value) }} required></textarea>

              </div>
              <div className="form-group">
                <input type="text" placeholder="Pickup Address" className="form-control" value={address} onChange={(e) => { setaddress(e.target.value) }} required />
              </div>
              <button className="btn btn-primary" type="submit" onClick={() => { DonateHandle() }}>Donate</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
