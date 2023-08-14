import staticHome from '../assets/images@2x.png';
import charmtick from '../assets/charmtick.svg';
import pointerLines from '../assets/pointer-lines.png'
import charmPointer from '../assets/charm-pointer.png'

const Works = () => {
    return (
        <div className="how-works">
          <h2 className="text-center font-large">Let's See How it Works</h2>
          <p className="works-text text-center">Here's how we make it easier to sell your home</p>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
                <img className="img" src={staticHome} alt='' />
              </div>
              <div className="col-md-6">
                <div className="steps">
                  <div className="pointer-lines">
                    <img src={pointerLines} alt='' />
                  </div>
                  <div className="step-div">
                    <div className="step1">
                      <div className="charm-tick">
                        <img src={charmPointer} alt='' />
                      </div>
                      <p className="text-uppercase grey-color">step 1</p>
                      <h3 className="text-uppercase mb-0">Request for an offer</h3>
                      <p className="grey-color font-xsmall">
                        Fill in your property details and get an <br /> instant preliminary home value.  
                      </p>
                    </div>
                    <div className="step2">
                        <div className="charm-tick1">
                          <img src={charmPointer} alt='' />
                        </div>
                        <p className="text-uppercase grey-color">step 2</p>
                        <h3 className="text-uppercase mb-0">Schedule an appointment</h3>
                        <p className="grey-color font-xsmall">
                        Show us your home in-person or virtually <br /> and get our offer within 24 hours of the appointment.
                        </p>
                    </div>
                    <div className="step3">
                        <div className="charm-tick2">
                          <img src={charmPointer} alt='' />
                        </div>
                        <p className="text-uppercase grey-color">step 3</p>
                        <h3 className="text-uppercase mb-0">Sell your house</h3>
                        <p className="grey-color font-xsmall">
                          Have complete control over your decision. <br /> Either accept our offer or list with us.
                        </p>
                    </div>
                  </div>
                </div>
              </div>               
            </div>
          </div>
        </div>
    )
}

export default Works;