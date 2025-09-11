import React from 'react';
import DeliveredProjects from '../../api/delivered-projects'
import SectionTitle from '../SectionTitle';

const DeliveredProjectsSection = () => {

    return (
        <div className="wpo-project-area-s2 section-padding delivered-projects-section">
            <div className="container">
                <SectionTitle subTitle={'Completed Works'} MainTitle={'Our Delivered Projects'}/>
                <div className="row align-items-center">
                    <div className="wpo-project-wrap">
                        <div className="sortable-gallery">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-grids gallery-container clearfix">
                                        {DeliveredProjects.map((project, pot) => (
                                            <div className="grid" key={pot}>
                                                <div className="wpo-project-item">
                                                    <div className="wpo-project-img">
                                                        <img src={project.pImg} alt={project.title} />
                                                        <div className="left-border"></div>
                                                        <div className="right-border"></div>
                                                        <div className="wpo-project-overlay">
                                                            <div className="wpo-project-overlay-content">
                                                                <h3>{project.title}</h3>
                                                                <p>{project.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div className="wpo-project-text">
                                                        <h2>{project.title}</h2>
                                                        <span>{project.subTitle}</span>
                                                    </div> */}
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
        </div>  
    );
}

export default DeliveredProjectsSection;
