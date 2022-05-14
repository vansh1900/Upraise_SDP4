import React, { useState, useEffect } from 'react'
import Orgheader from '../OrgHeader/Orgheader'
import axios from 'axios'

export default function Allrequests() {

    const [donations, setdonations] = useState([])

    const [orgdetails, setorgdetails] = useState(JSON.parse(localStorage.getItem('details')) || {})

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get(`http://localhost:9000/org/allRequests/${orgdetails.organization_name}`)
            .then((resp) => {
                setdonations(resp.data)
                console.log(resp.data);
            })
            .catch((Err) => {
                console.log("Error : ", Err);
            })
    }

    return (
        <div>
            <Orgheader />
            <div className='container'>
                <div>
                    <div className='row'>
                        <div >
                            {
                                donations.length>0 ?
                                    <div className='row'>
                                        {
                                            donations.map((data) =>
                                                <div className="col-lg-4 col-sm-6">
                                                    <div className="card" style={{ borderRadius: '7px', marginBottom: '15px' }}>
                                                        <div className="card-body">
                                                            <h5 className="card-title">
                                                                <div style={{ textAlign: 'center' }}>
                                                                    <b>{data.category}</b><br />
                                                                </div>
                                                            </h5>
                                                            <br />
                                                            <div>
                                                                <div style={{ display: 'inline-flex' }}>
                                                                    <b>Donator_Email: </b><p>{data.donator_email}</p>
                                                                </div>

                                                                <div style={{ display: 'inline-flex' }}>
                                                                    <b>Quantity: </b><p>{data.quantity}</p>
                                                                </div>
                                                                <div className='form-group'>
                                                                    <b>Description: </b><br />
                                                                    <textarea className='form-control' rows="3" disabled>{data.description_of_item}</textarea>
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
