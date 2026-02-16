import React, {Fragment} from 'react';
// import Navbar from '../../components/Navbar' // Old navbar commented out
import TransparentNavbar from '../../components/TransparentNavbar' // New transparent navbar
import PageTitle from '../../components/pagetitle'
import About from '../../components/about'
import ProjectSection from '../../components/Projects';
import ServiceSection from '../../components/Services';
import FunFact from '../../components/FunFact'
import VideoTestimonials from '../../components/VideoTestimonials';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo.svg'
import abimg from '../../images/banner/projects.jpg'
import aboutImage from '../../images/about.jpg'


const AboutPage =() => {
    return(
        <Fragment>
            {/* <Navbar Logo={Logo}/> */} {/* Old navbar commented out */}
            <TransparentNavbar Logo={Logo}/> {/* New transparent navbar */}
            <PageTitle 
                pageTitle={'About Us'} 
                pagesub={'About'}
                backgroundImage={abimg}
            /> 
            <About abimg={aboutImage}/>
            <ProjectSection/>
            <ServiceSection/>
            <FunFact fnClass={'wpo-fun-fact-section-s2'}/>
            {/* <Pricing/> */}
            {/* <TeamSection/> */}
            <VideoTestimonials/>
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AboutPage;
