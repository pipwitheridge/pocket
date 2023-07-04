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

  return (
    <>
    <PBSNavbar />
    <Container className="col-lg-6">
    <h1 className="mb-3">Study {currentBook}</h1>
    <div className="d-grid gap-2">
    <Link href='1-peter/background/1'>
    <Button variant="outline-primary" style={{height: 50, alignItems: "center", justifyContent: "center", width: "100%"}}>
    <div className="d-flex justify-content-between">
    <div>1. Context</div>
    <div>{localStorage.getItem("Context"+currentBook)==="Completed" ? <BsFillCheckCircleFill size={20} color='green'/> : <BsFillArrowRightCircleFill size={20} color='gold'/> }</div>
    </div>
    </Button>
    </Link>
    <Link href='1-peter/read'>
    <Button variant="outline-primary" style={{height: 50, alignItems: "center", justifyContent: "center", width: "100%"}}>
    <div className="d-flex justify-content-between">
    <div>{"2. Read \u0028"+currentBookChapters+" Chapters\u0029"}</div>
    <div>{everyChapterCompleted ? <BsFillCheckCircleFill size={20} color='green'/> : localStorage.getItem("Context"+currentBook)==="Completed" ? <BsFillArrowRightCircleFill size={20} color='gold'/> : <></>}</div>
    </div>
    </Button>
    </Link>
    <Link href='1-peter/scholarship/1'>
    <Button variant="outline-primary" style={{height: 50, alignItems: "center", justifyContent: "center", width: "100%"}}>
    <div className="d-flex justify-content-between">
    <div>{"3. Contemporary Scholarship"}</div>
    <div>{localStorage.getItem("Scholarship"+currentBook)==="Completed" ? <BsFillCheckCircleFill size={20} color='green'/> : everyChapterCompleted ? <BsFillArrowRightCircleFill size={20} color='gold'/> : <></>}</div>
    </div>
    </Button>   
    </Link>
    <Link href='1-peter/reflection/1'>
    <Button variant="outline-primary" style={{height: 50, alignItems: "center", justifyContent: "center", width: "100%"}}>
    <div className="d-flex justify-content-between">
    <div>{"4. Personal Reflection"}</div>
    <div>{localStorage.getItem("Reflection"+currentBook)==="Completed" ? <BsFillCheckCircleFill size={20} color='green'/> : localStorage.getItem("Scholarship"+currentBook)==="Completed" ? <BsFillArrowRightCircleFill size={20} color='gold'/> : <></>}</div>
    </div>
    </Button>
    </Link>
    </div>
    </Container>
    </>
  )
}
