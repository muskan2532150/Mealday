import React from 'react'
import { Link } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import {AiFillSetting} from 'react-icons/ai';


export const Navbar = () => {
  return (
    <nav>
        <Link to='/'></Link>
<div>
<ul>
    <li><FaMicrophone/></li>
    <li><AiFillSetting/></li>
</ul>
</div>

    </nav>
  )
}
