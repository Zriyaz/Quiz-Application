import React from "react"
import {Link} from "react-router-dom"
import {Helmet} from "react-helmet" 

const Home = () =>(
  <React.Fragment>
  <Helmet><title>Quiz App Home</title></Helmet>
    <div id="home">
      <section>
        <div>
          <span className="mdi mdi-cube-outline mdi-48px"></span>
        </div>
        <h1>Quiz App</h1>
        <div className="play-button-container">
          <ul>
            <li><Link to ="/play/instructions"></Link>Play</li>
          </ul>
        </div>
        <div className="auth-container">
        <Link to ="/login">login</Link>
        <Link to ="/register">Register</Link>
        </div>
      </section>
    </div>
  </React.Fragment>
)
export default Home