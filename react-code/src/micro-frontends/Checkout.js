import React from 'react';
import MicroFrontend from './MicroFrontend';

class Checkout extends MicroFrontend {
  render() {
    return <div class="page-area cart-page spad">
      <div class="container">
        <form class="checkout-form">
          <div class="row">
            <div class="col-lg-6">
              <h4 class="checkout-title">Billing Address</h4>
              <div class="row">
                <div class="col-md-6">
                  <input type="text" placeholder="First Name *"></input>
                </div>
                <div class="col-md-6">
                  <input type="text" placeholder="Last Name *"></input>
                </div>
                <div class="col-md-12">
                  <input type="text" placeholder="Company"></input>
                  <select>
                    <option>Country *</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>BANGLADESH</option>
                  </select>
                  <input type="text" placeholder="Address *"></input>
                  <input type="text"></input>
                  <input type="text" placeholder="Zipcode *"></input>
                  <select>
                    <option>City/Town *</option>
                  </select>
                  <select>
                    <option>Province *</option>
                  </select>
                  <input type="text" placeholder="Phone no *"></input>
                  <input type="email" placeholder="Email Address *"></input>
                  <div class="checkbox-items">
                    <div class="ci-item">
                      <input type="checkbox" name="a" id="tandc"></input>
                      <label for="tandc">Terms and conditions</label>
                    </div>
                    <div class="ci-item">
                      <input type="checkbox" name="b" id="newaccount"></input>
                      <label for="newaccount">Create an account</label>
                      <input type="password" placeholder="password"></input>
                    </div>
                    <div class="ci-item">
                      <input type="checkbox" name="c" id="newsletter"></input>
                      <label for="newsletter">Subscribe to our newsletter</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="order-card">
                <div class="order-details">
                  <div class="od-warp">
                    <h4 class="checkout-title">Your order</h4>
                    <table class="order-table">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Dog Window</td>
                          <td>$59.90</td>
                        </tr>
                        <tr>
                          <td>SubTotal</td>
                          <td>$59.90</td>
                        </tr>
                        <tr class="cart-subtotal">
                          <td>Shipping</td>
                          <td>Free</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr class="order-total">
                          <th>Total</th>
                          <th>$59.90</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div class="payment-method">
                    <div class="pm-item">
                      <input type="radio" name="pm" id="one"></input>
                      <label for="one">Paypal</label>
                    </div>
                    <div class="pm-item">
                      <input type="radio" name="pm" id="two"></input>
                      <label for="two">Cash on delievery</label>
                    </div>
                    <div class="pm-item">
                      <input type="radio" name="pm" id="three"></input>
                      <label for="three">Credit card</label>
                    </div>
                    <div class="pm-item">
                      <input type="radio" name="pm" id="four" checked></input>
                      <label for="four">Direct bank transfer</label>
                    </div>
                  </div>
                </div>
                <button class="site-btn btn-full">Place Order</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  }
}

export default Checkout;