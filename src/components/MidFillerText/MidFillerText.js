import React from 'react';
import './MidFiller.css'
const allText = require("../../copy.js")


export default function MidFillerText() {
    return (
        <div className="midFillerTextContainer">{allText.home.midFillerTypography.map(text => <div className="fillerText midFillerText">{text}</div>)}</div>
    );
}