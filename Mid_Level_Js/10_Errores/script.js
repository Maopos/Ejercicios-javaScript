
try {
    throw {
        name: "Error",
        message: "This is an error message",
        number: 123,
        stack: "Error: This is an error message\nError: This is an error message\nError: This is an error message\nError: This is an error message\nError: This is an error message\nError: This is an error"
    }
     
} catch (error) {
    console.log("1. " + error.name);
    console.log(error.message);
    console.log(error.number);
    console.log(error.stack);
    console.log('');
    
}


try {
    variable;
    
} catch (error) {
    console.log("2. " + typeof error);
    console.log(error.name);
    console.log('Error: ' + error.message);
}

console.log('');
console.log('3.');

let fruta = "pear";

switch (fruta) {
    case "banana": console.log('Banana');
    break;
    case "apple": console.log('Apple');
    break;
    case "orange": console.log('Orange');
    break;
    case "pear": console.log('Pear');
    break;

    default:
        console.log('Ninguna');
        
        break;
}

if (fruta === "banana") console.log('Banana');
else if (fruta === "apple") console.log('Apple');
else if (fruta === "orange") console.log('Orange');
else if (fruta === "pear") console.log('Pear');
else console.log('Ninguna');