import React from "react";
import "./CancelAlert.css";

export default function CancelAlert({ popup, closeAlert, deleteOrder }) {
  if (popup) {
    return (
      <>
    
        <div className="whole">
          <div className="CancelAlert-div">
            <div className="Alert-head">
              Alert <i onClick={closeAlert} class="fa-solid fa-xmark fa-xl"></i>
            </div>
            {/* <i class="fa-thin fa-xmark"></i> */}
            <div className="remaining-part">
              <div className="traingle">
                <i
                  className="i"
                  class="fa-solid fa-triangle-exclamation fa-2xl"
                ></i>
              </div>
              <div className="alert-proceed">
                <div className="Alert-msg">
                  Are you sure want to cancel Order No:{" "}
                </div>
                <div className="proceed">
                  <button onClick={deleteOrder} className="proceed-button">
                    proceed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}
