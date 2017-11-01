import React, { Component } from 'react';
import '../App.css'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


export default class Header extends Component {
  render(){
    return(
      <div className='page-header '>
        <div className='header'>

        <div className='both'>
          

        <div className='name'>
          <h1>STYLED</h1>
        </div>
      </div>
        <div className='links'>
          <Link to="/" className='leggo'> Home </Link>
          <Link to="/AboutKendall" className='leggo'> About Me </Link>
          <Link to="/Portfolio" className='leggo'> Portfolio </Link>
          <Link to="/Services" className='leggo'> Services </Link>
          <Link to="/Testimonials" className='leggo'> Testimonials </Link>
          <Link to="/Contact" className='leggo'> Contact Me </Link>
        </div>


        </div>
        </div>

    )
  }
};
