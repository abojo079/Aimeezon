The app should then prompt users with two messages.
​
   * The first should ask them the ID of the product they would like to buy.

    //Question 1: "What is the ID number of the product you would like to buy?"
    results should appear after the ID number is entered

   * The second message should ask how many units of the product they would like to buy.
   
   //Question 2: "How many units would you like to buy?
   number entered

7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
​
   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.
​
8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.
​
- - -
​
   