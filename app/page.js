'use client' 

import {Button, Card, Container} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link';
import bibledata from './bibledata/bibledata.json';
import PBSNavbar from './(components)/navbar';
import StandardButton from './(components)/standardButton';
import About from './about/page';
import AboutSpiel from './(components)/aboutSpiel';
import { AiFillRightCircle } from 'react-icons/ai';
export default function Home() {

const userBookChoice = "1 Peter"
const currentBookURL = "1-peter"
const biID = "butInstall"

//window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the mini-infobar from appearing on mobile.
  //event.preventDefault();
  //console.log('👍', 'beforeinstallprompt', event);
  // Stash the event so it can be triggered later.
  //window.deferredPrompt = event;
  // Remove the 'hidden' class from the install button container.
  //divInstall.classList.toggle('hidden', false);
//});

/* <InstallButton id="butInstall"/>

<div className="divInstall mt-5" id="divInstall">
  <span>For a better mobile experience, install the app.</span>
   </div>
*/

// FOR MOBILE, Insert above <Container> LATER
//  {(navigator.userAgent.includes("Android") || navigator.userAgent.includes("iPhone")) && <AppInstallModal />}

//ADD LATER {!localStorage.getItem('firstVisit') && <AboutSpiel />}
   // {localStorage.getItem('firstVisit')==="False" && 

  return (
    <>
    
  
    <Container>
    <div className="pbsHeader mb-3">
        <div className="pbsText">Pocket Studies</div>
    </div>
    
    <div>
   <StandardButton href={'/1-peter'} text={"Study 1 Peter"} />
   <div style={{alignItems: "center", justifyContent: "center", width: "100%", marginBottom: "10px", marginTop: "30px"}}>
   <a href={'/about'}>
   About
   </a>
   </div>
   </div>
   </Container>
    </>
  )
}
