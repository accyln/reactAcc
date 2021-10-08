import React from 'react'
import logo from './logo.svg';
import {Regresyon} from './Regresyon';
import {BrowserRouter,NavLink} from 'react-router-dom';
import { Route,Redirect,Switch } from 'react-router';
import Trades from './Trades.js';
import Variables from './Variables.js';
import { Navbar } from 'react-bootstrap';


export class Testyonetimi extends React.Component{
  
    render(){
  return (
      <BrowserRouter>
      <Navbar className="navbar navbar-expand-sm bg-light navbar-dark">
      <ul className="navbar-nav">
        <li className="navbar-item m-1" >
          <NavLink className="btn btn-light btn-outline-primary" to="/Regresyon">
            Regresyon Test Sonucları
          </NavLink>
        </li>
        <li className="navbar-item m-1" >
          <NavLink className="btn btn-light btn-outline-primary" to="/trades">
            Performans Test Sonucları
          </NavLink>
        </li>
      </ul>
      </Navbar>
      <Switch>
        <Route path='/Regresyon' component={Regresyon}></Route>
        <Route path='/trades' component={Trades}></Route>
      </Switch>
      </BrowserRouter>
  );
}
}

export default Testyonetimi;