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



        <div className="info">


        <div className='about-kendall'>

Kendall has been a nester since her very first space to call her own - her college dorm room.

Inheriting the “decorating gene” from her mother who was a single mom on a shoestring budget,

Kendall learned to see the beauty in flea market finds, tag sale items, and alley finds.  As

she evolved into adulthood the mix of inherited items, travel treasures, splurge with budget pieces

have been a part of her decorating passion.

As a “stylist” compared to an interior decorator she tends to skip the design professionals-only showrooms

and does a lot of the hunting in your home, tag sales, flea markets, etsy, etc. With all that in hand she

loves to take a room and refine it through details of making it your own.  This decor style allows your personality to shine through while keeping in mind everyday functionality.

Your home is your sanctuary and should reflect who you are from the very moment someone walks through your door.

Before moving to Colorado in 1996 Kendall studied Fine Arts at the University of Kentucky and received her Bachelor of Fine Arts.

She loves being part of the Stapleton community.  A wife of 20 years, and a mother of two boys -12 and 14.
</div>

        </div>



      </div>
    )
  }
}
