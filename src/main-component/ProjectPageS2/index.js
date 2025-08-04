import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Projects from '../../components/Projects'
import Logo from '../../images/logo.svg'



const ProjectPageS2 =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Projects'} pagesub={'Projects'}/> 
            <Projects pClass={'black-bg'}/>
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ProjectPageS2;
