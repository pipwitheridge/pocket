'use client' 

import {Button, Card, Container} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import YouTube from 'react-youtube';
import bibledata from '../../../bibledata/bibledata.json'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import paradata from '../../../bibledata/chapterData.json'
import PBSNavbar from '@/app/(components)/navbar';
import StandardButton from '@/app/(components)/standardButton';

export default function Home() {


const params = useParams();
  
const currentBookURL = params.study
const currentBookData = bibledata.filter(thing => thing.urlName===currentBookURL)
const currentBookChapters = bibledata.filter(thing => thing.urlName===currentBookURL && thing.Verse===1).length;
const currentBook = currentBookData[0].bookName;
const currentChapter = params.text;
const paragraphs = paradata.filter(thing => thing.chapter===parseInt(params.text))
console.log(currentBookChapters)
const isLastChapter = currentBookChapters===parseInt(currentChapter)
const isFirstChapter = parseInt(currentChapter)===1

  return (
    <>
    <PBSNavbar/>
    <Container className="mb-5">
    <h3>Chapter {currentChapter}</h3>
    <div className="mb-5">
    {bibledata.filter(thing => thing.bookName===currentBook && thing.Chapter===parseInt(currentChapter)).map(thing => {
      return(
      <>
      {paragraphs[0].paragraphStarts.includes(thing.Verse) && <p></p>}
      <sup>{thing.Verse}</sup><span>{thing.Text} </span>
      </>
    )})}
      <div className="chapterButton"></div>
    </div>
    <div>  
    <Link href={'/'+currentBookURL+'/read/'+(parseInt(currentChapter)+'/quiz/1')}>
    {<StandardButton key={"review"+currentChapter} text="Review Chapter"/>}
    </Link>
    </div>
    </Container>
    </>
  )
}
