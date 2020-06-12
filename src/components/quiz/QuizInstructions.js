import React,{Fragment} from "react"

import {Link } from "react-router-dom"
import {Helmet} from "react-helmet"
const QuizInstructions =()=>{
  return <Fragment>
   <Helmet><title>Quiz Instructions</title></Helmet>
   <div className="instructions container text-warning">
     <h1 className="text-center">How to play The Game</h1>
     <p>o start, click the "Take the Quiz" button. When finished, click the "Submit Quiz" button.</p>
     <ul className="browser-default" id="main-list">
       <li>Multiple Attempts - You will have three attempts for this quiz with your highest score being recorded in the grade book.</li>
       <li>Multiple Attempts - You will have three attempts for this quiz with your highest score being recorded in the grade book.</li>
       <li>Multiple Attempts - You will have three attempts for this quiz with your highest score being recorded in the grade book.</li>
       <li>Multiple Attempts - You will have three attempts for this quiz with your highest score being recorded in the grade book.</li>
      </ul>
    </div>   
     <div className="container py-3 "> 
      <div className="row d-flex align-item-cenetr ">
           <span className="btn btn-outline-warning btn-large mx-2  "><Link to="/" >No</Link></span> 
           <span className="btn btn-outline-danger btn-large mx-2 "><Link to="/play/quiz" >okey</Link></span> 
        </div>
      </div>
  </Fragment>
}


export default QuizInstructions