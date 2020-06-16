import React from 'react';
import {BrowserRouter as Router , Route } from "react-router-dom"

import Home from "./components/Home"
import QuizInstructions from "./components/quiz/QuizInstructions"
import Play from "./components/quiz/Play"
import QuizSummary from "./components/quiz/QuizSummary"
import UserLogin from "./components/authentication/UserLogin"
import UserSignUp from "./components/authentication/UserSignUp"





class App extends React.Component{
  render(){
    return(
      <Router>
       <Route path  ="/" exact component={Home}/>
        <Route path ="/play/instructions" exact component={QuizInstructions}/>
        <Route path ="/play/Quiz" exact component={Play}/>
         <Route path ="/play/quizSummary" exact component={QuizSummary}/>
         <Route path ="/login/userlogin" exact component={UserLogin}/>
         <Route path ="/register/usersignup" exact component={UserSignUp}/>
      </Router>
    )
  }
}

export default App;
