var categoriesModel = require('./model/categories');
var CONSTANT = require('./utilities/Constant').CONSTANT;

module.exports = function(app) {
    
    categoriesModel.methods(['get', 'post', 'delete']);
    categoriesModel.register(app, '/api/categories');

    app.get('/api/getCategories', function(req, res){
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        var categories = [
                    {
                        id: 1,
                        name: 'Category One'
                    },
                    {
                        id: 2,
                        name: 'Category Two'
                    },
                    {
                        id: 3,
                        name: 'Category Three'
                    }
                ];
        res.json(categories);

    });

    app.post('/api/login', function(req, res) {
        
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

    app.use('/', function(req, res) {       
        res.send('Heroku testing'); 
       // res.sendFile(__dirname + '/public/index.html');
    });
};