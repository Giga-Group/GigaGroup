import React from 'react'
import { Link } from 'react-router-dom'
import VideoModal from '../../components/ModalVideo'
import abimg from '../../images/about2.jpg'
import abimg2 from '../../images/about3.jpg'


const About2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className="wpo-about-area-s2 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <div className="wpo-about-img-left">
                                <img src={abimg} alt=""/>
                                    <div className="wpo-about-img-text">
                                        <h2>60+</h2>
                                        <p>Years of Excellence</p>
                                    </div>
                            </div>
                            <div className="wpo-about-img-right">
                                <img src={abimg2} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-about-title">
                                <span>About Giga Group</span>
                                <h2>Building Dreams, Shaping Communities Since 1956</h2>
                            </div>
                            <p>Giga Group is a trusted name in real estate development with over 60 years of excellence. Founded by Haji Abdul Rahim Giga in 1956, what started as one bold step has evolved into a giant enterprise that continues to grow and branch out across the globe.</p>
                            <ul className="ab-list">
                                <li>Over 60+ years of business excellence and premium quality development</li>
                                <li>5,000+ employees worldwide delivering world-class projects</li>
                                <li>10M+ sq ft of commercial & residential space with 99.99% customer satisfaction</li>
                                <li>Iconic projects like Goldcrest Views and Giga Mall redefining urban living</li>
                            </ul>
                            <div className="btns">
                                <Link to="/about" onClick={ClickHandler} className="theme-btn">Discover More</Link>
                                <ul>
                                    <li className="video-holder">
                                        <VideoModal />
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

export default About2;