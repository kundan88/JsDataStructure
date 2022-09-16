console.log("Problem number-5")
function isRepeated(number) {
    if (number % 11 == 0)
        return true;
    else
        return false;
}

let array = new Array();
for (let i = 1; i < 100; i++) {
    if (isRepeated(i))
        array.push(i);
}
console.log(array);
