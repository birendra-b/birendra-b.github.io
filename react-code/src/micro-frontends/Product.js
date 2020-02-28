import React from 'react';
import MicroFrontend from './MicroFrontend';

class Product extends MicroFrontend {
  render() {
    return <div class="page-area product-page spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <figure>
              <img class="product-big-img" src={''} alt=""></img>
            </figure>
          </div>
          <div class="col-lg-6">
            <div class="product-content">
              <h2>{''}</h2>
              <div class="pc-meta">
                <h4 class="price">$19.50</h4>
                <div class="review">
                  <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star is-fade"></i>
                  </div>
                  <span>(2 reviews)</span>
                </div>
              </div>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore- mque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
              <div class="color-choose">
                <span>Colors:</span>
                <div class="cs-item">
                  <input type="radio" name="cs" id="black-color" checked></input>
                  <label class="cs-black" for="black-color"></label>
                </div>
                <div class="cs-item">
                  <input type="radio" name="cs" id="blue-color"></input>
                  <label class="cs-blue" for="blue-color"></label>
                </div>
                <div class="cs-item">
                  <input type="radio" name="cs" id="yollow-color"></input>
                  <label class="cs-yollow" for="yollow-color"></label>
                </div>
                <div class="cs-item">
                  <input type="radio" name="cs" id="orange-color"></input>
                  <label class="cs-orange" for="orange-color"></label>
                </div>
              </div>
              <div class="size-choose">
                <span>Size:</span>
                <div class="sc-item">
                  <input type="radio" name="sc" id="l-size" checked></input>
                  <label for="l-size">L</label>
                </div>
                <div class="sc-item">
                  <input type="radio" name="sc" id="xl-size"></input>
                  <label for="xl-size">XL</label>
                </div>
                <div class="sc-item">
                  <input type="radio" name="sc" id="xxl-size"></input>
                  <label for="xxl-size">XXL</label>
                </div>
              </div>
              <a href="#" class="site-btn btn-line">ADD TO CART</a>
            </div>
          </div>
        </div>
        <div class="product-details">
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <ul class="nav" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" id="1-tab" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Description</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="2-tab" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Additional information</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="3-tab" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">Reviews (0)</a>
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
                </div>
                <div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
                </div>
                <div class="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  }
}

export default Product;
