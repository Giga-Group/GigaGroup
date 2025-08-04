import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Testimonial from '../../components/Testimonial'
import Logo from '../../images/logo.svg'


const TestimonialPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Testimonilal'} pagesub={'Testimonilal'}/> 
            <Testimonial tClass="style-2"/>
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default TestimonialPage;
