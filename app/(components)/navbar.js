'use client' 

import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiFillHome } from 'react-icons/ai';

export default function PBSNavbar() {

  /*useEffect(()=> {
    window.onscroll = function () {
       scrollFunction();
     };
     function scrollFunction() {
      var prevScrollpos = window.scrollY;
      window.onscroll = function() {
      var currentScrollPos = window.scrollY;
        {
          if (prevScrollpos > currentScrollPos) {
            document.getElementById("testy").style.top = "0px"
          } else {
            document.getElementById("testy").style.top = "-100px"
          }
          prevScrollpos = currentScrollPos;
        }
      }
     }
   return ()=> {
    //remove the event listener
   }
   }, [])
*/

return(
<>
<Navbar style={{height: 70}} id="myNavbar" expand="lg" bg="white" data-bs-theme="dark">
        <Navbar.Brand href="/" ><AiFillHome color="black" size={25} style={{marginLeft: "10px"}} /></Navbar.Brand>
</Navbar>
</>
)
}


