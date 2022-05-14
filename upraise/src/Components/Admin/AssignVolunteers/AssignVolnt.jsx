import React, { useState, useEffect } from 'react'
import Admheader from '../AdmHeader/Admheader'
import axios from 'axios'

export default function AssignVolnt() {

    const [volunteers, setvolunteers] = useState([])



    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get('http://localhost:9000/admin/signup_confirm/volunteer')
            .then((resp) => {
                setvolunteers(resp.data)
                console.log(resp.data);
            })
            .catch((Err) => {
                console.log("Error : ", Err);
            })
    }

    const AssignVolunteer = (volemail) => {
        axios.put(`http://localhost:9000/admin/volunteer_sign_up/${volemail}`)
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
            <Admheader />
            <div className='container'>
                <div>
                    <div className='row'>
                        <div >
                            {
                                volunteers.length>0 ?
                                    <div className='row'>
                                        {
                                            volunteers.map((data) =>
                                                <div className="col-lg-4 col-sm-6">
                                                    <div className="card" style={{ borderRadius: '7px', marginBottom: '15px' }}>
                                                        <div className="card-body">
                                                            <h5 className="card-title">
                                                                <div style={{ textAlign: 'center' }}>
                                                                    <b>Volunteer</b><br/>
                                                                    <b>{data.username}</b>
                                                                </div>
                                                            </h5>
                                                            <br />
                                                            <div>
                                                                <div style={{ display: 'inline-flex' }}>
                                                                    <b>Email: </b><p>{data.email}</p>
                                                                </div>

                                                                <div style={{ display: 'inline-flex' }}>
                                                                    <b>Mobile: </b><p>{data.email}</p>
                                                                </div>
                                                                <div style={{ display: 'inline-flex' }}>
                                                                    <b>Address: </b><p>{data.mobile}</p>
                                                                </div>
                                                                <div style={{ display: 'inline-flex' }}>
                                                                    <b>prior_experience: </b><p>{data.prior_experience}</p>
                                                                </div>
                                                                <div>
                                                                    <button className='btn btn-secondary' onClick={(e) => { AssignVolunteer(data.email) }}>Assign</button>
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

                                            No new Volunteers has been registered
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
