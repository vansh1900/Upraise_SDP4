import React, { useState, useEffect } from 'react'
import Admheader from '../AdmHeader/Admheader'
import axios from 'axios'

export default function NewDonations() {

  const [donations, setdonations] = useState([])
  const [organizations, setorganizations] = useState([])
  const [consumer_details, setconsumer_details] = useState([])

  useEffect(() => {
    getData();
    getAllOrg();
  }, [])

  const getData = () => {
    axios.get('http://localhost:9000/admin/getNewDonations')
      .then((resp) => {
        setdonations(resp.data)
        console.log(resp.data);
      })
      .catch((Err) => {
        console.log("Error : ", Err);
      })
  }

  const getAllOrg = () => {
    axios.get('http://localhost:9000/admin/getOrganizations')
      .then((resp) => {
        setorganizations(resp.data)
        console.log(resp.data);
      })
      .catch((Err) => {
        console.log("Error : ", Err);
      })
  }

  const updateDonation = (id) => {
    console.log(id)
    const obj = {
      "consumer_details":consumer_details
    }
    axios.put(`http://localhost:9000/admin/updateDonations/${id}`,obj)
      .then((resp) => {
        getData()
        console.log(resp.data);
      })
      .catch((Err) => {
        console.log("Error : ", Err);
      })
  }

  return (
    <div>
      <Admheader />
      <div className='container'>
        <div>
          <div className='row'>
            <div >
              {
                donations.length > 0 ?
                  <div className='row'>
                    {
                      donations.map((data) =>
                        <div className="col-lg-4 col-sm-6">
                          <div className="card" style={{ borderRadius: '7px', marginBottom: '15px' }}>
                            <div className="card-body">
                              <br />
                              <div>
                                <div style={{ display: 'inline-flex' }}>
                                  <b>Donar_Email: </b><p>{data.donator_email}</p>
                                </div>

                                <div style={{ display: 'inline-flex' }}>
                                  <b>Category: </b><p>{data.category}</p>
                                </div>
                                <div style={{ display: 'inline-flex' }}>
                                  <b>Quantity: </b><p>{data.category}</p>
                                </div>
                                <div style={{ display: 'inline-flex' }}>
                                  <b>Address: </b><p>{data.pickup_address}</p>
                                </div>
                                {
                                  data.picked_by?
                                  <div style={{ display: 'inline-flex' }}>
                                    <b>Volunteer: </b><p>{data.picked_by}</p>
                                  </div>
                                :""
                                }
                                {
                                  organizations?
                                  <div>
                                      <select name="organization" className='form-control' value={consumer_details} onChange={(e) => {setconsumer_details(e.target.value)}}>
                                        <option value="" disabled>Select Organization</option>
                                      {
                                        organizations.map((org) => 
                                          <option value={org.organization_name}>{org.organization_name}</option>
                                        )
                                      }
                                      </select>
                                  </div>
                                :""}
                              </div>
                              <br />
                              <div>
                                <button className='btn btn-primary' onClick={()=>{updateDonation(data._id)}}>Assign</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  </div>
                  :
                  <div>
                    <div className='jumbotron'>

                      No new donations has been registered
                    </div>
                  </div>
              }

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
