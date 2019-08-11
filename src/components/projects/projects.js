import React from "react";

const Projects = () => {
    return (
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1>Check Out Some of My Projects.</h1>
                    {/* portfolio-wrapper */}
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        <div className="columns portfolio-item">
                            <div className="item-wrap">
                                <a href="https://www.upostwebsite.com/">
                                    <img alt="" src="images/projects/upost.png" />
                                    <div className="overlay">
                                        <div className="portfolio-item-meta">
                                            <h5>UPost</h5>
                                            <p>A digital bulletin board</p>
                                        </div>
                                    </div>
                                    <div className="link-icon">
                                        <i className="icon-plus" />
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* item end */}
                        <div className="columns portfolio-item">
                            <div className="item-wrap">
                                <a href="https://github.com/edwardsong05/competitive-programming">
                                    <img alt="" src="images/projects/competitive-programming.png" />
                                    <div className="overlay">
                                        <div className="portfolio-item-meta">
                                            <h5>Competitive Programming</h5>
                                            <p>Problems from practices and competitions</p>
                                        </div>
                                    </div>
                                    <div className="link-icon">
                                        <i className="icon-plus" />
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* item end */}
                        <div className="columns portfolio-item">
                            <div className="item-wrap">
                                <a href="https://github.com/edwardsong05/ENSF-619-03-04-ClassProject">
                                    <img alt="" src="images/projects/tesla.png" />
                                    <div className="overlay">
                                        <div className="portfolio-item-meta">
                                            <h5>Test Stock Prediction</h5>
                                            <p>Using big data and machine learning techniques</p>
                                        </div>
                                    </div>
                                    <div className="link-icon">
                                        <i className="icon-plus" />
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* item end */}
                    </div>
                    {/* portfolio-wrapper end */}
                </div>
            </div>
        </section>
    );
};

export default Projects;
