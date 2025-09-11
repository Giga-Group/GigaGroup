import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../../components/MobileMenu'
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import Projects from "../../api/project";


const Header = (props) => {

    const [menuActive, setMenuState] = useState(false);
    const [cartActive, setcartState] = useState(false);
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { carts } = props;

    return (
        <header id="header">
            <div className={`wpo-site-header ${props.hclass}`}>
                <nav 
                className="navigation navbar navbar-expand-lg navbar-light"
                >
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/home"><img src={props.Logo}
                                        alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/">Home</Link>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                                        <li><Link onClick={ClickHandler} to="/management">Management</Link></li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/projects">Projects</Link>
                                            <ul className="sub-menu">
                                                {Projects.map((project, index) => (
                                                    <li key={project.Id}>
                                                        <Link onClick={ClickHandler} to={`/project-single/${project.Id}`}>
                                                            {project.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/companies">Companies</Link></li>
                                        <li><Link onClick={ClickHandler} to="/celebrity-testimonials">Celebrity Testimonials</Link></li>
                                        <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};
export default connect(mapStateToProps, { removeFromCart })(Header);