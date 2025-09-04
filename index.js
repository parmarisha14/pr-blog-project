const express = require("express");
const session = require("express-session"); 
const app = express();
require("dotenv").config();
const db = require("./config/database");
const bodyParser = require("body-parser");
const port=8081;


db();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(session({
  secret: "mysecretkey", // koi strong secret
  resave: false,
  saveUninitialized: false
}));

// Custom middleware to make user available in EJS
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});
app.use("/", require("./routes/index"));

app.listen(port, (err) => {
    if(!err){
        console.log(`Server start at http://localhost:${port}`);  
    }else{
        console.log(err.message);
        
    }
})