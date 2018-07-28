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

const hTag = {
    textAlign: 'left',
    fontSize: '20px',
    paddingLeft: '20px',
    color: '#000',
    paddingTop: '15px'
}

const divStyle = {
    width: '100%',
    zIndex: 10,
    position: 'fixed'
}

const imgStyle = {
    height: '60px',
    display: 'block',
    mariginLeft: 'auto',
    marginRight: 'auto',
    verticalAligh: 'center'
}
export default class NavigationBar extends React.Component {
render() {
    return (
      <div style={divStyle}>
      <header style={headerStyle}>
          <h1 style={hTag}>Rich Entertainment</h1>
          <img style={imgStyle} src={require('../img/rent.png')}/>
      </header>
      </div>
    );
  }
}