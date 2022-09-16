console.log("\n**** Problem number-1 ****")
function getThreeDigitRandomNumber() {
    return Math.floor((Math.random() * 900) + 100);
}
//array
let elementArray = new Array();
//function to find second largest and second smallesr
let findLargestAndSmallest = () => {
    for (let i = 0; i < 10; i++)
        elementArray[i] = getThreeDigitRandomNumber();
    console.log("The Ten 3 digits numbers are: " + elementArray.toString());
    
    let firstLargest = 0, secondlargest = 0;
    let firstSmallest = 1000, secondSmallest = 1000;
    for (let i = 0; i < elementArray.length; i++)
     {
        // array element is greater than first largest
        if (elementArray[i] > firstLargest) {
            secondlargest = firstLargest;
            firstLargest = elementArray[i];
        }
        else if (elementArray[i] > secondlargest && elementArray[i] != firstLargest)
            secondlargest = elementArray[i];
    }
    for (let i = 0; i < elementArray.length; i++) {
        if (elementArray[i] < firstSmallest) {
            secondSmallest = firstSmallest;
            firstSmallest = elementArray[i];
        }
        else if (elementArray[i] < secondSmallest && elementArray[i] != firstSmallest)
            secondSmallest = elementArray[i];
    }
    console.log(secondSmallest != 1000 ? `Second smallest = ${secondSmallest}` : `There is no second smallest`);
    console.log(secondlargest != 0 ? `Second largest = ${secondlargest}` : `There is no second largest`);

}
findLargestAndSmallest();



     
