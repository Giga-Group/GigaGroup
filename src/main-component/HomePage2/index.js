import React, { Fragment } from 'react';
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
import { Link } from 'react-router-dom';


const HomePage2 = () => {
    return (
        <Fragment>
            {/* <Navbar Logo={Logo}/> */} {/* Old navbar commented out */}
            <TransparentNavbar Logo={Logo} /> {/* New transparent navbar */}
            <Hero2>
                <div className="slide-content">
                    <div className={`c-wrapper`}>
                        <div>
                            <h1 className="l7-text">Giga Group</h1>
                            <p className='l2-text'>DELIVERING EXCELLENCE SINCE 1956</p>
                        </div>
                        <div>
                            <p className='l3-text'>BUILDING TRUST, SHAPING INNOVATION, AND CRAFTING A FUTURE THAT STANDS TEST OF TIME</p>
                            <p className="l8-text">Vision, Giga Group</p>
                        </div>
                        {/* <div>
                            <p className='l5-text'>FROM LUXURY RESIDENCES TO WORLD-CLASS COMMERCIAL SPACES. 70 YEARS OF DELIVERING ICONIC DEVELOPMENTS ACROSS PAKISTAN AND THE UAE</p>
                        </div> */}
                    </div>
                    {/* <div className="clearfix"></div> */}
                    {/* <div className="slide-btns">
                        <Link to='/about' className="theme-btn">Discover More</Link>
                    </div> */}
                </div>
            </Hero2>
            <Hero2
                videoUrl='https://www.youtube.com/embed/uI24t0e6sVU?autoplay=1&mute=1&loop=1&playlist=uI24t0e6sVU&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3'
                mobileVideoUrl='https://www.youtube.com/embed/uI24t0e6sVU?autoplay=1&mute=1&loop=1&playlist=uI24t0e6sVU&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3'
            >
                <div className="slide-content">
                    <div className={`c-wrapper`}>
                        <div>
                            <h1 className="l7-text"> <p className='l6-text'>GigaCity</p> Islamabad</h1>
                            <p className='l2-text'>Pakistan's no. 1 vertical community in DHA-II Islamabad</p>
                        </div>
                        <div>
                            <p className='l2-text'>Developed by Giga Group</p>
                            {/* <p className="l4-text">Vision, Giga Group</p> */}
                        </div>
                        {/* <div>
                            <p className='l2-text'>Developed by Giga Group</p>
                        </div> */}
                    </div>
                    {/* <div className="clearfix"></div> */}
                    {/* <div className="slide-btns">
                        <Link to='/about' className="theme-btn">Discover More</Link>
                    </div> */}
                </div>
            </Hero2>
            {/* uI24t0e6sVU */}
            <Hero2
                videoUrl='https://www.youtube.com/embed/trmn0svn7F0?autoplay=1&mute=1&loop=1&playlist=trmn0svn7F0&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3'
                mobileVideoUrl='https://www.youtube.com/embed/bDnmFZQ-xJU?autoplay=1&mute=1&loop=1&playlist=bDnmFZQ-xJU&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3'
            >
                <div className="slide-content">
                    <div className={`c-wrapper-2`}>
                        <div>
                            <h1 className="l1-text">Goldcrest Views</h1>
                            {/* <p className='l2-text'>Giga City Islamabad</p> */}
                        </div>
                        <div>
                            {/* <p className='l3-text'>Developed by Giga Group</p> */}
                            <p className="l4-text">Giga City Islamabad</p>
                        </div>
                        <div>
                            {/* <p className="l4-text">Giga City Islamabad</p> */}

                            {/* <p className='l5-text'>FROM LUXURY RESIDENCES TO WORLD-CLASS COMMERCIAL SPACES. 70 YEARS OF DELIVERING ICONIC DEVELOPMENTS ACROSS PAKISTAN AND THE UAE</p> */}
                        </div>
                    </div>
                    {/* <div className="clearfix"></div> */}
                    {/* <div className="slide-btns">
                        <Link to='/about' className="theme-btn">Discover More</Link>
                    </div> */}
                </div>
            </Hero2>
            <About2 />
            <ServiceSection sClass={'section-bg'} />
            <ProjectSectionS2 />
            {/* <TeamSection/> */}
            <VideoTestimonials />
            {/* <BlogSection/> */}
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage2;