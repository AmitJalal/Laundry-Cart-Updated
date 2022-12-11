import React from "react";
import { Link } from "react-router-dom";
import { tokenstorage } from "../../App";
import { useContext } from "react";
import "./home.css";

export default function Home() {
  // eslint-disable-next-line
  const [token, settoken] = useContext(tokenstorage);
  const logout = () => {
    settoken(null);
  };

  return (
    <>
      <div className="home__container">
        <header className="home__header">
          <div className="home__header__insidediv">
            <div className="home__header__title">
              <h1>LAUNDRY</h1>
            </div>
            <div className="home__header__navigation">
              <p>Pricing</p>
              <p>Career</p>
            </div>
          </div>
          <div className="home__header__userinfo">
            <div className="home__header__userimage">
              <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHgwL4r2DN1qg91OOqIViiv0Uxw-9yqo-PiQ&usqp=CAU"/>
            </div>
            <button onClick={logout} className="logout">
            {localStorage.getItem("Name")}
              </button>
            
          </div>
        </header>
        <nav className="home__navbar">
          <Link className="linkdiv" to={"/home"}>
            <i class="fa-solid fa-house"></i>
          </Link>
          <Link className="linkdiv" to={"/createorder"}>
            <img alt="" src="images/more.svg"></img>
          </Link>
          <Link className="linkdiv" to={"/pastorders"}>
            <i class="fa-solid fa-list"></i>
          </Link>
        </nav>
        <footer className="home__footer">
          <p>2022 &#169; Laundry</p>
        </footer>
      </div>
    </>
  );
}
