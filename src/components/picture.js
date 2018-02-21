import React, { Component } from 'react';
import '../App.css';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
//
//
// import home1 from '../assets/bar.JPG'
// import home2 from '../assets/bedroom-front.jpg'
// import home3 from '../assets/books-tv.jpg'
// import home4 from '../assets/books.JPG'
// import home5 from '../assets/couch.jpg'
// import home6 from '../assets/eat.jpg'
// import home7 from '../assets/lamp.jpg'
// import home8 from '../assets/living-room.JPG'
// import home9 from '../assets/room-lamp.jpg'
// import home10 from '../assets/sink.JPG'
//
//
//
//
//
//
//
//
// const images= [home1, home2, home3, home4, home5, home6, home7, home8, home9, home10]



export default class Home extends Component {
  constructor(props){
  super(props)
//   this.state = {image: home1}
//
// }
//
//   render(){
//     setTimeout(() => {
//       let i = Math.floor(Math.random() * 4)
//       this.setState({image: images[i]})
//     } , 3000)



    return(
      <div className='New'>

        {/* <div className='changing-pictures'>
          <img src={this.state.image} className="image"></img>
        </div> */}
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
