import React from "react";
import { CardText, Card, CardTitle, Button } from "reactstrap";

const HeroPage = () => {
  return (
    <>
      <div className="container-fluid main-cards-detail justify-content-center align-items-center all-div-margn">
        <div className="back-img ">
        <div className="hero-page-detail">
          <h6 className="livefor-text">Live for</h6>
          <h2 className="fashion-text">Fashion</h2>
          <p className="saveupto-text">
            Save up to 50%
          </p>
          <Button className="shopbtn">SHOP NOW</Button>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default HeroPage;
