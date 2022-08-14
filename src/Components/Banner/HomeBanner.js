import React from 'react'

import '../../style.css'

const HomeBanner = () => {
    const mystyle = {
        backgroundColor: "#030205",
    }
  return (
    <>
    <div class="welcome-area pt-120" style={mystyle}>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-sm-10 col-md-6">
            <div class="welcome-content mb-5 mb-md-0">
              <h2 data-aos="fade-up" data-aos-duration="750" data-aos-delay="500">Build an excellent NFTs website with Funto.</h2>
              <p class="mb-4" data-aos="fade-up" data-aos-duration="750" data-aos-delay="800">It's crafted with the latest trend of design &amp; coded with all modern approaches.</p>
              <div class="hero-btn-group" data-aos="fade-up" data-aos-duration="750" data-aos-delay="1200"><a class="btn btn-primary rounded-pill mt-3 me-3">Explore Now<i class="fa-solid fa-arrow-right-long"></i></a><a class="btn btn-minimal hover-primary mt-3"><i class="fa-solid fa-align-right"></i> Go Dashboard</a></div>
            </div>
          </div>
          <div class="col-12 col-sm-9 col-md-6">
            <div class="welcome-thumb" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500"><img src="img/illustrator/2.png" alt="" /></div>
          </div>
        </div>
      </div>
    </div>

    {/* <hr className='home_banner_hr' /> */}

 
        <div class="container">
            
        </div>
  

    </>


  )
}

export default HomeBanner