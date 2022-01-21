import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import logodark from "../../assets/image/img/logo-all-dark.png";
import logolight from "../../assets/image/img/logo-light.png";
import useWindowPosition from "../Scroll";
import "../../assets/style/Navbar.css";

function Navbar() {
    const [current, setCurrent] = useState("home");
    const [click, setClick] = useState(false);
    const [scrollY, setScrollY] = useState(false);
    const scroll = useWindowPosition()
    useEffect(() => {
        if(scroll > 100 ) {
            setScrollY(true)
        }else {
            setScrollY(false)
        }
    },[scroll])
    const handleClick = () => {
        setClick(!click);
    };
    return (
        <>
            <nav className={scrollY ? "navbar sticky" : "navbar"}>
                <Link to="/" className="navbar-logo">
                    <img className={scrollY ? "logodark" : "logo"} src={logodark}></img>
                    <img className={scrollY ? "logo " : ""}  src={logolight}></img>
                </Link>

                <div className={click ? "navbar-right active" : "navbar-right"} >
                    <div className="navbar-menu">
                        <ul className="menu-items">
                            <li className={current === "home" ? "current" : ""}>
                                <Link
                                    className="nav-links"
                                    onClick={() => setCurrent("home")}
                                    to="/"
                                >
                                   
                                </Link>
                            </li>
                            <li
                                className={
                                    current === "Service" ? "current" : ""
                                }   
                            >
                                <Link
                                    className="nav-links"
                                    onClick={() => setCurrent("Service")}
                                    to="/"
                                >
                                    Service
                                </Link>
                            </li>
                            <li
                                className={current === "About" ? "current" : ""}
                            >
                                <Link
                                    className="nav-links"
                                    onClick={() => setCurrent("About")}
                                    to="/"
                                >
                                    About
                                </Link>
                            </li>
                            <li
                                className={
                                    current === "Portfolio" ? "current" : ""
                                }
                            >
                                <Link
                                    className="nav-links"
                                    onClick={() => setCurrent("Portfolio")}
                                    to="/"
                                >
                                    Portfolio
                                </Link>
                            </li>
                            <li className={current === "Team" ? "current" : ""}>
                                <Link
                                    className="nav-links"
                                    onClick={() => setCurrent("Team")}
                                    to="/"
                                >
                                    Team
                                </Link>
                            </li>
                            <li
                                className={
                                    current === "Testimonial" ? "current" : ""
                                }
                            >
                                <Link
                                    className="nav-links"
                                    onClick={() => setCurrent("Testimonial")}
                                    to="/"
                                >
                                    Testimonial
                                </Link>
                            </li>
                            <li className={current === "Blog" ? "current" : ""}>
                                <Link
                                    className="nav-links"
                                    onClick={() => setCurrent("Blog")}
                                    to="/"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li
                                className={
                                    current === "Contact" ? "current" : ""
                                }
                            >
                                <Link
                                    className="nav-links"
                                    onClick={() => setCurrent("Contact")}
                                    to="/"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-btn">
                        <Link to="/" className="navbar-btn-buynow">
                            BUY NOW
                        </Link>
                    </div>
                    <div className="menu-icons" onClick={handleClick}>
                        {click ? (
                            <IoClose className="menu-icons-click" />
                        ) : (
                            <GiHamburgerMenu className="menu-icons-click" />
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
