import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

const ConstructionUpdateSection = ({ constructionUpdates }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [shouldAutoplay, setShouldAutoplay] = useState(false);
    const videoRef = useRef(null);

    // Function to extract YouTube video ID from URL
    const getYouTubeVideoId = (url) => {
        if (!url) return null;
        
        // Handle various YouTube URL formats including Shorts
        const patterns = [
            /(?:youtube\.com\/shorts\/)([^&\n?#\/]+)/, // YouTube Shorts
            /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
            /youtube\.com\/watch\?.*v=([^&\n?#]+)/
        ];
        
        for (const pattern of patterns) {
            const match = url.match(pattern);
            if (match && match[1]) {
                return match[1];
            }
        }
        
        return null;
    };

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth <= 767;
            setIsMobile(mobile);
            // Enable autoplay immediately on mobile
            if (mobile && constructionUpdates?.youtubeVideo) {
                setShouldAutoplay(true);
            }
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, [constructionUpdates?.youtubeVideo]);

    // Intersection Observer for autoplay when video comes into view (fallback)
    useEffect(() => {
        const youtubeVideoId = constructionUpdates?.youtubeVideo ? getYouTubeVideoId(constructionUpdates.youtubeVideo) : null;
        
        if (!youtubeVideoId || !videoRef.current || shouldAutoplay) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !shouldAutoplay) {
                        setShouldAutoplay(true);
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of video is visible
                rootMargin: '0px'
            }
        );

        observer.observe(videoRef.current);

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, [constructionUpdates?.youtubeVideo, shouldAutoplay]);

    const youtubeVideoId = constructionUpdates?.youtubeVideo ? getYouTubeVideoId(constructionUpdates.youtubeVideo) : null;
    const isShortsVideo = constructionUpdates?.youtubeVideo?.includes('/shorts/') || false;
    
    // Check if this is Central Palace Residence (mobile-only section)
    const isCentralPalaceResidence = constructionUpdates?.description?.includes('Central Palace Residence') || false;
    
    // Allow rendering if there's a video or updates
    if (!constructionUpdates || (!youtubeVideoId && (!constructionUpdates.updates || constructionUpdates.updates.length === 0))) {
        return null;
    }
    
    // Hide entire section on desktop/web view for Central Palace Residence, show only on mobile
    if (isCentralPalaceResidence && !isMobile) {
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
    
    // Build YouTube embed URL with autoplay parameters
    const getYouTubeEmbedUrl = (videoId, autoplay) => {
        if (!videoId) return '';
        const baseUrl = `https://www.youtube.com/embed/${videoId}`;
        const params = new URLSearchParams();
        params.append('mute', '1'); // Always mute the video
        // Hide all UI elements for clean video experience
        params.append('controls', '0'); // Hide video controls
        params.append('modestbranding', '1'); // Reduce YouTube branding
        params.append('rel', '0'); // Don't show related videos
        params.append('iv_load_policy', '3'); // Hide annotations
        params.append('disablekb', '1'); // Disable keyboard controls
        params.append('fs', '0'); // Disable fullscreen button
        params.append('playsinline', '1'); // Play inline on mobile
        params.append('showinfo', '0'); // Hide video info
        if (autoplay) {
            params.append('autoplay', '1');
            params.append('loop', '1'); // Enable looping
            params.append('playlist', videoId); // Required for loop to work
        }
        return `${baseUrl}?${params.toString()}`;
    };

    return (
        <div className="wpo-project-single-item">
            <div className="wpo-project-single-title">
                <h3>{constructionUpdates.title || 'Construction Updates'}</h3>
            </div>
            {constructionUpdates.description && (
                <p>{constructionUpdates.description}</p>
            )}
            
            {/* YouTube Video Section - Only show on mobile */}
            {youtubeVideoId && isMobile && (
                <div className="wpo-construction-update-video wpo-construction-update-video-mobile" ref={videoRef}>
                    <div className={`wpo-construction-update-video-wrapper ${isShortsVideo ? 'shorts-video' : ''}`}>
                        <iframe
                            key={shouldAutoplay ? 'autoplay' : 'no-autoplay'}
                            src={getYouTubeEmbedUrl(youtubeVideoId, shouldAutoplay)}
                            title="Construction Update Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="wpo-construction-update-video-iframe"
                        ></iframe>
                    </div>
                </div>
            )}
            
            {constructionUpdates.updates && constructionUpdates.updates.length > 0 && (
                <div className="wpo-construction-updates-gallery">
                    {isMobile ? (
                        // Carousel for mobile view
                        <Slider
                            dots={true}
                            arrows={true}
                            infinite={constructionUpdates.updates.length > 1}
                            speed={500}
                            slidesToShow={1}
                            slidesToScroll={1}
                            autoplay={true}
                            autoplaySpeed={3000}
                            className="wpo-construction-update-carousel"
                        >
                            {constructionUpdates.updates.map((update, index) => (
                                <div key={index} className="wpo-construction-update-carousel-item">
                                    <div className="wpo-construction-update-item mobile-view">
                                        <div className="wpo-construction-update-img">
                                            <img 
                                                src={update.image} 
                                                alt={update.title || `Construction Update ${index + 1}`}
                                            />
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
                        </Slider>
                    ) : (
                        // Grid layout for desktop/web view
                        <div className="row">
                            {constructionUpdates.updates.map((update, index) => (
                                <div 
                                    key={index} 
                                    className="col-lg-6 col-md-6 col-sm-6 col-12 mb-4"
                                >
                                    <div 
                                        className="wpo-construction-update-item"
                                        onClick={() => openModal(update.image, index)}
                                    >
                                        <div className="wpo-construction-update-img">
                                            <img 
                                                src={update.image} 
                                                alt={update.title || `Construction Update ${index + 1}`}
                                            />
                                            <div className="wpo-construction-update-overlay">
                                                <i className="ti-zoom-in"></i>
                                            </div>
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
                    )}
                </div>
            )}

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

