

//for a 2d array you can add the middle array into the burger array
//const middle = ['lettuce', 'cheese', 'patty'];
//const burger = ['top bun', middle, 'bottom bun'];
//console.log(burger)
// => ["top bun", Array(3), "bottom bun"]


//using the spread operator
const middle = ['lettuce', 'cheese', 'patty'];
const burger = ['top bun', ...middle, 'bottom bun'];

console.log(burger)
// => ["top bun", "lettuce", "cheese", "patty", "bottom bun"]

const nums1 = ['1', '2', '3', '4'];
const nums2 = ['5', '6', '7', '8'];
const num12 = [...nums1, ...nums2]
console.log(num12)

//other use cases for spread operator
const numbers = [10, 20, 30, 40];
console.log(Math.max(...numbers))