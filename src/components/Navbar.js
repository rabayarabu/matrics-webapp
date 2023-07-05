import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = () => (
  <header>
    <nav className="container d-flex-space-be">
      <div className="logo"><NavLink to="/">CurrencyList</NavLink></div>
    </nav>
  </header>
);

export default NavMenu;
