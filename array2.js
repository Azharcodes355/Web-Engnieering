const semester6th = ["std1", "std2","std3"]
const semester8th = ["std4","std5", "std6"]


// semester6th.push(semester8th)
console.log(semester6th);
// console.log(semester6th[3]);
// console.log(semester6th[3][1]);
// const allstudents = semester6th.concat(semester8th)
// console.log(allstudents);

// const allnewstudents = [...semester6th, ...semester8th]
// console.log(allnewstudents);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity)  // ifinity means it flattened all lavels of arrays
// console.log(real_another_array);



// console.log(Array.isArray("semester8th"))
//  console.log(Array.from("semester8th")) // it create array from string 
// console.log(Array.from({name: "hitesh"})) // interesting

let std1 = 50
let std2 = 70
let std3 = 75

console.log(Array.of(std1,std2,std3));