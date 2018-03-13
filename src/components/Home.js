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
            <h1 className='styled'>STYLED</h1>
            <h3 className='description'>DECOR STYLIST/CURATOR</h3>
          </div>

          <div className='links'>
          <Link to="/" className='leggo'> PORTFOLIO | </Link>
          <Link to="/AboutKendall" className='leggo'> ABOUT KENDALL | </Link>
          <Link to="/Services" className='leggo'> SERVICES |</Link>
          <Link to="/Testimonials" className='leggo'> TESTIMONIALS |</Link>
          <Link to="/Contact" className='leggo'> CONTACT </Link>
          </div>

        </div>

        <div className='make-em-look'>
          <img className='portfolio' src={require('../assets/living-room.JPG')} />
          <img className='portfolio' src={require('../assets/bar.JPG')} />
          <img className='portfolio' src={require('../assets/eat.jpg')} />
          <img className='portfolio' src={require('../assets/new-living.jpg')} />
          <img className='portfolio' src={require('../assets/basement.jpg')} />


          <img className='portfolio' src={require('../assets/books.JPG')} />
          <img className='portfolio' src={require('../assets/island.JPG')} />
          <img className='portfolio' src={require('../assets/sink.JPG')} />
          <img className='portfolio' src={require('../assets/lamp.jpg')} />
          <img className='portfolio' src={require('../assets/room-lamp.jpg')} />
          <img className='portfolio' src={require('../assets/bedroom-closeup.jpg')} />
          <img className='portfolio' src={require('../assets/bedroom-front.jpg')} />
          <img className='portfolio' src={require('../assets/bedroom-left.jpg')} />
          <img className='portfolio' src={require('../assets/books-tv.jpg')} />
          <img className='portfolio' src={require('../assets/couch.jpg')} />
        </div>

      </div>
    )
  }
}
