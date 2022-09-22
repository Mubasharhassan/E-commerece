import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import { FaShopify } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid main-cards-detail justify-content-center align-items-center all-div-margn">
        <header class="header container">
          <img src="/carryshop.png" alt="trilo logo" class="logo" />
          <div className="navbar-detail-div">
            <form action="#" class="search">
              <ul className="d-flex listitem">
                <li className="m-5">Home</li>
                <li className="m-5">Features</li>
                <li className="m-5">Blog</li>
                <li className="m-5">Shop</li>
               
              </ul>
            </form>
          </div>

          <nav className="user-nav">
            <div className="user-nav__icon-box">
              <svg className="user-nav__icon">
                <AiTwotoneHeart className="icon-navbar" />
              </svg>
              <span className="user-nav__notification">7</span>
            </div>
            <div className="user-nav__icon-box">
              <svg className="user-nav__icon">
                <FaShopify className="icon-navbar" />
              </svg>
              <span className="user-nav__notification">13</span>
            </div>
            <div className="user-nav__icon-box">
              <BiSearchAlt2 className="icon-navbar" />
            </div>
            <div className="user-nav__icon-box">
              <GiHamburgerMenu className="icon-navbar" />
            </div>
          </nav>
        </header>
      </div>
      ;
    </>
  );
};

export default Navbar;
