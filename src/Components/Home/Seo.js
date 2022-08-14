import React from 'react'
import '../../style.css'

const Seo = () => {
    const mystyle = {
        backgroundColor: "#030205",
        paddingBottom: "130px"

    }
  return (
    <>
    <div class="demo-page-wrapper" style={mystyle}>
        
        <div class="container">
        <div class="cta-text bg-gradient p-4 p-sm-5 bg-primary" data-aos="zoom-in" data-aos-duration="750" data-aos-delay="300">
            <div class="row align-items-center cta-heading">
            <div class="col-12 col-md-8 col-lg-9">
                <h2 class="mb-3 mb-md-0" data-aos="fade-up" data-aos-duration="750" data-aos-delay="600">Beautifully designed, SEO-friendly, and easy to use. Create your NFTs website today!</h2>
            </div>
            <div class="col-12 col-md-4 col-lg-3">
                <div class="text-md-end"><a class="btn btn-warning rounded-pill" data-aos="zoom-in" data-aos-duration="750" data-aos-delay="900">Buy Now</a></div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Seo