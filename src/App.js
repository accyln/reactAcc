import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Trades} from './Trades';
import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h3 className="d-flex justify-content-center m-3">
        AcC React Frontend
      </h3>
      <BrowserRouter>
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
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
      </nav>

      <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/trades' component={Trades}></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
