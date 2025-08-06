import React, { Component } from 'react';
import './style.css';

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

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registration submitted:', this.state);
        // Add your form submission logic here
        alert('Thank you for your interest! We will contact you soon.');
        this.setState({ fullName: '', email: '', contact: '' });
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