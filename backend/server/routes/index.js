const usersController = require("../controllers").users;
const { QueryTypes } = require("sequelize");
const User = require("../models").User;

const Sequelize = require("sequelize");

module.exports = (app) => {
  app.get("/login", (req, res) => {
    res.status(200).send({
      message: "Welcome to the Todos API!",
    });
  });

  app.post("/signup/user", usersController.create);

  const sequelize = new Sequelize("postgres", "postgres", "adminpass", {
    host: "localhost",
    dialect: "postgres",

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });

  app.post("/signin/user", async (req, res) => {
    var email = req.body.email;
    var pass = req.body.pass;
    const users = await User.findOne({
      where: { email: email, password: pass },
    });

    if (users === null) {
      res.status(200).send({
        message: "failure",
      });
    }
    res.status(200).send({
      message: "success",
    });

    // console.log("...............dsg.........", users);
    // res.status(200).send({
    //   message: "Welcome to the signin api!",
    // });
  });
};
