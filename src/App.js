import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Navigation} from './Navigation';
// import Layout from './Components/Layout';
import {BrowserRouter,NavLink} from 'react-router-dom';
import { Route,Redirect,Switch } from 'react-router';
import Trades from './Trades.js';
import Variables from './Variables.js';
import Testyonetimi from './Testyonetimi.js';

function App() {
  return (
      <BrowserRouter>
      {/* <nav className="navbar navbar-expand-sm bg-light navbar-dark">
      <ul className="navbar-nav">
        <li className="navbar-item m-1" >
          <NavLink className="btn btn-light btn-outline-primary" to="/home">
            Home
          </NavLink>
        </li>
        <li className="navbar-item m-1" >
          <NavLink className="btn btn-light btn-outline-primary" to="/trades">
            Trades
          </NavLink>
        </li>
      </ul>
      </nav> */}
<Navigation/>
      {/* <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/trades' component={Trades}></Route>
      </Switch> */}
      </BrowserRouter>
  );
}

export default App;
