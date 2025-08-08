// Centralized Form Submission Handler for Al Ghurair Giga
// Handles all form submissions and sends data to Google Sheets

import config from '../config/environment';

/**
 * Submit form data to Google Sheets
 * @param {Object} formData - The form data to submit
 * @param {string} formData.name - Full name
 * @param {string} formData.email - Email address
 * @param {string} formData.contact - Contact/Phone number
 * @param {string} formData.project - Project interest (optional)
 * @param {string} formData.message - Message (optional)
 * @param {string} formData.source - Source page (e.g., 'Registration', 'Contact', 'Project Single')
 * @returns {Promise} - Promise that resolves when submission is complete
 */
export const submitFormData = async (formData) => {
    try {
        // Check if Google Script URL is configured
        if (!config.googleScriptUrl) {
            throw new Error('Google Script URL not configured. Please check your environment variables.');
        }

        // Validate required fields
        if (!formData.name || !formData.email || !formData.contact) {
            throw new Error('Name, email, and contact are required fields');
        }

        // Prepare data for Google Sheets
        const submissionData = {
            timestamp: new Date().toISOString(),
            name: formData.name.trim(),
            email: formData.email.trim().toLowerCase(),
            contact: formData.contact.trim(),
            project: formData.project || 'Not specified',
            message: formData.message || 'No message',
            source: formData.source || 'Unknown',
            status: 'New Lead'
        };

        console.log('Submitting form data to:', config.googleScriptUrl);

        // Submit to Google Sheets via Apps Script
        const response = await fetch(config.googleScriptUrl, {
            method: 'POST',
            mode: 'no-cors', // Required for Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(submissionData)
        });

        // Note: no-cors mode means we can't read the response
        // But if no error is thrown, the submission was successful
        
        console.log('Form submitted successfully');
        return { success: true, message: 'Form submitted successfully' };

    } catch (error) {
        console.error('Form submission error:', error);
        throw error;
    }
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if email is valid
 */
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validate Pakistani phone number
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if phone is valid
 */
export const validatePhone = (phone) => {
    // Pakistani phone number patterns
    const phoneRegex = /^(\+92|92|0)?[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/[\s-]/g, ''));
};

/**
 * Show success message to user
 * @param {string} message - Success message
 */
export const showSuccessMessage = (message = 'Thank you for your interest! We will contact you soon.') => {
    alert(message);
    // You can replace this with a more sophisticated notification system
};

/**
 * Show error message to user
 * @param {string} message - Error message
 */
export const showErrorMessage = (message = 'Something went wrong. Please try again.') => {
    alert(message);
    // You can replace this with a more sophisticated notification system
};

/**
 * Process form submission with validation and error handling
 * @param {Object} formData - Form data object
 * @param {Function} onSuccess - Callback for successful submission
 * @param {Function} onError - Callback for failed submission
 */
export const processFormSubmission = async (formData, onSuccess, onError) => {
    try {
        // Validate email
        if (config.enableValidation && !validateEmail(formData.email)) {
            throw new Error('Please enter a valid email address');
        }

        // Validate phone
        if (config.enableValidation && !validatePhone(formData.contact)) {
            throw new Error('Please enter a valid Pakistani phone number');
        }

        // Submit data
        await submitFormData(formData);
        
        // Show success message
        showSuccessMessage();
        
        // Call success callback
        if (onSuccess) onSuccess();

    } catch (error) {
        console.error('Form processing error:', error);
        
        // Show error message
        showErrorMessage(error.message);
        
        // Call error callback
        if (onError) onError(error);
    }
};