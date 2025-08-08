import React, { Component } from 'react';
import './style.css';
import { processFormSubmission } from '../../utils/formSubmission';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            contact: ''
        };
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = {
            name: this.state.fullName,
            email: this.state.email,
            contact: this.state.contact,
            project: 'Registration Interest',
            message: 'Lead from registration form',
            source: 'Registration'
        };
        
        await processFormSubmission(
            formData,
            () => {
                // Success callback - reset form
                this.setState({ fullName: '', email: '', contact: '' });
            },
            (error) => {
                // Error callback
                console.error('Registration submission error:', error);
            }
        );
    }

    render() {
        return (
            <div className="registration-form-overlay">
                <div className="registration-form-container">
                    <h3>Register Your Interest</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={this.state.fullName}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="tel"
                                name="contact"
                                placeholder="Contact Number"
                                value={this.state.contact}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn">
                            Submit Interest
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default RegistrationForm;