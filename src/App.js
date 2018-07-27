import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import Banner from './components/Banner';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar bgcolor='#000'/>
        <Banner />
      </div>
    );
  }
}

export default App;
