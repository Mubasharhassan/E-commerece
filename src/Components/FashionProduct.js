import React from "react";
import { CardText, Card, CardTitle, Button } from "reactstrap";

const FashionProduct = () => {
  return (
    <>
      <div className="container-fluid">
        <div class="d-flex align-items-center main-cards-detail">
          <div className="children-div">
            <div className="cards-body">
              <Card body className="text-end my-2 outerwear">
                <div className="cards-detail">
                  <CardTitle tag="h5">Special Title Treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button color="primary">Go somewhere</Button>
                </div>
              </Card>
            </div>
            <div className="cards-body">
              <Card body className="text-end my-2 summer-hot  ">
                <div className="cards-detail">
                  <CardTitle tag="h5">Special Title Treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button color="primary">Go somewhere</Button>
                </div>
              </Card>
            </div>
          </div>
          <div className="children-div">
            <div className="cards-body">
              <Card body className="text-end my-2 selected-offer">
                <div className="cards-detail">
                  <CardTitle tag="h5">Special Title Treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button color="primary">Go somewhere</Button>
                </div>
              </Card>
            </div>
          </div>
          <div className="children-div">
            <div className="cards-body">
              <Card body className="text-end my-2 arrivals">
                <div className="cards-detail">
                  <CardTitle tag="h5">Special Title Treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button color="primary">Go somewhere</Button>
                </div>
              </Card>
            </div>
            <div className="cards-body">
              <Card body className="text-end my-2 hot-offer">
                <div className="cards-detail">
                  <CardTitle tag="h5">Special Title Treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button color="primary">Go somewhere</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FashionProduct;
