// array

const myArr = [0, 1, 4, 7, 6, 5]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[2]);

// Array methods

// myArr.push(6)
// console.log(myArr);
// myArr.pop()
console.log(myArr);
// myArr.unshift(9)  added number '9' at index 0
// myArr.shift()     deleted element from index 0 
// console.log(myArr);

// console.log(myArr.includes(8));  //if the element exist it gives true otherwise false
// console.log(myArr.indexOf(4));      // it will get output 2 because the number '4' exist at index 2 . if the number not exist the output is -1

const newArr = myArr.join()

// console.log(myArr);
console.log( newArr);


// slice, splice

// console.log("A ", myArr);

const myn1 = myArr.slice(2,4)  

console.log(myn1);    
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 2)
// console.log("C ", myArr);
// console.log(myn2);