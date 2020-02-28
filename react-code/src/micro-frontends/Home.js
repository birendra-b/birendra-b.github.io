import React from 'react';
import MicroFrontend from './MicroFrontend';

class Home extends MicroFrontend {
  render() {
    return <div>
      <section class="hero-section set-bg">
        <div class="hero-slider owl-carousel">
          <div class="hs-item">
            <div class="hs-left"><img src="img/slider-img.png" alt=""></img></div>
            <div class="hs-right">
              <div class="hs-content">
                <div class="tag-line">Because Pets like to be pampered too </div>
                <h2><span>2018</span> summer collection</h2>
                <a href="" class="site-btn">Shop NOW!</a>
              </div>	
            </div>
          </div>
        </div>
      </section>
      <section class="product-section spad">
        <div class="container">
          <ul class="product-filter controls">
            <li class="control" data-filter=".new">New arrivals</li>
            <li class="control" data-filter="all">Recommended</li>
            <li class="control" data-filter=".best">Best sellers</li>
          </ul>
          <div class="row" id="product-filter">
            <div class="mix col-lg-3 col-md-6 best">
              <div class="product-item">
                <figure>
                  <img src="img/product/cat-table.jpg" alt=""></img>
                </figure>
                <div class="product-info">
                  <h6>Cat Table</h6>
                  <p>$39.90</p>
                  <a href="#product" class="site-btn btn-line">View</a>
                </div>
              </div>
            </div>
            <div class="mix col-lg-3 col-md-6 new">
              <div class="product-item">
                <figure>
                  <img src="img/product/doghousesofa.jpg" alt=""></img>
                  <div class="bache">NEW</div>
                </figure>
                <div class="product-info">
                  <h6>Dog House Sofa</h6>
                  <p>$19.50</p>
                  <a href="#product" class="site-btn btn-line">View</a>
                </div>
              </div>
            </div>
            <div class="mix col-lg-3 col-md-6 best">
              <div class="product-item">
                <figure>
                  <img src="img/product/dog-window.jpg" alt=""></img>
                </figure>
                <div class="product-info">
                  <h6>Dog Window</h6>
                  <p>$59.90</p>
                  <a href="#product" class="site-btn btn-line">View</a>
                </div>
              </div>
            </div>
            <div class="mix col-lg-3 col-md-6 new best">
              <div class="product-item">
                <figure>
                  <img src="img/product/suit2.jpg" alt=""></img>
                  <div class="bache sale">SALE</div>
                </figure>
                <div class="product-info">
                  <h6>007 Cat suit</h6>
                  <p>$32.20 <span>RRP 64.40</span></p>
                  <a href="#product" class="site-btn btn-line">View</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  }
}

export default Home;