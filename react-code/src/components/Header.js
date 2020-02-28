import React from 'react';

class Header extends React.Component {
  render() {
    return <header class="header-section">
      <div class="container-fluid">
        <div>
          <a href='/' class="site-logo">PetStore.com</a>
        </div>
        <div class="nav-switch">
          <i class="fa fa-bars"></i>
        </div>
        <div class="header-right">
          <a href="#cart" class="card-bag"><img src="img/icons/bag.png" alt=""></img><span>2</span></a>
        </div>
        <ul class="main-menu">
          <li><a href="/">Home</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </header>;
  }
}

export default Header;
