import React from 'react';
// import Navbar from '../../components/Navbar' // Old navbar commented out
import TransparentNavbar from '../../components/TransparentNavbar' // New transparent navbar
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import Footer from '../../components/footer';
import CompanySection from '../../components/CompanySection';
import DeliveredProjectsSection from '../../components/DeliveredProjectsSection';
import Logo from '../../images/logo.svg'
import companiesBg from '../../images/banner/companies-banner.jpeg'

const CompaniesPage = () => {
    return (
        <div>
            {/* <Navbar /> */} {/* Old navbar commented out */}
            <TransparentNavbar Logo={Logo} /> {/* New transparent navbar */}
            <PageTitle pageTitle={'Our Companies'} pagesub={'Companies'} backgroundImage={companiesBg}/>
            <CompanySection />
            <DeliveredProjectsSection />
            <Footer />
            <Scrollbar />
        </div>
    );
};

export default CompaniesPage;
