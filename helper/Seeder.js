var restful = require('node-restful');
var async = require('async');
var mongoose = restful.mongoose;
var categoriesModel = require('../model/categories');
var productsModel = require('../model/products');

var CONSTANT = require('../utilities/Constant').CONSTANT;

function PopulateDB() {
    this.writeToDB();
}

PopulateDB.prototype.writeToDB = function () {
    return new Promise(function (resolve, reject) {
        console.log('default values instertion');

        var locals = {};

        var categories = [ {
            "fakeId": 1,              
            "description" : "category1 description",
            "name" : "category1"
        },{             
            "fakeId": 2,   
            "description" : "category2 description",
            "name" : "category2"
        }];

        var products = [{
            "categoryId" : 1,
            "description" : "product1 of category1 description",
            "name" : "product1"
        },{
            "categoryId" : 1,
            "description" : "product2 of category1 description",
            "name" : "product2"
        },{
            "categoryId" : 1,
            "description" : "product3 of category1 description",
            "name" : "product3"
        },{
            "categoryId" : 2,
            "description" : "product4 of category2 description",
            "name" : "product4"
        },{
            "categoryId" : 2,
            "description" : "product5 of category2 description",
            "name" : "product5"
        },{
            "categoryId" : 2,
            "description" : "product6 of category2 description",
            "name" : "product6"
        }];

        async.series([function(callback){
            categoriesModel.find({}, function(err, addedCategories){
                if(addedCategories.length == 0){
                    locals[CONSTANT.TABLES.CATEGORIES] = {};
                    async.forEach(categories, function(eachcategory){
                        var categoryModelObj = new categoriesModel(eachcategory);
                        categoryModelObj.save(function(err, category){
                            console.log('Category Inserted: ' + category._id);
                            locals[CONSTANT.TABLES.CATEGORIES][category.fakeId] = category._id;
                            if(err) {
                                callback();    
                            }                            
                        });                           
                    });
                    callback(); 
                }else{
                    callback();
                }
            });
        }, function(callback){
            productsModel.find({}, function(err, addedProducts){
                if(addedProducts.length == 0){
                    locals[CONSTANT.TABLES.PRODUCTS] = {};
                    async.forEach(products, function(eachproduct) {
                        
                        if(eachproduct.categoryId) {
                            eachproduct.categoryId = locals[CONSTANT.TABLES.CATEGORIES][eachproduct.categoryId];
                        }
                        var productModelObj = new productsModel(eachproduct);
                        productModelObj.save(function(err, product){
                            console.log('Product Inserted: ' + product._id);
                            if(err) {
                                callback();    
                            }
                        });                         
                    });
                    callback();
                } else {
                    callback();
                }
            });
        }
		], function (results) {
            resolve(results);
        });
    });
};

module.exports = {
    'PopulateDB': new PopulateDB()
};