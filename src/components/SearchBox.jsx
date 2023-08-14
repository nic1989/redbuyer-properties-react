import icon from '../assets/icon.svg';

const SearchBox = () => {
    return (
        <div className="search-section">
            <div className="container-fluid">
                <div className="search-div">
                    <div className="search-inner p-5">
                        <div className="search-content">
                            <p className="text-center fw-bold mb-0">Enter the home details and</p>
                            <h2 className="text-center icon-color">Get and Instant Offer</h2>
                            <p className="text-center mb-4">Within 24 hours!</p>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBox;