// 2. Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element.
console.log("Problem number-2")
let numArray = new Array();
for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 900) + 100;
    numArray.push(num);
}
console.log("Sorted Array are... ");
console.log(numArray.sort());
console.log("Second largest after sorting : " + numArray.slice(-2, -1));
console.log("Second smallest after sorting : " + numArray[1]);


let maxNum = 0;
let minNum = 1000;
let max2 = 0;
let min2 = 1000;
for (let element of numArray) {
    maxNum = Math.max(element, maxNum);
    minNum = Math.min(element, minNum);
}
for (let element of numArray) {
    max2 = (element < maxNum && element > max2) ? element : max2;
    min2 = (element > minNum && element < min2) ? element : min2;
}
console.log("Second largest without sorting : " + max2);
console.log("Second smallest without sorting : " + min2);
