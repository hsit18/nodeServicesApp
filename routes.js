var categoriesModel = require('./model/categories');
var productsModel = require('./model/products');
var CONSTANT = require('./utilities/Constant').CONSTANT;

var api_key = 'SEM3A7F0D632069FC1FD9D181BC4A8B08C0D';
var api_secret = 'MDIyMTlkODhiMTFhMjhjMjM5ZTA2YTQ3MGZmYjBmNGQ';
var sem3 = require('semantics3-node')(api_key,api_secret);

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
module.exports = function(app) {
    
    categoriesModel.methods(['get', 'post', 'delete']);
    categoriesModel.register(app, '/api/categories');

    productsModel.methods(['get', 'post', 'delete']);
    productsModel.register(app, '/api/products');    

    app.get('/api/getCategories', function(req, res){
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

    app.get('/api/ecom/getCategoriesById/:catId', function(req, res){
        sem3.products.categories_field( "parent_cat_id", req.params.catId );
        sem3.products.get_categories(
           function(err, products) {
              if (err) {
                 console.log("Couldn't execute query: getCategoriesById"+ err);
                 res.json({status:false, msg: err});
                 return;
              } 
              res.json(products);
           }   
        );
    });

    app.get('/api/searchProduct/:searchParam', function(req, res){
        sem3.products.products_field( "search", req.params.searchParam );
        sem3.products.get_products(
           function(err, products) {
              if (err) {
                 console.log("Couldn't execute query: searchProduct"+err);
                 res.json({status:false, msg: err});
                 return;
              } 
              res.json(products);  
           }   
        );
    });

    app.get('/api/ecom/getProductsByCatId/:catId', function(req, res){
        sem3.products.products_field( "cat_id", req.params.catId );
        sem3.products.get_products(
           function(err, products) {
              if (err) {
                 console.log("Couldn't execute query: get_products"+ err);
                 return;
              } 
              res.json(products);  
            console.log("Results of query:\n" + JSON.stringify( products )); 
           }   
        );
    });

    app.use('/', function(req, res) {       
        res.send('Heroku testing'); 
       // res.sendFile(__dirname + '/public/index.html');
    });
};