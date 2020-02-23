class Home extends Frontend {
  static render() {
    return `<!-- Hero section -->
    <section class="hero-section set-bg">
      <div class="hero-slider owl-carousel">
        <div class="hs-item">
          <div class="hs-left"><img src="img/slider-img.png" alt=""></div>
          <div class="hs-right">
            <div class="hs-content">
              <div class="tag-line">Because Pets like to be pampered too </div>
              <h2><span>2018</span> <br>summer collection</h2>
              <a href="" class="site-btn">Shop NOW!</a>
            </div>	
          </div>
        </div>
      </div>
    </section>
    <!-- Hero section end -->
  
    <!-- Product section -->
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
                <img src="img/product/cat-table.jpg" alt="">
                <div class="pi-meta">
                  <div class="pi-m-left">
                    <img src="img/icons/eye.png" alt="">
                    <p>quick view</p>
                  </div>
                  <div class="pi-m-right">
                    <img src="img/icons/heart.png" alt="">
                    <p>save</p>
                  </div>
                </div>
              </figure>
              <div class="product-info">
                <h6>Cat Table</h6>
                <p>$39.90</p>
                <a href="product" class="site-btn btn-line" data-name='Cat Table' data-img='img/product/cat-table.jpg'>View</a>
              </div>
            </div>
          </div>
          <div class="mix col-lg-3 col-md-6 new">
            <div class="product-item">
              <figure>
                <img src="img/product/doghousesofa.jpg" alt="">
                <div class="bache">NEW</div>
                <div class="pi-meta">
                  <div class="pi-m-left">
                    <img src="img/icons/eye.png" alt="">
                    <p>quick view</p>
                  </div>
                  <div class="pi-m-right">
                    <img src="img/icons/heart.png" alt="">
                    <p>save</p>
                  </div>
                </div>
              </figure>
              <div class="product-info">
                <h6>Dog House Sofa</h6>
                <p>$19.50</p>
                <a href="product" class="site-btn btn-line" data-name='Dog House Sofa' data-img='img/product/doghousesofa.jpg'>View</a>
              </div>
            </div>
          </div>
          <div class="mix col-lg-3 col-md-6 best">
            <div class="product-item">
              <figure>
                <img src="img/product/dog-window.jpg" alt="">
                <div class="pi-meta">
                  <div class="pi-m-left">
                    <img src="img/icons/eye.png" alt="">
                    <p>quick view</p>
                  </div>
                  <div class="pi-m-right">
                    <img src="img/icons/heart.png" alt="">
                    <p>save</p>
                  </div>
                </div>
              </figure>
              <div class="product-info">
                <h6>Dog Window</h6>
                <p>$59.90</p>
                <a href="product" class="site-btn btn-line" data-name='Dog Window' data-img='img/product/dog-window.jpg'>View</a>
              </div>
            </div>
          </div>
          <div class="mix col-lg-3 col-md-6 new best">
            <div class="product-item">
              <figure>
                <img src="img/product/suit2.jpg" alt="">
                <div class="bache sale">SALE</div>
                <div class="pi-meta">
                  <div class="pi-m-left">
                    <img src="img/icons/eye.png" alt="">
                    <p>quick view</p>
                  </div>
                  <div class="pi-m-right">
                    <img src="img/icons/heart.png" alt="">
                    <p>save</p>
                  </div>
                </div>
              </figure>
              <div class="product-info">
                <h6>007 Cat suit</h6>
                <p>$32.20 <span>RRP 64.40</span></p>
                <a href="product" class="site-btn btn-line"  data-name='007 Suit' data-img='img/product/suit2.jpg'>View</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Product section end -->`
  }
}