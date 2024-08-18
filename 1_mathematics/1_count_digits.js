// Our task is to
// count, how many digits that integer
// has ?
// integers will always be non 0

/*
eg: integer 98798
count the no. of digit.
output => 5
*/

// METHOD 1
let x = 65867;
console.log(String(x).length)

// METHOD 2
let count = 0
while (x / 10 > 0) {
    count = count + 1
    x = Math.floor(x / 10)
}

console.log("count => ", count)