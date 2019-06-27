import React, { Fragment } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { PageView, initGA } from "./components/Tracking/index"

initGA(process.env.REACT_APP_GA)
PageView()

function App() {
  return (
    <Fragment>
      <div id="cssMenu">
        <Navbar />
      </div>
      <div id="restOfContent">
        <Home />
      </div>
      <footer>
        <div className="instaContainer">
          <div className="copy">
            FrontEndMedia &copy; 2019 | <a href="#">Privacy Policy</a> <br />
            Website designed by
            <a href="https://paolov1928.github.io./" rel="nofollow">
              Paolo Ventura
            </a>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}

export default App
