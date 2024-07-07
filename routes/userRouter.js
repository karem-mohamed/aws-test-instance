const userRouter = (router, myEmitter) => {
  router.get("/", (req, res) => {
    console.log(process.env.NODE_ENV, "wwwwwwwwww");
    myEmitter.emit("fire", process.env.NODE_ENV);
    return res.json({ mess: "ci/cd working helloooooooo" });
  });

  return router;
};
module.exports = userRouter;
