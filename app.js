// object variable using const
const assignment1 = {
    name: "Fernando Medrano",
    programName: "Calculator"
};

// string variable
let welcome = "Hello! This is a program designed for IMED-2351-001.";

// global variable
var result;

// variable values (will output to console)
var number1 = 50;
var number2 = 30;

{
    // block variable
    var number3 = 20;

    // mathematical operation for the variables
    result = number1 + number2 + number3;
}

// string variable logged out to console
console.log(welcome);

// output variables and result to console
console.log("This ", assignment1.programName, "was designed by ", assignment1.name, ".");
console.log("The numbers ", number1, ", ", number2, ", and ", number3, " add up to ", result);
