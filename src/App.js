import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import Banner from './components/Banner';
import Home from './pages/Home'
import { ParallaxProvider } from 'react-scroll-parallax';


class App extends Component {
  render() {
    return (
      <div className="App">
      <ParallaxProvider>
        <Home/>
      </ParallaxProvider>
      </div>
    );
  }
}

export default App;
