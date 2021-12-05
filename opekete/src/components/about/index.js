import React from 'react'
import abimg from '../../images/about3.png'
import VideoModal from '../ModalVideo'
import './style.css'

const About = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    
    }
    return (
        <div className="wpo-about-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <span>About Us</span>
                                <h2>Empowering Females Through Education </h2>
                            </div>
                            <p>Opekete Foundation seeks to create a world where females have the opportunity to learn and prosper regardless of their economic status.<br/><br/>
                            We believe that with access to education, financial services, and skills training, all women can be empowered for success.<br/><br/>
                                Our focus is empowering young girls in Nigeria to a better life through education and financial literacy. </p>
                            <div className="btns">
                                <a href="/about" className="theme-btn" onClick={ClickHandler}>Learn More</a>
                                <ul>
                                    {/* <li className="video-holder">
                                        <VideoModal />
                                    </li>
                                    <li className="video-text">
                                        Watch Our Video
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-img-3">
                            <img src={abimg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;