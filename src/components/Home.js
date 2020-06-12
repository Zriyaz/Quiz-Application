import React from "react"
import {Link} from "react-router-dom"
import {Helmet} from "react-helmet" 


const Home = () =>(
  <React.Fragment>
  <Helmet><title>Quiz App Home</title></Helmet>
    <div id="home">
      <section>
        <div style={{textAlign:'center'}}>
          <span className="mdi mdi-cube-outline cube"></span>
        </div>
        <h1>Quiz App</h1>
        <div className="play-button-container">
          <ul>
            <li> <Link className="play-button" to ="/play/instructions">play</Link></li>
          </ul>
        </div>
        <div className="auth-container">
        <Link className="auth-buttons" id="login-button" to ="/login">login here</Link>
        <Link className="auth-buttons"  id="signup-button" to ="/register">Sign Up</Link>
        </div>
      </section>
    </div>
  </React.Fragment>
)
export default Home