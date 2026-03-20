let cart = []
let total = 0

function addToCart(item,price){

cart.push(item)

total += price

let li = document.createElement("li")
li.innerText = item + " - $" + price

document.getElementById("cartItems").appendChild(li)

document.getElementById("total").innerText = total

}


function login(){

let user = document.getElementById("username").value
let pass = document.getElementById("password").value

if(user === "admin" && pass === "1234"){

document.getElementById("loginMsg").innerText = "Login Successful"

}

else{

document.getElementById("loginMsg").innerText = "Invalid Login"

}

}


function bookTable(){

let name = document.getElementById("name").value
let date = document.getElementById("date").value
let people = document.getElementById("people").value

if(name && date && people){

document.getElementById("bookingMsg").innerText =
"Table booked successfully for " + name

}

else{

document.getElementById("bookingMsg").innerText =
"Please fill all fields"

}

}