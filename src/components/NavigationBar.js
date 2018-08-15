import React from 'react';

const headerStyle = {
    height: '60px',
    background: '#000',
    zIndex: 1030,
    width: '100%',
    padding: '0px',
    margin: '0px',
    borderBottom: '3px solid #DAA520',
    borderTop: '1px solid #E5E9EF',
}


const divStyle = {
    width: '100%',
    zIndex: 200,
    position: 'fixed'
}

const imgStyle = {
    height: '60px',
    display: 'block',
    top: 0,
    margin:'auto',
}
export default class NavigationBar extends React.Component {
render() {
    return (
      <div style={divStyle}>
      <header style={headerStyle}>
          <img style={imgStyle} src={require('../img/rent.png')}/>
      </header>
      </div>
    );
  }
}