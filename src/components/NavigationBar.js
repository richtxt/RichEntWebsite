import React from 'react';

const headerStyle = {
    height: '80px',
    background: '#FFF',
    zIndex: 10,
    width: '%100',
    color: '#A0A0A0'
}

const hTag = {
    textAlign: 'left',
    fontSize: '20px',
    paddingLeft: '20px',
    verticalAlign: 'middle',
    lineHeight: '80px'
}

export default class NavigationBar extends React.Component {
render() {
    return (
      <div>
      <header style={headerStyle}>
          <h1 style={hTag}>Rich Entertainment</h1>
      </header>
      </div>
    );
  }
}