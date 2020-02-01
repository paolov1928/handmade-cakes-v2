import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
//Images import
import babyCake from "../../images/new-images/baby-cake.jpeg"
import weddingCakeTall from "../../images/new-images/wedding-cake-tall.jpg"
import cupcakes from "../../images/new-images/cupcakes.jpg"
import chocCake from "../../images/new-images/choc-cake.jpg"
import topViewCake from "../../images/new-images/top-view-cake.jpg"
import macaroons from "../../images/macaroons.jpeg"
import cake1 from "../../images/cakePicsFeb/cake1.jpg"
import cake2 from "../../images/cakePicsFeb/cake2.jpg"
import cake3 from "../../images/cakePicsFeb/cake3.jpg"
import cake4 from "../../images/cakePicsFeb/cake4.jpg"
import cake5 from "../../images/cakePicsFeb/cake5.jpg"
import cake6 from "../../images/cakePicsFeb/cake6.jpg"
import cake7 from "../../images/cakePicsFeb/cake7.jpg"
import cake8 from "../../images/cakePicsFeb/cake8.jpg"
import cake9 from "../../images/cakePicsFeb/cake9.jpg"

export default function ImagesCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };
    const imagesArray = [
        babyCake,
        weddingCakeTall,
        macaroons,
        chocCake,
        cupcakes,
        topViewCake,
        cake1,
        cake2,
        cake3,
        cake4,
        cake5,
        cake6,
        cake7,
        cake8,
        cake9,
    ]

    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    return (
        <div className="scroll-gallery">
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
            {shuffle(imagesArray).map((image, i) => (
                <Carousel.Item key={i}>
                    <img
                        className="d-block w-100"
                        src={image}
                        alt="First slide"
                        key={i}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
        </div>
    );
}