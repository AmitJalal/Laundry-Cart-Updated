import React from "react";
import Home from "../Home/Home";
import { tokenstorage } from "../../App";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Welcome.css";

export default function Welcome() {
  const [token] = useContext(tokenstorage);
  return (
    <>
      {!token ? (
        <Navigate to="/" />
      ) : (
        <>
          <Home />
          <div className="home__welcomeuser">
            <div className="home__welcomeuser__buttons">
              <Link to={"/createorder"}>
                <button>Create order</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
