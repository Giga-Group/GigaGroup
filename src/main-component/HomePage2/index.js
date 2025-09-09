import React, {Fragment} from 'react';
// import Navbar from '../../components/Navbar' // Old navbar commented out
import TransparentNavbar from '../../components/TransparentNavbar' // New transparent navbar
import Hero2 from '../../components/hero2';
import About2 from '../../components/about2';
import ProjectSectionS2 from '../../components/ProjectsS2';
import ServiceSection from '../../components/Services';
import TeamSection from '../../components/TeamSection';
import VideoTestimonials from '../../components/VideoTestimonials';
import BlogSection from '../../components/BlogSection';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo.svg'


const HomePage2 =() => {
    return(
        <Fragment>
            {/* <Navbar Logo={Logo}/> */} {/* Old navbar commented out */}
            <TransparentNavbar Logo={Logo}/> {/* New transparent navbar */}
            <Hero2/>
            <Hero2 
                showContactForm={false}
                textPosition="top"
                title="Centered Text"
                videoUrl = 'https://www.youtube.com/embed/0kH5Z4Z4B8M?autoplay=1&mute=1&loop=1&playlist=0kH5Z4Z4B8M&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3'
            />
            {/* uI24t0e6sVU */}
            <Hero2 
                showContactForm={false}
                textPosition="center"
                title="Top Positioned Text"
                videoUrl = 'https://www.youtube.com/embed/uI24t0e6sVU?autoplay=1&mute=1&loop=1&playlist=uI24t0e6sVU&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3'
            />
            <About2/>
            <ServiceSection sClass={'section-bg'}/>
            <ProjectSectionS2/>
            {/* <TeamSection/> */}
            <VideoTestimonials/>
            {/* <BlogSection/> */}
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage2;