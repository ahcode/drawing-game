var express = require("express");
var app = express();
var bodyParser  = require("body-parser");

var iocontroller = require("./websockets");
var router = require("./router");
var sessionMiddleware = require("./auth/sessions").middeware;
var errorMiddleware = require("./errors/Error");

app.use(errorMiddleware);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(sessionMiddleware);

app.use(express.static('public'));
app.use(router);

//Redirect to Angular index if path is not detected
app.use((req, res) => res.sendFile('index.html', {'root': './public'}));

if(process.env.SERVER_HTTPS == "TRUE"){
    //HTTPS Enabled
    var fs = require("fs");
    var https = require("https");
    var privateKey  = fs.readFileSync(process.env.SSL_KEY, 'utf8');
    var certificate = fs.readFileSync(process.env.SSL_CRT, 'utf8');
    var credentials = {key: privateKey, cert: certificate};
    var server = https.createServer(credentials, app);
}else{
    //HTTPS Disabled
    var http = require("http");
    var server = http.createServer(app);
}

var io = require("socket.io")(server);
io.on('connection', iocontroller);

//Launch Server
server.listen(parseInt(process.env.SERVER_PORT) || 5200, function() {
    console.log("Drawing-Game server running...");
});