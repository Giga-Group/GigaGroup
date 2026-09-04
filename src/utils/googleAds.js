import config from '../config/environment';

const getGtag = () => (typeof window !== 'undefined' ? window.gtag : undefined);

/**
 * Record a successful form submission as a Google Ads lead conversion.
 * Fires generate_lead (Google tag recommended event) and a conversion hit.
 */
export const trackFormSubmission = (formData = {}) => {
    const gtag = getGtag();

    if (typeof gtag !== 'function') {
        return;
    }

    const project = formData.project || 'Not specified';
    const source = formData.source || 'Unknown';
    const sendTo = config.googleAdsConversionLabel
        ? `${config.googleAdsId}/${config.googleAdsConversionLabel}`
        : config.googleAdsId;

    gtag('event', 'generate_lead', {
        send_to: config.googleAdsId,
        currency: 'PKR',
        value: 1,
        project,
        source,
    });

    gtag('event', 'conversion', {
        send_to: sendTo,
        currency: 'PKR',
        value: 1,
    });
};
