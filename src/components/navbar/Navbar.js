import React from 'react';
import './Navbar.scss';
import Login from '../../pages/authentication/Login';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Navbar = ({cartLen}) => {

  return (
        <ul className='navbar'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About us</Link></li>
            <li><Link to='/help'>Help</Link></li>
            <li><Link to='/cart'>Cart{" "}({cartLen})</Link></li>
            <li><Login /></li>
        </ul>
  )
}

export default Navbar