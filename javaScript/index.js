console.log("Lahiru_Mudith");

//Alert
// alert("Lahiru");

document.write("Kalapugama" + "\n");
document.writeln("Moronthuduwa" + "<br>");
document.write("<h1>" + "Panadura" + "</h1>");

// Global variable
var name = "Lahiru";

// Local variable
{
    var town = "Panadura";
}



document.write("<h3>" + "Lahiru" + "\n");
document.writeln("Mudith" + "\n");
document.writeln("Madushan" + "\n" + "<br>");
document.write("age = 17" + "<br>");
document.write("Brithday : 2006.05.24" + "<br>");
document.write("Panadura" + "<h3>" + "<br>");


document.write(
    "<h3>" + "Name: Lahiru" + "\n" + "Mudith" + "\n" + "Madushan" + "<br>" + "age: 17" + "<br>" + "Brithday: 2006.05.24" + "<br>" + "Town: Panaduara" + "</h3>"
);


// Object
const obj = {
    name: "Lahiru Mudith",
    age: "45",
}

// Array
const array = ["Lahiru", "Mudith"];

// var / let / const

// var 
// can ewdeclared
var a = "run";
var a = "run-2";
console.log(a);

{ var b = 10 };
console.log(b);
//re assign
a = "run-3";
console.log(a);

//Let
//can't redecleared
{ let b = "50" };
console.log(b);

let c = "lahru";
// let c = "mudith";
console.log(c);
c = "mudith";
console.log(c);

// const 
const l = "lahiru";
// const l = "mudith";
console.log(l);
{ const n = "20" }
// console.log(n);
// l = "mudit";
// console.log(l);

// Arithmetic Oparetors
const m = 22;
const q = 11;

const addition = m + q;
console.log(addition);

const subtraction = m - q;
console.log(subtraction);

const multipication = m * q;
console.log(multipication);

const division = m / q;
console.log(division);

const modulus = m % q;
console.log(modulus);


// Increment
let h = 100;
h++
h++
h++
console.log(h);

// Decement
let y = 200;
y--;
y--;
y--;
console.log(y);

// comparison operaters
const z = 20;
const x = 30;

console.log("Equal : ", z == x);
console.log("Not Equal : ", z != x);
console.log("Greater Than : ", z > x);
console.log("Lower Than : ", z < x);
console.log("Greater Than or Equal : ", z >= x);
console.log("Lower Than or Equal : ", z <= x);

// Logical Oparators
const o = false;
const p = true;

// AND (&&)
console.log("AND : ", o && p);

//OR (||)
console.log("AND : ", o || p);

// NOT (!)
console.log("Not : ", !o);
console.log("Not: ", !p);
console.log("Logical Test", !((o || p) || (o && p)));



// Function
function normalFuntion(name, age) {
    console.log(name);
    console.log(age);
}

normalFuntion("Lahiru", 17);

//Arro Funtion
// const arroFuntion = () => {
//     console.log("My name is : Lahiru");
// }
// arroFuntion();

function NumberEqual(age1, age2) {
    const equal = age1 + age2;
    // console.log("Equals :", equal);
    return equal;
}

const value = NumberEqual(20, 20);
console.log(value);



var numbers = (num1, num2, num3, num4,) => {
    var sum = num1 + num2 + num3 + num4;
    var averange = sum / 4;
    return averange;
}

var sum = numbers(40, 40, 40, 40);
console.log(sum);

// If Condition 
const marks = 90;
if (80 < marks) {
    if (marks == 90) {
        console.log("Marks = 90");
    } else {
        console.log("Other");
    }
    // console.log("A");    
} else if (50 < marks) {
    console.log("C");
} else {
    console.log("S");
}

const swi = "ACPT";

switch (swi) {
    case "APCT":
        console.log("Print ACPT");
        break;
    case "APWD":
        console.log("print APWD");
        break;
    default:
        console.log("Other");
        break;
}


for (let i = 0; i < 10; i++) {
    console.log("Lahiru");
}

const arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]

for (let a = 0; a < arr.length; a++) {
    console.log(arr[a]);
}

console.log("-------------While Loop-------");
// while 
let whi = 0;
while (whi < 10) {
    console.log("AFSD");
    whi++
}

console.log("-------------Do-While Loop-------");
// Do-While loop
let v = 0;
do {
    console.log(v);
    v++
} while (v < 10);

// Arrays
console.log("---------Arrays---------");

const fruits = ["Banana", "Apple", "Moango", "Orange"];

// const fruit = fruits.pop();
// console.log(fruit);

// fruits.push("Kvi");
// console.log(fruits);

// const fruit = fruits.shift();
// console.log(fruit);

// fruits.unshift("Kivi");
// console.log(fruits);


// Object

const person = {
    name: "Lahiru",
    Address: "Moronthuduwa",
    run: function () {console.log("run")},
    walk: function () {console.log("walk")},
}

const name1 = person.name
console.log(name1);
person.run();
person.walk();


//-------------Event-------------

function clickme(){
    // alert("Click Me Button Test ");
    // console.log("Click Me Button Test");
    const input = document.getElementById("input-1").value
    console.log(input);
}

function onChange(){
    // alert("OnChange Event");
    // console.log("OnChange Event");
}

