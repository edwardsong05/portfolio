import React from "react";

const Header = () => {
    return (
        <header id="home">
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                    Show navigation
                </a>
                <a className="mobile-btn" href="#" title="Hide navigation">
                    Hide navigation
                </a>
                <ul id="nav" className="nav">
                    <li className="current">
                        <a className="smoothscroll" href="#home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#resume">
                            Resume
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#portfolio">
                            Projects
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">I am Edward Song.</h1>
                    <h3>
                        I am a recent <span>Master of Software Engineering Graduate</span> from the{" "}
                        <span>University of Calgary</span>. Let's{" "}
                        <a className="smoothscroll" href="#about">
                            start scrolling
                        </a>{" "}
                        and learn more{" "}
                        <a className="smoothscroll" href="#about">
                            about me
                        </a>
                        .
                    </h3>
                    <hr />
                    <ul className="social">
                        <li>
                            <a href="https://www.linkedin.com/in/songedward">
                                <i className="fa fa-linkedin" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/edwardsong05">
                                <i className="fa fa-github" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/phailsniper">
                                <i className="fa fa-twitter" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="scrolldown">
                <a className="smoothscroll" href="#about">
                    <i className="icon-down-circle" />
                </a>
            </p>
        </header>
    );
};

export default Header;
