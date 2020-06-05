const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res)=> {
res.send('hello world');
});

app.get("/:id-img.png", (req, res) => {
  let id = req.params.id;
  console.log(`ID: ${id}`);

  let buf = Buffer.from([
    0x47,
    0x49,
    0x46,
    0x38,
    0x39,
    0x61,
    0x01,
    0x00,
    0x01,
    0x00,
    0x80,
    0x00,
    0x00,
    0xff,
    0xff,
    0xff,
    0x00,
    0x00,
    0x00,
    0x2c,
    0x00,
    0x00,
    0x00,
    0x00,
    0x01,
    0x00,
    0x01,
    0x00,
    0x00,
    0x02,
    0x02,
    0x44,
    0x01,
    0x00,
    0x3b,
  ]);

  res.status(200);
  // Set content-type of response to png
  res.set("Content-Type", "image/png");

  // Set end of response to the binary image
  res.end(buf, "binary");
});

app.listen(5001, () => {
  console.log("Server running...");
});
