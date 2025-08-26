import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import ProjectsS2 from '../../components/ProjectsS2'
import Logo from '../../images/logo.svg'
import projectsBg from '../../images/banner/projects.jpg' // Using Goldcrest Views as background

const ProjectPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle 
                pageTitle={'Projects'} 
                pagesub={'Projects'}
                backgroundImage={projectsBg}
            /> 
            <ProjectsS2/>
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ProjectPage;
