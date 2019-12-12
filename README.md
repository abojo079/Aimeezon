* Created an Amazon-like storefront which will take in orders from customers and deplete stock from the store's inventory. 
* Used the following node modules: mySQL and inquirer.
* Process Description:
    1. User is welcomed and is shown the inventory
    2. User is asked to select the item number they would like to purchase
    3. User is asked to add a quantity
    4. If user doesnt exceed the quantity available their order is processed
    5. If the user exceeds the quantity available they are asked to select another quantity
    6. Upon completing their transaction, sql will be updated.