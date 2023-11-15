console.log("Lahiru_Mudith");

//Alert
// alert("Lahiru");

document.write("Kalapugama" + "\n");
document.writeln("Moronthuduwa" + "<br>");
document.write("<h1>" +"Panadura"+  "</h1>");

// Global variable
var name = "Lahiru";

// Local variable
{
    var town = "Panadura";
}



document.write( "<h3>"+"Lahiru" + "\n");
document.writeln("Mudith" + "\n" );
document.writeln("Madushan" + "\n"+ "<br>"  );
document.write("age = 17" + "<br>" );
document.write("Brithday : 2006.05.24" + "<br>" );
document.write("Panadura"+ "<h3>" + "<br>" );


document.write(
    "<h3>"+ "Name: Lahiru" +"\n" + "Mudith"  +"\n"+ "Madushan" +"<br>"+ "age: 17" +"<br>"+ "Brithday: 2006.05.24" +"<br>"+ "Town: Panaduara" +"</h3>"
      );


// Object
const obj = {
    name: "Lahiru Mudith",
    age: "45",
}

// Array
const array = ["Lahiru", "Mudith" ];

// var / let / const

// var 
// can ewdeclared
var a = "run";
var a = "run-2";
console.log(a);

{var b = 10};
console.log(b);
//re assign
a = "run-3";
console.log(a);

//Let
//can't redecleared
{let b = "50"};
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
{const n = "20"}
// console.log(n);
// l = "mudit";
// console.log(l);

// Arithmetic Oparetors
const m = 22;
const q = 11;

const addition = m+q;
console.log(addition);

const subtraction = m-q;
console.log(subtraction);

const multipication = m*q;
console.log(multipication);

const division = m/q;
console.log(division);

const modulus = m%q;
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

console.log("Equal : ", z==x );
console.log("Not Equal : ", z!=x );
console.log("Greater Than : ", z>x );
console.log("Lower Than : ", z<x );
console.log("Greater Than or Equal : ", z>=x );
console.log("Lower Than or Equal : ", z<=x );

// Logical Oparators
const o = false;
const p = true;

// AND (&&)
console.log("AND : ", o && p);

//OR (||)
console.log("AND : ", o || p);

// NOT (!)
console.log("Not : ", !o);
console.log("Not: ", !p );
console.log("Logical Test", !((o||p) || (o&&p)));



// Function
function normalFuntion(name , age){
    console.log(name);
    console.log(age);
}

normalFuntion("Lahiru", 17);

//Arro Funtion
// const arroFuntion = () => {
//     console.log("My name is : Lahiru");
// }
// arroFuntion();

function NumberEqual (age1, age2){
    const equal = age1 + age2;
    // console.log("Equals :", equal);
    return equal;
}

const value = NumberEqual(20, 20);
console.log(value);



var numbers = (num1, num2, num3, num4,) => {
        var sum = num1 + num2 + num3 + num4;
        var averange = sum/4;
        return averange;
}
        
var sum = numbers(40,40,40,40);
console.log(sum);

// If Condition 
const marks = 36;
if (80 < marks) {
    console.log("A");    
}else if(50<marks){
    console.log("C");
}else{
    console.log("S");
}