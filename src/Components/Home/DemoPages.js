import React, { useState } from 'react'
import '../../style.css'


const DemoPages = () => {

    const [overAll, setoverAll] = useState(true)
    const [homeAll, sethomeAll] = useState(false)
    const[dashboardAll, setdashboardAll] = useState(false)
    const[iPagesAll, setiPagesAll] = useState(false)
    const[blockAll, setblockAll] = useState(false)
    const[othersAll, setothersAll] = useState(false)

    const all = () => {
        setoverAll(true)
    }

    const home = () => {
        sethomeAll(true)
        setoverAll(false)
        setdashboardAll (false)
        setiPagesAll(false)
        setblockAll(false)
        setothersAll(false)
    }

    const dashboard = () => {
        setdashboardAll (true)
        sethomeAll(false)
        setoverAll(false)
        setiPagesAll(false)
        setblockAll(false)
        setothersAll(false)
    }

    const iPages = () => {
        setiPagesAll(true)
        setdashboardAll (false)
        sethomeAll(false)
        setoverAll(false)
        setblockAll(false)
        setothersAll(false)
    }

    const block = () => {
        setblockAll(true)
        setiPagesAll(false)
        setdashboardAll (false)
        sethomeAll(false)
        setoverAll(false)
        setothersAll(false)
    }

    const others= () => {
        setothersAll(true)

        setblockAll(false)
        setiPagesAll(false)
        setdashboardAll (false)
        sethomeAll(false)
        setoverAll(false)
    }

    

    const sec0 = <div class="row g-4 funto-collection-filter-list">
    <div class="col-12 col-sm-6 col-lg-4 list-item home">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/home1.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Home One</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item home">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/home2.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Home Two</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item inner">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/explore1.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Explore One</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item inner">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/explore2.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Explore Two</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item inner">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/featured.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Featured Items</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item inner">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/auctions.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Live Auction</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item inner">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/collections.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Collections</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item inner">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/top-seller.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Top Seller</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item inner">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/top-buyer.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Top Buyer</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item inner">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/item-details.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Item Details</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item dashboard">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/admin.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Dashboard</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item dashboard">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/admin-bids.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Live Bids</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item dashboard">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/admin-collection.png" alt="" /></a>
          <h5 class="mb-0 mt-3">My Collection</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item dashboard">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/admin-wallet.png" alt="" /></a>
          <h5 class="mb-0 mt-3">My Wallet</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item dashboard">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/admin-notifications.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Notifications</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item dashboard">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/admin-settings.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Settings</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item inner">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/activity.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Activity</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item inner">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/ranking.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Ranking</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item inner">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/create.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Create New</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item inner">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/wallet.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Connect Wallet</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item inner">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/author.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Author Profile</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item others">
      <div class="card text-center">
        <div class="card-body"><a class="d-block" >
          <img class="rounded" src="img/demo-img/login.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Login</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item others">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/register.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Register</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item others">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/forget.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Forget Password</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item blog">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/blog.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Blog</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item blog">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/blog-details.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Blog Details</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item others">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/about.png" alt="" /></a>
          <h5 class="mb-0 mt-3">About Us</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item others">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/contact.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Contact</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item others">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/cs.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Coming Soon</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item others">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/newsletter.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Newsletter</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item others">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/privacy.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Privacy Policy</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item others">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/terms.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Terms</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item others">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/404.png" alt="" /></a>
          <h5 class="mb-0 mt-3">404</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item others">
      <div class="card text-center">
        <div class="card-body"><a class="d-block" >
          <img class="rounded" src="img/demo-img/help1.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Help Center</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item others">
      <div class="card text-center">
        <div class="card-body"><a class="d-block" >
          <img class="rounded" src="img/demo-img/help2.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Help Question</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item others">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/help3.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Question Details</h5>
        </div>
      </div>
    </div>
  </div>

  const sec1 = <div class="row g-4 funto-collection-filter-list">
  <div class="col-12 col-sm-6 col-lg-4 list-item home">
    <div class="card text-center">
      <div class="card-body"><a class="d-block">
        <img class="rounded" src="img/demo-img/home1.png" alt="" /></a>
        <h5 class="mb-0 mt-3">Home One</h5>
      </div>
    </div>
  </div>
  <div class="col-12 col-sm-6 col-lg-4 list-item home">
    <div class="card text-center">
      <div class="card-body"><a class="d-block">
        <img class="rounded" src="img/demo-img/home2.png" alt="" /></a>
        <h5 class="mb-0 mt-3">Home Two</h5>
      </div>
    </div>
  </div>
  
 
</div>

  const sec2 = <div class="row g-4 funto-collection-filter-list">
    <div class="col-12 col-sm-6 col-lg-4 list-item dashboard">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" >
                <img class="rounded" src="img/demo-img/admin-bids.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Live Bids</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item dashboard">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" >
                <img class="rounded" src="img/demo-img/admin-collection.png" alt="" /></a>
                <h5 class="mb-0 mt-3">My Collection</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item dashboard">
            <div class="card text-center">
              <div class="card-body"><a class="d-block">
                <img class="rounded" src="img/demo-img/admin-wallet.png" alt="" /></a>
                <h5 class="mb-0 mt-3">My Wallet</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item dashboard">
            <div class="card text-center">
              <div class="card-body"><a class="d-block">
                <img class="rounded" src="img/demo-img/admin-notifications.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Notifications</h5>
              </div>
            </div>
          </div>
</div>

const sec3 = <div class="row g-4 funto-collection-filter-list">
<div class="col-12 col-sm-6 col-lg-4 list-item inner">
            <div class="card text-center">
              <div class="card-body"><a class="d-block">
                <img class="rounded" src="img/demo-img/explore1.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Explore One</h5>
              </div>
            </div>
          </div>
          
        
          <div class="col-12 col-sm-6 col-lg-4 list-item inner">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" >
                <img class="rounded" src="img/demo-img/top-seller.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Top Seller</h5>
              </div>
            </div>
          </div>
          
          <div class="col-12 col-sm-6 col-lg-4 list-item inner">
            <div class="card text-center">
              <div class="card-body"><a class="d-block">
                <img class="rounded" src="img/demo-img/item-details.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Item Details</h5>
              </div>
            </div>
          </div>
</div>

const sec4 = <div class="row g-4 funto-collection-filter-list">
<div class="col-12 col-sm-6 col-lg-4 list-item others">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/login.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Login</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item others">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/register.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Register</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item others">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/forget.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Forget Password</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item blog">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/blog.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Blog</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item blog">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/blog-details.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Blog Details</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item others">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/about.png" alt="" /></a>
          <h5 class="mb-0 mt-3">About Us</h5>
        </div>
      </div>
    </div>    
</div>

const sec5 = <div class="row g-4 funto-collection-filter-list">
        <div class="col-12 col-sm-6 col-lg-4 list-item others">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/help1.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Help Center</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item others">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/help2.png" alt="" /></a>
          <h5 class="mb-0 mt-3 cardheading">Help Question</h5>
        </div>
      </div>
    </div>
<div class="col-12 col-sm-6 col-lg-4 list-item others">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/contact.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Contact</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item others">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/cs.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Coming Soon</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item others">
      <div class="card text-center">
        <div class="card-body"><a class="d-block" >
          <img class="rounded" src="img/demo-img/newsletter.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Newsletter</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item others">
      <div class="card text-center">
        <div class="card-body"><a class="d-block" >
          <img class="rounded" src="img/demo-img/privacy.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Privacy Policy</h5>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 list-item others">
      <div class="card text-center">
        <div class="card-body"><a class="d-block">
          <img class="rounded" src="img/demo-img/terms.png" alt="" /></a>
          <h5 class="mb-0 mt-3">Terms</h5>
        </div>
      </div>
    </div>
</div>

const mystyle = {
    backgroundColor: "#030205",
    paddingBottom: "130px"
}

  return (
    
    <div class="demo-page-wrapper" style={mystyle}>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-10 col-md-8 col-lg-6">
            <div class="section-heading demo-pages text-center">
              <h2>Demo Pages</h2>
              <p>There are 35+ beautiful inner pages, two beautiful home pages for your awesome NFTs websites.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="filters-button-group d-flex flex-wrap justify-content-center mb-5">
          <button class="btn rounded-pill border-0 mb-2 mx-1" type="button" onClick={all} data-filter="*">All</button>
          <button class="btn rounded-pill border-0 mb-2 mx-1" type="button" onClick={home} data-filter=".home">Home</button>
          <button class="btn rounded-pill border-0 mb-2 mx-1" type="button" onClick={dashboard} data-filter=".dashboard">Dashboard</button>
          <button class="btn rounded-pill border-0 mb-2 mx-1" type="button" onClick={iPages} data-filter=".inner">Inner Pages</button>
          <button class="btn rounded-pill border-0 mb-2 mx-1" type="button" onClick={block} data-filter=".blog">Blog</button>
          <button class="btn rounded-pill border-0 mb-2 mx-1" type="button" onClick={others} data-filter=".others">Others</button>
        </div>
        {/* <div class="row g-4 funto-collection-filter-list">
          <div class="col-12 col-sm-6 col-lg-4 list-item home">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="home-1.html" target="_blank">
                <img class="rounded" src="img/demo-img/home1.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Home One</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item home">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="home-2.html" target="_blank">
                <img class="rounded" src="img/demo-img/home2.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Home Two</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item inner">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="explore-1.html" target="_blank">
                <img class="rounded" src="img/demo-img/explore1.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Explore One</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item inner">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="explore-2.html" target="_blank">
                <img class="rounded" src="img/demo-img/explore2.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Explore Two</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item inner">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="featured-items.html" target="_blank">
                <img class="rounded" src="img/demo-img/featured.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Featured Items</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item inner">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="live-bidding.html" target="_blank">
                <img class="rounded" src="img/demo-img/auctions.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Live Auction</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item inner">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="collections.html" target="_blank">
                <img class="rounded" src="img/demo-img/collections.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Collections</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item inner">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="top-seller.html" target="_blank">
                <img class="rounded" src="img/demo-img/top-seller.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Top Seller</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item inner">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="top-buyer.html" target="_blank">
                <img class="rounded" src="img/demo-img/top-buyer.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Top Buyer</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item inner">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="item-details.html" target="_blank">
                <img class="rounded" src="img/demo-img/item-details.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Item Details</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item dashboard">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="dashboard.html" target="_blank">
                <img class="rounded" src="img/demo-img/admin.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Dashboard</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item dashboard">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="live-bids.html" target="_blank">
                <img class="rounded" src="img/demo-img/admin-bids.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Live Bids</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item dashboard">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="my-collection.html" target="_blank">
                <img class="rounded" src="img/demo-img/admin-collection.png" alt="" /></a>
                <h5 class="mb-0 mt-3">My Collection</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item dashboard">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="my-wallet.html" target="_blank">
                <img class="rounded" src="img/demo-img/admin-wallet.png" alt="" /></a>
                <h5 class="mb-0 mt-3">My Wallet</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item dashboard">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="notifications.html" target="_blank">
                <img class="rounded" src="img/demo-img/admin-notifications.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Notifications</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item dashboard">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="settings.html" target="_blank">
                <img class="rounded" src="img/demo-img/admin-settings.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Settings</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item inner">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="activity.html" target="_blank">
                <img class="rounded" src="img/demo-img/activity.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Activity</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item inner">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="ranking.html" target="_blank">
                <img class="rounded" src="img/demo-img/ranking.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Ranking</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item inner">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="create-new.html" target="_blank">
                <img class="rounded" src="img/demo-img/create.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Create New</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item inner">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="connet-wallet.html" target="_blank">
                <img class="rounded" src="img/demo-img/wallet.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Connect Wallet</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item inner">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="author.html" target="_blank">
                <img class="rounded" src="img/demo-img/author.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Author Profile</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item others">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="login.html" target="_blank">
                <img class="rounded" src="img/demo-img/login.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Login</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item others">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="register.html" target="_blank">
                <img class="rounded" src="img/demo-img/register.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Register</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item others">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="forget-password.html" target="_blank">
                <img class="rounded" src="img/demo-img/forget.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Forget Password</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item blog">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="blog.html" target="_blank">
                <img class="rounded" src="img/demo-img/blog.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Blog</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item blog">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="blog-details.html" target="_blank">
                <img class="rounded" src="img/demo-img/blog-details.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Blog Details</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item others">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="about.html" target="_blank">
                <img class="rounded" src="img/demo-img/about.png" alt="" /></a>
                <h5 class="mb-0 mt-3">About Us</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item others">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="contact.html" target="_blank">
                <img class="rounded" src="img/demo-img/contact.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Contact</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item others">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="coming-soon.html" target="_blank">
                <img class="rounded" src="img/demo-img/cs.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Coming Soon</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item others">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="newsletter.html" target="_blank">
                <img class="rounded" src="img/demo-img/newsletter.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Newsletter</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item others">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="privacy.html" target="_blank">
                <img class="rounded" src="img/demo-img/privacy.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Privacy Policy</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item others">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="terms.html" target="_blank">
                <img class="rounded" src="img/demo-img/terms.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Terms</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item others">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="404.html" target="_blank">
                <img class="rounded" src="img/demo-img/404.png" alt="" /></a>
                <h5 class="mb-0 mt-3">404</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item others">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="help-center.html" target="_blank">
                <img class="rounded" src="img/demo-img/help1.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Help Center</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item others">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="help-questions.html" target="_blank">
                <img class="rounded" src="img/demo-img/help2.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Help Question</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 list-item others">
            <div class="card text-center">
              <div class="card-body"><a class="d-block" href="question-details.html" target="_blank">
                <img class="rounded" src="img/demo-img/help3.png" alt="" /></a>
                <h5 class="mb-0 mt-3">Question Details</h5>
              </div>
            </div>
          </div>
        </div> */}


        {overAll ? sec0 : ""}

        {homeAll ? sec1 : ""}

        {dashboardAll ? sec2 : ""}

        {iPagesAll ? sec3 : ""}

        {blockAll ? sec4 : ""}

        {othersAll ? sec5 : ""}
        
      </div>
    </div>
  )
}

export default DemoPages