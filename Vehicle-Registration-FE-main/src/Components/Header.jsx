import React, { useContext } from 'react'
import { Link } from "react-router-dom";


// import {
//     MDBNavbar,
//     MDBContainer,
//     MDBNavbarBrand,
//     MDBNavbarToggler,
//     MDBNavbarItem,
//     MDBNavbarLink,
//     MDBCollapse,
//     MDBBtn,
//     MDBIcon,
//     MDBNavbarNav,
//   } from 'mdb-react-ui-kit';

export default function Header() {





  return (
    <header>

      <nav class="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: '#000' }}>
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarExample01">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item active">
                <Link class="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/register">Vehicle Register</Link>
              </li>
              { <li class="nav-item">
                <Link class="nav-link" to="/contactus">Contact Us</Link>
              </li> }
              {<li class="nav-item">
                <Link class="nav-link" to="/aboutus">About Us</Link>
              </li> }
              { <li class="nav-item">
                <Link class="nav-link" to="/datas">Datas</Link>
              </li> }
            </ul>
          </div>
        </div>
      </nav>



    </header>
  );
}