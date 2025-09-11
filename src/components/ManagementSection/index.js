import React from 'react'
import {Link} from 'react-router-dom'
import Management from '../../api/management'
import SectionTitle from '../SectionTitle'
import './ManagementSection.css'

const ManagementSection = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

    return(
        <section className="wpo-team-section section-padding">
            <div className="container">
                <SectionTitle subTitle={'VISIONARY LEADERSHIP'} MainTitle={'Meet Our Management'}/>
                <div className="wpo-team-wrap">
                    <div className="row">
                        {Management.map((member, aitem) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={aitem}>
                            <div className="wpo-team-item">
                                <div className="wpo-team-img">
                                    <img src={member.tImg} alt=""/>
                                    <Link onClick={ClickHandler} to={`/management-single/${member.Id}`}><i className="ti-plus"></i></Link>
                                </div>
                                <div className="wpo-team-text">
                                    <h3><Link onClick={ClickHandler} to={`/management-single/${member.Id}`}>{member.name}</Link></h3>
                                    <span>{member.title}</span>
                                    <p className="management-bio">{member.bio.substring(0, 150)}...</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ManagementSection;
