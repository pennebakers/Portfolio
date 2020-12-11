const port = 3000,
  express = require("express"),
  app = express();

app.get("/", (req,res) => {
  res.send("Hello Universe");
});

app.post("/contact", (req, res) => {
  res.send("Contact information submitted successfully.");
});

app.get("/items/:vegetable", (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
});

app.listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number: ${port}`);
  });
