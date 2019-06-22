import React, { Component } from "react"
import weddingCake1 from "../images/wedding-cake-1.jpeg"
import weddingCake2 from "../images/cake-images/IMG-20190523-WA0009.jpg"
import weddingCake3 from "../images/cake-images/IMG-20190523-WA0010.jpg"
import weddingCake4 from "../images/cake-images/IMG-20190523-WA0011.jpg"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

class ImageCarousel extends Component {
  render() {
    return (
      <Carousel showStatus={false} dynamicHeight={true} infiniteLoop={true}>
        <div>
          <img src={weddingCake1} alt="1" />
        </div>
        <div>
          <img src={weddingCake2} alt="2" />
        </div>
        <div>
          <img src={weddingCake3} alt="3" />
        </div>
        <div>
          <img src={weddingCake4} alt="4" />
        </div>
      </Carousel>
    )
  }
}

export default ImageCarousel
