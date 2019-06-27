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
    </Fragment>
  )
}

export default App
