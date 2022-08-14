import React from 'react'


const LightMode = () => {
  return (
    <>
    {/* <i class="fas fa-user"></i> */}
    
   
    <div class="dark-light-wrapper" data-aos="zoom-in" data-aos-duration="750" data-aos-delay="200">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <h5 class="mb-0 text-white" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500">Light mode is available!</h5>
          
          <div class="dark-light-mode" data-aos="fade-up" data-aos-duration="750" data-aos-delay="800">
            <input id="darkLightSwitch" type="checkbox" />
            <label class="shadow" for="darkLightSwitch">Toggle</label>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default LightMode