let db = require('../dbconnection');
let validate = require('../helper/validate');
let Products = {
    getProductByProductName: function(name, callback) {
        return db.query("Select * from products where name=", [id], callback);
    },
    getAllProducts: function(callback, sortByField='Id', sortByOrder='Asc') {
        console.log('lllldddd');
        return db.query("Select * from products order by " + sortByField + " " + sortByOrder, callback);
    },  
    getProductById: function(id, callback) {  
        return db.query("select * from task where Id=?", [id], callback);  
    },  
    addProduct: function(Product, callback) {
        if (validate(Product)=== true)
            return db.query("Insert into products (name, description, price, currency) values(?,?,?,?)",
            [Product.name, Product.description, Product.price, Product.currency], callback);
        else
            callback();
    },  
    updateProduct: function(id, Product, callback) {
        if (validate(Product)=== true)
            return db.query("update products set name=?,description=?,price=?,currency=? where Id=?",
                [Product.name, Product.description, Product.price, Product.currency, id], callback);
        else {
            callback();
        }
    }
};  
module.exports = Products;