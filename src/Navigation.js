import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
  import Trades from './Trades.js';
  import Variables from './Variables.js';
  import Testyonetimi from './Testyonetimi.js';
  import Home from './Home.js';


  export class Navigation extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
        menu: false
      };
      this.toggleMenu = this.toggleMenu.bind(this);
    }
  
    toggleMenu(){
      this.setState({ menu: !this.state.menu })
    }

    render(){
        return(
            // <Navbar bg="dark" expand="lg">
            //     <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            //     <Navbar.Collapse id="basic-navbar-nav">
            //     <Nav>
            //     <NavLink className="d-inline p-2 bg-dark text-white" to="/">
            //         Home
            //     </NavLink>
            //     <NavLink className="d-inline p-2 bg-dark text-white" to="/department">
            //         Department
            //     </NavLink>
            //     <NavLink className="d-inline p-2 bg-dark text-white" to="/employee">
            //         Employee
            //     </NavLink>

            //     </Nav>
            //     </Navbar.Collapse>
            // </Navbar>

            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/Home">Home</Nav.Link>
                                    <Nav.Link href="/Trades">Trades</Nav.Link>
                                    <Nav.Link href="/Testyonetimi">Test Yonetimi</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    </Nav>
                                    <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    {/* <Button variant="outline-success">Search</Button> */}
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                            {/* <br /> */}
                            <Switch>
                                <Route exact path="/Home">
                                    <Home />
                                </Route>
                                <Route path="/Trades">
                                    <Trades />
                                </Route>
                                <Route path="/Testyonetimi">
                                    <Testyonetimi />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}