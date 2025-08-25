import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import { useParams } from 'react-router-dom'
import Services from '../../api/service'
import RelatedService from './related';
import Discuss from './discuss';
import ServiceSidebar from './sidebar';
import Logo from '../../images/logo.svg'
import Footer from '../../components/footer';


const ServiceSinglePage = (props) => {
    const { id } = useParams()

    const serviceDetails = Services.find(item => item.Id === id)

    return (
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={serviceDetails.sTitle} pagesub={'Project'} />
            <div className="wpo-service-single-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-main-img">
                                        <img src={serviceDetails.sImg} alt=""/>
                                    </div>
                                    <div className="wpo-service-single-title">
                                        <h3>{serviceDetails.sTitle}</h3>
                                    </div>
                                    <p>When you choose Giga Group for your project, you're selecting a partner with over 65 years of proven excellence across multiple industries. From real estate development to retail management, our comprehensive approach ensures every aspect of your investment is handled with precision and care.</p>
                                    <p>We understand that your investment is more than just a property - it's a foundation for your future, a place for your business to grow, and a legacy for generations to come. That's why we approach every project with the same dedication and attention to detail, regardless of size or scope.</p>
                                    <div className="row mt-4">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src="assets/images/service-single/2.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src="assets/images/service-single/3.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-service-single-item list-widget">
                                    <div className="wpo-service-single-title">
                                        <h3>Why Choose Us</h3>
                                    </div>
                                    <p>Our commitment to excellence is reflected in every project we undertake. We combine international standards with local expertise, ensuring your investment not only meets but exceeds global benchmarks while serving local market needs perfectly.</p>
                                    <ul>
                                        <li>Proven legacy since 1956 with operations across Pakistan, UAE, and other countries</li>
                                        <li>Multi-sector expertise spanning real estate, retail, trading, and manufacturing</li>
                                        <li>Iconic project portfolio including Giga Mall Islamabad and Goldcrest Views</li>
                                        <li>Strategic locations in prime areas like DHA Phase II Islamabad</li>
                                        <li>Comprehensive development approach creating complete communities</li>
                                    </ul>
                                </div>
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-title">
                                        <h3>Our approach</h3>
                                    </div>
                                    <p>We believe in a comprehensive approach that goes beyond traditional real estate development. Our process begins with understanding market dynamics, client needs, and community requirements, then translating those insights into integrated developments that create lasting value for all stakeholders.</p>
                                </div>
                                <div className="wpo-service-single-item list-widget">
                                    <div className="wpo-service-single-title">
                                        <h3>Our Work Process</h3>
                                    </div>
                                    <ul>
                                        <li>Market research and strategic location analysis for optimal investment potential</li>
                                        <li>Comprehensive project planning and development strategy formulation</li>
                                        <li>Integrated design and construction with quality assurance systems</li>
                                        <li>Community development and post-completion management services</li>
                                    </ul>
                                </div>
                                <RelatedService/>
                                 <Discuss/>
                            </div>
                        </div>
                        <ServiceSidebar/>
                    </div>
                </div>
            </div>
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar />
        </Fragment>
    )
};
export default ServiceSinglePage;
