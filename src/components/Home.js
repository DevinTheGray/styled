import React, { Component } from 'react';
import '../App.css'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


export default class Home extends Component {
  render(){
    return(
      <div className='Nav-Bar'>
        <div className='logo'>
          <img className='house' src={require('../assets/house.png')} />
          <h1 className='styled'>STYLED</h1>
          <h3 className='description'>CUSTOM HOME DECORATING</h3>
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
    )
  }
}
