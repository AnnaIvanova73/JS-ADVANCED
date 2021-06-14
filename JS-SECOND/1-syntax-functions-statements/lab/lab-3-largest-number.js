let myFunc = (p1,p2,p3) => {
    return `The largest number is ${Math.max(p1,p2,p3)}.`;
}
console.log(myFunc(1,2,3))

/*
function findLargest(num1, num2, num3) {
    let firstLargest = Math.max(num1,num2)
    let largestNumber = Math.max(firstLargest,num3);
    console.log("The largest number is " + largestNumber + ".")
}

function findLargestNum(num1, num2, num3) {
    let result;

    if(num1 >= num2 && num1 >= num3){
        result = num1;
    }else if(num2 >= num1 && num2 >= num3 ){
        result = num2;

    }else{
        result = num3;
    }

    console.log(`The largest number is ${result}.`);
}
 */