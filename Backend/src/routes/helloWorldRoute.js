const helloWorldRoute = {
  method: "get",
  path: "/hello-world",
  handler: async (req, res) => {
    res.send("Hello World!");
  },
};

module.exports = helloWorldRoute;
