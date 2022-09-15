import React from "react";

const FashionProduct = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="d-flex">
            <div className="bg-info flex-1">
              <div className="outerwear">
                <h2 className="livefor ">Live For </h2>
                <h1>e</h1>
                {/* <h1 className="fashion">Fashion</h1> */}
                {/* <p className="saveupto">Save Up To 50%</p> */}
                {/* <button className="shopbtn">Shop Now</button> */}
              </div>
              <div className="summerwear">
                <h2 className="livefor ">Live For </h2>
                {/* <h1 className="fashion">Fashion</h1>
                <p className="saveupto">Save Up To 50%</p>
                <button className="shopbtn">Shop Now</button> */}
              </div>
            </div>
            <div className="bg-primary flex-1">
              <div className="offer">
                <p className="livefor ">Live For </p>
                <h3 className="fashion">Fashion</h3>
                {/* <p className="saveupto">Save Up To 50%</p> */}
                <button className="shopbtn">Shop Now</button>
              </div>
            </div>
            <div className="bg-success flex-1">
              <div className="arrivals">
                <h2 className="livefor ">Live For </h2>
                {/* <h1 className="fashion">Fashion</h1>
                <p className="saveupto">Save Up To 50%</p>
                <button className="shopbtn">Shop Now</button> */}
              </div>
              <div className="hot">
                <h2 className="livefor ">Live For </h2>
                {/* <h1 className="fashion">Fashion</h1>
                <p className="saveupto">Save Up To 50%</p>
                <button className="shopbtn">Shop Now</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FashionProduct;
