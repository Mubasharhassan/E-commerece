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

const TodayDeal = () => {
  return (
    <>
      <div className="container-fluid main-cards-detail d-flex justify-content-between align-items-center all-div-margn">
        <div className="container justify-content-center align-items-center main-cards-detail main-all-div all-div-margn">
          <div className="hot-ptoduct-item">
            <h1 className="m-0 p-0">Today's Deal</h1>
            <p className="m-0 p-0">
              See What Everyone Is Shopping from Andshop E-Commerce Today
            </p>
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
                  <CardTitle tag="h5">Tulip Dress</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    $41.00
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
                  <CardTitle tag="h5">Skater Dress</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    $21.00
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
                  <CardTitle tag="h5">Boho Tops for Girls</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    $46.00
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
                  <CardTitle tag="h5">Skater Dress</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    $74.00
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

export default TodayDeal;
