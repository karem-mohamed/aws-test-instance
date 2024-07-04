const userRouter = (router, myEmitter) => {
  router.get("/", (req, res) => {
    console.log(process.env.ENV, "wwwwwwwwww");
    myEmitter.emit("fire", process.env.ENV);
    return res.json({ mess: "GOOD" });
  });

  return router;
};
module.exports = userRouter;
