import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Contactpage from '../../components/Contactpage'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo.svg'
import contactBg from '../../images/banner/contact-us.jpg' // Using Giga Mall Extension as background

const ContactPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle 
                pageTitle={'Contact Us'} 
                pagesub={'Contact'}
                backgroundImage={contactBg}
            /> 
            <Contactpage/>
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ContactPage;

