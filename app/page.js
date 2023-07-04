'use client' 

import {Button, Card, Container} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link';
import bibledata from './bibledata/bibledata.json';
import PBSNavbar from './(components)/navbar';
import StandardButton from './(components)/standardButton';

export default function Home() {

const userChoice = "1 Peter"
const currentBookURL = "1-peter"

  return (
    <>
    <PBSNavbar/>
    <Container>
    <div className="mb-3">Welcome to Pocket Bible Studies!</div>
    <Link href={'/about'}>
        <Button variant="outline-success" style={{height: 50, alignItems: "center", justifyContent: "center", width: "100%", marginBottom: "10px"}}>
        About
        </Button>
    </Link>
    <Link href={'/1-peter'}>
   <StandardButton text={userChoice} />
    </Link>
    </Container>
    </>
  )
}
