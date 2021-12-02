import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const HeaderTopbar = () => {
    return (
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col col-md-6 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi flaticon-call"></i>+2348087240516</li>
                                <li><i className="fi flaticon-envelope"></i> info@opeketefoundation.org</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-md-6 col-sm-12 col-12">
                    <ul>
                              
                                <li><Link style={{color: "white"}} to="/login">Login</Link></li>
                                <li><Link style={{color: "white"}}  to="/signup">Sign Up</Link></li>
                                {/* <Link className="theme-btn"  to="/signup">Sign Up</Link> */}
                                {/* <li><Link className="theme-btn" to="/donate">Donate Now</Link></li> */}
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;