import React from "react";
import { CardText, Card, CardTitle, Button } from "reactstrap";

const FashionProduct = () => {
  return (
    <>
      <div className="container-fluid">
        <div class="d-flex align-items-center customclass">
          <div className="children-div">
            <Card body className="text-center outerwear">
              <CardTitle tag="h5">Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button color="primary">Go somewhere</Button>
            </Card>
            <Card body className="text-end my-2 arrivals">
              <CardTitle tag="h5">Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button color="primary">Go somewhere</Button>
            </Card>
          </div>
          <div className="children-div">
            <Card body className="text-end my-2 hot">
              <CardTitle tag="h5">Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button color="primary">Go somewhere</Button>
            </Card>
          </div>
          <div className="children-div">
            <Card body className="text-end my-2 arrivals">
              <CardTitle tag="h5">Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button color="primary">Go somewhere</Button>
            </Card>
            <Card body className="text-end my-2 outerwear">
              <CardTitle tag="h5">Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button color="primary">Go somewhere</Button>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default FashionProduct;
