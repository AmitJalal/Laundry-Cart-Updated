import React from "react";
import "./Pastorder.css";
import CancelAlert from "../CancelAlert/CancelAlert";
import { tokenstorage } from "../../../App";
import { useContext } from "react";
import { useEffect, useState } from "react";
import PastOrderSummary from "../PastOrderSummary/PastOrderSummary";
import Home from "../../Home/Home";
import NoCustomer from "../Noorderlist/NoCustomer";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Pastorder = () => {
  const [token, settoken] = useContext(tokenstorage);
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [Visible, setVisible] = React.useState(false);
  const [popup, setPopup] = React.useState(false);
  const [orderId, setorderId] = React.useState("");
  const [counter, setCounter] = React.useState(0);
  const [customerorder, setcustomerorder] = useState({});

  const alert_popup = (id) => {
    setPopup(true);
    setVisible(false);
    // console.log(id);
  };
  const closeAlert = () => {
    setPopup(false);
  };

  const gettingData = async () => {
    await fetch("http://localhost:4143/getOrder", {
      headers: { authtoken: token },
    })
      .then((res) => res.json())
      .then((datas) => setData(datas));
  };

  const deleteOrder = () => {
    setCounter(counter + 1);
    fetch("http://localhost:4143/deleteOrder/" + orderId, {
      method: "DELETE",
      headers: {
        authtoken: token,
      },
      body: {
        orderId: orderId,
      },
    });
    setPopup(false);
    navigate("/pastorders");
  };

  useEffect(() => {
    gettingData();
  }, [counter]);

  // let totalquantity = 0;

  // Object.keys(data).map((item) => {
  //   if (data[item].quantity > 0) {
  //     totalquantity += data[item].quantity;
  //   }
  // });
  // var orderid = "";
  const changeHandler = (id) => {
    setVisible(!Visible);
    setorderId(id);
    fetch(`http://localhost:4143/order/${id}`, {
      method: "GET",
      headers: {
        authtoken: token,
      },
    })
      .then((res) => res.json())
      .then((data) => setcustomerorder(data));
  };
  if (token) {
    return (
      <>
        <Home />
        {data.length === 0 ? (
          <NoCustomer />
        ) : (
          <div className="pastorder-full-container">
            <>
              <div className="table-order-main-header">
                <div className="table-main-header-data">
                  <h4 style={{ fontSize: "18px" }}>
                    Orders | <span>{data.length}</span>
                  </h4>
                </div>
                <div className="table-create-search">
                  <div>
                    <Link to={"/createorder"}>
                      <button className="create-button">Create</button>
                    </Link>
                  </div>
                  <div className="search-bar">
                    <i
                      style={{ color: "#a0a0a0" }}
                      class="fa-solid fa-magnifying-glass"
                    ></i>
                    <input type="text" />{" "}
                  </div>
                </div>
              </div>
              <div className="orders-table-header">
                <div className="column">
                  <h6>Order id</h6>
                </div>
                <div className="column">
                  <h6>Order date & time</h6>
                </div>
                <div className="column">
                  <h6>Store Location</h6>
                </div>
                <div className="column">
                  <h6>City</h6>
                </div>
                <div className="column">
                  <h6>Store Phone</h6>
                </div>
                <div className="column">
                  <h6>Total items</h6>
                </div>
                <div className="column">
                  <h6>Price</h6>
                </div>
                <div className="column">
                  <h6>Status</h6>
                </div>
                <div className="column">
                  <h6>View</h6>
                </div>
              </div>
            </>
            <>
              {data.map((ele, index) => {
                let date = new Date(ele.createdAt);
                let dateStr = `${date
                  .toTimeString()
                  .split(" ")[0]
                  .substring(0, 5)}\n${date.toDateString().substring(4)}`;
                return (
                  <div
                    className={
                      index % 2 === 0
                        ? "details-container1"
                        : "details-container2"
                    }
                  >
                    <>
                      <div className="column">
                        <p>OROOO{index + 1}</p>
                      </div>
                      <div className="column">
                        <p>{dateStr}</p>
                      </div>
                      <div className="column">
                        <p>local</p>
                      </div>
                      <div className="column">
                        <p>{ele.location}</p>
                      </div>
                      <div className="column">
                        <p>+919988667755</p>
                      </div>
                      <div className="column">
                        <p>{ele.totalQuantity}</p>
                      </div>
                      <div className="column">
                        <p>{ele.totalPrice}</p>
                      </div>
                      <div className="column">
                        <p>ready to pickup</p>
                      </div>
                      <div className="column">
                        <p>
                          <i
                            onClick={() => changeHandler(ele._id)}
                            class="fa-solid fa-eye"
                            style={{ cursor: "pointer" }}
                          ></i>
                        </p>
                      </div>
                    </>
                  </div>
                );
              })}
            </>
            <PastOrderSummary
              customerorder={customerorder}
              alert_popup={alert_popup}
              isVisible={Visible}
              setVisible={setVisible}
              changeHandler={changeHandler}
            />
          </div>
        )}{" "}
        <CancelAlert
          deleteOrder={deleteOrder}
          closeAlert={closeAlert}
          popup={popup}
        />
      </>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default Pastorder;
