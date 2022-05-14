import React, { useState, useEffect } from 'react'
import Admheader from '../AdmHeader/Admheader'
import axios from 'axios'

export default function AssignOrg() {

    const [organizations, setorganizations] = useState([])



    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get('http://localhost:9000/admin/signup_confirm/org')
            .then((resp) => {
                setorganizations(resp.data)
                console.log(resp.data);
            })
            .catch((Err) => {
                console.log("Error : ", Err);
            })
    }

    const AssignOrg = (orgemail) => {
        axios.put(`http://localhost:9000/admin/org_sign_up/${orgemail}`)
            .then((resp) => {
                console.log(resp);
                getData();
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
                                organizations.length>0 ?
                                    <div className='row'>
                                        {
                                            organizations.map((data) =>
                                                <div className="col-lg-4 col-sm-6">
                                                    <div className="card" style={{ borderRadius: '7px', marginBottom: '15px' }}>
                                                        <div className="card-body">
                                                            <h5 className="card-title">
                                                                <div style={{ textAlign: 'center' }}>
                                                                    <b>{data.organization_name}</b><br />
                                                                    <b>Organization</b>
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
                                                                <div>
                                                                    <button className='btn btn-secondary' onClick={(e) => { AssignOrg(data.email) }}>Assign</button>
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

                                        No new Organizations has been registered
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
