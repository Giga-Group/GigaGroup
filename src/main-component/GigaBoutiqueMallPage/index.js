import React, { Fragment } from 'react';
import TransparentNavbar from '../../components/TransparentNavbar';
import PageTitle from '../../components/pagetitle';
import Scrollbar from '../../components/scrollbar';
import Footer from '../../components/footer';
import Logo from '../../images/logo.svg';
import GigaBoutiqueMall from '../../api/giga-boutique-mall';
import Seo from '../../components/Seo';

const getYouTubeVideoId = (url) => {
    if (!url) return null;

    const patterns = [
        /(?:youtube\.com\/shorts\/)([^&\n?#/]+)/,
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
    ];

    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match?.[1]) return match[1];
    }

    return null;
};

const getYouTubeEmbedUrl = (videoId) => {
    const params = new URLSearchParams({
        autoplay: '1',
        mute: '1',
        loop: '1',
        playlist: videoId,
        playsinline: '1',
        controls: '1',
        rel: '0',
        modestbranding: '1',
    });

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
};

const GigaBoutiqueMallPage = () => {
    const project = GigaBoutiqueMall;
    const youtubeVideoId = getYouTubeVideoId(project.teaserVideo);

    return (
        <Fragment>
            <Seo
                title={project.title}
                description="Giga Boutique Mall is Islamabad's luxury retail and leisure destination in Giga City, featuring premium shopping, dining, and the first water park of its kind in any Twin Cities mall."
                image={project.coverImage}
            />
            <TransparentNavbar Logo={Logo} />
            <PageTitle
                pageTitle={project.title}
                pagesub={'Delivered Project'}
                backgroundImage={project.coverImage}
                fullHeight
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
                                                <h3>{project.title}</h3>
                                                <h4>{project.subTitle}</h4>
                                            </div>
                                            {project.description.map((desc, index) => (
                                                <p key={index}>{desc}</p>
                                            ))}
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="wpo-project-single-content-des-right">
                                                <ul>
                                                    <li>Location : <span>{project.projectDetails.location}</span></li>
                                                    <li>Status : <span>{project.projectDetails.status}</span></li>
                                                    <li>Project Type : <span>{project.projectDetails.projectType}</span></li>
                                                    <li>Category : <span>{project.projectDetails.category}</span></li>
                                                    <li>Connectivity : <span>{project.projectDetails.connectivity}</span></li>
                                                    <li>Amenities : <span>{project.projectDetails.amenities}</span></li>
                                                    <li>Parking : <span>{project.projectDetails.parking}</span></li>
                                                    <li>Security : <span>{project.projectDetails.security}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wpo-project-single-main-img">
                                        {youtubeVideoId ? (
                                            <div className="wpo-project-single-video">
                                                <iframe
                                                    src={getYouTubeEmbedUrl(youtubeVideoId)}
                                                    title={`${project.title} teaser`}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen
                                                />
                                            </div>
                                        ) : null}
                                    </div>

                                    <div className="wpo-project-single-item list-widget">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="wpo-project-single-title">
                                                    <h3>{project.projectFeatures.title}</h3>
                                                </div>
                                                <p>{project.projectFeatures.description}</p>
                                                <ul>
                                                    {project.projectFeatures.features.map((feature, index) => (
                                                        <li key={index}>{feature}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="col-lg-6 list-widget-s">
                                                <div className="wpo-project-single-title">
                                                    <h3>{project.whyChoose.title}</h3>
                                                </div>
                                                <p>{project.whyChoose.description}</p>
                                                <ul>
                                                    {project.whyChoose.reasons.map((reason, index) => (
                                                        <li key={index}>{reason}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer ftClass={'wpo-site-footer-s2'} />
            <Scrollbar />
        </Fragment>
    );
};

export default GigaBoutiqueMallPage;
