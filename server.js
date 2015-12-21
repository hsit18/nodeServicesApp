var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var serviceapp = express();

serviceapp.use(bodyParser.json());
serviceapp.use(bodyParser.urlencoded({
    extended: true
}));

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

serviceapp.use(allowCrossDomain);

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', function(req, res) {
    console.log("Page call");
    res.sendFile(__dirname + '/dist/index.html');
});

serviceapp.post('/api/login', function(req, res) {
    console.log("Api call");
    var userName = req.body.userName;
    var password = req.body.password;

    if (userName === 'test@test.com' && password === 'test123') {
        var loginServiceObj = {
            LoginStatus: true,
            msg: 'valid user',
            id: 1222
        };
    } else {
        var loginServiceObj = {
            LoginStatus: false,
            msg: 'invalid user'
        };
    }

    res.json(loginServiceObj);
});

serviceapp.post('*', function(req, res, next) {
    var err = new Error();
    err.status = 404;
    err.message = "endpoint not found";
    next(err);
});

// handling 404 errors
serviceapp.use(function(err, req, res, next) {
    console.log(err);
    if (err.status != 404) {
        return next();
    }
    res.status(err.status).send(err.message || '** no unicorns here **');
});

app.listen(8001);
serviceapp.listen(8002);
console.log('Server running on port: 8001');
