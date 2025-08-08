import React, { Component } from 'react'
import Projects from '../../api/project'
import { processFormSubmission } from '../../utils/formSubmission'


class ContactForm extends Component {


    state = {
        name: '',
        email: '',
        contact: '',
        message: '',
        project: '',
        error: {}
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
                project: this.state.project || 'Not specified',
                message: this.state.message || 'No message',
                source: 'Contact'
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
                        project: '',
                        error: {}
                    });
                },
                (error) => {
                    // Error callback
                    console.error('Contact form submission error:', error);
                }
            );
        }
    }

    render(){
        const { name, email, contact, message, project, error } = this.state;

        return(
            <form onSubmit={this.subimtHandler} className="form">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input value={name} onChange={this.changeHandler} type="text" name="name" placeholder="Full Name" required/>
                            <p>{error.name ? error.name : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={email} type="email" name="email" placeholder="Email Address" required/>
                            <p>{error.email ? error.email : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input value={contact} onChange={this.changeHandler} type="tel" name="contact" placeholder="Contact Number" required/>
                            <p>{error.contact ? error.contact : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <select className="form-control" onChange={this.changeHandler} value={project} name="project">
                                <option value="">Interested in Project</option>
                                {Projects.map((proj) => (
                                    <option key={proj.Id} value={proj.title}>{proj.title}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-field">
                            <textarea name="message" value={message} onChange={this.changeHandler} placeholder="Message (Optional)"></textarea>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-submit">
                            <button type="submit" className="theme-btn">Send Message</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

}
export default  ContactForm;