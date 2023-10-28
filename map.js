// const array = [1,2,3,4,5]

// function double(x) {
//     return 2 * x
// }

// const result = array.map(double)

// console.log(result)

// const arr = [1,2,3,4]

// function tripple (x) {
//   return x *3
// }
// const result = arr.map(tripple)

// console.log(result)

//in case of map it returns a new array

// const array = [2,4,6,8,10]

// function division (x) {
//     return x/2
// }
// const result = array.map(division)

// console.log(result)


const users=[
    {firstName:"ali", lastName:"fiyaz", age:25},
    {firstName:"faris", lastName:"ahammed", age:21},
    {firstName:"muhammed", lastName:"muhlar" , age:19}
]

function userDetails(x) {
  return x.firstName +" " + x.lastName + " "+ x.age
}

const result = users.map(userDetails)

console.log(result)