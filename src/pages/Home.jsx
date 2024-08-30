import React from 'react'
import './Home.css'



function Home() {
  return (
    <div className='home '>
      <div className="nav">
        <span><a href="#">D'Watch</a></span>
        <ul>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a style={{ color: '#00ff00' }} href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
        </ul>
      </div>

      <div className="row">
        <div className="col-lg-7 col-md-12 " style={{ paddingLeft: '60px' }}>

          <div className='p-5 pt-0 pb-3'>
            <h1 className="mt-2 fw-bolder text-light">
              This is the time to <br /> turn yourself into a <br />real man
            </h1>
            <p className='text-light '>Handpicked collection of <span style={{ color: '#00ff00' }}>premium</span> time keepers <br /> for all purposes and ages</p>
          </div>

          <div className="p-5 pt-0">
            <h6 className=" text-light">
              Featured Collectibles
            </h6>

            <div className="cards d-flex flex-row flex-wrap mt-4">

              <div class="card pt-3 d-flex flex-column justify-content-center align-items-center me-3 " style={{ width: '9rem', height: '200px' }}>
                <div className="imgContainer1">
                  <img src="https://m.media-amazon.com/images/I/91oG+68r97L._SY679_.jpg" className="card-img-top" alt="watch1" />
                </div>
                <div className="card-body p-0">
                  <p style={{ fontSize: '12px' }} className="card-title  fw-bolder m-0">Zoro Mindsweep G</p>
                  <p class="card-text text-center m-0 mb-2">$169</p>
                  <div className="text-center ">
                    <button href="#" style={{ backgroundColor: '#00ff00', fontSize: '12px', fontWeight: '700' }} className="btn btn-sm text-dark border " >Buy Now</button>
                  </div>
                </div>
              </div>


              <div class="card pt-3 d-flex flex-column justify-content-center align-items-center me-3" style={{ width: '9rem', height: '200px' }}>
                <div className="imgContainer2">
                  <img src="https://media4.thewatchagency.com/images/product-popup-o/ij/iwc-IW380805.jpg" className="card-img-top" alt="watch1" />
                </div>
                <div className="card-body p-0">
                  <p style={{ fontSize: '12px' }} className="card-title  fw-bolder m-0">Romeleu Authentic</p>
                  <p class="card-text text-center m-0 mb-2">$167</p>
                  <div className="text-center ">
                    <a href="#" style={{ backgroundColor: '#00ff00', fontSize: '12px', fontWeight: '700' }} className="btn btn-sm text-dark border " >Buy Now</a>
                  </div>
                </div>
              </div>


              <div class="card pt-3 d-flex flex-column justify-content-center align-items-center " style={{ width: '9rem', height: '200px' }}>
                <div className="imgContainer3">
                  <img src="https://danielklein.in/cdn/shop/files/DK.1.13547-1_1.jpg?v=1697450183&width=750" className="card-img-top" alt="watch1" />
                </div>
                <div className="card-body p-0">
                  <p style={{ fontSize: '12px' }} className="card-title  fw-bolder m-0">Sierra Large Dial</p>
                  <p class="card-text text-center m-0 mb-2">$166</p>
                  <div className="text-center ">
                    <a href="#" style={{ backgroundColor: '#00ff00', fontSize: '12px', fontWeight: '700' }} className="btn btn-sm text-dark border " >Buy Now</a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
        <div className="col-lg-5 col-md-12 pt-3 p-5">
          <div style={{ padding: '14px 22px 14px 22px', backgroundImage: ' linear-gradient(to top right, rgb(70, 90, 85), rgb(150, 190, 180))', border: '1px solid #dcdcdc' }} className="mt-3 rounded d-flex flex-row justify-content-between me-4 ">
            <div>
              <h3 className=' text-start m-0 text-light'>Bremont Star</h3>
              <p style={{ color: '#dcdcdc' }} className='text-start m-0 fs-5'>$147</p>
            </div>

            <div>
              <button href="#" style={{ backgroundColor: '#00ff00', fontSize: '12px', fontWeight: '700' }} className="btn btn-md text-dark  mt-3 " >Buy Now</button>
            </div>
          </div>
          <div className="row">
            <img className='mt-3' style={{ maxWidth: '80%', height: '350px', transform: 'rotate(10deg)' }} src="https://us.bremont.com/cdn/shop/products/Bremont-EType-Jaguar-Green-Motorsport-Watch.png?v=1634549198&width=720" alt="" />
          </div>
        </div>



      </div>
    </div>
  )
}

export default Home
