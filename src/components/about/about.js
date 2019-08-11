import React from "react";

const About = () => {
    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>
                        I am a recent Master of Software Engineering graduate from the University of Calgary. In
                        particular, I have developed a wide variety skills in web development and am interested in
                        algorithms and data structures.
                    </p>
                    <p>Some of my interest include:</p>
                    <ul>
                        <li>DIY Projects</li>
                        <li>Video Games (Monster Hunter, Fire Emblem)</li>
                        <li>Origami</li>
                        <li>Competitive Programming</li>
                        <li>Movies</li>
                        <li>Traveling</li>
                    </ul>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>Edward Song</span>
                                <br />
                                <span>(403) 966-5589</span>
                                <br />
                                <span>edwardsong05@gmail.com</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a
                                    href="https://drive.google.com/open?id=10kfKBURoeI4ojtLo8C8QUEYzrP8Kfw6M"
                                    className="button"
                                >
                                    <i className="fa fa-download" />
                                    Download Resume
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
