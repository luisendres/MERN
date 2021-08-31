// Extra------------------------------------------------------------->
// GIVEN
console.log(example);
var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

console.log(example);
let example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// console.log(example);
// let example = "I'm the example!";


// 1------------------------------------------------------------->
console.log(hello);
var hello = 'world';    
// AFTER HOISTING BY THE INTERPRETER
// var hello;    
// console.log(hello);
// var hello = 'world';   

// 2------------------------------------------------------------->
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// AFTER HOISTING BY THE INTERPRETER
// var needle;
// neddle = 'haystack';
// function test(){
//         var needle = 'magnet';
//         console.log(needle);
// }
// test(); // prints out "magnet"

// 3------------------------------------------------------------->
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// AFTER HOISTING BY THE INTERPRETER
// var brendan;
// brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan); // prints "super cool" because the function print() never gets called

// 4------------------------------------------------------------->
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// AFTER HOISTING BY THE INTERPRETER
// var food;
// food = 'chicken';
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// console.log(food);
// eat();
//console logs "chicken" and then "half-chicken" after the function call

// 5------------------------------------------------------------->
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// AFTER HOISTING BY THE INTERPRETER
// var mean;
// mean();
// console.log(food);
// mean = function() {
//         food = "chicken";
//         console.log(food);
//         var food = "fish";
//         console.log(food);
// }
// console.log(food);
// throws and error because it doesn't see that mean is a function yet;

// 6------------------------------------------------------------->
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// AFTER HOISTING BY THE INTERPRETER
// var genre;
// function rewind() {
//         genre = "rock";
//         console.log(genre);
//         var genre = "r&b";
//         console.log(genre);
// }
// console.log(genre);
// genre = "disco";
// rewind();
// console.log(genre);
// console logs undefined first cause of hoisting the variable "genre" then sets the varriable.
// then console logs "rock" then "r&b" after the function call;
// finally console logs disco at the end;

// 7------------------------------------------------------------->
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// AFTER HOISTING BY THE INTERPRETER
// var dojo;
// function learn() {
//         dojo = "seattle";
//         console.log(dojo);
//         dojo = "burbank";
//         console.log(dojo);
// }
// dojo = "san jose";   //sets a variable
// console.log(dojo);   //console logs "san jose"
// learn();     //console logs "seattle", then "burbank inside the function
// console.log(dojo); //console logs "san jose"



// 8------------------------------------------------------------->
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// AFTER HOISTING BY THE INTERPRETER
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// error cause dojo is a constant and can't be change from a list to a string