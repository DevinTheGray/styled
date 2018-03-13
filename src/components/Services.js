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





    <div className="box">
        <h5 className="intro">
          <p>After seeing a client’s space, I can better understand your needs.</p>
        </h5>

        <div className="intro-dos">

<ul>
            <li>Do you have individual pieces you love in your home, but don’t know how to make them work together?</li>
              <p>I can help by styling these pieces to work in your space as well as incorporating unique pieces.</p>

          <li> Are you unsure of your design style?</li>
          <div className="dunno">  <p>  I can help guide you by seeing your space and understanding who you are and how you want to reflect your personality in your home.</p></div>






           <li>Whether you are building a new home or renovating your current space, I can help with design choices to fit your style for a timeless design.</li>

 <li>I do have a small team to assist me with painting, handyman projects, and custom crafted pieces to make your space the ideal refuge.</li>

</ul>
       </div>
     </div>



      </div>
    )
  }
}
