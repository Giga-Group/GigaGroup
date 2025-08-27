import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../../images/logo.svg'
import Projects from '../../api/project'



const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className={`wpo-site-footer ${props.ftClass}`}>
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <Link onClick={ClickHandler} className="logo" to="/"><img src={Logo} alt=""/></Link>
                            </div>
                            <p>Giga Group is a leading real estate developer with 70 years of excellence. Creating iconic developments from luxury residences to world-class commercial spaces across Pakistan and the UAE.</p>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/GigaGroupPakistan/" target="_blank" rel="noopener noreferrer">
                                        <i className="ti-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/gigagrouppakistan" target="_blank" rel="noopener noreferrer">
                                        <i className="ti-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/giga-group-of-companies" target="_blank" rel="noopener noreferrer">
                                        <i className="ti-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@GigaGroupPakistan" target="_blank" rel="noopener noreferrer">
                                        <i className="ti-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3 style={{marginBottom: '20px'}}>Our Projects</h3>
                            </div>
                            <ul>
                                {Projects.slice(0, 5).map((project, index) => (
                                    <li key={project.Id}>
                                        <Link onClick={ClickHandler} to={`/project-single/${project.Id}`}>
                                            {project.title}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <Link onClick={ClickHandler} to="/projects" className="view-all-projects">
                                        View All Projects
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>Contact </h3>
                            </div>
                            <div className="contact-ft">
                                <ul>
                                    <li><i className="fi flaticon-location"></i>Giga City, Defence Housing Authority <br/> 
                                    Phase II Islamabad, Pakistan-44000</li>
                                    <li><i className="fi flaticon-telephone"></i>+92 (51) 111 786 123</li>
                                    <li><i className="fi flaticon-email"></i>info@gigagroup.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget instagram">
                            <div className="widget-title">
                                <h3>Our Gallery</h3>
                            </div>
                            <ul className="d-flex">
                                {Projects.slice(0, 6).map((project, pot) => (
                                    <li key={pot}><Link onClick={ClickHandler} to={`/project-single/${project.Id}`}><img src={project.pImg} alt="" /></Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <ul>
                            <li>&copy; 2025 Giga Group. All Rights Reserved.</li>
                            <li><Link onClick={ClickHandler} to="/">Terms of use |</Link> <Link onClick={ClickHandler} to="/">Privacy Environmental Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;