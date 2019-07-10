import React, { Component } from "react"
import weddingCake1 from "../images/wedding-cake-1.jpeg"
import weddingCake2 from "../images/cake-images/IMG-20190523-WA0009.jpg"
import weddingCake3 from "../images/cake-images/IMG-20190523-WA0010.jpg"
import weddingCake4 from "../images/cake-images/IMG-20190523-WA0011.jpg"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import babyCake from "../images/new-images/baby-cake.jpeg"
import weddingCakeTall from "../images/new-images/wedding-cake-tall.jpg"
import cupcakes from "../images/new-images/cupcakes.jpg"
import topViewCake from "../images/new-images/top-view-cake.jpg"

import macaroons from "../images/macaroons.jpeg"

class ImageCarousel extends Component {
  render() {
    const imagesArray = [
      babyCake,
      weddingCakeTall,
      macaroons,
      cupcakes,
      topViewCake
    ]

    return (
      <Carousel
        showStatus={false}
        dynamicHeight={true}
        infiniteLoop={true}
        showThumbs={false}
      >
        {imagesArray.map((image, i) => (
          <div>
            <img src={image} alt={i} />
          </div>
        ))}
      </Carousel>
    )
  }
}

export default ImageCarousel
