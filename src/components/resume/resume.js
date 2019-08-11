import React from "react";

const Resume = () => {
    return (
        <section id="resume">
            {/* Education */}
            <div className="row education">
                <div className="three columns header-col">
                    <h1>
                        <span>Education</span>
                    </h1>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            <h3>Master of Engineering in Software Engineering</h3>
                            <p className="info">
                                University of Calgary <span>•</span> <em className="date">Sept 2018 - Aug 2019</em>
                            </p>
                            <p>Cumulative GPA of 4.0</p>
                        </div>
                    </div>
                    <div className="row item">
                        <div className="twelve columns">
                            <h3>Bachelor of Science in Chemical Engineering</h3>
                            <p className="info">
                                University of Calgary <span>•</span> <em className="date">Sept 2012 - Apr 2017</em>
                            </p>
                            <p>Cumulative GPA of 3.67</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Work */}
            <div className="row work">
                <div className="three columns header-col">
                    <h1>
                        <span>Work</span>
                    </h1>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            <h3>Research Assistant</h3>
                            <p className="info">
                                University of Calgary <span>•</span> <em className="date">Sept 2015 - Aug 2016</em>
                            </p>
                            <p>
                                Tansitioned Laboratory-based research into a commercial product. Developed new operating
                                procedures in the development of a manufacturing process and prototyping, improving
                                prototype success.
                            </p>
                        </div>
                    </div>
                    <div className="row item">
                        <div className="twelve columns">
                            <h3>Chemical Engineering Research Student</h3>
                            <p className="info">
                                Univeristy of Calgary <span>•</span> <em className="date">May 2014 - Aug 2014</em>
                            </p>
                            <p>
                                Utilized ImageJ to optimize the standard of stem cell aggregate sizing. Presented
                                results in the 2014 NSERC CREATE Undergraduate Symposium.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Skills */}
            <div className="row skill">
                <div className="three columns header-col">
                    <h1>
                        <span>Skills</span>
                    </h1>
                </div>
                <div className="nine columns main-col">
                    <p>
                        Through my academic experiences I have gained experience in full stack web development using
                        ReactJS, HTML, CSS, Django, and Rest APIs. I have also gained experience in object-oriented
                        programming fundamentals in Java, C++, and Python. Additionally, from competitive programming I
                        have developed a basic understanding of algorithms and data structures.
                    </p>
                    <div className="bars">
                        <ul className="skills">
                            <li>
                                <span className="bar-expand reactJS" />
                                <em>ReactJS</em>
                            </li>
                            <li>
                                <span className="bar-expand objectOrientedPrinciples" />
                                <em>Object-Oriented Principles</em>
                            </li>
                            <li>
                                <span className="bar-expand restAPI" />
                                <em>Rest API</em>
                            </li>
                            <li>
                                <span className="bar-expand css" />
                                <em>CSS</em>
                            </li>
                            <li>
                                <span className="bar-expand html5" />
                                <em>HTML5</em>
                            </li>
                            <li>
                                <span className="bar-expand algorithms" />
                                <em>Algorithms and Data Structures</em>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
