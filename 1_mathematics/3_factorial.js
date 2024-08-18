/*
Our task is to compute
00:04
factorial of n. Factorial of n

n! = n*(n-1)*(n-2)...*1
*/

let num = 20;
let f = 1
if (num === 0) {
    f = 1
} else {
    while (num > 0) {
        f = f * num
        num = num - 1;
    }
}

console.log(f)