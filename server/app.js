const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const db = require("./db");
const user = require("./model/userSchema");
const app = express();
app.use(express.json());
app.use(cors());

app.use(require("./router/Auth"));
db();
// const connectionParams = {
//   useNewUrlParser: true,
//   // useCreateIndex: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
// };
// const db =
//   "mongodb+srv://mohammadikram20001:Pakstar@123@cluster0.meaf0kq.mongodb.net/MernStack";
// mongoose
//   .connect(db, connectionParams)
//   .then(() => {
//     console.log("connection successfully");
//   })
//   .catch((error) => {
//     console.log("Not Connection");
//   });
const middleware = (req, res, next) => {
  console.log("heloo midleware");
  next();
};

// app.get("/", (req, res) => {
//   res.send("heloo Home");
// });
app.get("/about", middleware, (req, res) => {
  res.send("heloo About");
});
app.get("/contact", (req, res) => {
  res.send("heloo Contact");
});
app.get("/signin", (req, res) => {
  res.send("heloo SignIn");
});
app.get("/login", (req, res) => {
  res.send("heloo Login");
});
app.listen(3002, () => {
  console.log("app is runing in port 30002");
});
// function handle(signal) {
//   console.log(`So the signal which I have Received is: ${signal}`);
// }

// process.on("SIGINT", handle);
// app.listen(8002, () => {
//   console.log("Port is listen ....");
// });
process.on("SIGINT", function () {
  console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
  // some other closing procedures go here
  // process.kill(process.pid, "SIGINT");
  process.exit(1);
});
