import React, { useState, useEffect } from 'react'
import './mydonations.css'
import Usernav from '../UserNavbar/Usernav'
import axios from 'axios'

export default function Mydonations() {

  const [status, setstatus] = useState(false)
  const [userdetails, setuserdetails] = useState(JSON.parse(localStorage.getItem('details')) || {})
  const [donations, setdonations] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axios.get(`http://localhost:9000/user/getdonations/${userdetails.email}`)
      .then((resp) => {
        setdonations(resp.data)
        console.log(resp.data);
      })
      .catch((Err) => {
        console.log(Err);
      })

  }


  return (
    <div>
      <Usernav />
      <div className='container'>
        <div className='row'>
          {
            donations ?
              <div>
                {
                  donations.map((data) => 
                    <div className='card col-6' style={{padding: '30px'}}>
                      <div className='firstgrid'>
                        <div className='row'>
                          <div className='col-6'><b>Donated: </b><p>{data.category}</p></div>
                          <div className='col-6'><b>Quantity: </b><p> {data.quantity}</p></div>
                        </div>
                        <b>Description of item : </b><br/>
                        <textarea disabled className='form-control' rows="3">{data.description_of_item}</textarea>
                        <br/>
                        <div className='row'>
                          <div className='col-6'><b>Address provided: </b><p>{data.pickup_address}</p></div>
                          <div className='col-6'><b>Mobile: </b> <p>{data.mobile}</p></div>
                        </div>
                        <div>
                          <b>Pickup Status : </b>
                          {
                            !status ?
                              <div><p style={{ color: 'blue' }}>InProgress</p></div>
    
                              : <p style={{ color: 'green' }}>Received</p>}
                        </div>
                      </div>
                    </div>
                  )
                }
                </div>
              :
              <div>
                <div className='jumbotron'>
                  No donations till yet
                </div>
              </div>
          }
        </div>
      </div>
    </div>
  )
}
