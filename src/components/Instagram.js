import InstagramEmbed from "react-instagram-embed"
import React, { Component } from 'react';

class Instagram extends Component {
    state = {}
    render() {
        return (
            <div className="introTextContainer scroll-insta">
                <div className="instaContainer">
                    <InstagramEmbed
                        url="https://www.instagram.com/p/B6XokuXpjaS/"
                        maxWidth={320}
                        hideCaption={false}
                        containerTagName="div"
                        protocol=""
                        injectScript
                        onLoading={() => { }}
                        onSuccess={() => { }}
                        onAfterRender={() => { }}
                        onFailure={() => { }}
                    />
                </div>
            </div>
        );
    }
}

export default Instagram;

