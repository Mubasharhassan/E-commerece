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
      <div className="container">
        <div className="">
          <div className="hot-ptoduct-item">
            <h1>Hot Products</h1>
            <p>See What Everyone Is Shopping from Andshop E-Commerce</p>
            <ul className="d-flex list-hot-product listitem">
              <li>NEW ARRIVAL</li>
              <li>TRENDING</li>
              <li>BEST SELLERS</li>
              <li>FEATURED</li>
              <li>ON SALL</li>
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
                  <CardTitle tag="h5">Green Dress For Women</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    $38.00
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
                  <CardTitle tag="h5">Green Dress For Women</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    $38.00
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
                  <CardTitle tag="h5">Green Dress For Women</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    $38.00
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
                  <CardTitle tag="h5">Green Dress For Women</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    $38.00
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
                  <CardTitle tag="h5">Green Dress For Women</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    $38.00
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
                  <CardTitle tag="h5">Green Dress For Women</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    $38.00
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
                  <CardTitle tag="h5">Green Dress For Women</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    $38.00
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
