import React from 'react';

class Footer extends React.Component {
  render() {
    return <div>
        <section class="footer-top-section home-footer">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-8 col-sm-12">
                <div class="footer-widget about-widget">
                  Petish.com
                  <p>Donec vitae purus nunc. Morbi faucibus erat sit amet congue mattis. Nullam fringilla faucibus urna, id dapibus erat iaculis ut. Integer ac sem.</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="footer-widget">
                  <h6 class="fw-title">Useful Links</h6>
                  <ul>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Bloggers</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Press</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="footer-widget">
                  <h6 class="fw-title">Sitemap</h6>
                  <ul>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Bloggers</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Press</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="footer-widget">
                  <h6 class="fw-title">Shipping & returns</h6>
                  <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Track Orders</a></li>
                    <li><a href="#">Returns</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Shipping</a></li>
                    <li><a href="#">Blog</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="footer-widget">
                  <h6 class="fw-title">Contact</h6>
                  <div class="text-box">
                    <p>Your Company Ltd </p>
                    <p>1481 Creekside Lane  Avila Beach, CA 93424, </p>
                    <p>+53 345 7953 32453</p>
                    <p>office@youremail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="footer-section">
          <div class="container">
            <p class="copyright">
            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            </p>
          </div>
        </footer>
    </div>
  }
}

export default Footer;
