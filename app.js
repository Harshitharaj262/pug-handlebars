const express = require("express");
const bodyParser = require("body-parser");
const adminData = require("./routes/admin");
const shopRoute = require("./routes/shop");
const path = require("path");

const app = express();

// pug
// app.set('view engine', 'pug') // Use this engine for dynamic views and use pug here

//handlerbars
// const expressHbs = require("express-handlebars");
// app.engine(
//   "hbs",
//   expressHbs.engine({
//     layoutsDir: "views/layouts/",
//     defaultLayout: "main-layout.hbs",
//     extname: "hbs",
//   })
// );
// app.set("view engine", "hbs"); // Use this engine for dynamic views and use handlerbars here

// EJS
app.set('view engine', 'ejs'); // Use this engine for dynamic views and use ejs

app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
6
app.use(express.static(path.join(__dirname, "public")));

app.use(shopRoute);
app.use("/admin", adminData.router);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page not found" });
});

app.listen(3000);
