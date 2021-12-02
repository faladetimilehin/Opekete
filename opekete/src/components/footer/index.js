import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'
import Newsletter from '../Newsletter'
import n1 from '../../images/footer/img-1.jpg'
import n2 from '../../images/footer/img-2.jpg'
import './style.css'

const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <footer className="wpo-site-footer">
            <Newsletter />
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                {/* <h1 style={{ color: 'pink', fontWeight: 'bold' }}>Opeteke</h1> */}
                                    <img src={Logo} alt="" />
                                </div>
                                <p>Promoting Education and Empowerment </p>
                                <ul>
                                    <li><a onClick={ClickHandler} href="https://facebook.com/opeketefoundation" target="_blank"><i className="ti-facebook"></i></a></li>
                                    <li><a onClick={ClickHandler} href="https://twitter.com/opeketefoundation" target="https://twitter.com/OpeketeF"><i className="ti-twitter-alt"></i></a></li>
                                    <li><a onClick={ClickHandler} href="https://instagram.com/opeketefoundation" target="https://www.instagram.com/opeketefoundation/"><i className="ti-instagram"></i></a></li>
                                    {/* <li><Link onClick={ClickHandler} to="https://instagram.com/opeketefoundation" ><i className="ti-google"></i></Link></li> */}
                                </ul>

                            </div>
                        </div>
                        {/* <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget resource-widget">
                                <div className="widget-title">
                                    <h3>Frequently visited</h3>
                                </div>
                                <div className="news-wrap">
                                    <div className="news-img">
                                        <img src={n1} alt="" />
                                    </div>
                                    <div className="news-text">
                                        <h3><Link onClick={ClickHandler} to="/blog">Education for all poor children</Link></h3>
                                        <span>12 Nov, 2020</span>
                                    </div>
                                </div>
                                <div className="news-wrap">
                                    <div className="news-img">
                                        <img src={n2} alt="" />
                                    </div>
                                    <div className="news-text">
                                        <h3><Link onClick={ClickHandler} to="/blog">Education for all poor children</Link></h3>
                                        <span>12 Nov, 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget" style={{textAlign:'center'}}>
                                <div className="widget-title">
                                    <h3 >Frequently visited</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/case">Our Mission</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/event">Our Event</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 offset-lg-1 col-md-6 col-sm-12 col-12">
                            <div className="widget market-widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                {/* <p>online store with lots of cool and exclusive wpo-features</p> */}
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi flaticon-pin"></i>25 Oremeji Street,Lagos, Nigeria</li>
                                        <li><i className="fi flaticon-call"></i>+2348087240516</li>
                                        <li><i className="fi flaticon-envelope"></i>info@opeketefoundation.org</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright">&copy; 2021 Vartech. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;