import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import Hero4 from '../../components/hero4';
import About4 from '../../components/about4';
import ProjectSectionS4 from '../../components/ProjectsS4';
import ServiceSection3 from '../../components/Services3';
import Pricing from '../../components/Pricing';
import BlogSectionS2 from '../../components/BlogSectionS2';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo.svg'


const HomePage4 =() => {
    return(
        <Fragment>
            <Navbar2 Logo={Logo} hclass={'wpo-header-style-3'}/>
            <Hero4/>
            <About4/>
            <ServiceSection3 ptClass={'pt-0'}/>
            <ProjectSectionS4/>
            <Pricing pClass={'wpo-pricing-section-s2'}/>
            <BlogSectionS2/>
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage4;