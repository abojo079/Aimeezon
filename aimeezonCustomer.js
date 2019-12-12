
const mysql      = require('mysql');
const inquirer   = require('inquirer');
const connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user: 'root',
  password : '',
  database : 'aimeezon'
});
 
connection.connect(function(err){
  if (err) throw err;
console.log(`connected as id ${connection.threadId}`)
customerQuery();

});

function customerQuery() {

         console.log('Hello!!, welcome to Aimeezon!');

  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (let i = 0; i < res.length; i++) {
      console.log(`${res[i].item_id} | ${res[i].product_name} | ${res[i].department_name} | ${res[i].price}| ${res[i].stock_quantity}`);

    }
inquirer.prompt ([
    {
    type: 'input',
    name: 'item_id',
    message: 'Please provide the item number of the product you would like to order?',
    filter: Number,   
    },
 
  {
    type:'input',
    name: 'quantity',
    message: 'What is the quantity of your order?',
    filter: Number
},
  
  ]).then(function(input){

const item = input.item_id;
const quantity = input.quantity;
if (quantity <= productData.stock_quantity) {
					console.log('Congratulations, the product you requested is in stock! Placing order!');




  }

  connection.end();
});
}

