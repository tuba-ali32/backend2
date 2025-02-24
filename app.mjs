import express from "express";
const app = express();
import cors from "cors";
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/date", (req, res) => {
  // console.log(req.params)
  // console.log(req.query)
  console.log("running");
  res.send(new Date().toLocaleString());
});

app.get("/weather/:cityName", (req, res) => {
  // console.log(req.params)
  // console.log(req.query)
  // console.log(req.body)

//   res.send(req.params.cityName);

console.log(req.body)
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
