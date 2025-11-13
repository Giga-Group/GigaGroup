import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RegistrationForm from '../RegistrationForm';
import './hero2.css';

import hero1 from '../../images/slider/slide-1.jpg'
import hero2 from '../../images/slider/slide-2.jpg'
import hero3 from '../../images/slider/slide-3.jpg'



class Hero2 extends Component {
    render() {
        // Default props
        const {
            heroClass = '',
            videoUrl = 'https://www.youtube.com/embed/lxOWww4vfmY?autoplay=1&mute=1&loop=1&playlist=lxOWww4vfmY&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3',
            mobileVideoUrl = 'https://www.youtube.com/embed/lxOWww4vfmY?autoplay=1&mute=1&loop=1&playlist=lxOWww4vfmY&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3',
            children
        } = this.props;

        var settings = {
            dots: false,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true
        };

        return (
            <section>
                <div className={`wpo-hero-slider wpo-hero-style-2 ${heroClass}`}>
                    <div className="hero-container">
                        <div className="hero-wrapper">
                            <Slider {...settings}>
                                <div className="hero-slide">
                                    <div className="slide-inner video-slide" style={{ height: '100vh', width: '100vw' }}>
                                        <div className="video-background">
                                            {/* Desktop Video */}
                                            <iframe
                                                className="desktop-video"
                                                src={videoUrl}
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>

                                            {/* Mobile Video */}
                                            <iframe
                                                className="mobile-video"
                                                src={mobileVideoUrl}
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>

                                            <div className="video-overlay"></div>
                                        </div>
                                        <div className="container-fluid">
                                            {children}
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="hero-slide">
                                    <div className="slide-inner" style={{ backgroundImage: `url(${hero2})` }}>
                                        <div className="container-fluid">
                                            <div className="slide-content">
                                                <div className="slide-title">
                                                    <h2>Creating Your Dream</h2>
                                                </div>
                                                <div className="slide-title-sub">
                                                    <p>From luxury residences to world-class commercial spaces. 70 years of delivering iconic developments across Pakistan and the UAE.</p>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div className="slide-btns">
                                                    <Link to="/about" className="theme-btn">Discover More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-slide">
                                    <div className="slide-inner" style={{ backgroundImage: `url(${hero3})` }}>
                                        <div className="container-fluid">
                                            <div className="slide-content">
                                                <div className="slide-title">
                                                    <h2>Creating Your Dream</h2>
                                                </div>
                                                <div className="slide-title-sub">
                                                    <p>From luxury residences to world-class commercial spaces. 70 years of delivering iconic developments across Pakistan and the UAE.</p>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div className="slide-btns">
                                                    <Link to="/about" className="theme-btn">Discover More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </Slider>
                             {/* <RegistrationForm /> */}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero2;