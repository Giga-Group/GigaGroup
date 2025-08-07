import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero from '../../components/hero';
import About from '../../components/about';
import ProjectSection from '../../components/Projects';
import ServiceSection from '../../components/Services';
import FunFact from '../../components/FunFact';
import TeamSection from '../../components/TeamSection';
import VideoTestimonials from '../../components/VideoTestimonials';
import BlogSection from '../../components/BlogSection';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo.svg'
import abimg from '../../images/about.jpg'


const HomePage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo} hclass={'header-style-1'}/>
            <Hero/>
            <About abimg={abimg}/>
            <ProjectSection/>
            <ServiceSection/>
            <FunFact/>
            <TeamSection/>
            <VideoTestimonials/>
            <BlogSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;