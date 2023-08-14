import startStrip from '../assets/star-strip.png'
import userPic from '../assets/user-pic.png'
import dotted from '../assets/scroll-Indicator.png'

const Reviews = () => {
    return (
        <div className="review-section">
            <h2 className="text-center font-large">Don't take our word for it.</h2>
            <h2 className="text-center font-large">Take theirs...</h2>
            <p className="works-text text-center">Listen to what our customers have to say.</p>
            <div className="container-fluid">
                <div className="blur-section mt-5">
                    <div className="blur-inner">
                        <div className="review1 p-4">
                            <div className="inner-section">
                                <img src={startStrip} alt='' />
                                <p className="mt-3 lh-base">
                                    We felt very fortunate to have Santhosh and the team’s help during a recent "long-distance" 
                                    commercial property purchase. They kept us very well informed throughout the process and planned 
                                    everything to perfection. We are very pleased with everything you did for us.
                                </p>
                                <div className="row">
                                    <div className="col-md-3">
                                        <img src={userPic} alt='' />
                                    </div>
                                    <div className="col-md-9">
                                        <p className="fw-bold review-name-color fs-5">Gurvir Sohal</p>
                                        <p className="grey-color">Toronto</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="scroll-indicator">
                        <img src={dotted} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;