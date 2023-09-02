'use client' 

import {Button, Card, Container} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import YouTube from 'react-youtube';
import bibledata from '../../bibledata/bibledata.json'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import PBSNavbar from '@/app/(components)/navbar';
import { BsFillArrowRightCircleFill, BsFillCheckCircleFill } from 'react-icons/bs';

export default function Home() {

  const params = useParams();
  
  const currentBookURL = params.study
  const currentBookData = bibledata.filter(thing => thing.urlName===currentBookURL)
  const currentBookChapters = bibledata.filter(thing => thing.urlName===currentBookURL && thing.Verse===1).length;
  const currentBook = currentBookData[0].bookName;

  return (
    <>
    <PBSNavbar />
    <Container>
    <h3 className="mb-3">Read</h3>
    <div>
    {bibledata.filter(thing => thing.bookName===currentBook && thing.Verse===1).map(thing => {
      return(
      <div className="mb-2">
          <Button href={"/"+currentBookURL+"/read/"+thing.Chapter} variant="outline-primary" style={{width: "100%", alignItems: "center", justifyContent: "center", width: "100%"}}>
          <div className="d-flex justify-content-between">
          <div>{thing.Chapter}</div>
          <div>{localStorage.getItem("Read"+currentBook+thing.Chapter)==="Completed" ? <BsFillCheckCircleFill size={20} color='green'/> : localStorage.getItem("Read"+currentBook+((thing.Chapter)-1))==="Completed" || parseInt(thing.Chapter)-1===0 ? <BsFillArrowRightCircleFill size={20} color='gold'/> : <></>}</div>
          </div>
          </Button>
      </div>
    )})}
      <div className="chapterButton"></div>
    </div>
    </Container>
    </>
  )
}
