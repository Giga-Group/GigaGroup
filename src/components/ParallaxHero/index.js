import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const ParallaxHero = ({
    title,
    subtitle,
    backgroundImage,
    fullHeight = false,
    breadcrumb = [],
}) => {
    const heroRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            if (!heroRef.current || !bgRef.current) return;

            const rect = heroRef.current.getBoundingClientRect();
            if (rect.bottom < 0 || rect.top > window.innerHeight) return;

            const offset = window.scrollY - heroRef.current.offsetTop;
            bgRef.current.style.transform = `translate3d(0, ${offset * 0.35}px, 0)`;
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <section
            ref={heroRef}
            className={`parallax-hero${fullHeight ? ' parallax-hero--full' : ''}`}
        >
            <div
                ref={bgRef}
                className="parallax-hero__bg"
                style={{ backgroundImage: `url("${backgroundImage}")` }}
            />
            <div className="parallax-hero__overlay" />
            <div className="container">
                <div className="parallax-hero__content">
                    <h1>{title}</h1>
                    {subtitle && <p className="parallax-hero__subtitle">{subtitle}</p>}
                    {breadcrumb.length > 0 && (
                        <ol className="parallax-hero__breadcrumb">
                            {breadcrumb.map((item, index) => (
                                <li key={index}>
                                    {item.link ? (
                                        <Link to={item.link}>{item.label}</Link>
                                    ) : (
                                        <span>{item.label}</span>
                                    )}
                                </li>
                            ))}
                        </ol>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ParallaxHero;
