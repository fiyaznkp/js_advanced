// const arr = [1,2,3,4]

// function findMax(max,curr) {
//     if(curr > max) {
//         max = curr
//     }
//     return max
// }

// const result = arr.reduce(findMax)

// console.log(result)

// const array = [1,2,3,4,5]

// function min(min,curr) {
//     if(curr < min) {
//         min = curr
//     }
//     return min
// }

// const result = array.reduce(min)

// console.log(result)

// const arr = [1,2,3,4]

// function addition (sum,curr) {
//    return sum + curr
// }

// const result = arr.reduce(addition)

// console.log(result)

// const age = [20,22,20,16]

// function reducer (acc,curr) {
//   if (age) {
//     acc === curr
//   }
//   return acc
// }
// const result = age.reduce(reducer)

// console.log(result)

const numbers = [1,2,2,1,3,4] 

function number(x,y) {
   if(numbers) {
     x === y
   }
   return x
}

const result = numbers.reduce(number)

console.log(result)