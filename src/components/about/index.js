import React from 'react'
import { Link } from 'react-router-dom'
import VideoModal from '../../components/ModalVideo'


const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className={`wpo-about-area section-padding ${props.abClass}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <img src={props.abimg} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-about-title">
                                <span>About Giga Group</span>
                                <h2>The Pinnacle Of Modern Living & Architectural Excellence</h2>
                            </div>
                        <h5>Over 60+ years of excellence helping investors and families achieve their dream homes and business goals in Pakistan's most prestigious developments</h5>
                        <p>Giga Group stands as a testament to visionary leadership and unwavering commitment to quality. Founded by Haji Abdul Rahim Giga in 1956, our journey began with one bold step that has blossomed into a giant enterprise spanning across the globe. Today, we're proud to deliver world-class residential and commercial projects with 99.99% customer satisfaction, 5,000+ employees worldwide, and over 10 million square feet of premium real estate.</p>
                            <div className="btns">
                                <Link to="/about" onClick={ClickHandler} className="theme-btn">Discover More</Link>
                                <ul>
                                    <li className="video-holder">
                                        <VideoModal/>
                                    </li>
                                    <li className="video-text">
                                         Watch Our Video
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;