import React, { Component } from "react";
import Slider from "react-slick";
import SectionTitle from "../SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

class VideoTestimonials extends Component {
    render() {
        var settings = {
            dots: true,
            arrows: false,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: false, // Disabled autoplay for videos
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        const videoTestimonials = [

            {
                name: "Faisal Qureshi",
                title: "Actor & Host",
                imageUrl: require("../../images/testimonial/faisal quershi.jpeg"),
                videoUrl: "https://goldcrestviews.com.pk/wp-content/uploads/2025/07/Faysal-Quraishi-visit-to-Goldcrest-Views-Model-Apartments-in-Giga-Mall-Islamabad-Giga-Group-Giga-Mall-720p-h264.mp4",
                description: "Renowned actor Faisal Qureshi visits Goldcrest Views Model Apartments in Giga Mall Islamabad"
            },
            {
                name: "Kubra Khan",
                title: "Actress & Model",
                imageUrl: require("../../images/testimonial/kubra khan.jpeg"),
                videoUrl: "https://goldcrestviews.com.pk/wp-content/uploads/2025/07/Kubra-Khan-at-Goldcrest-Views-Islamabad-Model-Apartments-Giga-Mall-Islamabad-Giga-Mall-720p-h264.mp4",
                description: "Actress Kubra Khan at Goldcrest Views Model Apartments in Giga Mall Islamabad"
            },
            {
                name: "Ushna Shah",
                title: "Actress",
                imageUrl: require("../../images/testimonial/ushna.jpeg"),
                videoUrl: "https://goldcrestviews.com.pk/wp-content/uploads/2025/07/Actress-Ushna-Shah-at-Goldcrest-Views-Model-Apartments-in-Giga-Mall-Islamabad-Full-Video-Giga-Mall-720p-h264.mp4",
                description: "Actress Ushna Shah shares her thoughts about Goldcrest Views Model Apartments in Giga Mall Islamabad"
            },            {
                name: "Chef Gulzar",
                title: "Celebrity Chef",
                imageUrl: require("../../images/testimonial/chef-gulzar.jpeg"),
                videoUrl: "https://goldcrestviews.com.pk/wp-content/uploads/2025/07/Chef-Gulzar-at-Goldcrest-Views-Islamabad-Model-Apartments-Giga-Mall-Islamabad-Giga-Mall-720p-h264.mp4",
                description: "Celebrity Chef Gulzar shares his experience at Goldcrest Views Model Apartments in Giga Mall Islamabad"
            }
        ];

        return (
            <div className="wpo-testimonial-area section-padding">
                <div className="container">
                    <SectionTitle 
                        subTitle={'Celebrity Testimonials'} 
                        MainTitle={'Celebrity Testimonials'}
                    />
                    <div className="wpo-testimonial-wrap">
                        <div className="testimonial-slider owl-carousel">
                            <Slider {...settings}>
                                {videoTestimonials.map((testimonial, index) => (
                                    <div className="wpo-testimonial-item" key={index}>
                                        <div className="wpo-testimonial-top">
                                            <div className="wpo-testimonial-img">
                                                <img 
                                                    src={testimonial.imageUrl}
                                                    alt={testimonial.name}
                                                    style={{
                                                        width: '70px',
                                                        height: '70px',
                                                        objectFit: 'cover',
                                                        borderRadius: '50%',
                                                        border: '2px solid #CAAB06'
                                                    }}
                                                />
                                            </div>
                                            <div className="wpo-testimonial-info">
                                                <h2>{testimonial.name}</h2>
                                                <span>{testimonial.title}</span>
                                            </div>
                                        </div>
                                        <div className="wpo-testimonial-content">
                                            <div className="video-container">
                                                <video 
                                                    controls 
                                                    preload="metadata"
                                                    style={{
                                                        width: '100%',
                                                        height: '250px',
                                                        objectFit: 'cover',
                                                        borderRadius: '8px',
                                                        marginBottom: '15px'
                                                    }}
                                                >
                                                    <source src={testimonial.videoUrl} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <p>{testimonial.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoTestimonials;
