import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";
import "../styles/header.scss";

export const Header: React.FunctionComponent = () => {
    const [openNavBar, setOpenNavBar] = React.useState<boolean>(false);
    
    return (
      <div>
        <nav className="navbar is-black" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a id="navbar-img-logo" 
                    className="navbar-item" 
                    href="/">
                    <img src={Logo} width="112" height="28" alt="logo-img"/>
                </a>
                <div
                    role="button" 
                    className={`navbar-burger ${openNavBar ? "is-active": ""}`} 
                    aria-label="menu" 
                    aria-expanded="false" 
                    data-target="navbarMain"
                    onClick={() => setOpenNavBar(!openNavBar)}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div>
            
            <div 
                id="navbarMain" 
                className={`navbar-menu ${openNavBar ? "is-active" : ""}`}
            >
                <div className="navbar-end">
                    <Link 
                        to="/" 
                        className="navbar-item"
                        onClick={() => setOpenNavBar(false)}
                    >
                        Home
                    </Link>

                    <Link 
                        to="/services" 
                        className="navbar-item" 
                        onClick={() => setOpenNavBar(false)}
                    >
                        Services
                    </Link>

                    <Link 
                        to="/portfolio" 
                        className="navbar-item" 
                        onClick={() => setOpenNavBar(false)}
                    >
                        Portfolio
                    </Link>

                    <Link 
                        to="/contact" 
                        className="navbar-item" 
                        onClick={() => setOpenNavBar(false)}
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
      </div>
    );
};
  