// Import MySQL connection.
var connection = require("../config/connection.js");

//export orm
var orm = {
  all: function(table, cb) {
  var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  select: function(table, condition, cb) {
    var queryString = "SELECT * FROM ?? WHERE ?";
    connection.query(queryString, [table, condition], function(err, result) {
        if (err) {
          throw error;
        }  
        cb(result);
    });
  },
  create: function(table, vals, cb) {
    var queryString = "INSERT INTO ?? SET ?";
    connection.query(queryString, [table, vals], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  update: function(table, objVals, condition, cb) {
    var queryString = "UPDATE ?? SET ? WHERE ?";
    connection.query(queryString, [table, objVals, condition], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};





// Export the orm object for the model.
module.exports = orm;