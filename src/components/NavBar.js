import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse
} from "mdbreact";


class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
       isOpen: false
     };
    this.toggleCollapse = this.toggleCollapse.bind(this)
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (

        <MDBNavbar color="green lighten-5" light expand="md">
          <MDBNavbarBrand>
            <strong>Sharon Morato</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={()=> this.toggleCollapse()}  />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <a href="#!" className="nav-link red-text">Debt Collective Repos</a>
              </MDBNavItem>
              <MDBNavItem>
                <a className="nav-link" href={`https://github.com/s-mora`}>Github</a>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>

     );
   }
}

export default NavBar;
