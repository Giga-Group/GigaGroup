import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import VideoTestimonials from '../../components/VideoTestimonials'
import Logo from '../../images/logo.svg'
import testimonialBg from '../../images/banner/projects.jpg' // Using Giga Business Complex as background

const TestimonialPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle 
                pageTitle={'Celebrity Testimonials'} 
                pagesub={'Celebrity Testimonials'}
                backgroundImage={testimonialBg}
            /> 
            <VideoTestimonials/>
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default TestimonialPage;
