// This is the first method of reduce


let arr =[1,2,3,4,5,6]

const red = (a,b) => {
    return a*b
}
console.log(arr.reduce(red))

// Second for loop

const array = [1,2,3,4,5];

function factor(num) {
  for (i = 1; i <= num; i++) {
    array.push(i);
  }
}