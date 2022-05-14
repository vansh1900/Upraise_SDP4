import React from 'react'
import { Link } from 'react-router-dom';
import './usernav.css';

export default function Usernav() {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-sm">
                    <a className="navbar-brand logo" to="/user"><span className="logo-font">Upraise</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <i className="fa fa-bars fa-lg"></i>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-right" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Donate</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/mydonations">My_Donations</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/userprofile">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}