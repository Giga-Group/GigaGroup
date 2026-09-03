import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Projects, { getProjectPath } from '../../api/project'
import SectionTitle from '../SectionTitle';

const ProjectSectionS2 = () => {

    useEffect(() => {
        console.log('Projects rendered on /projects:', JSON.stringify(Projects, null, 2));
    }, []);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <div className="wpo-project-area-s2 section-padding">
            <div className="container">
                <SectionTitle subTitle={'Featured Works'} MainTitle={'Our Projects'}/>
                <div className="row align-items-center">
                    <div className="wpo-project-wrap">
                        <div className="sortable-gallery">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-grids gallery-container clearfix">
                                        {Projects.map((project, pot) => (
                                            <div className="grid" key={pot}>
                                                <div className="wpo-project-item">
                                                    <div className="wpo-project-img">
                                                        <img src={project.pImg} alt="" />
                                                        <div className="left-border"></div>
                                                        <div className="right-border"></div>
                                                    </div>
                                                    <div className="wpo-project-text">
                                                        <h2><Link onClick={ClickHandler} to={getProjectPath(project)}>{project.title}</Link></h2>
                                                        <span>{project.subTitle}</span>
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

export default ProjectSectionS2;

