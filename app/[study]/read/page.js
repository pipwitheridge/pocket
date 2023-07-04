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
    <Container className="col-lg-6">
    <h3 className="mb-3">Read</h3>
    <div>
    {bibledata.filter(thing => thing.bookName===currentBook && thing.Verse===1).map(thing => {
      return(
      <div className="mb-2">
          <Link href={currentBookURL+"/read/"+thing.Chapter}>
          <Button variant="outline-primary" style={{height: 50, width: "100%", alignItems: "center", justifyContent: "center", width: "100%"}}>
          <div className="d-flex justify-content-between">
          <div>{thing.Chapter}</div>
          <div>{localStorage.getItem("Read"+currentBook+thing.Chapter)==="Completed" ? <BsFillCheckCircleFill size={20} color='green'/> : localStorage.getItem("Read"+currentBook+((thing.Chapter)-1))==="Completed" ? <BsFillArrowRightCircleFill size={20} color='gold'/> : <></>}</div>
          </div>
          </Button>
          </Link>
      </div>
    )})}
      <div className="chapterButton"></div>
    </div>
    </Container>
    </>
  )
}
