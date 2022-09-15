import React from "react";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import { IoMdMail } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import { HiShoppingBag } from "react-icons/hi";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid navBar-main">
        <div className=" header-div flex-wrap-wrap d-flex align-items-center container ">
          <div className=" bg-inf d-flex">
            <div>
              <img src="/logo.jpeg" className="img-logo" />
            </div>
            <nav className="d-flex ml-5 justify-content-between align-items-center flex-wrap-wrap">
              <ul className="d-flex ">
                <li className="listitem">
                  <button className="header__button">Home ⌄</button>
                </li>
                <li className="listitem">
                  <button className="header__button">Shop ⌄</button>
                </li>
                <li className="listitem">
                  <button className="header__button">Feature ⌄</button>
                </li>
                <li className="listitem">
                  <button className="header__button">Blog ⌄</button>
                </li>
                <li className="listitem">
                  <button className="header__button">Pages ⌄</button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="nav-icon">
            <Stack
              className=""
              spacing={4}
              direction="row"
              sx={{ color: "action.active" }}
            >
              <Badge color="secondary" badgeContent={4} className="badge-set">
                <IoMdMail className="badge-icon" />
              </Badge>
              <Badge color="secondary" badgeContent={3} className="badge-set">
                <HiShoppingBag className="badge-icon" />
              </Badge>
              <Badge className="badge-set">
                <BiSearch className="badge-icon" />
              </Badge>
              <Badge className="badge-set">
                <MdMenu className="badge-icon" />
              </Badge>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
