require("dotenv").config();
const user = require("./user.js");
const express = require("express");
const userRouter = require("./routes/userRouter.js");
const app = express();
const PORT = process.env.PORT || 5000;
const router = express.Router();
const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("fire", (data) => {
  console.log("event fired with", data);
});
app.use("/users", userRouter(router, myEmitter));
// app.use(router);
// router.get("/user", (req, res) => {
//   console.log(process.env.ENV, "wwwwwwwwww");
//   return res.json({ mess: "GOOD" });
// });
router.get("*", (req, res) => {
  return res.json({ mess: "NORFOUND" });
});
app.listen(PORT, () => {
  console.log(`server is listinning to ${PORT} PORT`);
});
