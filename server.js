const express = require("express");
const { Db } = require("mongodb");
const mongoose = require("mongoose");
const logger = require("morgan");

require("./Models")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {useNewUrlParser:true});

app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/apiRoutes"));

//Needs to be updated from here...

// app.post("/submit", ({body}, res) => {
//   db.Book.create(body)
//   .then(({_id}) => {
//     return db
//     .Library
//     .findOneAndUpdate({}, { $push: {books:_id}}, {new:true})
//   })
//   .then(dbLibrary => {
//     res.json(dbLibrary);
//   });
// });

//... to HERE.

app.listen(PORT, ()=> {
  console.log(`App running on port ${PORT}!`);
});