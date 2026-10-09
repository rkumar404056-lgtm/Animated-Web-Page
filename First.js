console.log("Roshan");
FullName = "Roshan Kumar Gupta";
console.log("FullName");
console.log(FullName);

c = 250; // bad way to create Variables 

var a = 100;
console.log(a);

let b = 200; // used way to create Variables
console.log(b);

// let a;

const d = 1000;
console.log(d);

// let d = 1992;
// console.log(d);

// console.log(e); 

// let e = 89;

console.log(nm);
var nm = "Roshan";

// console.log(age);
// let age = 25; 

let t =  20; // Premitive Datatype
let z = t;
console.log(z);
z = 0;
console.log(t);

let r = [1, 2, 3]; // Reference Datatype
let x = r;
console.log(x);
x.pop();
console.log(r)

let k = 3;
let h = k++;                                                     
console.log(k, h);

// if else | else if | else

function getGrade(score){
    if (score >= 90 && score <= 100) return 'A+';

    if (score >= 80 && score <= 89) return 'A';

    if (score >= 70 && score <= 79) return 'B';

    if (score >= 60 && score <=69) {
        return 'C';
    }

    else if (score >= 33 && score <= 59) {
        return 'D';
    }

    else if (score >= 0 && score <= 32){
        return 'Fail';
    }

    else {
        return 'Invalid Marks';
    }
}

console.log(getGrade(99))

// Switch Case

// Loops = for, while, foreach

/* From where to go(Starting) ~> At where to go(Ending) ~> How to go(Steps ?) = for loop

Ex:- (1 - 100) = for loop

*/

/* From where to go ~> When to stop ~> How to go = while loop
No garuntee when happen(Stop)

Ex:- Stop when hello appears = while loop
*/

// 1. Print numbers from 1 to 10 using a for loop.

for (let i = 1; i<11; i++) {
    console.log(i);
}

// 2. Print numbers from 10 to 1 using while loop.

let i = 10;
while (i > 0) {
    console.log(i);
    i--;
}

// 3. Print even numbers from 1 to 20 using for loop.

for(let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
    console.log("\n",i);
    }
}


// 4. Print odd numbers from 1 to 15 using while loop.

{
let i = 1;
while (i < 16) {
    if (i % 2 === 1) {
        console.log(i);
    }
    i++;
}
}

// 5. Print multiolication table of 5.

for (i = 1; i <= 10; i++) {
    console.log("\n",5 * i);
}

// 6. Find the sum of numbers from 1 to 100 using a loop.

let sum = 0;
for(let i = 1; i < 101; i++) {
    sum = sum + i;
}
console.log(sum);

// 7. Print all numbers between 1 to 50 that are divisible by 3.

for(let i = 1; i < 51; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

/* // 8. Ask the user for a number and print wether each number from 1 to 100 is even or odd.

let val = prompt("Give a number");
for(let i = 1; i<=val; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    }
    else {
        console.log(`${i} is odd`);
    }
} // Run it on console screen */

// 9. Count how many numbers between 1 to 100 are divisible by both 3 and 5.

for (let i = 1; i<101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

// Functions

// Types of Functions:-

function hi() { // (Function  declairation / statemnt)
    console.log("hi");
}

hi();

let fun = function() { // (Function Expression)

}

let fnc = () => { // (Fat Arrow Function)
    console.log("hmmmm");

}

function dance(value1) { // value1 is a parameter
    console.log(`${value1} is dancing`);
}

dance("Horse");
dance("Elephant");
dance("My friend");

function add(v1, v2) { // v1 and v2 are parameters
    console.log(v1 + v2);
}

add(100, 100); // 100 and 200 are arguements

function abcdef(a, b, c, ...value) {
    console.log(a, b, c, value);
}

abcdef(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// IIFE = Imediately Invoked Function Expression
(function(){

})();

// 1. What is the deference bw function declaration and expression in terms of hoisring ?

// 2. Use rest parameter to accept any number of scores and return the total.

function scores(...sc) {
    let total = 0;
   sc.forEach(function(Value){ // forEach is used for each value we have
    total = total + Value;
   });
   return total;
}

console.log(scores(10, 20, 30, 40, 50)); 

// 3. What does it mean whn we say "functions are first-class citizens"?

// 4. Can you assign a function to a variable and then call it? Show how.
 let o = function () {

}

o();

// 5. Pass a function into another function and execute it inside.

function abcd(val){
    val();
}

abcd(function(){
    console.log("Hmm");
})

// 6. What is higher order function?

// 7. What is closure? When it is created?

// Write a BMI calculator.

function bmi(weight, height){
   return weight / (height*height);
}

console.log(bmi(56, 1.7).toFixed(2));

// Discount Calculator

// Array

let arr = [1, 2, 3.5, 5.4809, 6]
arr[2] = 100; // Changed the 2nd value which is 3.5 to 100
console.log(arr);

// Array Methods

// push:-
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr1.push(20000.500)
console.log(arr1);

// pop:-
arr1.pop();
console.log(arr1);

// shift
arr1.shift();
console.log(arr1);

// unshift:-
arr1.unshift(1000);
console.log(arr1);

// splice:-
arr1.splice(8, 1);
console.log(arr1);

// slice:-
let narray = arr1.slice(0, 5);
console.log(narray); 

// reverse:-
arr1.reverse();
console.log(arr1);

// forEach
arr1.forEach(function(val){
    console.log(val);
})

console.log(arr1);

// map:- Use when we hve to create a new array on basis of old array data. Necessary to return otherwise it will act like forEach and give undefined.
let neawarray1 = arr1.map(function(value){
    return 100;
})

console.log(neawarray1);

// filter:- Same as map . Must to return true or false. True = value will go int the new array. False = Value will not go in neaw array.
let newarra2 = arr1.filter(function(val){
    if (val > 4) return true; // Here values which are greater than 4 will go in new array.
})

console.log(newarra2);

// reduce:- Gives one number from all number in array like after adding all array numbers we will have single number.
let ans = arr1.reduce(function(hmm, value2){
    return hmm + value2;
}, 0);

// find:- 
// some:-
// every:-

// 1. Create an array with 3 fruits and print the second fruit.
let fruits = ["Mango", "Guava", "Indian Goosberry"];
console.log(fruits[1]);

// 2. Add Orange at the and and Banana at the begining of fruits array.
fruits.push("Orange");
fruits.unshift("Banana");
console.log(fruits);

// 3. Replace Banana with Apple in that array above.
fruits.shift();
fruits.unshift("Apple");
console.log(fruits);

// Defr bw push and unshift.

// Using amethod remove the last item from this array.
let = numbers100 =[1, 20, 300, 4000, 50000, 600000, 6999999]
numbers100.pop();
console.log(numbers100);

// Insert Red and Blue at index 1 in this array.
let colors = ["Yellow", "Orange", "Green"];
colors.splice(1, 0, "Red", "Blue");
console.log(colors);

// Extract only the middle 3 elements from this array.
let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let removed = items.slice(4, 7);
console.log(removed);

// Sort tgis array alphabetically and then reverse it.
let names100 = ["Meera", "Arjun", "Radha"];
names100.sort();
console.log(names100);
names100.reverse();
console.log(names100);

// Solve the all left quetions of array. Must.















