import React from "react";
import { IoMdGitCompare } from "react-icons/io";
import { BiLockAlt } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div className="container-fluid header-main all-div-margn">
        <div className="container ">
          <div className=" header-div main-cards-detail d-flex justify-content-between align-items-center mt-3 ml-4 mr-4">
            <div className="header-right">
              <p className="collection">
                Special collection already available.
                <span className="readmore">Read more</span>
              </p>
            </div>
            <div className="header-left">
              <button className="header__button">
                <IoMdGitCompare /> Compare
              </button>
              <button className="header__button">
                {" "}
                <BsFillPersonFill />
                Login
              </button>
              <button className="header__button">
                {" "}
                <BiLockAlt /> Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
