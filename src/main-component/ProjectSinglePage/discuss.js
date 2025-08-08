import React, { Component } from 'react'
import Projects from '../../api/project'
import { processFormSubmission } from '../../utils/formSubmission'


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

        const { name, email, contact, message, project, error } = this.state;

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
            const formData = {
                name: this.state.name,
                email: this.state.email,
                contact: this.state.contact,
                project: this.state.project || this.props.currentProject || 'Not specified',
                message: this.state.message || 'No message',
                source: 'Project Single'
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
        const { name, email, contact, message, project, error } = this.state;

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