
console.log("\n**** Problem number-3 ****")
function getPrimeFactors(number) {
    let array = new Array();
    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            let count = 0;
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j == 0) count++;
            }
            if (count == 0 && i > 1) array.push(i);
        }
    }
    return array;
}

let number = Math.floor(Math.random() * 1000);
console.log("Prime Factors of " + number + " are : ");
console.log(getPrimeFactors(number));
arr = [0, -1, 2, -3, 1];

function findTriplets(arr) {
    let found = false;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] == 0) {
                    console.log(arr[i], arr[j], arr[k]);
                    found = true;

                }
            }
        }
        if (found === false) {
            document.write(" not exist ");
        }
    }
}
findTriplets(arr); 