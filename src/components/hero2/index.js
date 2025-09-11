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
            showContactForm = true,
            title = 'Giga Group',
            subtitle = 'From luxury residences to world-class commercial spaces. 70 years of delivering iconic developments across Pakistan and the UAE.',
            showTitle = true,
            showSubtitle = true,
            showButton = false,
            buttonText = 'Discover More',
            buttonLink = '/about',
            videoUrl = 'https://www.youtube.com/embed/lxOWww4vfmY?autoplay=1&mute=1&loop=1&playlist=lxOWww4vfmY&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3',
            mobileVideoUrl = 'https://www.youtube.com/embed/lxOWww4vfmY?autoplay=1&mute=1&loop=1&playlist=lxOWww4vfmY&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3',
            textPosition = 'center' // 'center' or 'top'
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

        // Determine text class based on whether contact form is shown and text position
        const textClass = showContactForm ? 'mobile-hidden-text' : `responsive-text responsive-text-${textPosition}`;
        
        // Debug logging to verify props
        console.log('Hero2 showContactForm prop:', showContactForm);
        console.log('Hero2 textPosition prop:', textPosition);
        console.log('Hero2 showTitle prop:', showTitle);
        console.log('Hero2 showSubtitle prop:', showSubtitle);

        return (
            <section>
                <div className={`wpo-hero-slider wpo-hero-style-2 ${heroClass}`}>
                    <div className="hero-container">
                        <div className="hero-wrapper">
                            <Slider {...settings}>
                                <div className="hero-slide">
                                    <div className="slide-inner video-slide" style={{height: '100vh', width: '100vw'}}>
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
                                            <div className="slide-content">
                                                <div className={`content-wrapper ${textClass}`}>
                                                    {showTitle && (
                                                        <div className="slide-title">
                                                            <h2>{title}</h2>
                                                        </div>
                                                    )}
                                                    {showSubtitle && (
                                                        <div className="slide-title-sub">
                                                            <p>{subtitle}</p>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="clearfix"></div>
                                                {showButton && (
                                                    <div className="slide-btns">
                                                        <Link to={buttonLink} className="theme-btn">{buttonText}</Link>
                                                    </div>
                                                )}
                                            </div>
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
                            {/* Conditionally render Registration Form Overlay */}
                            {showContactForm && <RegistrationForm />}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero2;