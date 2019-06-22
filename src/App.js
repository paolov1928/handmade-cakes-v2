import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"

function App() {
  return (
    <Router>
      <div id="cssMenu">
        <Navbar />
      </div>
      <div id="restOfContent">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  )
}

// Could remove the about page
export default App
