import React from 'react'

const Footer = () => {
  const mystyle = {
    backgroundColor: "#030205",
    backgroundImage: `url("img/bg-img/1.jpg")`
}
  return (
    <>
    <footer class="footer-area pb-120 pt-120" style={mystyle}>
        <img class="footer-bg-shape" src="img/core-img/shape1.png" alt="" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" />
      <div class="container">
        <div class="row">
    
          <div class="col-12 col-lg-5">
            <div class="footer-widget-area mb-70 pe-lg-4 pe-xl-5 me-lg-4 me-xl-5 border-end">
                <a class="d-block mb-4" href="index.html">
                    <img class="light-logo" src="img/core-img/logo.png" alt="" />
                    <img class="dark-logo" src="img/core-img/logo-white.png" alt="" />
                </a>
              <p>It's crafted with the latest trend of design &amp; coded with all modern approaches.</p>
              <p class="mb-0">Call: +123 456 789 <br /> Email: help@example.com</p>
         
              <h5 class="mt-4 mb-3">Join the community</h5>
              <div class="footer-social-icon d-flex align-items-center flex-wrap">
                <a data-bs-toggle="tooltip" data-bs-placement="top" title="Facbook">
                    <img src="img/core-img/icons8-facebook.svg" alt="" />
                </a><a data-bs-toggle="tooltip" data-bs-placement="top" title="Twitter">
                    <img src="img/core-img/icons8-twitter.svg" alt="" />
                </a>
                <a data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram">
                    <img src="img/core-img/icons8-instagram.svg" alt="" />
                </a>
                <a data-bs-toggle="tooltip" data-bs-placement="top" title="Slack">
                    <img src="img/core-img/icons8-slack.svg" alt="" />
                </a>
                <a data-bs-toggle="tooltip" data-bs-placement="top" title="Youtube">
                    <img src="img/core-img/icons8-player.svg" alt="" /></a>
                </div>
          
              <div class="newsletter-form mt-5 me-5">
                <form class="d-flex align-items-stretch" action="#">
                  <input class="form-control" type="email" placeholder="Enter email" />
                  <button class="btn btn-warning px-3" type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-7">
            <div class="row g-4">
              <div class="col-6 col-sm-4">
                <div class="footer-widget-area mb-70">
                  <h5 class="mb-4">Explore</h5>
                  <ul class="list-unstyled mb-0">
                    <li><a>Featured Drops</a></li>
                    <li><a>Live Auctions</a></li>
                    <li><a>Collections</a></li>
                    <li><a>Top Seller</a></li>
                    <li><a>Top Buyer</a></li>
                    <li><a>Item Details</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-6 col-sm-4">
                <div class="footer-widget-area mb-70">
                  <h5 class="mb-4">Marketplace</h5>
                  <ul class="list-unstyled mb-0">
                    <li><a>Art</a></li>
                    <li><a>Cards</a></li>
                    <li><a>Collectibles</a></li>
                    <li><a>Domain</a></li>
                    <li><a>Photos</a></li>
                    <li><a>Sports</a></li>
                    <li><a>Videos</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-6 col-sm-4">
                <div class="footer-widget-area mb-70">
                  <h5 class="mb-4">Company</h5>
                  <ul class="list-unstyled mb-0">
                    <li><a>Forum</a></li>
                    <li><a>Licences</a></li>
                    <li><a>Careers</a></li>
                    <li><a>Conditions</a></li>
                    <li><a>Privacy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="copywrite-wrapper d-lg-flex align-items-lg-center justify-content-lg-between">

          <div class="copywrite-text text-center text-lg-start mb-3 mb-lg-0">
            <p class="mb-0">2022 &copy; All rights reserved by <a rel="noreferrer">Designing World</a></p>
          </div>

          <div class="footer-nav">
            <ul class="mb-0 d-flex flex-wrap justify-content-center list-unstyled">
              <li><a>Privacy Policy</a></li>
              <li><a>Terms &amp; Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <div id="scrollTopButton"><i class="bi bi-arrow-up-short"></i></div>
    </>
  )
}

export default Footer