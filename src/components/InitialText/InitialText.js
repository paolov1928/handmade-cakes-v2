import React from 'react';
import './InitialText.css'
const allText = require("../../copy.js")


export default function InitialText() {
    return (
        <div className="initialTextContainer">{allText.home.firstTypography.map(text => <div className="fillerText initialText">{text}</div>)}</div>
    );
}