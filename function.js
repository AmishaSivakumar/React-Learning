// Block of codes to complete a specefied program with "function" keyword
// Fuctions has the ability to act as a value >>> So that js has first class functions
// Functions are the heart of Js

// Function Declaration or statement
function getRequest(){
    console.log(name)
}
 
// Function expression / anonymous fnctn
let getData = function(){
    console.log("getData");
}

//Named function
let getDetails= function details(value){ //parameter >> pass when fctn is declaring
    console.log("getDetails");
}
console.log(getDetails);
getDetails() //>> function calling
getDetails(getData) //argument >> pass when fctn is calling