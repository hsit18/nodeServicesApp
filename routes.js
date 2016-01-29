var categoriesModel = require('./model/categories');
var CONSTANT = require('./utilities/Constant').CONSTANT;
var products = [
    {
        id: 1,
        categoryId: 1,
        name: 'Product One',
        description: 'Description for product One'
    },
    {
        id: 2,
        categoryId: 1,
        name: 'Product Two',
        description: 'Description for product Two'
    },
    {
        id: 3,
        categoryId: 1,
        name: 'Product Three',
        description: 'Description for product Three'
    },
    {
        id: 4,
        categoryId: 1,
        name: 'Product Four',
        description: 'Description for product Four'
    },
    {
        id: 5,
        categoryId: 1,
        name: 'Product Five',
        description: 'Description for product Five'
    },
    {
        id: 6,
        categoryId: 2,
        name: 'Product Six',
        description: 'Description for product Six'
    },
    {
        id: 7,
        categoryId: 2,
        name: 'Product Seven',
        description: 'Description for product Seven'
    },
    {
        id: 8,
        categoryId: 2,
        name: 'Product Eight',
        description: 'Description for product Eight'
    },
    {
        id: 9,
        categoryId: 2,
        name: 'Product Nine',
        description: 'Description for product Nine'
    },
    {
        id: 10,
        categoryId: 3,
        name: 'Product Ten',
        description: 'Description for product Ten'
    },
    {
        id: 11,
        categoryId: 3,
        name: 'Product Eleven',
        description: 'Description for product Eleven'
    },
    {
        id: 12,
        categoryId: 3,
        name: 'Product Twelve',
        description: 'Description for product Twelve'
    }
];

module.exports = function(app) {
    
    categoriesModel.methods(['get', 'post', 'delete']);
    categoriesModel.register(app, '/api/categories');

    app.get('/api/getCategories', function(req, res){
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

    app.get('/api/getProductByCategoryId/:catId', function(req, res){

        console.log("CategoryId: "+ req.params.catId);
        res.json(products);
    });

    app.get('/api/getProductDetail/:prodId', function(req, res){
        
        console.log("productId: "+ req.params.prodId);
        res.json(products);
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