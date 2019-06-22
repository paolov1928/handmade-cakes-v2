import React from "react"
import styled from "styled-components"
const allText = require("../copy.js")

const Title = styled.h3`
  color: black;
  margin: 1vh;
  font-family: cursive;
`

const About = () => {
  return (
    <div>
      <Title>{allText.about.title}</Title>
    </div>
  )
}

export default About
