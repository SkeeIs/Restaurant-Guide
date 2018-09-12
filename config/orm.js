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
    connection.query(queryString, [table, condition], function (error, result) {
        if (error) throw error;
        cb(result);
    });
  },
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};





// Export the orm object for the model (cat.js).
module.exports = orm;