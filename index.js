const express = require("express");
require("dotenv").config();
const app = express();
require("./db");
const productsRouter = require("./product/productsRouter");
const categoryRouter = require("./category/categoryRouter");

app.use(express.json());
app.use("/products", productsRouter);
app.use("/category", categoryRouter);

app.use((req, reply) => {
  let result = {
    code: 404,
    details: {
      message: "Not Found",
    },
  };
  reply.send(result);
});

app.listen(4000, (err, res) => {
  if (err) console.log("Error");
  else console.log(`Server runing on port ${4000}`);
});
