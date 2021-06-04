const usersController = require("../controllers").users;

module.exports = (app) => {
  app.get("/login", (req, res) => {
    res.status(200).send({
      message: "Welcome to the Todos API!",
    });
  });

  app.post("/signup/user", usersController.create);
};
