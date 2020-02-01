import React from 'react';
import { Container } from "react-bootstrap";
import weddingCake2 from "../../images/cake-images/IMG-20190523-WA0009.jpg"
import { Parallax } from "react-parallax"

const allText = require("../../copy.js")

export default function ImageBoxText() {
    return (
        <Container>
            <Parallax
                bgImage={weddingCake2}
                strength={-400}
            >
                <div style={{ height: "100vh" }}>
                    
                        <div className="fillerText scroll-about">
                            {allText.home.secondTypography.map((text, i) => (
                                <p variant="body1" className="introText" key={i}>
                                    <b>{text}</b>
                                </p>
                            ))}
                        </div>
                    </div>
                
            </Parallax>
        </Container>
    );
}