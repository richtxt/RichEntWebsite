import React from 'react';
import YouTubePlayer from './YouTubePlayer';

const bannerStyle = {
    textAlign: 'center',
    height: '500px',
    width: '100%',
    background: '#111',
    paddingTop: '0px',
    margin: '0px',
    position: 'fixed'
}
const videoCushion = {
    background: '#000000',
    height: '500px',
    width: '700px',
    margin: '0 auto',
    top: '60px'
}

export default class Banner extends React.Component {
render() {
    return (
      <div style={bannerStyle}>
        <div style={videoCushion}>
            <YouTubePlayer/>
        </div>
      </div>
    );
  }
}