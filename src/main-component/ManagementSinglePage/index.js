import React, { Fragment } from 'react';
import TransparentNavbar from '../../components/TransparentNavbar'
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import { useParams } from 'react-router-dom'
import Management from '../../api/management'
import Footer from '../../components/footer'
import Logo from '../../images/logo.svg'
import '../../components/ManagementSection/ManagementSection.css'
import companiesBg from '../../images/banner/companies-banner.jpeg'

const ManagementSinglePage = (props) => {
    const { id } = useParams()

    const managementDetails = Management.find(item => item.Id === id)

    return (
        <Fragment>
            <TransparentNavbar Logo={Logo} />
            <PageTitle pageTitle={managementDetails.name} pagesub={managementDetails.title} backgroundImage={companiesBg} />
            <div className="team-pg-area section-padding">
                <div className="container">
                    <div className="team-info-wrap">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="team-info-img text-center">
                                    <img src={managementDetails.tImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="exprience-area">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="exprience-wrap">
                                    <h2 style={{ paddingLeft: '10px' }}>About {managementDetails.name}</h2>
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

                                {
                                    managementDetails.achievements && managementDetails.achievements.length > 0 && (
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
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer ftClass={'wpo-site-footer-s2'} />
            <Scrollbar />
        </Fragment>
    )
}

export default ManagementSinglePage;
