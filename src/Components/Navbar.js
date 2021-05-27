import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div> 
            <div >
                <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light scrolling-navbar">
                    <Link to="/" className="navbar-brand"><img src="https://www.abc27.com/wp-content/uploads/sites/55/2020/04/doodle.png?w=640" alt="coco-cola" className="coco" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                        <i class="far fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="home"
                                    className="nav-link ml-3"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    style={{ color: 'white' }}>HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="services"
                                    className="nav-link ml-3"
                                    activeClassName='menu-active'
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    style={{ color: 'white' }}>SERVICES</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="about"
                                    className="nav-link ml-3"
                                    activeClassName='menu-active'
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    style={{ color: 'white' }}>ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="contact"
                                    className="nav-link ml-3"
                                    activeClassName='menu-active'
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    style={{ color: 'white' }}>CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
