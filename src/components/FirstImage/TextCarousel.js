import React, {useState} from 'react';
import { Carousel } from 'react-bootstrap';
import './FirstImage.css'
const allText = require("../../copy.js")

export default function TextCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
            {allText.home.textOnFirstImage.map((text, i) => (
                <Carousel.Item key={i}>
                    <p className="innerCarouselText" key={i}>
                        <b>{text.main}</b>
                    </p>
                    <p className="innerCarouselText" key={i + "a"}>
                        <b>{text.under}</b>
                    </p>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}