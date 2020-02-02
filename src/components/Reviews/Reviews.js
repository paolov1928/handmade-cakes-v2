import React from 'react';
import './Reviews.css'
const allText = require("../../copy.js")


export default function ReviewsContainer() {
    return (
        <div className="reviewsContainer text-left">
            <div className="reviewsContainerTitle" > {"Reviews:"}</div>
            <ul>
            {allText.home.testimonials.map((text,i) => (
                <li className="review py-1" key={i}><i>"{text}"</i> </li>
            ))}
            </ul>
        </div>
    );
}