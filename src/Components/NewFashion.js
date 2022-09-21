import React from "react";
import { Button } from "reactstrap";

const NewFashion = () => {
  return (
    <>
      <div
        className="container-fluid d-flex mt-5"
        style={{ backgroundColor: " #32333590", paddingRight: "0px" }}
      >
        ``
        <div className="new-fashion-div1 d-flex justify-content-between align-items-center">
          <img src="/rmbackground1.png" className="new-fashion-img" />
          <div className="align-items-center justify-content-center   mr-5  ">
            <h6 className="fashion-detail1 ">TRENDING</h6>
            <h2 className="fashion-detail">New Fashion</h2>
            <p className="fashion-detail">
              Choose your seat in our virtual stadium to support our future
              leaders, entrepreneurs.
            </p>
            <div className="text-center">
              <button className="fashion-detail-btn btn">Shop Now</button>
            </div>
          </div>
        </div>
        <div className="new-fashion-div2 ">
          <img src="/rmbackground1.png" className="new-fashion-img1" />
        </div>
      </div>
    </>
  );
};

export default NewFashion;
