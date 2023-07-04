'use client' 

import {Button, Card, Container} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import YouTube from 'react-youtube';
import bookData from '../../../bibledata/bookData.json'
import { useParams } from 'next/navigation';

import Link from 'next/link';
import PBSNavbar from '@/app/(components)/navbar';
import StandardButton from '@/app/(components)/standardButton';

export default function Home() {

  const params = useParams();

  const currentBookURL = params.study
  const currentBackgroundModule = params.module
  const currentBackgroundData = bookData.filter(thing => thing.urlName===currentBookURL)
  const currentModulesLength = currentBackgroundData[0].backgroundInfo.length;
  const currentBook = currentBackgroundData[0].bookName;
  const currentModuleHeading = Object.keys(currentBackgroundData[0].backgroundInfo[currentBackgroundModule-1])
  const currentModuleBody = Object.values(currentBackgroundData[0].backgroundInfo[currentBackgroundModule-1])
  const moduleIsFirst = parseInt(currentBackgroundModule)===1
  const moduleIsLast = parseInt(currentBackgroundModule)===currentModulesLength
  //const progressPercentage = Math.round(currentBackgroundModule / currentModulesLength * 100)
  //console.log(progressPercentage)

  const finishContext = () => {
    localStorage.setItem("Context"+currentBook, "Completed")
  }


  return (
    <>
    <PBSNavbar/>
    <Container className="col-lg-6">
    <div className="d-grid gap-2">
   
    <div className="mb-1" style={{fontSize: 14, fontWeight: 300}}>Understand Background | {currentBackgroundModule} of {currentModulesLength}</div>
    <div className="mb-2" style={{fontSize: 30}}>{currentModuleHeading}</div>
    <div className="mb-3">{currentModuleBody}</div>

    { !moduleIsLast && 
    <Link href={'/1-peter/background/' + (parseInt(currentBackgroundModule)+1)}>
    <StandardButton text="Next"/>
    </Link>
    }

    { moduleIsLast && 
    <Link onClick={finishContext} href={'/'+currentBookURL}>
    <StandardButton text="Finish" />
    </Link>
    }
    </div>
    </Container>
    </>
  )
}
