import React from 'react';
import Youtube from 'react-youtube'

class YouTubePlayer extends React.Component {
render() {
    const opts = {
        height: '390px',
        width: '640px',
        autoplay: '1'
    };

    return (
        <Youtube videoId='lITB5u66P-0'
        opts={opts}
        onReady={this._onReady}
        />
    );
  }

  _onReady(event){
    event.target.pauseVideo();
  }
}

export default YouTubePlayer;
