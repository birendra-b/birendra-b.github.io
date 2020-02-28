import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './micro-frontends/Home';
import Contact from './micro-frontends/Contact';
import Checkout from './micro-frontends/Checkout';
import Product from './micro-frontends/Product';
import Cart from './micro-frontends/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div>
      <Header></Header>
        <Router>
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
