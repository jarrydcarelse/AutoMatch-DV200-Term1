import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './headerimage.png';
import carImage from './carimage.jpg';
import { useEffect, useState } from "react";
import './App.css'

import axios from "axios";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className="body">
            <div className="header">
                <nav className="topnav">
                    <NavLink to="/" activeclassname="active">Home</NavLink>
                    <NavLink to="/Compare" activeclassname="active">Compare</NavLink>
                    <NavLink to="/Timeline" activeclassname="active">Timeline</NavLink>
                </nav>

                <img className="headerimage" src={image} alt="image" />

                <h1 className="heading">
                    AutoMatch
                </h1>

                <p className="description">
                    Welcome to AutoMatch, your ultimate destination for comparing different cars side-by-side! Our website uses a powerful API to retrieve up-to-date information about the latest vehicles on the market. We understand that choosing the right car can be a daunting task, with so many options available and a vast array of features and specifications to consider. That's why we created AutoMatch, to make your car buying journey as seamless and stress-free as possible.
                    <br></br>
                    <br></br>
                    At AutoMatch, we believe in providing accurate and unbiased information to our users. Our platform allows you to compare two cars across a range of categories, such as price, fuel efficiency, safety features, horsepower, and much more. Our easy-to-use interface helps you quickly find the cars that meet your specific needs and preferences.
                </p>
            </div>

            <div className="section-1">
                <div className="home-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={carImage} alt="Car" className="car-image" />
                            </div>
                            <div className="col-md-6 text">
                                <h2>We can help you find a car for you!</h2>
                                <p>Take a look through our car comparison website. It will give you more information about certain cars. You can use our compare page to decide between two cars that you are thinking about. Our website provides you with important information about the car. This will help you to make an informed decision on your next big purchase. The website is easy to navigate and you should find that it provides you with steps on how to search for cars you are interested in.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="footer">
                    <p className="footerText">AutoMatch © 2023</p>
                </footer>
            </div>
        </div>
    )
}

export default Home;



