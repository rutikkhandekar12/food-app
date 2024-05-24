import React from 'react';
import './Navbar.css';
import Login from '../../pages/authentication/Login';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
        <ul className='navbar'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About us</Link></li>
            <li><Link to='/offers'>Offers</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
            <li><Login /></li>
        </ul>
  )
}

export default Navbar