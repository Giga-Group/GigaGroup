import React, {Fragment} from 'react';
// import Navbar from '../../components/Navbar' // Old navbar commented out
import TransparentNavbar from '../../components/TransparentNavbar' // New transparent navbar
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import ProjectsS2 from '../../components/ProjectsS2'
import Logo from '../../images/logo.svg'
import projectsBg from '../../images/banner/projects.jpg' // Using Goldcrest Views as background
import DeliveredProjectsSection from '../../components/DeliveredProjectsSection';
import Seo from '../../components/Seo'

const ProjectPage =() => {
    return(
        <Fragment>
            <Seo
                title="Projects"
                description="Explore Giga Group projects in Islamabad, including Goldcrest Views, Goldcrest Commercial, Giga Mall Extension, and more luxury residential and commercial developments."
                image={projectsBg}
            />
            {/* <Navbar Logo={Logo}/> */} {/* Old navbar commented out */}
            <TransparentNavbar Logo={Logo}/> {/* New transparent navbar */}
            <PageTitle 
                pageTitle={'Projects'} 
                pagesub={'Projects'}
                backgroundImage={projectsBg}
            /> 
            <ProjectsS2/>
            <DeliveredProjectsSection />
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ProjectPage;
