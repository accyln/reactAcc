import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button,NavLink } from 'react-bootstrap'
import Trades from './Trades.js';
import Variables from './Variables.js';
import Testyonetimi from './Testyonetimi.js';
// import Home from './Home.js';


export class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu })
  }

  render() {
    return (
      
      <div>
        <div className="row">
          <div className="col-md-12">
            <Router>
                <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/Home">
                      Home
                    </NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/Trades">
                      Department
                    </NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/employee">
                      Employee
                    </NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <br />
              <Switch>
                {/* <Route exact path="/"><Home /></Route>
                <Route path="/Trades"><Trades /></Route>
                <Route path="/Testyonetimi"><Testyonetimi /></Route> */}
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;