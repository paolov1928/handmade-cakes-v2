import React from 'react';
import './FirstImage.css'
import colorfulCake from "../../images/top-front-image.jpg"
import { Card, Button, Container } from 'react-bootstrap';
import animateScrollTo from "animated-scroll-to"
import TextCarousel from './TextCarousel'

const scrollOptions = {
    speed: 100,
    offset: -100
}

export default function FirstImage() {
    return (
        <Card className="bg-dark text-center">
            <Card.Img src={colorfulCake} alt="Card image" fluid width="100%" height="auto" />
            <Card.ImgOverlay>
                <Container className="firstImageTextCarousel"> <TextCarousel /></Container>
                <Button className="enquireButton" variant="light" size='lg' onClick={() => {
                    animateScrollTo(
                        document.querySelector(".scroll-form"),
                        scrollOptions
                    );
                }}>Enquire Today !</Button>
            </Card.ImgOverlay>
        </Card>
        );
}