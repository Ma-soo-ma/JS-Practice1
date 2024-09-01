function reverseString(str) {
    return str.split('').reverse().join('');
}

let st = "harry";
let reversed = reverseString(st);

console.log(reversed); // Output: "yrrah"


console.log(st.join(reverseString))
