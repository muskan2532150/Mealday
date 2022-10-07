import React from 'react';
import { Link } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';

const Navbar = () => (
  <nav>
    <Link to="/" />
    <div>
      <ul>
        <li><FaMicrophone /></li>
        <li><AiFillSetting /></li>
      </ul>
    </div>

  </nav>
);

export default Navbar;
