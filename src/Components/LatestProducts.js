import React, { Component } from 'react'
import '../assets/css/style.css'
import { Link } from 'react-router-dom'
import '../assets/css/flex-slider.css'
import '../assets/css/owl.css'
import one from "../assets/images/product_01.jpg"
import two from "../assets/images/product_03.jpg"
import three from "../assets/images/product_04.jpg"
import four from "../assets/images/product_05.jpg"
import five from "../assets/images/product_06.jpg"
import six from "../assets/images/product_02.jpg"
export default class LatestProducts extends Component {
    render() {
        return (
            <div className="latest-products">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-heading">
                    <h2>Latest Products</h2>
                    <Link href="/products"
                      >view all products <i className="fa fa-angle-right"></i
                    ></Link>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="product-item">
                    <Link to="#"><img src={one} alt="" /></Link>
                    <div className="down-content">
                      <a href="#"><h4>Tittle goes here</h4></a>
                      <h6>$25.75</h6>
                      <p>
                        Lorem ipsume dolor sit amet, adipisicing elite. Itaque,
                        corporis nulla aspernatur.
                      </p>
                      <ul className="stars">
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                      <span>Reviews (24)</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="product-item">
                    <a href="#"><img src={six} alt="" /></a>
                    <div className="down-content">
                      <a href="#"><h4>Tittle goes here</h4></a>
                      <h6>$30.25</h6>
                      <p>
                        Lorem ipsume dolor sit amet, adipisicing elite. Itaque,
                        corporis nulla aspernatur.
                      </p>
                      <ul className="stars">
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                      <span>Reviews (21)</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="product-item">
                    <a href="#"><img src={two} alt="" /></a>
                    <div className="down-content">
                      <a href="#"><h4>Tittle goes here</h4></a>
                      <h6>$20.45</h6>
                      <p>
                        Sixteen Clothing is free CSS template provided by TemplateMo.
                      </p>
                      <ul className="stars">
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                      <span>Reviews (36)</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="product-item">
                    <a href="#"><img src={three} alt="" /></a>
                    <div className="down-content">
                      <a href="#"><h4>Tittle goes here</h4></a>
                      <h6>$15.25</h6>
                      <p>
                        Lorem ipsume dolor sit amet, adipisicing elite. Itaque,
                        corporis nulla aspernatur.
                      </p>
                      <ul className="stars">
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                      <span>Reviews (48)</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="product-item">
                    <a href="#"><img src={four} alt="" /></a>
                    <div className="down-content">
                      <a href="#"><h4>Tittle goes here</h4></a>
                      <h6>$12.50</h6>
                      <p>
                        Lorem ipsume dolor sit amet, adipisicing elite. Itaque,
                        corporis nulla aspernatur.
                      </p>
                      <ul className="stars">
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                      <span>Reviews (16)</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="product-item">
                    <a href="#"><img src={five} alt="" /></a>
                    <div className="down-content">
                      <a href="#"><h4>Tittle goes here</h4></a>
                      <h6>$22.50</h6>
                      <p>
                        Lorem ipsume dolor sit amet, adipisicing elite. Itaque,
                        corporis nulla aspernatur.
                      </p>
                      <ul className="stars">
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                      <span>Reviews (32)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
