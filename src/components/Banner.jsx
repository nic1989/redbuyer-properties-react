import banner from '../assets/home_banner.png';
import icon from '../assets/icon.svg';
import emotes from '../assets/emotes.svg'

const Banner = () => {
    return (
        <div className="home-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 instant-container mt-5">
                        <div className="get-an-instant-container">
                            <p className="dont-take-our">Get an Instant offer</p>
                            <p className="dont-take-our">and sell your home</p>
                        </div>
                        <div className="search-box">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <img className="icon" alt="" src={icon} />
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control no-border font-xsmall"
                                    placeholder="Where's your house?"
                                    aria-label="Amount (to the nearest dollar)" />
                                <div className="input-group-append">
                                    <span className="input-group-text">
                                        <button className="btn btn-rounded btn-primary p-2">Get my free offer</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="receive-an-offer">
                            Receive an offer within 24 hours, it's that simple!
                        </div>
                    </div>
                    <div className="col-md-6 mt-2">
                        <img className="img" src={banner} alt="" />
                    </div>
                </div>
                <div className="vector">
                    <img src={emotes} className="img" alt='' />
                </div>
            </div>
        </div>
    )
}

export default Banner;