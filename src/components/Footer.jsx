import React from 'react';

import marker from '../assets/marker.png';
import telephone from '../assets/telephone.svg';
import email from '../assets/email.svg';
import social from '../assets/social.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-3 width-20">
                        <div className="buy-sell">
                            <h6 className="icon-color text-uppercase">Buy & Sell</h6>
                            <ul className="list-unstyled font-small grey-color">
                                <li>Sell</li>
                                <li>Browse Home</li>
                                <li>Cash Offer</li>
                                <li>Buy</li>
                                <li>New Construction</li>
                                <li>Pricing</li>
                                <li>Down Payment</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 width-20">
                        <div className="investment">
                            <h6 className="icon-color text-uppercase">Investment</h6>
                            <ul className="list-unstyled font-small grey-color">
                                <li>Co Investment</li>
                                <li>Partnership Buying</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 width-20">
                        <div className="company">
                            <h6 className="icon-color text-uppercase">Company</h6>
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
                    </div>
                    <div className="col-md-2 width-20">
                        <div className="learn">
                            <h6 className="icon-color text-uppercase">Learn</h6>
                            <ul className="list-unstyled font-small grey-color">
                                <li>Seller FAQs</li>
                                <li>Buyer FAQs</li>
                                <li>Blogs</li>
                                <li>Morgage Calculator</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 width-20">
                        <div className="locations">
                            <h6 className="icon-color text-uppercase">Locations</h6>
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
                    </div>
                </div>
                <div className="footer-contact">
                    <h6 className="icon-color">Contact Us</h6>
                    <div className="social mb-2">
                        <img src={social} alt="" />
                    </div>
                    <p className="font-small mb-2"><img src={telephone} alt=''></img> 905-567-0200</p>
                    <p className="font-small mb-2"><img src={email} alt=''></img> info@redbuyers.com</p>
                    <p className="font-small mb-2">© 2021 redbuyers.com. All rights reserved.</p>
                    <p className="font-small mb-2">RedBuyers Realty. Brokerage, is fully registered under the Real Estate and Business brokerage, Act, 2002 of Ontario.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;