import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import { tokenstorage } from "../../App";
import { Navigate } from "react-router-dom";
// import "./signin.css"
// eslint-disable-next-line
export default function () {
  const [token, settoken] = useContext(tokenstorage);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await axios
      .post("http://localhost:4143/login", data)
      .then((res) => {
        settoken(res.data.token);
        // localStorage.setItem("token", res.data.token);
        localStorage.setItem("Name", res.data.Name);
        // alert("Sign in Successfull");
      })
      .catch((e) => {
        alert("Invalid Credentials");
      });
  };
  return (
    <div>
      {token ? (
        <Navigate to="/home"></Navigate>
      ) : (
        <div
          className="container-fluid"
          style={{ position: "absolute", top: "81px" }}
        >
          <div className="row">
            <div className="col-6">
              <div
                className="row"
                style={{
                  position: "relative",
                  left: "160px",
                  top: "150px",
                }}
              >
                <div className="col-6 ">
                  <h1
                    id="main_heading"
                    style={{
                      color: "#4552c1",
                      fontSize: "80px",
                      fontWeight: "bolder",
                      
                    }}
                  >
                    Laundry Service
                  </h1>
                </div>
              </div>
              <div
                className="row"
                style={{
                  position: "relative",
                  left: "120px",
                  top: "155px",
                }}
              >
                <div className="col-6 ">
                  <h1
                    id="main_heading"
                    style={{ color: "#999999", fontSize: "15px" }}
                  >
                    Doorstep Wash & Dryclean Service
                  </h1>
                </div>
              </div>
              <div
                className="row"
                style={{
                  position: "relative",
                  left: "75px",
                  top: "250px",
                }}
              >
                <div className="col-6 ">
                  <h1
                    id="main_heading"
                    style={{ color: "#999999", fontSize: "13px" }}
                  >
                    Don’t Have An Account?
                  </h1>
                </div>
              </div>
              <div
                className="row"
                style={{
                  position: "relative",
                  left: "80px",
                  top: "250px",
                }}
              >
                <div className="col-6 ">
                  <Link to="/register">
                    <button
                      type="button"
                      class="register-btn"
                      
                    >
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-6"
              style={{ background: "#B9C0FD1A", height: "660px" }}
            >
              {" "}
              <div
                className="row"
                style={{
                  position: "relative",
                  left: "0px",
                  top: "150px",
                }}
              >
                <div className="col-6 ">
                  <h1 className="left_heading" style={{ color: "#4552c1" }}>
                    SIGN IN
                  </h1>
                </div>
              </div>
              <div
                className="row"
                style={{
                  position: "relative",
                  left: "85px",
                  top: "200px",
                }}
              >
                <div className="col-10 ">
                  <form id="form_container" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-12">
                      {" "}
                      <div class="form-floating mb-3">
                        <input
                          type="email"
                          {...register("Email", { required: true })}
                          class="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                          style={{
                            border: "none",
                            borderBottom: "2px #4552c1 solid",
                          }}
                        ></input>
                        <label for="floatingInput">Email/ Phone</label>
                        {errors.Email?.type === "required" && (
                          <p style={{ color: "red" }}>Email is required</p>
                        )}
                      </div>
                    </div>

                    <div className="col-12" style={{ marginTop: "50px" }}>
                      {" "}
                      <div class="form-floating mt-3">
                        <input
                          type="password"
                          {...register("Password", {
                            required: true,
                          })}
                          class="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                          style={{
                            border: "none",
                            borderBottom: "2px #4552c1 solid",
                          }}
                        ></input>

                        <label for="floatingPassword">Password</label>
                        {errors.Password &&
                          errors.Password.type === "required" && (
                            <p style={{ color: "red" }}>
                              You should enter Password
                            </p>
                          )}
                      </div>
                      <p
                        style={{
                          float: "right",
                          color: "#4552c1",
                        }}
                      >
                        <a href="/">Forgot your Password?</a>
                      </p>
                      <div
                        className="row"
                        style={{
                          position: "relative",
                          left: "150px",
                          top: "70px",
                        }}
                      >
                        <div className="col-6 ">
                          <button
                            type="submit"
                            class="sigin-btn"
                            
                          >
                            Sign In
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <hr style={{ color: "#000dff", height: "3px", width: "100%" }}></hr>
        </div>
      )}
    </div>
  );
}
