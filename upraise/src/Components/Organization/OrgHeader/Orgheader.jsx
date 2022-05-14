import React from 'react'
import { Link } from 'react-router-dom';
import './orgheader.css';

export default function Orgheader() {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-sm">
                    <a className="navbar-brand logo" to="/organization"><span className="logo-font" style={{marginLeft: '20px'}}> Upraise</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <i className="fa fa-bars fa-lg"></i>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-right" style={{marginLeft: '1000px'}} id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/newRequest">Request</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/allRequest">All Requests</Link>
                            </li>
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