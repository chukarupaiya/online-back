const mysql = require("mysql2");
require("dotenv").config();

exports.db = mysql.createConnection({
  host: 'sql6.freesqatabase.com',
  user:'sql6582494',
  password:'PSBI2zQEn7',
  database:'sql6582494',

});
