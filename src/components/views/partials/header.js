import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div id='Header'>
    <span><Link to='/'>Home</Link></span> | <span><Link to='/partnership'>Partnership</Link></span>
  </div>
);

export default Header;
