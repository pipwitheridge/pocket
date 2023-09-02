'use client' 

import {Container} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import PBSNavbar from './navbar'
import Image from 'next/image'
import pipFace from "../(images)/pipFace.png"
import StandardButton from './standardButton';

export default function AboutSpiel() {

  //   NEXT STEP  <div className="mb-3">5. It's <strong>social</strong>. There's something special about being in a group of people that meets physically and discusses the bible. No app or website can provide the unique benefits from being face-to-face with people. But that doesn't mean digital resources can't have a social element. In the Social Bible section you can comment on each chapter and engage with other peoples' comments. You add friends and see what they comment, too.</div>

const firstVisitComplete = () => {
  localStorage.setItem("firstVisit", "False");
}
  return (
    <>
    <div className="mb-3">A way to study the bible that is:</div>
    <div className="mb-3">1. <strong>free</strong>. Anyone can acces the material at no cost.</div>
    <div className="mb-3">2. <strong>digital</strong>. Paper Bibles are awesome, but phones/computers can have advantages when it comes to learning.</div>
    <div className="mb-3">3. <strong>self-paced</strong>. Some study resources have daily set readings. This doesn't. Go at your own pace!</div>
    <div className="mb-3">4. <strong>testable</strong>. You remember things longer if you test yourself on what you learn. This has short quizzes to help reinforce what you have seen in the text.</div>
    <div className="mb-3">5. <strong>challenging</strong>... in a good way! This project tries to bring key scholarly issues to light.</div>
    <div className="mb-5">Got questions or feedback? Email phillipwitheridge@gmail.com</div>
    <div className="mb-3" onClick={() => firstVisitComplete()}>
    <StandardButton href={'/1-peter'} text={"Try the 1 Peter study"} />
    </div>
    <div><i>More coming soon!</i></div>
    </>
  )
}
