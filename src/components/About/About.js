import React from "react";
import { Link } from "react-router-dom";
import about from "../../assets/image/img/about-3.jpg";
import "../../assets/style/About.css";
function About() {
    return (
        <div className="about">
            <div className="container">
                <img src={about}></img>
                <div className="about-inner">
                    <div className="section-title">
                        <h3 className="title">About Us</h3>
                        <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered <Link to="/" className="descripsion">alteration</Link>
                            in some form, by injected humour, or randomised
                            words which dont look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum,
                        </p>
                    </div>
                    <div className="section-title-bottom">
                        <div className="section-title-bottom-right">
                            <h5 className="title">Who we are</h5>
                            <p>
                                There are many vtions of passages of Lorem Ipsum
                                available, but the majority have suffered.
                            </p>
                        </div>
                        <div className="section-title-bottom-right">
                            <h5 className="title">Who we are</h5>
                            <p>
                                There are many vtions of passages of Lorem Ipsum
                                available, but the majority have suffered.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
