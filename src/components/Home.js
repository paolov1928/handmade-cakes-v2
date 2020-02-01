import React from "react"
import Form from "./Form"
import weddingCake2 from "../images/cake-images/IMG-20190523-WA0009.jpg"
import { Parallax } from "react-parallax"
import Instagram from "./Instagram"
import FillerText from "./FillerText"
import Reviews from "./Reviews/Reviews"
import MidFillerText from "./MidFillerText/MidFillerText"
import InitialText from "./InitialText/InitialText"
import FirstImage from "./FirstImage/FirstImage"
import ImagesCarousel from "./ImageCarousel/ImagesCarousel"
//The below is if a separate component is needed for the wedding photo.
//import ImageBoxText from "./ImageBoxText/ImageBoxText"

const allText = require("../copy.js")

const bottomImageText = {
  background: "#d3cce3",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  borderRadius: "2%",
  opacity: "0.9"
}

const imageStyledWedding = { maxHeight: "1000px" }

const Home = () => {
  return (
    <React.Fragment>
      <FirstImage />
      <InitialText />
      <ImagesCarousel />
      <MidFillerText />
      <div>
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
      {/* <ImageBoxText /> */}
      <FillerText text={allText.home.socialMediaComment} />
      <Instagram />
      <Reviews />

      <Form />
    </React.Fragment>
  );
}

export default Home

// Toastify on form submit
