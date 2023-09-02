'use client' 

import {Button, Card, Container} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link';
import bibledata from '../bibledata/bibledata.json'
import { useParams } from 'next/navigation';
import PBSNavbar from '../(components)/navbar';
import StandardButton from '../(components)/standardButton';
import {BsFillArrowRightCircleFill, BsFillCheckCircleFill} from 'react-icons/bs'
import chapterData from '../bibledata/chapterData.json'


export default function Home() {

const params = useParams();
//console.log(params)
console.log(params.study)

const currentBookURL = params.study
const currentBookData = chapterData.filter(thing => thing.urlName===currentBookURL)
const currentBookChapters = currentBookData.length;
const currentBook = currentBookData[0].bookName
const everyChapterCompleted = currentBookData.every((thing => localStorage.getItem("Read"+thing.bookName+thing.chapter)==="Completed"))
console.log(currentBookData);

const ModuleButton = (props) => {
  return(
    <>
    <Button href={props.href} variant="outline-primary" style={{alignItems: "center", justifyContent: "center", width: "100%"}}>
    <div className="d-flex justify-content-between">
    <div>{props.text}</div>
    <div>{props.rightIconLogic}</div>
    </div>
    </Button>
    </>
  )
}

  return (
    <>
    <PBSNavbar />
    <Container key="cont2">
    <h1 className="mb-3">Study {currentBook}</h1>
    <div className="d-grid gap-2">
    <ModuleButton href={'1-peter/background/1'} text="1. Context" rightIconLogic={localStorage.getItem("Context"+currentBook)==="Completed" ? <BsFillCheckCircleFill size={20} color='green'/> : <BsFillArrowRightCircleFill size={20} color='gold'/>}/>
    <ModuleButton href={'1-peter/read'} text={"2. Read \u0028"+currentBookChapters+" Chapters\u0029"} rightIconLogic={everyChapterCompleted ? <BsFillCheckCircleFill size={20} color='green'/> : localStorage.getItem("Context"+currentBook)==="Completed" ? <BsFillArrowRightCircleFill size={20} color='gold'/> : <></>}/>
    <ModuleButton href={'1-peter/scholarship/1'} text="3. Contemporary Scholarship" rightIconLogic={localStorage.getItem("Scholarship"+currentBook)==="Completed" ? <BsFillCheckCircleFill size={20} color='green'/> : everyChapterCompleted ? <BsFillArrowRightCircleFill size={20} color='gold'/> : <></>}/>
    <ModuleButton href={'1-peter/reflection/1'} text="4. Personal Reflection" rightIconLogic={localStorage.getItem("Reflection"+currentBook)==="Completed" ? <BsFillCheckCircleFill size={20} color='green'/> : localStorage.getItem("Scholarship"+currentBook)==="Completed" ? <BsFillArrowRightCircleFill size={20} color='gold'/> : <></>}/>
    </div>
    </Container>
    </>
  )
}
