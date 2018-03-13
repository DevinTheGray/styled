import React, { Component } from 'react';
import {Header} from 'react';
import '../App.css'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


export default class Home extends Component {
  render(){
    return(
      <div className='all'>
        <div className='Nav-Bar'>

          <div className='logo'>
            <img className='house' src={require('../assets/house.png')} />
            <h3 className='styled'>STYLED</h3>
            <h6 className='description'>DECOR STYLIST/CURATOR</h6>
          </div>

          <div className='links'>
          <Link to="/" className='leggo'> PORTFOLIO | </Link>
          <Link to="/AboutKendall" className='leggo'> ABOUT KENDALL | </Link>
          <Link to="/Services" className='leggo'> SERVICES |</Link>
          <Link to="/Testimonials" className='leggo'> TESTIMONIALS |</Link>
          <Link to="/Contact" className='leggo'> CONTACT </Link>
          </div>

        </div>




      </div>
    )
  }
}
