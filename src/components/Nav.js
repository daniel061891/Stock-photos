import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return <nav>
      <h1>Stock Photos</h1>
      <ul>
          <li><Link to="/">首頁</Link></li>
          <li><Link to="/about">關於</Link></li>
      </ul>
  </nav>;
};

export default Nav;
