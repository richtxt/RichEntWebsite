import React from 'react';
import YouTubePlayer from './YouTubePlayer';
import InfoContainer from './InfoContainer'

const bannerStyle = {
    height: '2500px',
    width: '100%',
    background: '#111',
    position: 'absolute',
    marginTop: '60px',
    zIndex: 10
}
const videoCushion = {
    background: '#000000',
    height: '500px',
    width: '100%',
    margin: 'auto',
    top: '60px'
}
const richEnt = {
    fontSize: '100px',
    textAlign: 'center',
    width: '100%',
    height: '0px',
    marginTop: '60px',
    color: '#222'

}

export default class Banner extends React.Component {
render() {
    return (
      <div style={bannerStyle}>
        <div style={videoCushion} className='d-flex align-items-center justify-content-center'>
            <YouTubePlayer/>
        </div>
        <h1 style={richEnt}>RICH ENTERTAINMENT</h1>
        <InfoContainer/>
      </div>
    );
  }
}