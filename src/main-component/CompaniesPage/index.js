import React from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import Footer from '../../components/footer';
import CompanySection from '../../components/CompanySection';
import DeliveredProjectsSection from '../../components/DeliveredProjectsSection';

const CompaniesPage = () => {
    return (
        <div>
            <Navbar />
            <PageTitle pageTitle={'Our Companies'} pagesub={'Companies'} />
            <CompanySection />
            <DeliveredProjectsSection />
            <Footer />
            <Scrollbar />
        </div>
    );
};

export default CompaniesPage;
