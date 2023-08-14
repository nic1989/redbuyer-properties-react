import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';

import marker from '../assets/marker.png';

const SidebarMenu = (props) => {
    const isLoggedIn = useAuth();
    const handleLogout = () => {
        props.sideBarLogout();
    }
    return (
        <div className="sd-body">
            <div className="buy-sell">
                <div className="d-block">
                    <h6 className="icon-color text-uppercase float-start">Buy & Sell</h6>
                    <span className="icon-color float-end"><i className="fa fa-caret-up"></i></span>
                </div>
                <ul className="list-unstyled font-small grey-color">
                    <li>Sell</li>
                    <li>
                        <Link to='/' className="grey-color">
                            Browse Homes
                        </Link>
                    </li>
                    <li>Cash Offer</li>
                    <li>Buy</li>
                    <li>New Construction</li>
                    <li>Pricing</li>
                    <li>Down Payment</li>
                </ul>
            </div>
            <div className="company">
                <div className="d-block">
                    <h6 className="icon-color text-uppercase float-start">Company</h6>
                    <span className="icon-color float-end"><i className="fa fa-caret-up"></i></span>
                </div>
                <ul className="list-unstyled font-small grey-color">
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Carrers</li>
                    <li>Vendors</li>
                    <li>Carrers</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            <div className="locations">
                <div className="d-block">
                    <h6 className="icon-color text-uppercase float-start">Locations</h6>
                    <span className="icon-color float-end"><i className="fa fa-caret-up"></i></span>
                </div>
                <ul className="list-unstyled font-small grey-color">
                    <li>Greater Toronto Area</li>
                    <li>Region of Peel</li>
                    <li>Region of Humilton</li>
                    <li>Region of Waterloo</li>
                    <li className="icon-color fw-bold text-underline">View All Locations</li>
                    <li>
                        <button className="btn btn-primary">
                            <img src={marker} alt='' /> Map Search
                        </button>
                    </li>
                </ul>
            </div>
            <div className="d-flex auth-btn mt-5">
                {isLoggedIn === 0 ? 
                    <Link to="/login" className="login black">
                        <span>LogIn</span>
                    </Link>
                    :
                    <Link to="#" onClick={handleLogout} className="login black">
                        <span>Logout</span>
                    </Link>
                }
                <button type="button" className="btn btn-primary get-started">Register</button>
            </div>
        </div>
    );
};

export default SidebarMenu;