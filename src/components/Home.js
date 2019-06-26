import React from "react"
import Form from "./Form"
import ImageCarousel from "./ImageCarousel"
import InstagramEmbed from "react-instagram-embed"
import macaroons from "../images/macaroons.jpeg"
import weddingCake2 from "../images/cake-images/IMG-20190523-WA0009.jpg"
import { Parallax } from "react-parallax"

import FacebookPage from "./FacebookPage"

const allText = require("../copy.js")

const insideStyles = {
  background: "#0f0c29",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  borderRadius: "2%",
  opacity: "0.9"
}

const imageStyledMacaroon = {
  background: "transparent",
  maxHeight: "calc(500px + 40vmin)",
  padding: "30vh"
}
const imageStyledWedding = { maxHeight: "1000px" }

const Home = () => {
  return (
    <React.Fragment>
      <Parallax
        bgImage={macaroons}
        strength={-400}
        bgImageStyle={imageStyledMacaroon}
      >
        <div style={{ height: "100vh" }}>
          <div style={insideStyles}>
            <div className="fillerText">
              {allText.home.firstTypography.map((text, i) => (
                <p variant="body1" className="introText" key={i}>
                  <b>{text}</b>
                </p>
              ))}
            </div>
          </div>
        </div>
      </Parallax>
      <div className="fillerText"> A selection of our previous bakes </div>
      <div className="introTextContainer scroll-gallery">
        <div className="imageCarouselContainer">
          <ImageCarousel />
        </div>
      </div>
      <Parallax
        bgImage={weddingCake2}
        strength={-400}
        bgImageStyle={imageStyledWedding}
      >
        <div style={{ height: "100vh" }}>
          <div style={insideStyles}>
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
