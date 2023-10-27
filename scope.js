// function a() {

//     console.log(b)
//     var b = 10
// }
// a()

//here the result is undefined

// function a () {
//     var b = 10
//   C()
//     function C() {
//         console.log(b)
//     }
// }

//  a()

 //here the result is 10

//  function a() {
//     var b =10

//     function c () {
//         console.log(b)
//     }
//  }

//  a()

 //here it doesnt displays anything

//  function a() {
//     function b () {
//         console.log(c)
//     }
//  }
//  var c = 10
//  a()

 //here it will not show any result

 function a () {
    function b () {
        console.log(c)
    }
    b()
 }
 let c = 10
 a()

 // here it gives result of 10