import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const TransparentNavbar = ({ Logo }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Handle body scroll lock when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }

        // Cleanup on unmount
        return () => {
            document.body.classList.remove('menu-open');
        };
    }, [isMenuOpen]);

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
        closeMenu();
    };

    const menuItems = [
        { id: 1, title: 'Home', link: '/' },
        { id: 2, title: 'About', link: '/about' },
        { id: 3, title: 'Management', link: '/management' },
        { id: 4, title: 'Projects', link: '/projects' },
        { id: 5, title: 'Companies', link: '/companies' },
        { id: 6, title: 'Celebrity Testimonials', link: '/celebrity-testimonials' },
        { id: 7, title: 'Contact', link: '/contact' }
    ];

    return (
        <div className="transparent-navbar">
            {/* Logo */}
            <div className="navbar-logo">
                <Link onClick={handleLinkClick} to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </div>

            {/* Circular Hamburger Menu */}
            <div className="hamburger-container">
                <button 
                    className={`hamburger-circle ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <div className="hamburger-icon">
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </div>
                    <div className="cross-icon">
                        <span className="cross-line cross-line-1"></span>
                        <span className="cross-line cross-line-2"></span>
                    </div>
                </button>
            </div>

            {/* Full Screen Menu Overlay */}
            <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}>
                <div className="menu-content">
                    <nav className="menu-nav">
                        <ul className="menu-list">
                            {menuItems.map(item => (
                                <li key={item.id} className="menu-item">
                                    <Link 
                                        to={item.link} 
                                        onClick={handleLinkClick}
                                        className="menu-link"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default TransparentNavbar;
