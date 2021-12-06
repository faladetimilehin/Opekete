import React from 'react'
import Logo from '../../images/logo.png'
import {NavLink, Link}  from 'react-router-dom'
import HeaderTopbar from '../HeaderTopbar'
import MobileMenu from '../../components/MobileMenu'
// import {NavLink} from 'react-router-dom'
import './style.css'

const Header = () => {
    const SubmitHandler = (e) =>{
        e.preventDefault()
     }

    return(	
	<div className="middle-header header-style-3">
        {/* <HeaderTopbar/> */}
        <div className = "container">
            <div className="header-content">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm   -6 col-6">
                    <div className="logo">
                        {/* <h1 style={{ color: 'pink', fontWeight: 'bold' }}>Opeteke</h1> */}
                        <Link  to="/home" title=""><img src={Logo} alt=""/> </Link>
                    </div>
                </div>
                <div className="col-lg-8 d-lg-block d-none">
                    <nav>
                        <ul>
                            {/* <li><NavLink exact activeClassName = "active" to="/home" title="">Home</NavLink></li> */}
                            <li><NavLink activeClassName = "active" to="/about" title="">About Us</NavLink></li>
                            <li><NavLink activeClassName = "active" to="#" title="">What We Do</NavLink>
                                {/* <ul>
                                    <li><Link to="/case" title="">Frequently asked questions</Link></li>
                                    <li><Link to="/case-single" title="">Apply for scholarship</Link></li>
                                </ul> */}
                            </li>
                            <li><NavLink activeClassName = "active" to="apply" title="">Scholarships & Funds</NavLink>
                                {/* <ul>
                                    <li><Link to="/apply" title="">How To Apply</Link></li>
                                    <li><Link to="/case-single" title="">Frequently Asked Questions</Link></li>
                                </ul> */}
                            </li>
                         
                            <li><NavLink activeClassName = "active" to="#" title="">Get Involved</NavLink>
                                <ul>
                                    <li><Link to="/volunteer" title="">Become A Volunteer</Link></li>
                                    <li><Link to="/donate" title="">Make A Donation</Link></li>
                                    {/* <li><Link to="#" title="">Partner With Us</Link></li> */}
                                </ul>
                            </li>
                            {/* <li><Link to="/home" title="">Pages</Link>
                                <ul>
                                 <li><Link to="/about" title="">About</Link></li>
                                    <li><Link to="/donate" title="">Donate</Link></li>
                                    <li><Link to="/volunteer" title="">Volunteer</Link></li> 
                                    <li><Link to="/404" title="">Error 404</Link></li>
                                </ul>
                            </li> */}
                            {/* <li><NavLink activeClassName = "active" to="/blog">Latest News</NavLink>
                                <ul>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/blog-left">Blog Left sidebar</Link></li>
                                    <li><Link to="/blog-fullwidth">Blog full width</Link></li>
                                    <li><i className="fa fa-angle-right"></i><Link to="/blog-details" title="">Blog Details</Link>
                                        <ul>
                                            <li><Link to="/blog-details" title="">Blog single</Link></li>
                                            <li><Link to="/blog-details-left" title="">Blog single Left sidebar</Link></li>
                                            <li><Link to="/blog-details-fullwidth" title="">Blog single full width</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li> */}
                            {/* <li><Link to="/contact" title="">Contact</Link></li> */}
                        </ul>
                    </nav>
                </div>
                {/* <div className="col-lg-2 col-md-6 col-sm-6 col-6" style = {{background: 'red'}}>
                </div> */}
                {/* <div className="col-lg-1 col-md-6 col-sm-6 col-6">
                    <div className="contact">
                        <div className="cart-search-contact">
                            <div className="header-search-form-wrapper">
                                <button className="search-toggle-btn"><i className="fi flaticon-magnifying-glass"></i></button>
                                <div className="header-search-form">
                                    <form onSubmit={SubmitHandler}>
                                        <div>
                                            <input type="text" className="form-control" placeholder="Search here..."/>
                                            <button type="submit"><i className="ti-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                         
                        </div>
                    </div>
                </div> */}
                <div className="col-md-2 col-sm-2 col-2">
                    <MobileMenu/>
                </div>
            </div>
               
                <div className="clearfix"></div>
            </div>
            
        </div>
    </div>
    )
}

export default Header;