import React, { useState, useEffect } from 'react';
import './style.css';

const ConstructionUpdateSection = ({ constructionUpdates }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 767);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (!constructionUpdates || !constructionUpdates.updates || constructionUpdates.updates.length === 0) {
        return null;
    }

    const openModal = (image, index) => {
        if (!isMobile) {
            setSelectedImage({ image, index });
        }
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const navigateImage = (direction) => {
        if (!selectedImage) return;
        
        const currentIndex = selectedImage.index;
        let newIndex;
        
        if (direction === 'next') {
            newIndex = (currentIndex + 1) % constructionUpdates.updates.length;
        } else {
            newIndex = (currentIndex - 1 + constructionUpdates.updates.length) % constructionUpdates.updates.length;
        }
        
        setSelectedImage({
            image: constructionUpdates.updates[newIndex].image,
            index: newIndex
        });
    };

    return (
        <div className="wpo-project-single-item">
            <div className="wpo-project-single-title">
                <h3>{constructionUpdates.title || 'Construction Updates'}</h3>
            </div>
            {constructionUpdates.description && (
                <p>{constructionUpdates.description}</p>
            )}
            
            <div className="wpo-construction-updates-gallery">
                <div className="row">
                    {constructionUpdates.updates.map((update, index) => (
                        <div 
                            key={index} 
                            className="col-lg-6 col-md-6 col-sm-6 col-12 mb-4"
                        >
                            <div 
                                className={`wpo-construction-update-item ${isMobile ? 'mobile-view' : ''}`}
                                onClick={() => openModal(update.image, index)}
                            >
                                <div className="wpo-construction-update-img">
                                    <img 
                                        src={update.image} 
                                        alt={update.title || `Construction Update ${index + 1}`}
                                    />
                                    {!isMobile && (
                                        <div className="wpo-construction-update-overlay">
                                            <i className="ti-zoom-in"></i>
                                        </div>
                                    )}
                                </div>
                                {update.title && (
                                    <div className="wpo-construction-update-text">
                                        <h4>{update.title}</h4>
                                        {update.date && (
                                            <span className="update-date">{update.date}</span>
                                        )}
                                        {update.description && (
                                            <p>{update.description}</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Image Modal - Only on Desktop */}
            {selectedImage && !isMobile && (
                <div 
                    className="wpo-image-modal" 
                    onClick={closeModal}
                >
                    <div className="wpo-image-modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="wpo-image-modal-close" onClick={closeModal}>&times;</span>
                        <img 
                            src={selectedImage.image} 
                            alt="Construction Update"
                            className="wpo-image-modal-img"
                        />
                        {constructionUpdates.updates.length > 1 && (
                            <>
                                <button 
                                    className="wpo-image-modal-prev" 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigateImage('prev');
                                    }}
                                >
                                    &#10094;
                                </button>
                                <button 
                                    className="wpo-image-modal-next" 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigateImage('next');
                                    }}
                                >
                                    &#10095;
                                </button>
                            </>
                        )}
                        {constructionUpdates.updates[selectedImage.index].title && (
                            <div className="wpo-image-modal-caption">
                                <h4>{constructionUpdates.updates[selectedImage.index].title}</h4>
                                {constructionUpdates.updates[selectedImage.index].date && (
                                    <span>{constructionUpdates.updates[selectedImage.index].date}</span>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ConstructionUpdateSection;

