
console.log("\n**** Problem number-4 ****")
let sumToZero = () => {
    console.log("Program to find sum of three digits add to zero");
    let digitsArr = [0, -1, 2, -3, 1];
    let n = digitsArr.length;
    let found = false;
    //check for 3 numbers sum to zero
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (digitsArr[i] + digitsArr[j] + digitsArr[k] == 0) {
                    console.log(`${digitsArr[i]}, ${digitsArr[j]}, ${digitsArr[k]}`);
                    found = true;
                }
            }
        }
    }
    if (found == false) {
        console.log("Not Exists");
    }
}
sumToZero();