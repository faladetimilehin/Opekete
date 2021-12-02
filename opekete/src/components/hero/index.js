import React from 'react'
import './style.css'
import hero1 from '../../images/slider/shape.png'
import VideoModal from '../ModalVideo'
import {Link} from 'react-router-dom'

const Hero = (props) => {

    return(
        <section className="hero hero-style-2">
            <div className="hero-slider">
                <div className="slide">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-6 slide-caption">
                                <div className="slide-title">
                                    {/* <h2> Female Education and Empowerment<span>Education</span></h2> */}
                                    <h2>Female Education <br></br> & Empowerment</h2>
                                </div>
                                <div className="slide-subtitle">
                                    <p>Promoting self-dependence amongst females through education  advocacy, and empowerment</p>
                                    {/* <p>You Can Satisfied Yourself By Helping.</p> */}
                                </div>
                                <div className="btns">
                                    <Link to="/about" className="theme-btn">About Us</Link>
                                    {/* <ul>
                                        <li className="video-holder">
                                            <VideoModal/>
                                        </li>
                                        <li className="video-text">
                                            Watch Our Video
                                        </li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-vec col col-lg-6">
                        
                    </div>
                </div>
            </div>
            <div className="hero-shape" >
                <img src={hero1} alt=""/>
            </div>
        </section>
    )
}

export default Hero;