import React, { useState, useEffect } from 'react'
import Admheader from '../AdmHeader/Admheader'
import axios from 'axios'

export default function Alldonations() {

    const [donations, setdonations] = useState([])



    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get('http://localhost:9000/admin/getAllDonations')
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
                                                            <h5 className="card-title">
                                                                <div style={{ textAlign: 'center' }}>
                                                                    <b>{data.consumer_details}</b><br />
                                                                    <b>Organization</b>
                                                                </div>
                                                            </h5>
                                                            <br />
                                                            <div>
                                                                <div style={{ display: 'inline-flex' }}>
                                                                    <b>Donar Email: </b><p>{data.donator_email}</p>
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
                                                                    data.picked_by ?
                                                                        <div style={{ display: 'inline-flex' }}>
                                                                            <b>Volunteer: </b><p>{data.picked_by}</p>
                                                                        </div>
                                                                        : ""
                                                                }
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
