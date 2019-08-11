import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
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
                <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#home">
                        <i className="icon-up-open" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
