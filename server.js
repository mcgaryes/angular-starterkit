var koa = require("koa");
var serve = require("koa-static");

var app = koa();
var www = serve(__dirname + "/app");
var port = process.env.HOST || 5000;

app.use(www).listen(port);