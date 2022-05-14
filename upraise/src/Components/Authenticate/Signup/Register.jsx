import React, { useState, useEffect } from 'react'
import './userregister.css'
import { Link } from 'react-router-dom';
import orgi from './images/organizationi.png';
import HomeHeader from '../HomeHeader/HomeHeader';

export default function Register() {
    return (
        <div>
            <HomeHeader />
            <section id="register" style={{marginTop: '50px'}} className="section-100 bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="card">
                                <img className="card-img-top" src={orgi} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Donator</h5>
                                        <p className="card-text">Donator Phase</p>
                                        <Link to="/UserRegister" className="btn btn-primary">Register</Link>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="card">
                            <img className="card-img-top" src={orgi} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Volunteer</h5>
                                        <p className="card-text">Volunteer phase</p>
                                        <Link to="/volntregister" className="btn btn-primary">Register</Link>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="card">
                            <img className="card-img-top" src={orgi} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Organization</h5>
                                        <p className="card-text">Organization phase</p>
                                        <Link to="/orgregister" className="btn btn-primary">Register</Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
