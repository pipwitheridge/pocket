import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiFillHome } from 'react-icons/ai';

export default function PBSNavbar() {

  var prevScrollpos = scrollY;
  onscroll = function() {
  var currentScrollPos = scrollY;
    {
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("testy").style.top = "0px"
      } else {
        document.getElementById("testy").style.top = "-100px"
      }
      prevScrollpos = currentScrollPos;
    }
    
  }

return(
<>
<Navbar id="testy" expand="lg" bg="dark" data-bs-theme="dark">
      <Container >
        <Navbar.Brand href="/" ><AiFillHome size={25} /></Navbar.Brand>
      </Container>
</Navbar>
</>
)
}


