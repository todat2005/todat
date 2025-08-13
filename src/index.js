const express = require("express");
const { engine } = require("express-handlebars");
const morgan = require("morgan");
const path = require("path");
const port = 5500;

const app = express();
// template engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views",path.join(__dirname,"resources/views"));
// logger
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, 'public')));
app.get("/dang-nhap", (req, res) => {
  res.render("login");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
