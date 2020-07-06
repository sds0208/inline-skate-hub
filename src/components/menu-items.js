import React from 'react';
import { Link } from 'react-router-dom';

function MenuItems(props) {
  return <div className="MenuItems">
    <Link to="/about" onClick={props.closeMenu} className="menu-item">About</Link>
    <Link to="/shops" onClick={props.closeMenu} className="menu-item">Where to Shop</Link>
    <Link to="/skate-weather" onClick={props.closeMenu} className="menu-item">Should I Skate Today?</Link>
    <Link to="/learning" onClick={props.closeMenu} className="menu-item">Learning Center</Link>
  </div>
}

export default MenuItems;
