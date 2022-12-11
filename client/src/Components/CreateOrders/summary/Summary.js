import React, { useState } from "react";
import "./summary.css";

export default function Summary({
  isVisible,
  handleProceed,
  handlesucess,
  customerorder,
  setShow,
  setsucess,
  userDetails,
}) {
  const [location, setLocation] = useState("store location");

  var totalPrice = 0;
  var totalQuantity = 0;

  Object.keys(customerorder).map((item) => {
    if (customerorder[item].quantity > 0) {
      var singleproductPrice =
        customerorder[item].quantity * customerorder[item].totalPrice;
      totalPrice += singleproductPrice;
      totalQuantity += parseInt(customerorder[item].quantity);
    }
  });

  const handleConfirm = () => {
    if (location === "store location") {
      alert("Please select a location");
    } else {
      customerorder = {
        ...customerorder,
        userId: userDetails._id,
        location: location,
        totalPrice: totalPrice,
        totalQuantity: totalQuantity,
        Address: `${userDetails.State} ${userDetails.District} ${userDetails.Adress} ${userDetails.Pincode}`,
      };
      setsucess(true);
      setShow(false);
      fetch("http://localhost:4143/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerorder),
      });
    }
  };

  const selectAddress = () => {
    const address = document.getElementsByClassName("summary__address");
    address[0].classList.toggle("summary__address--active");
  };

  if (isVisible) {
    return (
      <div className="summary__conatiner">
        <div className="summary__leftdiv">
          <header className="summary__header">
            <div className="summary__header__innnerdiv">
              <h1>Summary</h1>
              <i onClick={handleProceed} class="fa-solid fa-xmark fa-2xl"></i>
            </div>
          </header>
          <nav className="summary__storeselector">
            <form>
              <select
                className="summary__storeselector__form"
                required="true"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              >
                <option value="store location">Store Location</option>
                <option value="shadnagar">Shadnagar</option>
                <option value="warangal">Karimnagar</option>
                <option value="karimnagar">warangal</option>
              </select>
            </form>
            <div className="summary__storeselector__address">
              <h3>Store Address:</h3>
              {location === "store location" ? (
                <p>-</p>
              ) : (
                <>
                  <p>Near jntuh,xyz complex</p>
                </>
              )}
            </div>
            <div className="summary__storeselector__phone">
              <h3>Phone no:</h3>
              {location === "store location" ? (
                <p>-</p>
              ) : (
                <>
                  <p>+91 888888888</p>
                </>
              )}
            </div>
          </nav>

          <div className="summary__orderdetails__container">
            <div className="summary__heading">
              <h2>Order details</h2>
            </div>
            {Object.keys(customerorder).map((item) => {
              if (customerorder[item].quantity > 0) {
                return (
                  <div className="summary__orderdetails">
                    <h1>{customerorder[item].name}</h1>
                    <p>{customerorder[item].washtype}</p>

                    <div className="summary__pricediv">
                      <h3 className="summary__priceparticulars">
                        {customerorder[item].quantity} x{" "}
                        {customerorder[item].totalPrice} ={" "}
                      </h3>
                      <h3 className="summary__mainPrice">
                        {customerorder[item].totalPrice *
                          customerorder[item].quantity}
                      </h3>
                    </div>
                  </div>
                );
              }
            })}
            <div className="summary__subtotal">
              <div className="summary__pricediv">
                <p className="summary__priceparticulars">Subtotal:</p>
                <h3 className="summary__mainPrice"> {totalPrice} </h3>
              </div>
            </div>
            <div className="summary__pickupcharges">
              <div className="summary__pricediv">
                <p className="summary__priceparticulars">pickup charges:</p>
                <h3 className="summary__mainPrice"> 90 </h3>
              </div>
            </div>
            <div className="summary__totalprice">
              <div className="summary__pricediv">
                <h2 className="summary__priceparticulars__mainprice">Total:</h2>
                <h2 className="summary__mainPrice__mainprice">
                  Rs: {totalPrice + 90}{" "}
                </h2>
              </div>
            </div>
          </div>
          <div className="summary__address__container">
            <h4>Address</h4>
            <div
              onClick={selectAddress}
              className="summary__address summary__address--active"
            >
              <img src="images/tick.svg" alt="tick"></img>
              <h3>Home</h3>
              <p>
                {userDetails.State},{userDetails.District},{userDetails.Adress},
                {userDetails.Pincode}
              </p>
            </div>
          </div>

          <footer className="summary__footer">
            <button onClick={handleConfirm}>Confirm</button>
          </footer>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
