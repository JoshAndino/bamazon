var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "bamazon"
  });

connection.connect(function(err){
    console.log(err)
    if(err)
    {
        console.error("error connect" + err.stack)
    }
    productDisplay();
});

function productDisplay (){
    connection.query("SELECT * FROM bamazon.inventory", function (err,response){
        if(err) throw err
        console.table(response)
        customerPrompt(response)
    })
}

function customerPrompt (){
    inquirer.prompt([{
        name: "inventory",
        message: "Please enter the ID number of the item you would like to purchase",
        type: "input",
    },
    {
        name: "amount",
        message: "How many units would you like to purchase?",
        type: "input",
    }
])
.then(function(data){
    var id = data.inventory;
    var amount = data.amount;
    purchase(id, amount);
})
};

function purchase (item,quantity)
{
    connection.query(`SELECT * FROM bamazon.inventory WHERE id = ${item}`, function(err,response){
        if(err) throw err.stack;
        console.log(response);
        if(response[0].stock_quantity >= quantity){
            var cartTotal = response [0].price * quantity
            var left = response [0].stock_quantity - quantity

            console.log(`You have purchased ${quantity} ${response[0].product_name}\n Your cart total is ` + cartTotal)
            updateDB(item,left)
        } else if(response[0].stock_quantity < quantity) {
            console.log(`We only have ${response[0].stock_quantity} of ${response[0].product_name}`)
            // customerPrompt();
        }
        // console.log(response)
        customerPrompt(response)
    });
};

function updateDB(id,quantity){
    connection.query(`UPDATE products SET stock_quantity = ${quantity} WHERE id = ${id}`, function (err,response){
        if(err)throw err.stack;
        console.log("Products update");
        productDisplay();
    })
}