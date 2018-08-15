import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar';
import Banner from '../components/Banner';


class Home extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <Banner/>
      </div>
    );
  }
}

export default Home;
