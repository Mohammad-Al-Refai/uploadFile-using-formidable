const express = require("express");
const fs=require("fs")

const formidable= require("formidable")

const PORT = process.env.PORT === undefined ? 5000 : process.env.PORT;
const app = express();
const form = formidable();
const router = express.Router();
app.use("/files", router);
app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});

app.post("/upload", (req, res,next) => {
  form.parse(req,(err,title,file)=>{
    console.log({err,title,file})
    fs.writeFileSync(__dirname+"/uploaded_files/"+file.file.name,fs.readFileSync(file.file.path))
    
    next()
  })
  res.send({stateFile:"File is uploaded"})
  

  

});
router
  .get("/home", (req, res) => {
    res.sendFile(__dirname + "/view/index.html");
  })
  .get("/js", (req, res) => {
    res.sendFile(__dirname + "/view/main.js");
  })
  .get("/css", (req, res) => {
    res.sendFile(__dirname + "/view/style.css");
  });

app.listen(PORT, () => {
  console.log("Server is running", PORT);
});
