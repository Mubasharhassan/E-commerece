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
} from "reactstrap";

const EightCards = () => {
  return (
    <>
      <div className="container all-div-margn justify-content-center align-items-center main-cards-detail">
        <div className="">
          <div className="hot-ptoduct-item">
            <h1>Hot Products</h1>
            <p>See What Everyone Is Shopping from Andshop E-Commerce</p>
            <ul className="d-flex list-hot-product justify-content-center align-items-center m-0">
              <li className="listitem2">
                <u>NEW ARRIVAL</u>
              </li>
              <li className="listitem1">TRENDING</li>
              <li className="listitem1">BEST SELLERS</li>
              <li className="listitem1">FEATURED</li>
              <li className="listitem1">ON SALL</li>
            </ul>
          </div>
          <div className="d-flex main-cards-detail">
            <div className="hot-product-card ">
              <Card className="back-img-card1 ">
                <div className="d-flex justify-content-between">
                  <div className="ml-2">
                    <Badge color="secondary">Trending</Badge>
                  </div>
                  <div className="mr-2">
                    <AiOutlineHeart />
                  </div>
                </div>
              </Card>
              <div className="dress-name">
                <CardBody>
                  <CardTitle tag="h5">Green Dress For Women</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    $38.00
                  </CardSubtitle>
                </CardBody>
              </div>
            </div>

            <div className="hot-product-card  ">
              <Card className="back-img-card2 ">
                <div className="d-flex justify-content-between">
                  <div className="ml-2">
                    <Badge color="primary">45% OFF</Badge>
                  </div>
                  <div className="mr-2">
                    <AiOutlineHeart />
                  </div>
                </div>
              </Card>
              <div className="dress-name">
                <CardBody>
                  <CardTitle tag="h5">T-shirt For men</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    $72.00
                  </CardSubtitle>
                </CardBody>
              </div>
            </div>
            <div className="hot-product-card  ">
              <Card className="back-img-card3">
                <div className="d-flex justify-content-between">
                  <div className="ml-2">
                    <Badge color="secondary">50% OFF</Badge>
                  </div>
                  <div className="mr-2">
                    <AiOutlineHeart />
                  </div>
                </div>
              </Card>
              <div className="dress-name">
                <CardBody>
                  <CardTitle tag="h5">V-Neck Dress</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    $34.00
                  </CardSubtitle>
                </CardBody>
              </div>
            </div>
            <div className="hot-product-card ">
              <Card className="back-img-card4 ">
                <div className="d-flex justify-content-between">
                  <div className="ml-2">
                    <Badge color="warning">HOT</Badge>
                  </div>
                  <div className="mr-2">
                    <AiOutlineHeart />
                  </div>
                </div>
              </Card>
              <div className="dress-name">
                <CardBody>
                  <CardTitle tag="h5">Maxi Dress</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    $43.00
                  </CardSubtitle>
                </CardBody>
              </div>
            </div>
            <div className="hot-product-card ">
              <Card className="back-img-card5">
                <div className="d-flex justify-content-between">
                  <div className="ml-2">
                    <Badge color="secondary">Upcoming</Badge>
                  </div>
                  <div className="mr-2">
                    <AiOutlineHeart />
                  </div>
                </div>
              </Card>
              <div className="dress-name">
                <CardBody>
                  <CardTitle tag="h5">Fit-Flare Dress</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    $52.00
                  </CardSubtitle>
                </CardBody>
              </div>
            </div>
            <div className="hot-product-card ">
              <Card className="back-img-card6">
                <div className="d-flex justify-content-between">
                  <div className="ml-2">
                    <Badge color="secondary">Upcoming</Badge>
                  </div>
                  <div className="mr-2">
                    <AiOutlineHeart />
                  </div>
                </div>
              </Card>
              <div className="dress-name">
                <CardBody>
                  <CardTitle tag="h5">Midi Dress</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    $15.00
                  </CardSubtitle>
                </CardBody>
              </div>
            </div>
            <div className="hot-product-card ">
              <Card className="back-img-card7">
                <div className="d-flex justify-content-between">
                  <div className="ml-2">
                    <Badge color="secondary">Trending</Badge>
                  </div>
                  <div className="mr-2">
                    <AiOutlineHeart />
                  </div>
                </div>
              </Card>
              <div className="dress-name">
                <CardBody>
                  <CardTitle tag="h5">Tulip Dress</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    $41.00
                  </CardSubtitle>
                </CardBody>
              </div>
            </div>
            <div className="hot-product-card ">
              <Card className="back-img-card8">
                <div className="d-flex justify-content-between">
                  <div className="ml-2">
                    <Badge color="warning">Best Selling</Badge>
                  </div>
                  <div className="mr-2">
                    <AiOutlineHeart />
                  </div>
                </div>
              </Card>
              <div className="dress-name">
                <CardBody>
                  <CardTitle tag="h5">Skater Dress</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    $21.00
                  </CardSubtitle>
                </CardBody>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EightCards;
