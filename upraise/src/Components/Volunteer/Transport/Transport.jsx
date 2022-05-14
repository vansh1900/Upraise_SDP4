import React, { useState, useEffect } from 'react'
import VolHeader from '../v_header/VolHeader'
import axios from 'axios'

export default function Transport() {

  const [donations, setdonations] = useState([])
  const [userdetails, setuserdetails] = useState(JSON.parse(localStorage.getItem('details')) || {})



  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    axios.get('http://localhost:9000/volunteer/donations/available')
      .then((resp) => {
        setdonations(resp.data)
        console.log(resp.data);
      })
      .catch((Err) => {
        console.log("Error : ", Err);
      })
  }

  const SubmitRequest = (id, email) => {
    const obj =
    {
      "id": id,
      "email": userdetails.email
    }
    axios.put(`http://localhost:9000/volunteer/donation/accept`, obj)
      .then((resp) => {
        console.log(resp);
        getData()
      })
      .catch((Err) => {
        console.log("Errror", Err);
      })
  }


  return (
    <div>
      <VolHeader />
      <div className='container'>
        <div>
          <div className='row'>
            <div >
              {
                donations.length > 0 ?
                  <div className='row'>
                    {
                      donations.map((data) =>
                        <div key={data.donator_email} className="col-lg-4 col-sm-6">
                          <div className="card" style={{ borderRadius: '7px', marginBottom: '15px' }}>
                            <div className="card-body">
                              <h5 className="card-title">
                                <div>
                                  <b>Donator: </b><br/><p>{data.donator_email}</p>
                                </div>
                              </h5>
                              <br />
                              <div>
                                <div style={{ display: 'inline-flex' }}>
                                  <b>category: </b><p>{data.category}</p>
                                </div>

                                <div style={{ display: 'inline-flex' }}>
                                  <b>quantity: </b><p>{data.quantity}</p>
                                </div>
                                <div style={{ display: 'inline-flex' }}>
                                  <b>Address: </b><p>{data.pickup_address}</p>
                                </div>
                                <div style={{ display: 'inline-flex' }}>
                                  <b>Description: </b><p>{data.description_of_item}</p>
                                </div>
                                <div>
                                  <button className='btn btn-secondary' onClick={(e) => { SubmitRequest(data._id,data.email) }}>Pick</button>
                                </div>
                              </div>
                              <br />
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
