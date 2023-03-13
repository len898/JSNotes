//Basic Function
function sum(x,y){
    return x+y;
}

function multiple(x,y){
    return x*y;
}

console.log(sum(10,20));
console.log(multiple(10,20));

//Strings can be double or single quote
"String 1";
'string 2';

console.log("String 1".length);

let userName = "Lennart";
console.log(userName.length);
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());

console.log(userName[1]);
console.log(userName[userName.length-2]);

//Can use .at() to use negative indexing like python

console.log(userName.charAt(-1));

//Substring 2 paramters star and end, end being exclusive
console.log(userName.substring(0, userName.length/2));
console.log(userName.substring(userName.length/2));

//Can use + for string concatenation, can also use += in the traditional way
let lastName = "Richter";
let fullName = userName + " " + lastName;
console.log(fullName);

//Template strings use backsterik character `
`This is a template string`;
let text = `Simple 
multiline
string`;

//Template strings support interpolation
let newName = "Marielle";
console.log(`I am friends with ${newName}`);

//Exercide
function capitalize(word){
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

let weirdName = "heLIos";
console.log(capitalize(weirdName));

let num1 = 1_000;
let num2 = 10_00;


//Can Convert number to string
console.log(num1.toString() + " is the  answer");

//Nan equals not a number

//Can use parseInt to go from string to number
//Second parameter is the base you want to convert into
let stringNum = "45";
console.log(Number.parseInt(stringNum, 10));

//Modulo does remainder as expected
console.log(10%3) //=1

//Math object has some important methods
console.log(Math.round(3.3));
console.log(Math.floor(2.3));
console.log(Math.ceil(2.8));

//Variables with let or const
let num10 = 10;
const lang = "German";

// if(num10 === 10){
//     return true;
// }
// else{
//     return false;
// }

//=== 3 equals is better because it checks type and value

//Arrays

const users = ["Lenni", "test"]; //Const only means the data type stays an array can still change/append vals
console.log(users.length);
console.log(users[1]);
console.log(users.at(-1));
users.push("Another Name"); //Push returns new length, and appends item
console.log(users.at(2));

//Looping over arrays
users.forEach(function(user){
    console.log(user);
});
//Above is a callback function, the function(user) get called for every user in users