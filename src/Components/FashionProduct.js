import React from "react";
import { CardText, Card, CardTitle, Button } from "reactstrap";

const FashionProduct = () => {
  return (
    <>
      <div className="container-fluid">
        <div class="d-flex align-items-center flex-wrap-wrap">
          <div className="children-div">
            <div className="cards-body">
              <Card body className="text-center outerwear">
                <div className="cards-detail">
                  <CardTitle tag="h5">Special Title Treatment</CardTitle>
                  <CardText className="outerwear-pera">outerwear</CardText>
                  <h2>New</h2>
                  <CardText className="collection">Collection</CardText>
                  <Button color="">Shop Now</Button>
                </div>
              </Card>
            </div>
            <div className="cards-body">
              <Card body className="text-end my-2 summer-hot">
                <div className="cards-detail">
                  <CardTitle tag="h5">Special Title Treatment</CardTitle>
                  <CardText className="outerwear-pera">outerwear</CardText>
                  <h2>New</h2>
                  <CardText className="collection">Collection</CardText>
                  <Button color="">Shop Now</Button>
                </div>
              </Card>
            </div>
          </div>
          <div className="children-div">
            <div className="cards-body">
              <Card body className="text-end my-2 selected-offer">
                <div className="cards-detail">
                  <CardTitle tag="h5">Special Title Treatment</CardTitle>
                  <CardText className="outerwear-pera">outerwear</CardText>
                  <h2>New</h2>
                  <CardText className="collection">Collection</CardText>
                  <Button color="">Shop Now</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div className="children-div">
          <div className="cards-body">
            <Card body className="text-center outerwear">
              <div className="cards-detail">
                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                <CardText className="outerwear-pera">outerwear</CardText>
                <h2>New</h2>
                <CardText className="collection">Collection</CardText>
                <Button color="">Shop Now</Button>
              </div>
            </Card>
          </div>
          <div className="cards-body">
            <Card body className="text-end my-2 summer-hot">
              <div className="cards-detail">
                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                <CardText className="outerwear-pera">outerwear</CardText>
                <h2>New</h2>
                <CardText className="collection">Collection</CardText>
                <Button color="">Shop Now</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default FashionProduct;
