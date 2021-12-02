import React from 'react'
import ms1 from '../../images/mission/icon1.png'
import ms2 from '../../images/mission/icon2.png'
import ms3 from '../../images/mission/icon3.png'
import ms4 from '../../images/mission/icon4.png'
import './style.css'
import {Link} from 'react-router-dom'

const Mission = (props) => {
    
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return(
        <div className={`wpo-mission-area ${props.subclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>What We Do?</span>
                            <h2>Creating Opportunities for Women and Young Girls</h2>
                        </div>
                    </div>
                </div>
                <div className="wpo-mission-wrap">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-5">
                                    <img src={ms1} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Education</h2>
                                    <p>Programmes that will promote girl-child education , including scholarship awards for STEM courses with aim of improving the knowledge, 
                                        and skill of women. </p>
                
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-6">
                                    <img src={ms2} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Advocacy</h2>
                                    <p>We engage policy stakeholders that drives investment – political, programmatic, and financial – in the lives of girls and women worldwide.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-7">
                                    <img src={ms3} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Empowerment</h2>
                                    <p>We promote women's sense of self-worth, their ability to determine their own choices,their right to influence social change for themselves and others.</p>
                                </div> 
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-8">
                                    <img src={ms1} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Scholarship </h2>
                                    <a style={{color: `#f0628a`}} href="https://docs.google.com/forms/d/e/1FAIpQLSfEzt7fVByWJWqFYgy-OgHsQOLIixMrkZDVz-2mRoPUJUNbpw/viewform" target="_blank" title="click to register">
                                        Register for the scholarship, by completing an online application form.
                                        Wait for the results. If selected, congratulations, you’re a winner
                                    </a>
    
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission;