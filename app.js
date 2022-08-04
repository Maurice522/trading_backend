var express = require("express");
var app = express();
var path = require("path");
var PORT = process.env.PORT||3000;
const fetch = require("node-fetch");
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static(__dirname + "/public"));


app.get("/partnerlogin", async(req, res)=>{
    const body = {
        Email_id: "nipun.walia2018@gmail.com",
        ContactNumber: "8744961008"
    };

    const userId = req.body.userId;
    const password = req.body.password;

    // console.log(userId,password);
    //	xcTAozElUeX
    //	umU8TSjjCf8

    const response = await fetch('https://dataservice.iifl.in/openapi/prod/LoginRequestMobileForVendor', {
	method: 'post',
	body: JSON.stringify(body),
	headers: { 
        "Access-Control-Allow-Origin":"*",
        'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS',
        'Content-Type': 'application/json',
        "appName":"IIFLMarNIPUN W",
        "appVer":"1.0",
        "key":"Nv376vjk5tDFRzodNkzBdX40VbG3WA5W",
        "osName":"WEB",
        "requestCode":"IIFLMarRQLoginForVendor",
        "userId":userId,
        "password":password}
});
const data = await response.json();

res.send(data);
});


app.listen(PORT, (req, res) => {
  console.log("Server up and running at port "+PORT);
});
