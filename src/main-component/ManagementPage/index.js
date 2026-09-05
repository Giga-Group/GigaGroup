import React, { Fragment } from 'react';
import TransparentNavbar from '../../components/TransparentNavbar';
import PageTitle from '../../components/pagetitle';
import ManagementSection from '../../components/ManagementSection';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import Logo from '../../images/logo.svg';
import managementBg from '../../images/banner/projects.jpg';
import Seo from '../../components/Seo';

const ManagementPage = () => {
    return (
        <Fragment>
            <Seo
                title="Management"
                description="Meet Giga Group's management team. Learn about the visionary leadership behind our luxury residential and commercial developments across Pakistan and the UAE."
                image={managementBg}
            />
            <TransparentNavbar Logo={Logo} />
            <PageTitle 
                pageTitle={'Management'} 
                pagesub={'Visionary Leadership • Timeless Legacy'}
                backgroundImage={managementBg}
            />
            <ManagementSection />
            <Footer ftClass={'wpo-site-footer-s2'} />
            <Scrollbar />
        </Fragment>
    );
};

export default ManagementPage;
