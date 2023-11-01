const PORT = 5000;
//creating the express app
let express= require("express");
let app = express();
app.use("/", express.static("public"));

//creating the http server - this is a new step!
// let http = require("http");
// let server = http.createServer(app);

//run the app on port 5000
app.listen(PORT, () => {
  console.log("server on port ",PORT);
})
