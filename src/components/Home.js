import React from "react"
import styled from "styled-components"
import Form from "./Form"
import ImageCarousel from "./ImageCarousel"
import InstagramEmbed from "react-instagram-embed"
import macaroons from "../images/macaroons.jpeg"

import FacebookPage from "./FacebookPage"

const allText = require("../copy.js")

const BackgroundImage = styled.img`
  position: relative;
  margin: 0;
  width: 100%;
  height: 50vh;
  object-fit: cover;
  border: 2px solid #f5f5f5;
  border-radius: 5px;
`

const MacaroonContainer = styled.div`
  position: relative;
  margin-top: 0;
  margin-bottom: 5vh;
`

const Home = () => {
  return (
    <React.Fragment>
      <MacaroonContainer>
        <BackgroundImage alt={"macaroons"} src={macaroons} />
      </MacaroonContainer>
      <div className="fillerText">
        {allText.home.firstTypography.map((text, i) => (
          <p variant="body1" className="introText" key={i}>
            <b>{text}</b>
          </p>
        ))}
      </div>
      <div className="introTextContainer scroll-gallery">
        <div className="imageCarouselContainer">
          <ImageCarousel />
        </div>
      </div>
      <div className="fillerText scroll-about">
        {allText.home.secondTypography.map((text, i) => (
          <p variant="body1" className="introText" key={i}>
            <b>{text}</b>
          </p>
        ))}
      </div>
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
