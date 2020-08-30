import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

//Creates the Navbar shown on all pages

class NavbarLocal extends Component {
  constructor(props) {
    super(props)
    this.state = { history: this.props.history }
  }
  render() {
    // var isActive = this.context.router.route.location.pathname
    let activePage = window.location.href
    return (
      <Navbar>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link
              as={Link}
              to="/"
              className={
                activePage.endsWith('/') ? 'nav-link--active' : 'nav-link'
              }
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/about-me"
              className={
                activePage.endsWith('/about-me') ? 'nav-link--active' : 'nav-link'
              }
            >
              About Me
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/cv"
              className={
                activePage.endsWith('/cv') ? 'nav-link--active' : 'nav-link'
              }
            >
              CV
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/portfolio"
              className={
                activePage.endsWith('/portfolio') ? 'nav-link--active' : 'nav-link'
              }
            >
              My Portfolio
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/contact"
              className={
                activePage.endsWith('/contact') ? 'nav-link--active' : 'nav-link'
              }
            >
              Contact Me
            </Nav.Link>




          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavbarLocal
