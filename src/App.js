import React from 'react';
import {BrowserRouter as Router , Route } from "react-router-dom"

import Home from "./components/Home"
import QuizInstructions from "./components/quiz/QuizInstructions"
import Play from "./components/quiz/Play"




class App extends React.Component{
  render(){
    return(
      <Router>
       <Route path  ="/" exact component={Home}/>
        <Route path ="/play/instructions" exact component={QuizInstructions}/>
        <Route path ="/play/Quiz" exact component={Play}/>
      </Router>
    )
  }
}

export default App;
