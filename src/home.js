import React, {Component} from "react";
import './home.css';
import image from './download.png';
import {Link} from "react-router-dom";
import Search from './search';
import AppsIcon from "@material-ui/icons/Apps";
import {Avatar} from "@material-ui/core";
class Home extends Component{
  render() {
      return (
    <div className = 'home'>
      <div className = 'home_header'>
        <div className = 'home_headerleft'>
			<Link to = '/about'>About</Link>
			<Link to = '/store'>Store</Link>
        </div>
        <div className = 'home_headerright'>
			<Link to = '/gmail'>gmail</Link>
			<Link to = '/images'>images</Link>
        <AppsIcon/>
        <Avatar/>
        </div>
      </div>
      <div className = 'home_body'>
        <img src = {image} alt='google'
        />
      </div>
      <div className ="home_inputcontainer">
      <Search/>
      </div>
    </div>
  );
} }

export default Home
