var categoriesModel = require('./model/categories');
var productsModel = require('./model/products');
var CONSTANT = require('./utilities/Constant').CONSTANT;
var pkgJson = require('./package.json');
var sem3 = require('semantics3-node')(pkgJson.semanticsApi.api_key, pkgJson.semanticsApi.api_secret);

var tempEcommerceData = require('./tempData/ecommerceData.js');

categories = tempEcommerceData.categories;
products = tempEcommerceData.products;

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
                 console.log("Couldn't execute query: getProductsByCatId"+ err);
                 return;
              } 
              res.json(products);  
           }   
        );
    });

    app.get('/api/ecom/getProductDetailById/:ProdId', function(req, res){
        sem3.products.products_field( "sem3_id", req.params.ProdId );
        sem3.products.get_products(
           function(err, products) {
              if (err) {
                 console.log("Couldn't execute query: getProductDetailById"+ err);
                 return;
              } 
              res.json(products);  
           }   
        );
    });

    app.use('/', function(req, res) {       
        //res.send('Heroku testing'); 
        res.sendFile(__dirname + '/public/index.html');
    });
};