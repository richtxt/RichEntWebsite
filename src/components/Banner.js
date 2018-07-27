import React from 'react';
import YouTubePlayer from './YouTubePlayer';

const bannerStyle = {
    textAlign: 'center',
    height: '500px',
    width: '%100',
    background: '#111'
}
const videoCushion = {
    background: '#000000',
    height: '430px',
    width: '700px',
}

export default class Banner extends React.Component {
render() {
    return (
      <div style={bannerStyle}>
        <div style={videoCushion}>
            <header>
                <h1>Night Flight</h1>
            </header>
            <YouTubePlayer/>
        </div>
      </div>
    );
  }
}