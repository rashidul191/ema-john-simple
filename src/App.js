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
import { createContext } from 'react';
import { useState } from 'react';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';

export const UserContext = createContext();

function App(props){

  const [loggedInUser, setLoggedInUser] = useState ({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <h3>email: {loggedInUser.email}</h3>
     
        <Router>
        <Header></Header>
        
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
            <PrivetRoute path="/shipment">
              <Shipment></Shipment>
            </PrivetRoute>

            <PrivetRoute path="/inventor">
              <Inventor></Inventor>
            </PrivetRoute>

            <Route path="/product/:productKey">
              <ProductInof></ProductInof>
            </Route>
            
            <Route path="*">
              <Nomatch></Nomatch>
            </Route>
          </Switch>

        </Router>
    </UserContext.Provider>
  );
}

export default App;
