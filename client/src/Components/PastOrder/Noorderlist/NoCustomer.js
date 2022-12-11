import React from "react";
import { Link } from "react-router-dom";
import "./NoCustomer.css";

const NoCustomer = () => {
  return (
    <div className="orders-class">
      <div className="header-order">
        <div className="orders ">
          Orders<span>| 0</span>
        </div>
        <div className="search-bar">
          <i class="fas fa-search"></i>
          <input type="text" />{" "}
        </div>
      </div>
      <div className="middle-of-orders">
        <h3>No order Available</h3>
        <Link to={"/createorder"}>
          <button className="btn-1">Create</button>
        </Link>
      </div>
    </div>
  );
};

export default NoCustomer;
