import React, { Component } from "react"

const allText = require("../copy.js")

class Logo extends Component {
  render() {
    return (
      <div className="NavBarLogoContainer">
        <div className="NavBarTitle">
          <b>{allText.navBar.title}</b>
        </div>
        <div className="NavBarTitleUnderText">{allText.navBar.underText}</div>
      </div>
    )
  }
}

export default Logo
