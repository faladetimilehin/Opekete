
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import cs1 from '../../images/event-details3.jpeg'
import cs2 from '../../images/case/shutter.jpg'
import cs3 from '../../images/case/adoptaschool.jpeg'
import cs4 from '../../images/case/img-4.png'
import cs5 from '../../images/case/img-5.png'
import cs6 from '../../images/case/img-6.png'

import './style.css'

class Casesection extends Component {
    render() {
        const ClickHandler = () =>{
            window.scrollTo(10, 0);
         }
        return (
          <div className="wpo-case-area-2 section-padding">
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                          <div className="wpo-section-title">
                              <span>What We Do</span>
                              <h2>Popular Causes What You Should Know</h2>
                          </div>
                      </div>
                  </div>
                  <div className="wpo-case-wrap">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 custom-grid col-12">
                            <div className="wpo-case-item">
                                <div className="wpo-case-img">
                                    <img src={cs1} alt="" width="370" height="282"/>
                                </div>
                                <div className="wpo-case-content">
                                    <div className="wpo-case-text-top">
                                        <h2>Scholarships</h2>
                                        {/* <div className="progress-section">
                                            <div className="process">
                                                <div className="progress">
                                                    <div className="progress-bar">
                                                        <div className="progress-value"><span>65.5</span>%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        {/* <ul>
                                            <li><span>Raised:</span> $7,000.00</li>
                                            <li><span>Goal:</span> $8,000.00</li>
                                        </ul> */}
                                    </div>
                                    <div className="case-btn">
                                        <ul>
                                            <li><Link onClick={ClickHandler} to="/case-single">Learn More</Link></li>
                                            {/* <li><Link onClick={ClickHandler} to="/donate">Donate Now</Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 custom-grid col-12">
                            <div className="wpo-case-item">
                                <div className="wpo-case-img">
                                    <img src={cs2} alt=""  width="370" height="282"/>
                                </div>
                                <div className="wpo-case-content">
                                    <div className="wpo-case-text-top">
                                        <h2>Vocational Training</h2>
                                        {/* <div className="progress-section">
                                            <div className="process">
                                                <div className="progress">
                                                    <div className="progress-bar">
                                                        <div className="progress-value"><span>40.5</span>%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul>
                                            <li><span>Raised:</span> $7,000.00</li>
                                            <li><span>Goal:</span> $8,000.00</li>
                                        </ul> */}
                                    </div>
                                    <div className="case-btn">
                                        <ul>
                                            <li><Link onClick={ClickHandler} to="/case-single">Learn More</Link></li>
                                            {/* <li><Link onClick={ClickHandler} to="/donate">Donate Now</Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 custom-grid col-12">
                            <div className="wpo-case-item">
                                <div className="wpo-case-img">
                                    <img src={cs3} alt="" width="370" height="282"/>
                                </div>
                                <div className="wpo-case-content">
                                    <div className="wpo-case-text-top">
                                        <h2>Adopt A School</h2>
                                        {/* <div className="progress-section">
                                            <div className="process">
                                                <div className="progress">
                                                    <div className="progress-bar">
                                                        <div className="progress-value"><span>80.5</span>%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul>
                                            <li><span>Raised:</span> $7,000.00</li>
                                            <li><span>Goal:</span> $8,000.00</li>
                                        </ul> */}
                                    </div>
                                    <div className="case-btn">
                                        <ul>
                                            <li><Link onClick={ClickHandler} to="/case-single">Learn More</Link></li>
                                            {/* <li><Link onClick={ClickHandler} to="/donate">Donate Now</Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>    
                        </div>
                            {/* <div className="wpo-case-item">
                                <div className="wpo-case-img">
                                    <img src={cs4} alt=""/>
                                </div>
                                <div className="wpo-case-content">
                                    <div className="wpo-case-text-top">
                                        <h2>Estublish School for Poor Children</h2>
                                        <div className="progress-section">
                                            <div className="process">
                                                <div className="progress">
                                                    <div className="progress-bar">
                                                        <div className="progress-value"><span>50.5</span>%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul>
                                            <li><span>Raised:</span> $7,000.00</li>
                                            <li><span>Goal:</span> $8,000.00</li>
                                        </ul>
                                    </div>
                                    <div className="case-btn">
                                        <ul>
                                            <li><Link onClick={ClickHandler} to="/case-single">Learn More</Link></li>
                                            <li><Link onClick={ClickHandler} to="/donate">Donate Now</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div className="col-lg-4 col-md-6 custom-grid col-12">
                            <div className="wpo-case-item">
                                <div className="wpo-case-img">
                                    <img src={cs5} alt=""/>
                                </div>
                                <div className="wpo-case-content">
                                    <div className="wpo-case-text-top">
                                        <h2>Manage Clothes For Every Single man</h2>
                                        <div className="progress-section">
                                            <div className="process">
                                                <div className="progress">
                                                    <div className="progress-bar">
                                                        <div className="progress-value"><span>90.5</span>%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul>
                                            <li><span>Raised:</span> $7,000.00</li>
                                            <li><span>Goal:</span> $8,000.00</li>
                                        </ul>
                                    </div>
                                    <div className="case-btn">
                                        <ul>
                                            <li><Link onClick={ClickHandler} to="/case-single">Learn More</Link></li>
                                            <li><Link onClick={ClickHandler} to="/donate">Donate Now</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div className="col-lg-4 col-md-6 custom-grid col-12">
                            <div className="wpo-case-item">
                                <div className="wpo-case-img">
                                    <img src={cs6} alt=""/>
                                </div>
                                <div className="wpo-case-content">
                                    <div className="wpo-case-text-top">
                                        <h2>Appoint a new english teacher</h2>
                                        <div className="progress-section">
                                            <div className="process">
                                                <div className="progress">
                                                    <div className="progress-bar">
                                                        <div className="progress-value"><span>70.5</span>%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul>
                                            <li><span>Raised:</span> $7,000.00</li>
                                            <li><span>Goal:</span> $8,000.00</li>
                                        </ul>
                                    </div>
                                    <div className="case-btn">
                                        <ul>
                                            <li><Link onClick={ClickHandler} to="/case-single">Learn More</Link></li>
                                            <li><Link onClick={ClickHandler} to="/donate">Donate Now</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>    
                        </div> */}
                        
                    </div>
                </div>
              </div>
          </div>
            );
        }
    }
    
    export default Casesection;
          
          
          
          
