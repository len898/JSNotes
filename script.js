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
