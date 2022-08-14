import React from 'react'

const About = () => {

    const mystyle = {
        backgroundColor: "#030205",
        paddingBottom: "130px",
    }
  return (
    
    <>
    
    <div class="about-area" style={mystyle}>
      <div class="container">
        <div class="row g-5">
          <div class="col-12 col-sm-6 col-xl-3">
            <div class="card about-card shadow-sm" data-aos="fade-up" data-aos-duration="750" data-aos-delay="200">
              <div class="card-body py-5">
                <div class="icon bg-info"><img src="img/demo-img/sm-logo/bootstrap.png" alt="" /></div>
                <h5 class="mb-0">Bootstrap 5.1.3</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-xl-3">
            <div class="card about-card shadow-sm" data-aos="fade-up" data-aos-duration="750" data-aos-delay="250">
              <div class="card-body py-5">
                <div class="icon bg-primary"><img src="img/demo-img/sm-logo/tool.png" alt="" /></div>
                <h5 class="mb-0">Modern Design</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-xl-3">
            <div class="card about-card shadow-sm" data-aos="fade-up" data-aos-duration="750" data-aos-delay="300">
              <div class="card-body py-5">
                <div class="icon bg-primary"><img src="img/demo-img/sm-logo/js.png" alt="" /></div>
                <h5 class="mb-0">Vanilla JavaScript</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-xl-3">
            <div class="card about-card shadow-sm" data-aos="fade-up" data-aos-duration="750" data-aos-delay="350">
              <div class="card-body py-5">
                <div class="icon bg-light"><img src="img/demo-img/sm-logo/dashboard.png" alt="" /></div>
                <h5 class="mb-0">Dashboard</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-xl-3">
            <div class="card about-card shadow-sm" data-aos="fade-up" data-aos-duration="750" data-aos-delay="450">
              <div class="card-body py-5">
                <div class="icon bg-text-gray"><img src="img/demo-img/sm-logo/sass.png" alt="" /></div>
                <h5 class="mb-0">SCSS</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-xl-3">
            <div class="card about-card shadow-sm" data-aos="fade-up" data-aos-duration="750" data-aos-delay="400">
              <div class="card-body py-5">
                <div class="icon bg-danger"><img src="img/demo-img/sm-logo/responsive-design.png" alt="" /></div>
                <h5 class="mb-0">Smart Responsive</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-xl-3">
            <div class="card about-card shadow-sm" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500">
              <div class="card-body py-5">
                <div class="icon bg-info"><img src="img/demo-img/sm-logo/pug.png" alt="" /></div>
                <h5 class="mb-0">PUG</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-xl-3">
            <div class="card about-card shadow-sm" data-aos="fade-up" data-aos-duration="750" data-aos-delay="550">
              <div class="card-body py-5">
                <div class="icon bg-warning">
                    <img src="img/demo-img/sm-logo/bulb.png" alt="" /></div>
                <h5 class="mb-0">Light Mode</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About