import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import About from '../../components/about'
import ProjectSection from '../../components/Projects';
import ServiceSection from '../../components/Services';
import Pricing from '../../components/Pricing'
import FunFact from '../../components/FunFact'
import TeamSection from '../../components/TeamSection';
import Testimonial from '../../components/Testimonial';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo.svg'
import abimg from '../../images/about.jpg'


const AboutPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'About Us'} pagesub={'About'}/> 
            <About abimg={abimg}/>
            <ProjectSection/>
            <ServiceSection/>
            <FunFact fnClass={'wpo-fun-fact-section-s2'}/>
            <Pricing/>
            <TeamSection/>
            <Testimonial/>
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AboutPage;
