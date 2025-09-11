import React from 'react';
import './SocialMediaLinks.css';

const SocialMediaLinks = ({ socialMedia }) => {
    if (!socialMedia) return null;

    const socialPlatforms = [
        {
            name: 'facebook',
            icon: 'ti-facebook',
            label: 'Facebook'
        },
        {
            name: 'linkedin',
            icon: 'ti-linkedin',
            label: 'LinkedIn'
        },
        {
            name: 'twitter',
            icon: 'ti-twitter',
            label: 'Twitter'
        },
        {
            name: 'instagram',
            icon: 'ti-instagram',
            label: 'Instagram'
        }
    ];

    const availablePlatforms = socialPlatforms.filter(platform => 
        socialMedia[platform.name] && socialMedia[platform.name] !== null
    );

    if (availablePlatforms.length === 0) return null;

    return (
        <div className="social-media-links">
            <h4>Connect with {socialMedia.name || 'me'}</h4>
            <div className="social-icons">
                {availablePlatforms.map((platform) => (
                    <a
                        key={platform.name}
                        href={socialMedia[platform.name]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`social-link ${platform.name}`}
                        title={platform.label}
                        aria-label={`Visit ${platform.label} profile`}
                    >
                        <i className={platform.icon}></i>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SocialMediaLinks;
