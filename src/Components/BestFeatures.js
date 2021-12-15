import React, { Component } from 'react'
import '../assets/css/style.css'
import '../assets/css/flex-slider.css'
import '../assets/css/owl.css'
import logo from "./youthworld.png" 
export default class BestFeatures extends Component {
    render() {
        return (
            <>
             <div className="best-features">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
            <h2> About Youth  <em style={{color:"#f33f3f"}}>World</em>  <i className="fa fa-shopping-bag"></i></h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="left-content">
              <h4>Looking for the best products?</h4>
              <p>
                <a
                  rel="nofollow"
                  href="https://templatemo.com/tm-546-sixteen-clothing"
                  target="_parent"
                  >This template</a
                >
                is free to use for your business websites. However, you have no
                permission to redistribute the downloadable ZIP file on any
                template collection website.
                <a rel="nofollow" href="https://templatemo.com/contact"
                  >Contact us</a
                >
                for more info.
              </p>
              <ul className="featured-list">
                <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                <li><a href="#">Consectetur an adipisicing elit</a></li>
                <li><a href="#">It aquecorporis nulla aspernatur</a></li>
                <li><a href="#">Corporis, omnis doloremque</a></li>
                <li><a href="#">Non cum id reprehenderit</a></li>
              </ul>
              <a href="about.html" className="filled-button">Read More</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-image">
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

   
                
            </>
        )
    }
}
