import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./register.css"
// eslint-disable-next-line
export default function () {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [poststatus, setpoststatus] = useState(false);
  // const [registerDetails, setRegisterDetails] = useState({
  // Name: "",
  // Email: "",
  // Phone: "",
  // District: "",
  // State: "",
  // Adress: "",
  // Pincode: "",
  // Password: "",
  // });
  // const { Name, Email, Phone, District, State, Adress, Pincode, Password } =
  //   registerDetails;
  // const FieldHandler = (ele) => {
  //   setRegisterDetails({
  //     ...registerDetails,
  //     [ele.target.name]: ele.target.value,
  //   });
  //   //console.log(registerDetails);
  // };
  const onSubmit = (data) => {
    var userdata = data;
    async function postuserdata() {
      try {
        await axios
          .post("http://localhost:4143/register", userdata)
          .then((res) => {
            alert(res.data);
            setpoststatus(true);
          })
          .catch((e) => {
            alert(e.data);
            console.log(e);
          });
      } catch (e) {
        //console.error(e);
        //alert(e);
      }
    }
    postuserdata();
  };
  return (
    <div>
      {poststatus ? (
        <Navigate to="/" />
      ) : (
        <div
          className="container-fluid"
          style={{ position: "absolute", top: "81px" }}
        >
          <div className="row">
            <div className="col-3">
              <div
                className="row"
                style={{
                  position: "relative",
                  left: "45px",
                  top: "150px",
                }}
              >
                <div className="col-6 ">
                  <h1
                    id="main_heading"
                    style={{
                      color: "#4552c1",
                      fontSize: "62px",
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
                  left: "50px",
                  top: "155px",
                }}
              >
                <div className="col-6 ">
                  <h1
                    id="main_heading"
                    style={{ color: "#999999", fontSize: "18px" }}
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
                  top: "290px",
                }}
              >
                <div className="col-6 ">
                  <h1
                    id="main_heading"
                    style={{ color: "#999999", fontSize: "13px" }}
                  >
                    Already Have Account
                  </h1>
                </div>
              </div>
              <div
                className="row"
                style={{
                  position: "relative",
                  left: "70px",
                  top: "290px",
                }}
              >
                <div className="col-6 ">
                  <Link to="/">
                    {" "}
                    <button
                      type="button"
                      class="sigin-btn"
                      
                    >
                      Sign In
                    </button>
                  </Link>
                </div>
              </div>

              {/* <h4 id="sub_heading">Doorstep Wash & Dryclean Service</h4>
        <h5 id="sub_sub_heading">Don’t Have An Account?</h5>
        <button id="register_button">Register</button> */}
              <div
                style={{
                  width: "3px",
                  background: "#5861AE",
                  height: "183px",
                  position: "relative",
                  left: "330px",
                  top: "-95px",
                }}
              ></div>
            </div>
            <div
              className="col-9"
              style={{
                background: "#B9C0FD1A",
                height: "660px",
                position: "relative",
                left: "3px",
              }}
            >
              {" "}
              <div
                className="row"
                style={{
                  position: "relative",
                  left: "0px",
                  top: "50px",
                }}
              >
                <div className="col-6 ">
                  <h1 className="left_heading" style={{ color: "#4552c1" }}>
                    REGISTER
                  </h1>
                </div>
              </div>
              <div
                className="row p-0"
                style={{
                  position: "relative",
                  marginLeft: "10px",
                  top: "120px",
                }}
              >
                <div className="col-12 ">
                  <form id="form_container" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-6">
                        <div class="form-floating">
                          <input
                            type="text"
                            {...register("Name", {
                              required: true,
                              minLength: 5,
                            })}
                            class="form-control"
                            id="floatingInputName"
                            placeholder="name@example.com"
                            style={{
                              border: "none",
                              borderBottom: "2px #4552c1 solid",
                            }}
                            required
                          ></input>
                          <label htmlFor="floatingInputGrid">Name</label>
                          {errors.Name?.type === "required" && (
                            <p style={{ color: "red" }}>
                              This field is required
                            </p>
                          )}
                          {errors.Name?.type === "minLength" && (
                            <p style={{ color: "red" }}>
                              Name should have atleast 5 characters
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-6" style={{ marginLeft: "0px" }}>
                        <div class="form-floating">
                          <input
                            type="email"
                            {...register("Email", { required: true })}
                            class="form-control"
                            id="floatingEmail"
                            placeholder="name@example.com"
                            style={{
                              border: "none",
                              borderBottom: "2px #4552c1 solid",
                            }}
                            required
                          ></input>
                          <label htmlFor="floatingInputGrid">Email</label>
                          {errors.Email?.type === "required" && (
                            <p style={{ color: "red" }}>Email is required</p>
                          )}
                        </div>
                      </div>
                    </div>
                    {/*22222222222222222222222222*/}
                    <div className="row mt-4">
                      <div className="col-6">
                        <div class="form-floating">
                          <input
                            type="text"
                            {...register("Phone", {
                              required: true,
                              maxLength: 10,
                              minLength: 10,
                            })}
                            class="form-control"
                            id="floatingPhone"
                            placeholder="name@example.com"
                            style={{
                              border: "none",
                              borderBottom: "2px #4552c1 solid",
                            }}
                            required
                          ></input>
                          <label htmlFor="floatingInputGrid">Phone</label>
                          {errors.Phone?.type === "required" && (
                            <p style={{ color: "red" }}>
                              This field is required
                            </p>
                          )}
                          {errors.Phone?.type === "minLength" && (
                            <p style={{ color: "red" }}>
                              This not a valid number
                            </p>
                          )}
                          {errors.Phone?.type === "maxLength" && (
                            <p style={{ color: "red" }}>
                              This not a valid number
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-6" style={{ marginLeft: "0px" }}>
                        <select
                          class="form-select"
                          {...register("State")}
                          aria-label="Default select example"
                          style={{
                            height: "56px",
                            border: "none",
                            borderBottom: "2px #4552c1 solid",
                          }}
                          placeholder="state"
                          required
                        >
                          <option value="Telangana">Telangana</option>
                          <option value="AndhraPradesh">Andhra pradesh</option>
                          <option value="TamilNadu">Tamilnadu</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                        </select>
                      </div>
                    </div>
                    {/*3333333333333333333333*/}
                    <div className="row mt-4">
                      <div className="col-6">
                        <div class="form-floating">
                          <input
                            type="text"
                            {...register("District")}
                            class="form-control"
                            id="floatingDistrict"
                            placeholder="name@example.com"
                            style={{
                              border: "none",
                              borderBottom: "2px #4552c1 solid",
                            }}
                            required
                          ></input>
                          <label htmlFor="floatingInputGrid">District</label>
                          {errors.District?.type === "required" && (
                            <p style={{ color: "red" }}>
                              This field is required
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-6" style={{ marginLeft: "0px" }}>
                        <div class="form-floating">
                          <input
                            type="text"
                            {...register("Adress")}
                            class="form-control"
                            id="floatingAdress"
                            placeholder="name@example.com"
                            style={{
                              border: "none",
                              borderBottom: "2px #4552c1 solid",
                            }}
                            required
                          ></input>
                          <label htmlFor="floatingInputGrid">Adress</label>
                        </div>
                      </div>
                    </div>
                    {/*44444444444444444444444444444444*/}
                    <div className="row mt-4">
                      <div className="col-6">
                        <div class="form-floating">
                          <input
                            type="text"
                            {...register("Pincode")}
                            class="form-control"
                            id="floatingPassword"
                            placeholder="name@example.com"
                            style={{
                              border: "none",
                              borderBottom: "2px #4552c1 solid",
                            }}
                          ></input>
                          <label htmlFor="floatingInputGrid">Pincode</label>
                        </div>
                      </div>
                      <div className="col-6" style={{ marginLeft: "0px" }}>
                        <div class="form-floating">
                          <input
                            type="password"
                            {...register("Password", { minLength: 10 })}
                            class="form-control"
                            id="floatingPassword"
                            placeholder="name@example.com"
                            style={{
                              border: "none",
                              borderBottom: "2px #4552c1 solid",
                            }}
                          ></input>
                          <label htmlFor="floatingInputGrid">Password</label>
                          {errors.Password?.type === "minLength" && (
                            <p style={{ color: "red" }}>
                              Password should have 10 Characters
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-12" style={{ textAlign: "center" }}>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                          required
                        ></input>
                        <label
                          class="form-check-label"
                          for="flexCheckDefault"
                          style={{
                            color: "#5861AE",
                            fontSize: "18px",
                            marginLeft: "15px",
                          }}
                        >
                          I agree to Terms & Condition receiving marketing and
                          promotional materials
                        </label>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-12" style={{ textAlign: "center" }}>
                        <button
                          type="submit"
                          class="register-btn"
                          
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <hr style={{ color: "#000dff", height: "3px", width: "100%" }}></hr>
        </div>
      )}{" "}
    </div>
  );
}
