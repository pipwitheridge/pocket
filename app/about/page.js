'use client' 

import {Container} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import PBSNavbar from '../(components)/navbar'
import Image from 'next/image'
import pipFace from "../(images)/pipFace.png"
import StandardButton from '../(components)/standardButton';
import AboutSpiel from '../(components)/aboutSpiel';

export default function About() {

  //   NEXT STEP  <div className="mb-3">5. It's <strong>social</strong>. There's something special about being in a group of people that meets physically and discusses the bible. No app or website can provide the unique benefits from being face-to-face with people. But that doesn't mean digital resources can't have a social element. In the Social Bible section you can comment on each chapter and engage with other peoples' comments. You add friends and see what they comment, too.</div>


  return (
    <>
    <PBSNavbar />
    <Container className="mb-5">
    <div className="mb-3" style={{fontSize: 45}}>About</div>
    <AboutSpiel />
    </Container>
    </>
  )
}
