import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLogin } from "../utils/authSlices";

import logo from "../assets/redbuyers_logo.png";
import hamburger from "../assets/ion_menu.svg";

import SidebarMenu from './SidebarMenu';

const Header = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isOpen, setIsopen] = useState(false);

    const handleLogout = () => {
        sessionStorage.setItem('isLoggedIn', 0);
        dispatch(setLogin(0));
        navigate('/');
    }

    const hamburgerMenuToggle = () => {
      isOpen === true ? setIsopen(false) : setIsopen(true);
    }

    const sideBarLogout = () => {
      handleLogout();
    }
    
    return (
      <div>
        <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
            <div className="sd-header">
                <h4 className="mb-0">Menu</h4>
                <span className="close" onClick={hamburgerMenuToggle}><i className="fa fa-times"></i></span>
            </div>
            <SidebarMenu sideBarLogout={sideBarLogout} />
        </div>
        <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={hamburgerMenuToggle}></div>
        <nav className="navbar navbar-bg navbar-expand-lg bg-body-tertiar">
            <div className="container-fluid">
                <div className="logo d-flex">
                    <span className="hamburger" onClick={hamburgerMenuToggle}>
                        <img src={hamburger} alt="Hamburger"></img>
                    </span>
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <span className="hamburger-toggle"><img src={hamburger} alt="Hamburger"></img></span>
                <div className="header-links mb-2 mb-lg-0">
                    <div className="nav-item">
                        <span className="link">
                            <span>Sell</span>
                            <span className="indicator"></span>
                        </span>
                    </div>
                    <div className="nav-item">
                        <span className="link">
                            <span>Buy</span>
                            <span className="indicator1"></span>
                        </span>
                    </div>
                    <div className="nav-item">
                        <span className="link">
                            <span>Contact Us</span>
                        </span>
                    </div>
                </div>
                <div className="d-flex auth-btn">
                    {props.isLoggedIn === 0 ? 
                        <Link to="/login" className="login">
                            <span>LogIn</span>
                        </Link>
                        :
                        <Link to="#" onClick={handleLogout} className="login">
                            <span>Logout</span>
                        </Link>
                    }
                    <button type="button" className="btn btn-primary get-started">Register</button>
                </div>
            </div>
        </nav>
      </div>
    );
};

export default Header;