import React from "react"
import Form from "./Form"
import ImageCarousel from "./ImageCarousel"
import weddingCake2 from "../images/cake-images/IMG-20190523-WA0009.jpg"
import chocCake from "../images/new-images/choc-cake2.jpg"
import { Parallax } from "react-parallax"
import styled from "styled-components"
import animateScrollTo from "animated-scroll-to"
import {
  CarouselProvider,
  Slider,
  Slide,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import Instagram from "./Instagram"
import FillerText from "./FillerText"

const allText = require("../copy.js")

const Button = styled.button`
  background: transparent;
  border-radius: 0.5em;
  border: 2px solid rgba(30, 13, 45, 0.03);
  padding: 1vh;
  display: block;
  min-width: 30vw;
  height: 3em;
  font-size: calc(14px + 3vmin);
  text-align: center;
  background: #58544e;
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


const bottomImageText = {
  background: "#d3cce3",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  borderRadius: "2%",
  opacity: "0.9"
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
      <div className="containerWhenDesktop">
        <Parallax
          bgImage={chocCake}
          strength={-300}
          bgImageStyle={topBgImageStyle}
        >
          <div style={{ height: "100vh" }}>
            <div style={topImageText}>
              <div className="fillerText">
                <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={125}
                  totalSlides={3}
                  interval={2000}
                  isPlaying={true}
                  playDirection={"forward"}
                >
                  <Slider>
                    {allText.home.textOnFirstImage.map((text, i) => (
                      <Slide index={0}>
                        <p className="introText" key={i}>
                          <b>{text.main}</b>
                        </p>
                        <p className="introText" key={i + "a"}>
                          <b>{text.under}</b>
                        </p>
                      </Slide>
                    ))}
                  </Slider>
                  <div className="submitButtonContainer">
                    <Button
                      onClick={() => {
                        animateScrollTo(
                          document.querySelector(".scroll-form"),
                          options
                        )
                      }}
                    >
                      Enquire Today !
                  </Button>
                  </div>
                </CarouselProvider>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
      <div className="fillerText">
        {allText.home.firstTypography.map((text, i) => (
          <p key={i}>
            <b>{text}</b>
          </p>
        ))}
      </div>
      <div className="containerWhenDesktop">
        <div className="introTextContainer scroll-gallery">
          <div className="imageCarouselContainer">
            <ImageCarousel />
          </div>
        </div>
      </div>
      {allText.home.midFillerTypography.map(text => (
        <FillerText text={text} />
      ))}
      <div className="containerWhenDesktop">
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
      </div>

      <FillerText text={allText.home.socialMediaComment} />
      <Instagram />
      <FillerText text="Reviews:" />
      {allText.home.testimonials.map(text => (
        <FillerText text={text} />
      ))}

      <Form />

    </React.Fragment >
  )
}

export default Home

// Toastify on form submit
