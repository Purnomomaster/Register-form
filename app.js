const express = require("express");
const multer = require("multer");
var path = require("path");
var http = require("http");
const nodemailer = require("nodemailer");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/"));
// app.use(express.static(path.join(__dirname, "index.html")));
app.get("/", function (req, response) {
  response.sendFile(__dirname, "index.html");
});

const upload = multer();

app.post("/img", upload.none(), function (req, res, next) {
  // req.body contains the text fields
  // console.log(req.body.file); // Logs form body values
  const transporter = nodemailer.createTransport({
    host: "",
    service: "",
    // port: 465,
    secure: true,
    auth: {
      user: "",
      pass: "",
    },
    tls: { rejectUnauthorized: false },
  });
  var mailOption = {
    from: "",
    to: "",
    subject: "testing",
    html: `
        no response jsPdf, Thanks.`,
    attachments: [
      {
        filename: "fix.pdf",
        content: req.body.file,
        contentType: "application/pdf",
        encoding: "base64",
      },
    ],
  };
  transporter.sendMail(mailOption, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("email sent:" + info.response);
    }
  });
  res.redirect("/");
  // res.json({ message: "File(s) uploaded successfully" });
});

http.Server(app).listen(3000, function () {
  console.log("Server running on port 3000");
});
