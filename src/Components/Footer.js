import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/style.css'
import './contact.css'

export default class Footer extends Component {
    render() {
        return (
          <>
           <div class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="footer-widget">
                            <h2>Get in Touch</h2>
                            <div class="contact-info">
                                <p><i class="fa fa-map-marker"></i>18th street, No 4 mwish, section 3,Nairobi, Kenya</p>
                                <p><i class="fa fa-envelope"></i>youth.world@gmail.com</p>
                                <p><i class="fa fa-phone"></i>+254795536280</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6">
                        <div class="footer-widget">
                            <h2>Follow Us</h2>
                            <div class="contact-info">
                                <div class="social">
                                    <a href=""><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="footer-widget">
                            <h2>Company Info</h2>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & Condition</a></li>
                            </ul>
                        </div>
                    </div>

                  
                </div>
                
           
            </div>
        </div>

        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 copyright ">
                        <p>Copyright &copy; <a href="https://www.instagram.com/salmamoha_ke/">Salma</a>. All Rights Reserved</p>
                    </div>

                </div>
            </div>
        </div>
        
    
          </>
           
        )
    }
}
