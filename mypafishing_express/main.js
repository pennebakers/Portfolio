const homeController = require("./controllers/homeController");

const helmet = require("helmet");

const port = 3000,
  express = require("express"),
  app = express();

  app.use(helmet());

app.get("/items/:vegetable", homeController.sendReqParam);

app.get("/", homeController.home);


app.listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number: ${port}`);
  });
