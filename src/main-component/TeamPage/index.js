import React, { Fragment } from 'react';
import TransparentNavbar from '../../components/TransparentNavbar';
import PageTitle from '../../components/pagetitle';
import TeamSection from '../../components/TeamSection';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import Logo from '../../images/logo.svg';
import teamBg from '../../images/banner/projects.jpg';

const TeamPage = () => {
    return (
        <Fragment>
            <TransparentNavbar Logo={Logo} />
            <PageTitle 
                pageTitle={'Our Team'} 
                pagesub={'Meet Our Professionals'}
                backgroundImage={teamBg}
            />
            <TeamSection />
            <Footer ftClass={'wpo-site-footer-s2'} />
            <Scrollbar />
        </Fragment>
    );
};

export default TeamPage;
