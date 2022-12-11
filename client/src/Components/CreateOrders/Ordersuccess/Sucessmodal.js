import React from "react";
import "./Sucessmodal.css";
import { Link } from "react-router-dom";

export default function Sucessmodal({ isVisible, setsucess }) {
  if (isVisible) {
    return (
      <div className="successmodal__container">
        <div className="successmodal__messagediv">
          <div className="success__tick">
            <i style={{ color: "#5861AE" }} class="fa-solid fa-check fa-5x"></i>
          </div>
          <div className="sucess__message">
            <h3>Your order is successfully placed</h3>
          </div>
          <div className="sucess__check">
            <p>You can track the delivery in the "orders" section</p>
          </div>
          <Link to="/pastorders">
            <button
              onClick={() => {
                setsucess(false);
              }}
              className="sucess__redirectbutton"
            >
              Go to orders
            </button>
          </Link>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
