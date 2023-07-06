import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = () => (
  <header>
    <nav className="container d-flex-space-be">
      <div className="logo"><NavLink to="/">CRIPTOCURRENCY</NavLink></div>
      <button type="button" className="btnRegister">Register</button>
    </nav>
  </header>
);

export default NavMenu;
