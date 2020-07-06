import React from 'react';

function AppLink(props) {
  return (
    <a onClick={props.clickFunction} className="App-link" href={props.linkAddress} target="_blank" rel="noopener noreferrer"><button>{props.linkText}</button></a>
  )
}

export default AppLink;
