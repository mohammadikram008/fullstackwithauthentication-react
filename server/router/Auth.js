const express = require("express");
const router = express.Router();
require("../db");
const User = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
router.get("/", (req, res) => {
  res.send("Hello word");
});
// using ascynic await
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "plz filled the field properly" });
  }
  try {
    const exist = await User.findOne({ email: email });
    if (exist) {
      return res.status(422).json({ error: "already resgister" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password is not matching" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      await user.save();
      res.status(201).json({ message: "successfully register" });
    }

    // if (userregister) {
    //   res.status(201).json({ message: "successfully register" });
    // } else {
    //   res.status(500).json({ error: err });
    // }
  } catch (error) {
    console.log("ERROR", error);
  }
});
// user login
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "please filled the data" });
    }
    const userlogin = await User.findOne({ email: email });

    if (!userlogin) {
      return res.status(400).json({ error: "User Error" });
    } else {
      const ismatch = await bcrypt.compare(password, userlogin.password);
      const token = await userlogin.generateAuthToken();

      res.cookie("jwttoken", token, {
        expires: new Date(Date.now() + 25892000000),

        httpOnly: true,
      });
      console.log(token);
      if (!ismatch) {
        return res.status(400).json({ error: "User Error Password" });
      } else {
        // console.log("success");
        return res.json({ message: "user Signin Succesfully" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

// using promises
// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "plz filled the field properly" });
//   }
//   User.findOne({ email: email })
//     .then((ress) => {
//       if (ress) {
//         return res.status(422).json({ error: "already resgister" });
//       }
//       const user = new User({ name, email, phone, work, password, cpassword });
//       console.log("user", user);
//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "successfully register" });
//         })
//         .catch((err) => {
//           res.status(500).json({ error: err });
//         });
//     })
//     .catch((err) => {
//       console.log("ERROR", err);
//     });
// });
module.exports = router;
