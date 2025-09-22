import React, { Fragment } from 'react';
// import Navbar from '../../components/Navbar' // Old navbar commented out
import TransparentNavbar from '../../components/TransparentNavbar' // New transparent navbar
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import { useParams } from 'react-router-dom'
import Projects from '../../api/project'
import RelatedProject from './related';
import Discuss from './discuss';
import Logo from '../../images/logo.svg'
import Footer from '../../components/footer';


const ProjectSinglePage = (props) => {
    const { id } = useParams()

    const projectDetails = Projects.find(item => item.Id === id)

    return (
        <Fragment>
            {/* <Navbar Logo={Logo}/> */} {/* Old navbar commented out */}
            <TransparentNavbar Logo={Logo}/> {/* New transparent navbar */}
            <PageTitle 
                pageTitle={projectDetails.title} 
                pagesub={'Project'} 
                backgroundImage={projectDetails.coverImage}
            />
            <div className="wpo-project-single-area section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <div className="wpo-project-single-wrap">
                                <div className="wpo-project-single-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <div className="wpo-project-single-title">
                                                <h3>{projectDetails.title}</h3>
                                                <h4>{projectDetails.subTitle}</h4>
                                            </div>
                                            {projectDetails.description.map((desc, index) => (
                                                <p key={index}>{desc}</p>
                                            ))}
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="wpo-project-single-content-des-right">
                                                <ul>
                                                <li>Location : <span>{projectDetails.projectDetails.location}</span></li>
                                                <li>Retrun : <span>{projectDetails.projectDetails.returnPotential}</span></li>
                                                <li>Interiors : <span>{projectDetails.projectDetails.interiors}</span></li>
                                                <li>Parking : <span>{projectDetails.projectDetails.parking}</span></li>
                                                <li>Amenities : <span>{projectDetails.projectDetails.amenities}</span></li>
                                                <li>Security : <span>{projectDetails.projectDetails.security}</span></li>
                                                <li>Connectivity : <span>{projectDetails.projectDetails.connectivity}</span></li>
                                                <li>Status : <span>{projectDetails.projectDetails.status}</span></li>
                                                <li>Project Type : <span>{projectDetails.projectDetails.projectType}</span></li>
                                                <li>Category : <span>{projectDetails.projectDetails.category}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wpo-project-single-main-img">
                                        <img src={projectDetails.ps1img} alt={projectDetails.title}/>
                                    </div>
                                    
                                    {/* Design Philosophy Section */}
                                    {projectDetails.sectionVisibility?.designPhilosophy && (
                                        <div className="wpo-project-single-item">
                                            <div className="wpo-project-single-title">
                                                <h3>{projectDetails.designPhilosophy.title}</h3>
                                            </div>
                                            <p>{projectDetails.designPhilosophy.description}</p>
                                            <ul>
                                                {projectDetails.designPhilosophy.philosophy.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Project Features Section */}
                                    {projectDetails.sectionVisibility?.projectFeatures && (
                                        <div className="wpo-project-single-item list-widget">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="wpo-project-single-title">
                                                        <h3>{projectDetails.projectFeatures.title}</h3>
                                                    </div>
                                                    <p>{projectDetails.projectFeatures.description}</p>
                                                    <ul>
                                                        {projectDetails.projectFeatures.features.map((feature, index) => (
                                                            <li key={index}>{feature}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6">
                                                    {projectDetails.sectionVisibility?.testimonial && (
                                                        <div className="wpo-project-single-item-quote">
                                                            <p>"{projectDetails.testimonial.quote}"</p>
                                                            <span>{projectDetails.testimonial.author} - <span>{projectDetails.testimonial.designation}</span></span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Project Gallery */}
                                    {projectDetails.sectionVisibility?.projectGallery && (
                                        <div className="wpo-project-single-gallery">
                                            <div className="row mt-4">
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="wpo-p-details-img">
                                                        <img src={projectDetails.psub1img1} alt={projectDetails.title}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="wpo-p-details-img">
                                                        <img src={projectDetails.psub1img2} alt={projectDetails.title}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Project Amenities and Why Choose Sections */}
                                    {(projectDetails.sectionVisibility?.projectAmenities || projectDetails.sectionVisibility?.whyChoose) && (
                                        <div className="wpo-project-single-item list-widget">
                                            <div className="row">
                                                {projectDetails.sectionVisibility?.projectAmenities && (
                                                    <div className="col-lg-6">
                                                        <div className="wpo-project-single-title">
                                                            <h3>{projectDetails.projectAmenities.title}</h3>
                                                        </div>
                                                        <p>{projectDetails.projectAmenities.description}</p>
                                                        <ul>
                                                            {projectDetails.projectAmenities.amenities.map((amenity, index) => (
                                                                <li key={index}>{amenity}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                                {projectDetails.sectionVisibility?.whyChoose && (
                                                    <div className="col-lg-6 list-widget-s">
                                                        <div className="wpo-project-single-title">
                                                            <h3>{projectDetails.whyChoose.title}</h3>
                                                        </div>
                                                        <p>{projectDetails.whyChoose.description}</p>
                                                        <ul>
                                                            {projectDetails.whyChoose.reasons.map((reason, index) => (
                                                                <li key={index}>{reason}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Investment Highlights Section */}
                                    {projectDetails.sectionVisibility?.investmentHighlights && (
                                        <div className="wpo-project-single-item">
                                            <div className="wpo-project-single-title">
                                                <h3>{projectDetails.investmentHighlights.title}</h3>
                                            </div>
                                            <p>{projectDetails.investmentHighlights.description}</p>
                                            <ul>
                                                {projectDetails.investmentHighlights.highlights.map((highlight, index) => (
                                                    <li key={index}>{highlight}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Location Advantages Section */}
                                    {projectDetails.sectionVisibility?.locationAdvantages && (
                                        <div className="wpo-project-single-item">
                                            <div className="wpo-project-single-title">
                                                <h3>{projectDetails.locationAdvantages.title}</h3>
                                            </div>
                                            <p>{projectDetails.locationAdvantages.description}</p>
                                            <ul>
                                                {projectDetails.locationAdvantages.advantages.map((advantage, index) => (
                                                    <li key={index}>{advantage}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <RelatedProject/>
                                    <Discuss currentProject={projectDetails.title} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar />
        </Fragment>
    )
};
export default ProjectSinglePage;
