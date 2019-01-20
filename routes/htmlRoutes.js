var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        style: "index.css",
        msg: "ANSR",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Load create-quiz page
  app.get("/create-quiz", function(req, res) {
    res.render("create-quiz", {
      style: "create-quiz.css"
    });
  });

  // Load quiz page
  app.get("/quiz", function(req, res) {
    res.render("quiz", {
      style: "quiz.css"
    });
  });

  // Load quizzes page, still needs function to .findAll or .findMany based on dropdown choice
  app.get("/quiz-selection", function(req, res) {
    res.render("quiz-selection", {
      style: "quiz-selection.css"
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404", {
      style: "404.css"
    });
  });
};
