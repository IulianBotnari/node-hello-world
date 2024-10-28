console.log("Hello node js");


const pin = 666
console.log(pin);

const userPin = process.env.API_KEY
console.log(userPin);

const argument = process.argv.splice(2)
console.log(argument);


console.log(argument);

if (argument[0] === "admin" && pin == userPin){
    console.log("Welcome Admin");
    
}
else{
    console.log("Access restricted");
    
}