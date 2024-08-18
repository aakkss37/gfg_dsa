/* 
Our task is
00:04
to find out whether the given
00:06
number is a palindrome number or not.
00:09
The given number is greater than or equal to 0.
00:12
A number is called palindrome if
00:14
it's reverse, is same as a
00:16
number.
*/


const number = 678909876

let temp = number
let newNum = 0;
while (temp / 10 > 0) {
    newNum = newNum * 10 + temp % 10
    temp = Math.floor(temp / 10)
}
console.log("new num =>", newNum)

if (newNum === number) console.log(true)
else console.log(false)