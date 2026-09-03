import React, { Component } from 'react'
import Projects, { getProjectSlug } from '../../api/project'
import { processFormSubmission } from '../../utils/formSubmission'

const EXTRA_LEAD_SLUGS = [
    'goldcrest-views',
    'giga-mall-extension',
    'goldcrest-breeze-overseas',
];

const BUDGET_OPTIONS = [
    '1 Crore to 2 Crore',
    '2 Crore to 3 Crore',
    '3 Crore to 5 Crore',
    '5 Crore to 8 Crore',
    '10 Crore +',
];

const PURCHASE_OPTIONS = [
    'Immediately',
    'in 3 months',
    'in 6 months',
];

const hasExtraLeadFields = (projectTitle) =>
    EXTRA_LEAD_SLUGS.includes(getProjectSlug({ title: projectTitle }));


class Discuss extends Component {
    constructor(props) {
        super(props);
        // Auto-select current project if available
        const currentProject = this.props.currentProject || '';
        this.state = {
            name: '',
            email: '',
            contact: '',
            message: '',
            project: currentProject,
            budget: '',
            purchaseTimeline: '',
            whatsapp: '',
            city: '',
            error: {}
        }
    }





    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { name, email, contact, error } = this.state;

        if (name === '') {
            error.name = "Please enter your name";
        }
        if (email === '') {
            error.email = "Please enter your email";
        }
        if (contact === '') {
            error.contact = "Please enter your contact number";
        }

        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.contact === '') {
            const showExtraFields = hasExtraLeadFields(this.props.currentProject);
            const extraDetails = showExtraFields
                ? [
                    this.state.budget && `Budget: ${this.state.budget}`,
                    this.state.purchaseTimeline && `Purchase timeline: ${this.state.purchaseTimeline}`,
                    this.state.whatsapp && `WhatsApp: ${this.state.whatsapp}`,
                    this.state.city && `City: ${this.state.city}`,
                ].filter(Boolean)
                : [];
            const baseMessage = this.state.message || 'No message';
            const message = extraDetails.length
                ? (baseMessage === 'No message' ? extraDetails.join(' | ') : `${baseMessage} | ${extraDetails.join(' | ')}`)
                : baseMessage;

            const formData = {
                name: this.state.name,
                email: this.state.email,
                contact: this.state.contact,
                project: this.state.project || this.props.currentProject || 'Not specified',
                message,
                source: 'Project Single',
                budget: showExtraFields ? this.state.budget : '',
                purchaseTimeline: showExtraFields ? this.state.purchaseTimeline : '',
                whatsapp: showExtraFields ? this.state.whatsapp : '',
                city: showExtraFields ? this.state.city : '',
            };
            
            processFormSubmission(
                formData,
                () => {
                    // Success callback - reset form
                    this.setState({
                        name: '',
                        email: '',
                        contact: '',
                        message: '',
                        project: this.props.currentProject || '',
                        budget: '',
                        purchaseTimeline: '',
                        whatsapp: '',
                        city: '',
                        error: {}
                    });
                },
                (error) => {
                    // Error callback
                    console.error('Project single form submission error:', error);
                }
            );
        }
    }

    render(){
        const { name, email, contact, message, project, budget, purchaseTimeline, whatsapp, city, error } = this.state;
        const showExtraFields = hasExtraLeadFields(this.props.currentProject);
        const projectName = this.props.currentProject || 'this project';

        return(

            <div className="wpo-project-single-item">
                <div className="wpo-project-contact-area">
                    <div className="wpo-contact-title">
                        <h2>Interested in our projects?</h2>
                        <p>Share your details and our team will contact you with complete information, pricing, and booking options</p>
                    </div>
                    <div className="wpo-contact-form-area">
                        <form method="post" onSubmit={this.subimtHandler} className="form">
                            <div className="row">
                                <div className="col col-lg-6 col-md-6 col-12">
                                    <div className="form-field">
                                        <input className="form-control" value={name} onChange={this.changeHandler} type="text" name="name" placeholder="Full Name" required/>
                                        <p>{error.name ? error.name : ''}</p>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-md-6 col-12">
                                    <div className="form-field">
                                        <input className="form-control" onChange={this.changeHandler} value={email} type="email" name="email" placeholder="Email Address" required/>
                                        <p>{error.email ? error.email : ''}</p>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-md-6 col-12">
                                    <div className="form-field">
                                        <input className="form-control" onChange={this.changeHandler} value={contact} type="tel" name="contact" placeholder="Contact Number" required/>
                                        <p>{error.contact ? error.contact : ''}</p>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-md-6 col-12">
                                     <div className="form-field">
                                        <select className="form-control" onChange={this.changeHandler} value={project} name="project">
                                            <option value="">Interested in Project (Optional)</option>
                                            {Projects.map((proj) => (
                                                <option key={proj.Id} value={proj.title}>{proj.title}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="fullwidth col col-lg-12 col-12">
                                    <textarea className="form-control" name="message" id="message" value={message} onChange={this.changeHandler}
                                        placeholder="Message (Optional)"></textarea>
                                </div>
                                {showExtraFields && (
                                    <>
                                        <div className="fullwidth col col-lg-12 col-12">
                                            <div className="form-field">
                                                <label className="form-label" htmlFor="budget">Please choose your budget for investing in {projectName}</label>
                                                <select className="form-control" id="budget" name="budget" value={budget} onChange={this.changeHandler}>
                                                    <option value="">Select</option>
                                                    {BUDGET_OPTIONS.map((option) => (
                                                        <option key={option} value={option}>{option}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="fullwidth col col-lg-12 col-12">
                                            <div className="form-field">
                                                <label className="form-label" htmlFor="purchaseTimeline">How soon do you intend to purchase your Office / Shop</label>
                                                <select className="form-control" id="purchaseTimeline" name="purchaseTimeline" value={purchaseTimeline} onChange={this.changeHandler}>
                                                    <option value="">Select</option>
                                                    {PURCHASE_OPTIONS.map((option) => (
                                                        <option key={option} value={option}>{option}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="fullwidth col col-lg-12 col-12">
                                            <div className="form-field">
                                                <label className="form-label" htmlFor="whatsapp">Please share your WhatsApp to receive project information</label>
                                                <input className="form-control" id="whatsapp" name="whatsapp" type="text" value={whatsapp} onChange={this.changeHandler} placeholder="Enter your answer." />
                                            </div>
                                        </div>
                                        <div className="fullwidth col col-lg-12 col-12">
                                            <div className="form-field">
                                                <label className="form-label" htmlFor="city">City</label>
                                                <input className="form-control" id="city" name="city" type="text" value={city} onChange={this.changeHandler} placeholder="Enter your answer." />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="submit-area">
                                <button type="submit" className="theme-btn-s4">Submit Interest</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}
export default  Discuss;