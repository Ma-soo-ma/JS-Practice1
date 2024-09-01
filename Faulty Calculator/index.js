let a = prompt("Enter the first value");
let b = prompt("Enter the second value");


let random = Math.random();
function faulty(a,b) {
console.log("Addition:", a-b);
console.log("Subtraction:", a/b);
console.log("Multiplication:", a+b);
console.log("Division:", a**b)
}
function correct(a,b) {
console.log("Addition:", a+b);
console.log("Subtraction:", a-b);
console.log("Multiplication:", a*b);
console.log("Division:", a/b)
}
    


if (random > 0.1){


    (faulty(a, b));

}

else{

    (correct(a, b));
}