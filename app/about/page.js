'use client' 

import {Container} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import PBSNavbar from '../(components)/navbar'
import Image from 'next/image'
import pipFace from "../(images)/pipFace.png"

export default function Home() {

  //   NEXT STEP  <div className="mb-3">5. It's <strong>social</strong>. There's something special about being in a group of people that meets physically and discusses the bible. No app or website can provide the unique benefits from being face-to-face with people. But that doesn't mean digital resources can't have a social element. In the Social Bible section you can comment on each chapter and engage with other peoples' comments. You add friends and see what they comment, too.</div>


  return (
    <>
    <PBSNavbar />
    <Container className="mb-5">
    <div className="mb-3" style={{fontSize: 45}}>About</div>
    <div className="d-flex align-items-center">
    <div width="50%">
    <Image
      src={pipFace}
      width={80}
      height={80}
      alt="Picture of the author"
      style={{borderRadius: "50%", marginRight: 20, marginBottom: 20}}
    />
    </div>
    <div width="50%" className="mb-3">Hi! My name is Pip Witheridge. I'm a theological student in Sydney, Australia.</div>
    </div>
    <div className="mb-3">The purpose of this project is to help people study the Bible.</div>
    <div className="mb-3">It's a work in progress. I'm starting with 1 Peter, and I'll add more material on different books over time.</div>
    <div className="mb-3">There are a few things that make this project different from a traditional devotional or study Bible.</div>
    <div className="mb-3">1. It's <strong>free</strong>. I believe there aren't enough free, high-quality Bible study resources out there for anyone to access.</div>
    <div className="mb-3">1. It's <strong>digital</strong>. I never want to knock the good old paper Bible, but many people like having something they can use on their phone or computer.</div>
    <div className="mb-3">2. It's <strong>self-paced</strong>. A traditional devotional might have a set reading each day. The philosophy behind this project is that people study at different paces. Some people will want to smash out a whole book or more in a day, while others will want to do one or two modules per day. That's fine! This project allows people to study at their own pace, with no set timings on when you should complete particular lessons.</div>
    <div className="mb-3">3. It has <strong>quizzes</strong>. Educational research shows that people retain things longer when they're tested on what they learn. Each chapter has a short quiz to help you reinforce what you have seen in the text. When I read the Bible, sometimes I'll get to the end of a chapter and I'll wonder if I've really taken in anything. The quizzes are a small but effective way to ensure you've been paying attention while you read.</div>
    <div className="mb-3">4. It raises <strong>scholarly issues</strong>. Devotionals sometimes skim over tricky passages and shy away from debated issues in the text. This project tries to bring the key scholarly issues to light, and doesn't shy away from controversial scholarship.</div>
    <div className="mb-3">If you have any questions about the material or anything else free to email me at phillipwitheridge@gmail.com</div>
    </Container>
    </>
  )
}
