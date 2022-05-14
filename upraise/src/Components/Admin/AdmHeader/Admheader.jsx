import React from 'react'
import './admheader.css';
import { Link } from 'react-router-dom';

export default function Admheader() {
    return (
        <div>
            <div>
                <div>
                    <nav className="navbar navbar-expand-sm">
                        <a className="navbar-brand logo" to="/admin"><span className="logo-font" style={{ marginLeft: '20px' }}>Upraise</span></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                                <i className="fa fa-bars fa-lg"></i>
                            </span>
                        </button>
                        <div className="collapse navbar-collapse d-flex justify-content-right" id="navbarSupportedContent">
                            <ul className="navbar-nav" style={{ marginLeft: '800px' }}>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/assignvolunteer">Volunteer</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/assignorg">Organizations</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/newdonations">New_Donation</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/adm_alldonation">All_Donations</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}