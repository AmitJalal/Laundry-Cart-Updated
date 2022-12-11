const express = require("express");
const app = express();
app.use(express.json());

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));

//dotenv
const dotenv = require("dotenv");
dotenv.config();

//Cors
const cors = require("cors");
app.use(cors({ origin: "*" }));
app.use("/public", express.static("public"));
app.use(cors());

//Bcrypt
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Middleware
const authtoken = require("./Middlewares/Tokenmiddleware");

//Schema & Database
const mongoose = require("mongoose");
const usersDatabase = require("./models/Register");
const orders = require("./models/Orders");
const products = require("./models/ProductSchema");

//Mongoose connection
mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("Database is connected");
  })
  .catch(() => {
    console.log("Database is not connected");
  });

// Register Route
app.post("/register", async (request, response) => {
  try {
    console.log(request.body);
    // response.status(200).json(request.body)
    let userExist = await usersDatabase.findOne({ Email: request.body.Email });
    if (userExist) {
      throw "The mail already exists. Try to register with other Email";
    }
    const hashedpassword = await bcrypt.hash(request.body.Password, 10); //hashed password

    const newUser = {
      Name: request.body.Name,
      Email: request.body.Email,
      Phone: request.body.Phone,
      District: request.body.District,
      State: request.body.State,
      Adress: request.body.Adress,
      Pincode: request.body.Pincode,
      Password: hashedpassword,
    };

    await usersDatabase.create(newUser);
    response.status(200).send("Registration success");
    response.end();
  } catch (e) {
    console.log(e);
    response.status(200 || 500).send(e || "Server Error");
    response.end();
  }
});

//Login Route
app.post("/login", async (request, response) => {
  try {
    let userExist = await usersDatabase.findOne({ Email: request.body.Email });
    console.log(userExist.id);
    // response.status(200).json(request.body.Email)

    if (!userExist) {
      response.status(400).send("Couldn't find your account Try to Register");
      response.end();
    }
    if (!(await bcrypt.compare(request.body.Password, userExist.Password))) {
      response.status(400).send("Invaild Password");
      response.end();
    }

    let userPayload = { userId: userExist.id };
    jwt.sign(
      userPayload,
      "10xLaundrycart",
      { expiresIn: 600000 },
      (error, Token) => {
        if (error) {
          console.log(error);
          response.status(400).send("Error in the token generation");
          response.end();
        } else {
          response
            .status(200)
            .send({ status: "Sucess", token: Token, Name: userExist.Name });
          //console.log(Token)
          response.end();
        }
      }
    );
  } catch (e) {
    //console.log(e)
    response.status(500).send("Server error");
    response.end();
  }
});

//Get User Details
app.get("/UserDetails", authtoken, async (req, res) => {
  try {
    let user = await usersDatabase.findById(req.user.userId);
    res.status(200).send(user);
    res.end();
  } catch (e) {
    console.log(e);
    res.status(500).send("Server error");
    res.end();
  }
});

//Get Orders
app.get("/getOrder", authtoken, async (req, res) => {
  try {
    // console.log(orders,".......")
    let userExist = await usersDatabase.findById(req.user.userId);
    if (!userExist) {
      res.status(400).send("user not exist");
      res.end();
    }
    const result = await orders.find({ userId: req.user.userId });

    res.status(200).json(result);
  } catch (err) {
    res.status(500).send("server error");
  }
});

app.get("/", (req, res) => {
  products.find({}, (err, docs) => {
    res.json(docs);
  });
});

app.post("/order", (req, res) => {
  orders.create(req.body, (err, docs) => {
    if (err) {
      res.send(err);
    } else {
      res.json({
        success: true,
        message: "order added",
      });
    }
  });
});
app.delete("/deleteOrder/:orderId", authtoken, (req, res) => {
  // const deletedorder=orders.findById(req.params.orderId)
  // console.log(deletedorder,"hhh")
  orders.findByIdAndDelete(req.params.orderId, (err, docs) => {
    if (err) {
      res.send(err);
    } else {
      res.json({
        success: true,
        message: "order deleted",
      });
    }
  });
});
app.get("/order/:orderId", authtoken, (req, res) => {
  // console.log(req.params.orderId);
  orders.findById(req.params.orderId, (err, docs) => {
    if (err) {
      res.send(err);
    } else {
      res.json(docs);
    }
  });
});

let PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is connected to ${PORT}`);
});
