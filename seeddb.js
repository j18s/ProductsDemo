let connection = require('../dbconnection'); 

// connect to the MySQL server
connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
 //insert into products (name, description, price, currency) values ('milk','dairy products', 2.12, 'EUR');
  //noinspection JSAnnotator
    let createProducts = `create table if not exists products(
                          id int Primary Key AUTO_INCREMENT,
                          name TEXT,
                          description TEXT,
                          price float,
                          currency char(3)
                      )`;
 
  connection.query(createProducts, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });
 
  connection.end(function(err) {
    if (err) {
      return console.log(err.message);
    }
  });
});