import React from 'react'
import { Link } from 'react-router-dom';
import './vheader.css';

export default function VolHeader() {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-sm">
                    <a className="navbar-brand logo" to="/volunteer"><span className="logo-font" style={{marginLeft: '20px'}}>Upraise</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <i className="fa fa-bars fa-lg"></i>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-right" id="navbarSupportedContent">
                        <ul className="navbar-nav" style={{marginLeft: '900px'}}>
                            <li className="nav-item">
                                <Link className="nav-link" to="/transport">Transport</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/my_transportation">My_Transportantions</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/userprofile">Profile</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/logout">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}