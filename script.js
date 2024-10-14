
let selections = document.getElementsByClassName("check");
let quantity = document.getElementsByClassName("quantity");

// create obj name and price 
selections[0].name = "Pepperoni";
selections[0].price = 12.00;
selections[1].name = "Meat Lovers";
selections[1].price = 15.00;
selections[2].name = "Cheese";
selections[2].price = 12.00;
selections[3].name = "Supreme";
selections[3].price = 18.00;

function calcOrder(){
    var total = 0;
    var orderDetails = "";
    for(var i = 0; i < selections.length; i++){
        // check if checkboxes are checked or not
        
        if(selections[i].checked){
            var itemTotal = quantity[i].value * selections[i].price;
            
             orderDetails += "<br> You ordered a " + selections[i].name + " pizza." +
             " Quantity: " + quantity[i].value + ". <br> Price: $ " + itemTotal.toFixed(2);
            
            total += itemTotal;
   
        
        
            document.getElementById("results").innerHTML = orderDetails + 
                                                           "<br>Your total order is: $" + total.toFixed(2);
        
        }
}  
}
    
    
