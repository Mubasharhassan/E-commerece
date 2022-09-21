import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import {
  CardText,
  Card,
  CardTitle,
  Button,
  CardBody,
  CardSubtitle,
  Badge,
  NavLink,
} from "reactstrap";

const LatestBlog = () => {
  return (
    <>
      <div className="container all-div-margn ">
        <div className=" justify-content-center align-items-center main-cards-detail main-all-div">
          <div className="hot-ptoduct-item">
            <h1 className="m-0 p-0">LATEST BLOG</h1>
            <p className="m-0 p-0">
              Mauris luctus nisi sapien tristique dignissim ornare
            </p>
          </div>
          <div className="d-flex main-cards-detail">
            <div className="hot-product-card1 ">
              <Card className=" ">
                <img src="/coupleimg2.jpeg" className="latest-blog-img" />
              </Card>
              <div className="">
                <u className="latest-blog-pera">24 February 2021</u>
                <h4 className="latest-blog-heading">
                  The Luxury Winter Accessory That's Trending Now
                </h4>
                <p className="latest-blog-pera2">
                  Spend one day – morning to evening, with a farmer. Go with him
                  to the farm early morning and see whatever he does all day.
                </p>
                <button className="read-more-button">Read More→</button>
              </div>
            </div>

            <div className="hot-product-card1 ">
              <Card className=" ">
                <img src="/coupleimg7.jpeg" className="latest-blog-img" />
              </Card>
              <div className="">
                <u className="latest-blog-pera">29 Jan 2021</u>
                <h4 className="latest-blog-heading">
                  The Luxury Winter Accessory That's Trending Now
                </h4>
                <p className="latest-blog-pera2">
                  Spend one day – morning to evening, with a farmer. Go with him
                  to the farm early morning and see whatever he does all day.
                </p>
                <button className="read-more-button">Read More→</button>
              </div>
            </div>

            <div className="hot-product-card1 ">
              <Card className=" ">
                <img src="/coupleimg6.jpeg" className="latest-blog-img" />
              </Card>
              <div className="">
                <u className="latest-blog-pera">14 February 2021</u>
                <h4 className="latest-blog-heading">
                  The Luxury Winter Accessory That's Trending Now
                </h4>
                <p className="latest-blog-pera2">
                  Spend one day – morning to evening, with a farmer. Go with him
                  to the farm early morning and see whatever he does all day.
                </p>
                <button className="read-more-button">Read More→</button>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default LatestBlog;
