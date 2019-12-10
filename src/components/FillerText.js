import React, { Component } from 'react';
class FillerText extends Component {
    state = {}
    render() {
        return (<div className="fillerText"> {this.props.text}</div>);
    }
}

export default FillerText;