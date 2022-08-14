import React from 'react'
import '../../style.css'

const Header = () => {
    const mystyle = {
        
        backgroundColor: "#030205",
        padding: "10px",
        fontFamily: "Arial"
      };
  return (
    <header class="header-area">   
    <nav class="navbar navbar-expand-lg" style={mystyle}>
      <div class="container">
        <a class="navbar-brand" href="index.html">
            <img class="light-logo" src="img/core-img/logo-white.png" alt="" />
            <img class="dark-logo" src="img/core-img/logo-white.png" alt="" />
        </a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#funtoNav" aria-controls="funtoNav" aria-expanded="false" aria-label="Toggle navigation"><i class="bi bi-grid"></i></button>
        
        <div class="collapse navbar-collapse" id="funtoNav">
          <ul class="navbar-nav navbar-nav-scroll my-2 my-lg-0">
            <li class="ft-dd"><a href="#">Home <i class="fa-solid fa-arrow-down"></i></a>
              <ul class="ft-dd-menu">
                <li><a>Home Variation 1</a></li>
                <li><a>Home Variation 2</a></li>
              </ul>
            </li>
            <li class="ft-dd"><a href="#">Explore <i class="fa-solid fa-arrow-down"></i></a>
              <ul class="ft-dd-menu">
                <li><a>Explore 1</a></li>
                <li><a>Explore 2</a></li>
                <li><a>Featured Drops</a></li>
                <li><a>Live Auctions</a></li>
                <li><a>Collections</a></li>
                <li><a>Top Seller</a></li>
                <li><a>Top Buyer</a></li>
                <li><a>Item Details</a></li>
              </ul>
            </li>
            <li class="ft-dd"><a href="#">Admin <i class="fa-solid fa-arrow-down"></i></a>
              <ul class="ft-dd-menu">
                <li><a>Dashboard</a></li>
                <li><a>Live Bids</a></li>
                <li><a>My Collection</a></li>
                <li><a>My Wallet</a></li>
                <li><a>Notifications</a></li>
                <li><a>Settings</a></li>
              </ul>
            </li>
            <li class="ft-dd"><a href="#">Pages <i class="fa-solid fa-arrow-down"></i></a>
              <ul class="ft-dd-menu">
                <li><a>Activity</a></li>
                <li><a>Ranking</a></li>
                <li><a>Create New Items</a></li>
                <li><a>Connect Wallet</a></li>
                <li><a>Author Profile</a></li>
                
              </ul>
            </li>
            <li><a>Help Center</a></li>
          </ul>

          <div class="header-meta d-flex align-items-center ms-lg-auto">

            <div class="search-form position-relative d-flex align-items-center">
              <input class="form-control" type="text" placeholder="Search" />
              <button class="position-absolute" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
           
            <div class="user-dropdown dropdown mx-3">
              <button class="btn dropdown-toggle user-btn" id="dropdownMenuButton1" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-ellipsis"></i></button>
              <ul class="dropdown-menu mt-3" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item"><i class="fa-solid fa-align-right"></i>Dashboard</a></li>
                <li><a class="dropdown-item"><i class="fa-brands fa-angellist"></i>Collections</a></li>
                <li><a class="dropdown-item"><i class="fa-solid fa-bell"></i>Notifications</a></li>
                <li><a class="dropdown-item"><i class="fa-solid fa-gear"></i>Settings</a></li>
              </ul>
            </div>
            <a class="btn btn-warning btn-sm rounded-pill">Create</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
  

  )
}

export default Header