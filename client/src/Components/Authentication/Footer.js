import React from "react";
import facebook from "../../Footericons/facebook.svg";
import instagram from "../../Footericons/instagram.svg";
import linkedin from "../../Footericons/linkedin.svg";

export default function () {
  return (
    <div
      className="container-fluid"
      style={{ position: "absolute", top: "763px", background: "#F8F9FF" }}
    >
      <div className="row">
        <div className="col-12">
          <p
            style={{
              color: "#5861AE",
              fontSize: "24px",
              textAlign: "center",
            }}
          >
            Now Refer & Earn ₹500 for every referral*
          </p>
          <p
            style={{
              color: "#3D3D43",
              fontSize: "10px",
              marginTop: "-15px",
              textAlign: "center",
            }}
          >
            * Terms and conditions will be applied
          </p>
        </div>
      </div>
      <div
        className="row"
        style={{
          position: "absolute",
          top: "68px",
          height: "197px",
        }}
      >
        <img src="./images/Footer.jpg" class="float-start"></img>
        <div className="row" style={{ marginTop: "-160px" }}>
          <div className="col-5">
            <div className="d-flex flex-column">
              <div className="p-1 justify-content-end ">
                <p
                  style={{
                    textAlign: "center",
                    width: "max-content",
                    position: "relative",
                    left: "155px",
                    fontSize: "18px",
                    color: "#182838",
                  }}
                >
                  ABOUT US
                </p>
              </div>
              <div className="p-1 justify-content-end">
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "14px",
                    color: "#3D3D43",
                  }}
                >
                  {" "}
                  Doorstep Wash & Dryclean Service
                </p>
              </div>
            </div>
          </div>
          <div className="col-2 ">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column">
                <div
                  className="p-1"
                  style={{ fontSize: "16px", color: "#182838" }}
                >
                  Home
                </div>
                <div
                  className="p-1"
                  style={{ fontSize: "14px", color: "#182838" }}
                >
                  Sign In
                </div>
                <div
                  className="p-1"
                  style={{ fontSize: "14px", color: "#182838" }}
                >
                  Register
                </div>
              </div>
              <div className="d-flex flex-column  ">
                <div
                  className="p-1  "
                  style={{ fontSize: "16px", color: "#182838" }}
                >
                  Pricing
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 ">
            <div className="d-flex justify-content-around">
              <div className="d-flex flex-column">
                <div
                  className="p-1"
                  style={{ fontSize: "16px", color: "#182838" }}
                >
                  Career
                </div>
                <div
                  className="p-1"
                  style={{ fontSize: "14px", color: "#182838" }}
                >
                  Blogs
                </div>
                <div
                  className="p-1"
                  style={{ fontSize: "14px", color: "#182838" }}
                >
                  Create
                </div>
              </div>
              <div className="d-flex flex-column">
                <div
                  className="p-1"
                  style={{ fontSize: "16px", color: "#182838" }}
                >
                  Contact
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 ">
            <div className="d-flex">
              <div className="d-flex flex-column">
                <div
                  className="p-1"
                  style={{ fontSize: "18px", color: "#182838" }}
                >
                  SOCIAL MEDIA
                </div>
                <div className="d-flex">
                  <div className="p-1">
                    <img src={facebook}></img>
                  </div>
                  <div className="p-1">
                    <img src={instagram}></img>
                  </div>
                  <div className="p-1">
                    <img src={linkedin}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{
          height: "50x",
          position: "relative",
          top: "197px",
          border: "19x #707070 solid",
          background: "#182838",
        }}
      >
        <div className="col-12">
          <p
            style={{
              color: "#FFFFFF",
              fontSize: "12px",
              marginTop: "5px",
              textAlign: "center",
            }}
          >
            2022 <span style={{}}>©</span> Laundry
          </p>
        </div>
      </div>
    </div>
  );
}
