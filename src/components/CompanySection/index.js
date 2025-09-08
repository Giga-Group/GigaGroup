import React from 'react';
import Companies from '../../api/companies'
import SectionTitle from '../SectionTitle';

const CompanySection = () => {

    return (
        <div className="wpo-project-area-s2 section-padding">
            <div className="container">
                <SectionTitle subTitle={'Our Business Portfolio'} MainTitle={'Our Companies'}/>
                <div className="row align-items-center">
                    <div className="wpo-project-wrap">
                        <div className="sortable-gallery">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-grids gallery-container clearfix">
                                        {Companies.map((company, pot) => (
                                            <div className="grid" key={pot}>
                                                <div className="wpo-project-item">
                                                    <div className="wpo-project-img">
                                                        <img src={company.pImg} alt={company.title} />
                                                        <div className="left-border"></div>
                                                        <div className="right-border"></div>
                                                        {/* <div className="wpo-project-overlay">
                                                            <div className="wpo-project-overlay-content">
                                                                <p>{company.description}</p>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                    <div className="wpo-project-text">
                                                        <h2>{company.title}</h2>
                                                        <span>{company.subTitle}</span>
                                                    </div>
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

export default CompanySection;
