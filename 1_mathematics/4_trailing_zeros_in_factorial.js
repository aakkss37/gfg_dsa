let num = 20
let f = 1;
if (num != 0) {
    while (num > 0) {
        f = f * num;
        num = num - 1;
    }
}
console.log(f)

// Now to trilling zero.

let tz = 0;
let temp = f;

while (temp % 10 === 0) {
    tz = tz + 1
    temp = Math.floor(temp / 10)
}

console.log(tz)