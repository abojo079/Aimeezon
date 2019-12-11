
const mysql      = require('mysql');
const inquirer   = require('inquirer');
const connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user: 'root',
  password : 'Amang0o79**',
  database : 'aimeezon'
});
 
connection.connect(function(err){
  if (err) throw err;
console.log(`connected as id ${connection.threadId}`)
customerQuery();

});

function customerQuery() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (let i = 0; i < res.length; i++) {
      console.log(`${res[i].item_id} | ${res[i].product_name} | ${res[i].department_name} | ${res[i].price}| ${res[i].stock_quantity}`);
    }
 
  });
  connection.end();
}

