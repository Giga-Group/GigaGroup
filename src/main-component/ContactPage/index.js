import React, {Fragment} from 'react';
// import Navbar from '../../components/Navbar' // Old navbar commented out
import TransparentNavbar from '../../components/TransparentNavbar' // New transparent navbar
import PageTitle from '../../components/pagetitle'
import Contactpage from '../../components/Contactpage'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo.svg'
import contactBg from '../../images/banner/contact-us.jpg' // Using Giga Mall Extension as background
import Seo from '../../components/Seo'

const ContactPage =() => {
    return(
        <Fragment>
            <Seo
                title="Contact Us"
                description="Get in touch with Giga Group in Islamabad. Visit Downtown Giga, DHA Phase II, GT Road, email info@gigagroup.com, or call +92 (51) 111 786 123."
                image={contactBg}
            />
            {/* <Navbar Logo={Logo}/> */} {/* Old navbar commented out */}
            <TransparentNavbar Logo={Logo}/> {/* New transparent navbar */}
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

