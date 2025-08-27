import React, { Component } from 'react'
import Logo from '../../images/logo-2.svg'
import { Link } from 'react-router-dom'
import MobileMenu from '../../components/MobileMenu'
import Projects from '../../api/project'


export default class Header2 extends Component {

    state = {
        isSidebarShow: false,
    }

    sidebarHandler = () => {
        this.setState({
            isSidebarShow: !this.state.isSidebarShow
        })
    }



    render() {
        const { isSidebarShow } = this.state;

        const SubmitHandler = (e) => {
            e.preventDefault()
        }
        const ClickHandler = () => {
            window.scrollTo(10, 0);
        }
        return (
            <header id="header">
                <div className={`wpo-site-header ${this.props.hclass}`}>
                    <nav className="navigation navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                    <div className="mobail-menu">
                                        <MobileMenu />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-6">
                                    <div className="navbar-header">
                                        <Link onClick={ClickHandler} className="navbar-brand" to="/home"><img src={Logo}
                                            alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-1 col-1">
                                    <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                        <button className="menu-close"><i className="ti-close"></i></button>
                                        <ul className="nav navbar-nav mb-2 mb-lg-0">
                                            <li className="menu-item-has-children">
                                                <Link onClick={ClickHandler} to="/">Home</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} to="/home">Home Style 1</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/home2">Home Style 2</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/home3">Home Style 3</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/home4">Home Style 4</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/home5">Home Style 5</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                                            <li className="menu-item-has-children">
                                                <Link to="/service">Service</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} to="/service">Service</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/service-s2">Service S2</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/service-single/1">Service Single</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link onClick={ClickHandler} to="/project">Project</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} to="/project">Project</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/project-s2">Project S2</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/project-single/1">Project Single</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link onClick={ClickHandler} to="/blog">Blog</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} to="/blog">Blog right sidebar</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/blog-left-sidebar">Blog left sidebar</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/blog-fullwidth">Blog fullwidth</Link></li>
                                                    <li className="menu-item-has-children">
                                                        <Link onClick={ClickHandler} to="/">Blog details</Link>
                                                        <ul className="sub-menu">
                                                            <li><Link onClick={ClickHandler} to="/blog-single/1">Blog details right sidebar</Link>
                                                            </li>
                                                            <li><Link onClick={ClickHandler} to="/blog-single-left-sidebar/1">Blog details left
                                                                sidebar</Link></li>
                                                            <li><Link onClick={ClickHandler} to="/blog-single-fullwidth/1">Blog details
                                                                fullwidth</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link onClick={ClickHandler} to="/">Pages</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} to="/shop">Shop</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/product-single/1">Shop Single</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/cart">Cart</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/checkout">Checkout</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/pricing">Pricing</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/team-single/1">Team Single</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/testimonial">Testimonial</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/404">404 Error</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/login">Login</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/register">Register</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link onClick={ClickHandler} to="contact">Contact</Link></li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="col-lg-1 col-md-1 col-2">
                                    <div className="header-right">
                                        <div className="header-right-menu-wrapper">
                                            <div className="header-right-menu">
                                                <div className="right-menu-toggle-btn" onClick={this.sidebarHandler}>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                                <div className={`header-right-menu-wrap ${isSidebarShow ? 'right-menu-active' : ''}`}>
                                                    <button onClick={this.sidebarHandler} className="right-menu-close"><i className="ti-close"></i></button>
                                                    <div className="logo"><img src={Logo} alt="" /></div>
                                                    <div className="header-right-sec">
                                                        <div className="project-widget widget">
                                                            <h3>Our Latest Projects</h3>
                                                            <ul>
                                                                {Projects.slice(0, 6).map((project, pot) => (
                                                                    <li key={pot}><Link onClick={ClickHandler} to={`/project-single/${project.Id}`}><img src={project.pImg} alt="" /></Link></li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className="widget wpo-contact-widget">
                                                            <div className="widget-title">
                                                                <h3>Contact Us</h3>
                                                            </div>
                                                            <div className="contact-ft">
                                                                <ul>
                                                                    <li><i className="fi flaticon-location"></i>68D, Belsion Town
                                                                        2365 <br /> Fna city, LH 3656, USA</li>
                                                                    <li><i className="fi flaticon-telephone"></i>+ 8 (123) 123 456
                                                                        789 <br />
                                                                        + 8 (123) 123 456 789</li>
                                                                    <li><i className="fi flaticon-email"></i>info@gigagroup.com</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="widget newsletter-widget">
                                                            <div className="widget-title">
                                                                <h3>Newsletter</h3>
                                                            </div>
                                                            <form onSubmit={SubmitHandler}>
                                                                <div className="input-1">
                                                                    <input type="email" className="form-control"
                                                                        placeholder="Email Address *" required="" />
                                                                    <div className="submit clearfix">
                                                                        <button type="submit"><i className="ti-email"></i></button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}
