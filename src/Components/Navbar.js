import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import { FaShopify } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <header class="header">
          <img src="/logo.jpeg" alt="trilo logo" class="logo" />
          <form action="#" class="search">
            <ul className="d-flex listitem">
              <li className="m-5">Home</li>
              <li className="m-5">Features</li>
              <li className="m-5">Blog</li>
              <li className="m-5">Shop</li>
              <li className="m-5">Pages</li>
            </ul>
          </form>
          <nav className="user-nav">
            <div className="user-nav__icon-box">
              <svg className="user-nav__icon">
                <AiTwotoneHeart />
              </svg>
              <span className="user-nav__notification">7</span>
            </div>
            <div className="user-nav__icon-box">
              <svg className="user-nav__icon">
                <FaShopify />
              </svg>
              <span className="user-nav__notification">13</span>
            </div>
            <div className="user-nav__icon-box">
              <BiSearchAlt2 />
            </div>
            <div className="user-nav__icon-box">
              <GiHamburgerMenu />
            </div>
          </nav>
        </header>
      </div>
      ;
    </>
  );
};

export default Navbar;
