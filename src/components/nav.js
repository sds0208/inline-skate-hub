import React, { useState } from 'react';
import MenuItems from './menu-items';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import {useTransition, animated} from 'react-spring'
import { Link } from 'react-router-dom';

function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const fadeIn = useTransition(showMenu, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: .77 },
    leave: { opacity: 0 },
  });

  const slideDown = useTransition(showMenu, null, {
    from: { position: 'absolute', top: '-300px' },
    enter: { top: '0' },
    leave: { top: '-300px' },
  });

  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} className="hamburger"/>
      {
        slideDown.map(({ item, key, props }) =>
          item && <animated.div key={key} style={props} className="menu">
            <div><FontAwesomeIcon icon={faTimes} onClick={() => setShowMenu(!showMenu)} className="close-menu"/></div>
            <MenuItems closeMenu={() => setShowMenu(false)}/>
          </animated.div>
        )
      }
      {
        fadeIn.map(({ item, key, props }) =>
          item && <animated.div key={key} style={props} className="menu-background" onClick={() => setShowMenu(false)}></animated.div>
        )
      }
    </nav>
  )
}

export default Nav;
