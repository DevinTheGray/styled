import React, { Component } from 'react';
import '../App.css';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import home1 from '../assets/home1.jpg'
import home2 from '../assets/home2.jpg'
import home3 from '../assets/home3.jpg'
import home4 from '../assets/home4.jpeg'


const images= [home1, home2, home3, home4]



export default class Home extends Component {
  constructor(props){
  super(props)
  this.state = {image: home1}

}

  render(){
    setTimeout(() => {
      let i = Math.floor(Math.random() * 4)
      this.setState({image: images[i]})
    } , 3000)



    return(
      <div className='New'>

        <div className='changing-pictures'>
          <img src={this.state.image} className="image"></img>
        </div>
        <div className='Nav-Bar'>
          <div className='name'>
            <h1>STYLED</h1>
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
}
