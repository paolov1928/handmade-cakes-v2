import React from "react"
import Form from "./Form"
import ImageCarousel from "./ImageCarousel"
import InstagramEmbed from "react-instagram-embed"
import weddingCake2 from "../images/cake-images/IMG-20190523-WA0009.jpg"
import chocCake from "../images/new-images/choc-cake.jpg"
import { Parallax } from "react-parallax"
import styled, { css } from "styled-components"
import animateScrollTo from "animated-scroll-to"

import FacebookPage from "./FacebookPage"

const allText = require("../copy.js")

const Button = styled.button`
  background: transparent;
  border-radius: 0.5em;
  border: 2px solid rgba(30, 13, 45, 0.03);
  padding: 1vh;
  display: block;
  min-width: 30vw;
  height: 3em;
  font-size: calc(8px + 2vmin);
  text-align: center;
  background: #a39b8f;
  max-width: 60%;
  color: #d3cce3;
  font-family: "Indie Flower", cursive;
  margin-bottom: 5vh;
`

const topImageText = {
  background: "transparent",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "80%"
}
const topImageText2 = {
  background: "#d3cce3",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "80%",
  opacity: "0.9",
  borderRadius: "2%"
}

const bottomImageText = {
  background: "#d3cce3",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  borderRadius: "2%",
  opacity: "0.9"
}

const oldColors = {
  background: "#0f0c29",
  text: "#f1be5e8a"
}

const topBgImageStyle = {
  background: "transparent",
  maxHeight: "calc(500px + 40vmin)",
  padding: "30vh",
  opacity: "0.99"
}

const options = {
  speed: 100,
  offset: -100
}

const imageStyledWedding = { maxHeight: "1000px" }

const Home = () => {
  return (
    <React.Fragment>
      <Parallax
        bgImage={chocCake}
        strength={-300}
        bgImageStyle={topBgImageStyle}
      >
        <div style={{ height: "100vh" }}>
          <div style={topImageText}>
            <div className="fillerText">
              {allText.home.textOnFirstImage.map((text, i) => (
                <React.Fragment>
                  <p variant="body1" className="introText" key={i}>
                    <b>{text.main}</b>
                  </p>
                  <p key={i + 10}>
                    <b>{text.under}</b>
                  </p>
                </React.Fragment>
              ))}
            </div>
            <div className="submitButtonContainer">
              <Button
                onClick={() => {
                  animateScrollTo(
                    document.querySelector(".scroll-form"),
                    options
                  )
                }}
              >
                Enquire Today
              </Button>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="fillerText">
        {allText.home.firstTypography.map((text, i) => (
          <p key={i}>
            <b>{text}</b>
          </p>
        ))}
      </div>

      <div className="introTextContainer scroll-gallery">
        <div className="imageCarouselContainer">
          <ImageCarousel />
        </div>
      </div>
      <div className="fillerText"> What do we bake?</div>
      <Parallax
        bgImage={weddingCake2}
        strength={-400}
        bgImageStyle={imageStyledWedding}
      >
        <div style={{ height: "100vh" }}>
          <div style={bottomImageText}>
            <div className="fillerText scroll-about">
              {allText.home.secondTypography.map((text, i) => (
                <p variant="body1" className="introText" key={i}>
                  <b>{text}</b>
                </p>
              ))}
            </div>
          </div>
        </div>
      </Parallax>
      <div className="fillerText"> Please follow our social media pages</div>
      <div className="introTextContainer scroll-insta">
        <div className="instaContainer">
          <InstagramEmbed
            url="https://www.instagram.com/p/BxwcLFTnNIw/"
            maxWidth={320}
            hideCaption={false}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </div>
      </div>

      <div className="introTextContainer scroll-form">
        <Form />
      </div>
    </React.Fragment>
  )
}

export default Home

// Toastify on form submit
