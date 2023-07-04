'use client' 

import {Button, Card, Container} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import chapterData from '../../../../../bibledata/chapterData.json'
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useState, setState } from 'react';
import { useRouter } from 'next/router';
import { getURL } from 'next/dist/shared/lib/utils';
import PBSNavbar from '@/app/(components)/navbar';

export default function Home() {


const params = useParams();
const currentBookURL = params.study
const currentBookLength = chapterData.filter(thing => thing.urlName === currentBookURL).length
const currentChapter = params.text;
const currentQuizData = chapterData.filter(thing => thing.urlName===currentBookURL && thing.chapter===parseInt(currentChapter))
const quizQuestionsLength = currentQuizData[0].quizQuestions.length;
const currentQuestionNumber = params.question
const isLastQuestion = parseInt(currentChapter)===1
const currentQuestionText = currentQuizData[0].quizQuestions[parseInt(currentQuestionNumber)-1].question
const currentQuestionOptions = currentQuizData[0].quizQuestions[parseInt(currentQuestionNumber)-1].options
const currentQuestionAnswers = currentQuizData[0].quizQuestions[parseInt(currentQuestionNumber)-1].correctAnswer
const currentCorrectMessage = currentQuizData[0].quizQuestions[parseInt(currentQuestionNumber)-1].correctMessage

const currentBook = currentQuizData[0].bookName
const [selectedWrongOptions, setSelectedWrongOptions] = useState([])
const [selectedCorrectOptions, setSelectedCorrectOptions] = useState([])
const [progressLabel, setProgressLabel] = useState("Check Answer")
const [progressURL, setProgressURL] = useState()

const handleProgressButtonClick = () => {

if(progressLabel==="Check Answer" && selectedWrongOptions.length===0 
&& selectedCorrectOptions.length===currentQuestionAnswers.length) {
  setProgressLabel("Next Question")

      if(parseInt(currentQuestionNumber)===quizQuestionsLength && parseInt(currentChapter) === parseInt(currentBookLength)){
        setProgressURL('/'+currentBookURL)
        localStorage.setItem("Read"+currentBook+currentChapter, "Completed")
      }
      else {
        if(parseInt(currentQuestionNumber)===quizQuestionsLength && parseInt(currentChapter) !== parseInt(currentBookLength)) {
          localStorage.setItem("Read"+currentBook+currentChapter, "Completed")
          setProgressURL('/'+currentBookURL+'/read') 
          }
          else {
          setProgressURL('/'+currentBookURL+'/read/'+currentChapter+'/quiz/'+(parseInt(currentQuestionNumber)+1))
          }
      }
      

}

if(progressLabel==="Check Answer" && selectedWrongOptions.length>0 || selectedCorrectOptions.length !== currentQuestionAnswers.length) {
  setProgressLabel("Try Again");
} 
if(progressLabel==="Try Again") {
  setSelectedCorrectOptions([])
  setSelectedWrongOptions([])
  setProgressLabel("Check Answer");

} 
}

const handleOptionClick = (thing) => {
  
  currentQuestionAnswers.includes(thing) ? 
  
    selectedCorrectOptions.includes(thing) ?
    setSelectedCorrectOptions([...selectedCorrectOptions.filter(a => a !== thing)]) :
    setSelectedCorrectOptions([...selectedCorrectOptions, thing]) :
  
    selectedWrongOptions.includes(thing) ?
    setSelectedWrongOptions([...selectedWrongOptions.filter(a => a !== thing)]) :
    setSelectedWrongOptions([...selectedWrongOptions, thing]);
  
}


const OptionButton = (props) => {

  const isOptionChecked = selectedCorrectOptions.includes(props.thing) || selectedWrongOptions.includes(props.thing)

  return(
  <Button 
  style={{width: "99%"}}
  key={props.thing+"button"} 
  disabled={progressLabel!=="Check Answer"} 
  variant={progressLabel==="Check Answer" && isOptionChecked ? "primary" : 
             progressLabel==="Try Again" && selectedWrongOptions.includes(props.thing) ? "danger" :
             progressLabel==="Try Again" && selectedCorrectOptions.includes(props.thing) ? "warning" :  
             progressLabel==="Next Question" && selectedCorrectOptions.includes(props.thing) ? "success" : "outline-primary"
          } 
  onClick={() => handleOptionClick(props.thing)}>{props.thing}
  </Button>
  )
}

const ProgressButton = () => {

const disableProgressButton = selectedCorrectOptions.length + selectedWrongOptions.length === 0

  return(
    <Button 
    disabled={disableProgressButton}
    onClick={() => handleProgressButtonClick()}
    style={{alignItems: "center", justifyContent: "center", width: "99%", height: 100}}
    >{parseInt(currentQuestionNumber)===quizQuestionsLength && progressLabel==="Next Question" ? "Finish Quiz" : progressLabel}
    </Button>
  )
}


  return (
    <>
    <PBSNavbar/>
    <Container className="col-lg-6">
    <h3 className="mb-4">Chapter {currentChapter} Quiz</h3>
    <div className="mb-4">{currentQuestionText}</div>
    <div className="mb-4">{currentQuestionOptions.map((thing) => {
      return(
        <div key={thing} className="mb-2">
        <OptionButton key={thing+"button"} thing={thing} />
        </div>
      )
    })}
    </div>

    {["Next Question", "Finish Quiz"].includes(progressLabel) ? 
    <div className="mb-4" style={{color: "green"}}><strong>Correct! </strong>{currentCorrectMessage}</div>
    : null
    }

    {["Check Answer", "Try Again"].includes(progressLabel) ? 
    <ProgressButton />
    : 
    <Link href={progressURL}>
    <ProgressButton />
    </Link>
    }
    </Container>
    </>
  )
}
