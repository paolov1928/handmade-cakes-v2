import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { PageView, initGA } from "./components/Tracking/index";

initGA(process.env.REACT_APP_GA);
PageView();

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
            FrontEndMedia &copy; 2019 | <br />
            Website designed by{" "}
            <a href="https://paoloventura.xyz/" rel="nofollow">
              Paolo Ventura
            </a>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default App;
