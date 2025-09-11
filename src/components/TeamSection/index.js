import React from 'react'
import {Link} from 'react-router-dom'
import Teams from '../../api/team'
import Management from '../../api/management'
import SectionTitle from '../SectionTitle'



const TeamSection = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return(

        <section className="wpo-team-section section-padding">
            <div className="container">
                <SectionTitle subTitle={'OUR PROFESSIONALS'} MainTitle={'Meet Our Team'}/>
                <div className="wpo-team-wrap">
                    <div className="row">
                        {Management.map((team, aitem) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={aitem}>
                            <div className="wpo-team-item">
                                <div className="wpo-team-img">
                                    <img src={team.tImg} alt=""/>
                                    <Link onClick={ClickHandler} to={`/management-single/${team.Id}`}><i className="ti-plus"></i></Link>
                                </div>
                                <div className="wpo-team-text">
                                    <h3><Link onClick={ClickHandler} to={`/management-single/${team.Id}`}>{team.name}</Link></h3>
                                    <span>{team.title}</span>
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

export default TeamSection;