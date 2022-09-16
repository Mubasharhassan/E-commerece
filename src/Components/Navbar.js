import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <header class="header">
          <img src="/logo.jpeg" alt="trilo logo" class="logo" />
          <form action="#" class="search">
            <ul className="d-flex listitem">
              <li>Home</li>
              <li>Features</li>
              <li>Blog</li>
              <li>Shop</li>
              <li>Pages</li>
            </ul>
          </form>
          <nav className="user-nav">
            <div className="user-nav__icon-box">
              <svg className="user-nav__icon">
                <img src="" />
              </svg>
              <span className="user-nav__notification">7</span>
            </div>
            <div className="user-nav__icon-box">
              <svg className="user-nav__icon">
                <img src="/CSS/img/icons8-chat-25.png" />
              </svg>
              <span className="user-nav__notification">13</span>
            </div>
            <div className="user-nav__user">
              <img
                src="/CSS/img/Screenshot_20220422-210407_Gallery.jpg"
                alt=""
                className="user-nav__user-photo"
              />
              <span className="user-nav__user-name">Mubi</span>
            </div>
          </nav>
        </header>
      </div>
      ;
    </>
  );
};

export default Navbar;
