// Environment configuration for Al Ghurair Giga
// Centralizes all environment variables

const config = {
  // Google Apps Script (required)
  googleScriptUrl: process.env.REACT_APP_GOOGLE_SCRIPT_URL,
  
  // Email Configuration (defaults provided)
  contactEmail: process.env.REACT_APP_CONTACT_EMAIL || 'info@gigagroup.com',
  reportsEmail: process.env.REACT_APP_REPORTS_EMAIL || 'gigagroup.dev@gmail.com',
  
  // Company Information (defaults provided)
  companyName: process.env.REACT_APP_COMPANY_NAME || 'Giga Group',
  companyPhone: process.env.REACT_APP_COMPANY_PHONE || '+92 (51) 111 786 123',
  companyAddress: process.env.REACT_APP_COMPANY_ADDRESS || 'Giga City, DHA Phase II Islamabad, Pakistan-44000',
  
  // API Configuration (defaults provided)
  apiTimeout: parseInt(process.env.REACT_APP_API_TIMEOUT) || 10000,
  enableValidation: process.env.REACT_APP_ENABLE_VALIDATION !== 'false', // Default to true
  
  // Environment (defaults provided)
  environment: process.env.REACT_APP_ENVIRONMENT || 'development',
  isDevelopment: (process.env.REACT_APP_ENVIRONMENT || 'development') === 'development',
  isProduction: process.env.REACT_APP_ENVIRONMENT === 'production'
};

// Validation: Only check for required environment variables
const requiredVars = [
  'REACT_APP_GOOGLE_SCRIPT_URL'
];

const missingVars = requiredVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error('Missing required environment variables:', missingVars);
  console.error('Please check your .env file');
}

export default config;