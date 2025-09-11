import React, { Fragment } from 'react';
import TransparentNavbar from '../../components/TransparentNavbar'
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import { useParams } from 'react-router-dom'
import Management from '../../api/management'
import Footer from '../../components/footer'
import Logo from '../../images/logo.svg'
import SocialMediaLinks from '../../components/SocialMediaLinks'
import '../../components/ManagementSection/ManagementSection.css'
import companiesBg from '../../images/banner/companies-banner.jpeg'

const ManagementSinglePage = (props) => {
    const { id } = useParams()

    const managementDetails = Management.find(item => item.Id === id)

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <Fragment>
            <TransparentNavbar Logo={Logo}/>
            <PageTitle pageTitle={managementDetails.name} pagesub={managementDetails.title} backgroundImage={companiesBg} />
            <div className="team-pg-area section-padding">
                <div className="container">
                    <div className="team-info-wrap">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="team-info-img">
                                    <img src={managementDetails.tImg} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="team-info-text">
                                    <h2>{managementDetails.name}</h2>
                                    <h4>{managementDetails.title}</h4>
                                    <p className="management-intro">{managementDetails.bio}</p>
                                    {managementDetails.socialMedia && (
                                        <div className="social-media-inline">
                                            {Object.entries(managementDetails.socialMedia)
                                                .filter(([platform, url]) => url && url !== null)
                                                .map(([platform, url]) => {
                                                    const platformIcons = {
                                                        facebook: 'ti-facebook',
                                                        linkedin: 'ti-linkedin',
                                                        twitter: 'ti-twitter',
                                                        instagram: 'ti-instagram'
                                                    };
                                                    return (
                                                        <a
                                                            key={platform}
                                                            href={url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={`social-icon-inline ${platform}`}
                                                            title={platform.charAt(0).toUpperCase() + platform.slice(1)}
                                                            aria-label={`Visit ${platform} profile`}
                                                        >
                                                            <i className={platformIcons[platform]}></i>
                                                        </a>
                                                    );
                                                })}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="exprience-area">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="exprience-wrap">
                                    <h2 style={{paddingLeft: '10px'}}>About {managementDetails.name}</h2>
                                    {managementDetails.paragraphs && managementDetails.paragraphs.length > 0 ? (
                                        managementDetails.paragraphs.map((paragraph, index) => (
                                            <p key={index} className="management-paragraph">
                                                {paragraph}
                                            </p>
                                        ))
                                    ) : (
                                        <p>{managementDetails.detailedBio}</p>
                                    )}
                                </div>
                                
                                <div className="achievements-section">
                                    <h3>Key Achievements</h3>
                                    <div className="row">
                                        {managementDetails.achievements.map((achievement, index) => (
                                            <div className="col-lg-6 col-md-6" key={index}>
                                                <div className="achievement-item">
                                                    <i className="ti-check"></i>
                                                    <span>{achievement}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
}

export default ManagementSinglePage;
