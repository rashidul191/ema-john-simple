import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Review from './components/Review/Review';
import Login from './components/Login/Login';
import Nomatch from './components/Nomatch/Nomatch';
import Inventor from './components/Inventor/Inventor';
import ProductInof from './components/ProductInof/ProductInof';
import Shipment from './components/Shipment/Shipment';

function App() {
  return (
    <div >
      <Header></Header>
        <Router>
          <Switch>

            <Route exact path="/">
              <Shop></Shop>
            </Route>

            <Route path ="/shop">
              <Shop></Shop>
            </Route>

            <Route path ="/review">
              <Review></Review>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/shipment">
              <Shipment></Shipment>
            </Route>

            <Route path="/inventor">
              <Inventor></Inventor>
            </Route>

            <Route path="/product/:productKey">
              <ProductInof></ProductInof>
            </Route>
            
            <Route path="*">
              <Nomatch></Nomatch>
            </Route>

          </Switch>
        </Router>
    </div>
  );
}

export default App;
