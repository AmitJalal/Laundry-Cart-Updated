import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line
export default function () {
  return (
    <div
      className="container-fluid"
      style={{
        height: "81px",
        background: "white",
        boxShadow: "0px 2px 48px #0000000f",
      }}
    >
      <div className="row">
        <div className="col-2" style={{ marginTop: "25px" }}>
          <p
            style={{
              color: "#5861ae",
              fontSize: "25px",
              fontWeight: "bold",
              letterSpacing: "1.8px",
            }}
          >
            LAUNDRY
          </p>
        </div>
        <div className="col-10">
          <div
            class="btn-group float-end"
            role="group"
            aria-label="Basic outlined example"
          >
            <button
              type="button"
              class="btn btn-outline-primary"
              style={{
                height: "81px",
                width: "100px",
                color: "gray",
                border: "none",
                cursor: "pointer",
                borderRight: "1px gray solid",
              }}
              disabled
            >
              Home
            </button>
            <button
              type="button"
              class="btn btn-outline-primary"
              style={{
                height: "81px",
                width: "100px",
                color: "gray",
                border: "none",
                cursor: "pointer",
                borderRight: "1px gray solid",
              }}
              disabled
            >
              Pricing
            </button>
            <button
              type="button"
              class="btn btn-outline-primary"
              style={{
                height: "81px",
                width: "100px",
                color: "gray",
                border: "none",
                cursor: "pointer",
                borderRight: "1px gray solid",
              }}
              disabled
            >
              Career
            </button>
            <Link to="/">
              <button
                type="button"
                class="btn btn-outline-primary"
                style={{
                  height: "81px",
                  width: "100px",
                  color: "White",
                  cursor: "pointer",
                  background: "#5861ae",
                }}
              >
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}




