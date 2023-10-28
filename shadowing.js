// shadowing means in case of var if we give a variable x value first 5 and then 6 it will be modified to 6 
//means here 6 shadows 5 here

//

// var a =10
// {
//     var a =12
// }
// console.log(a)

// here it shows the result of a =12 that means second one shadows first one


// {
//     var a =10
// }

// var a =12

// console.log(a)

// incase of var result will be second one 

// let b =10

// {let b =15}

// console.log(b)  here the result is 10 incase of let it gives result of first one

// incase of const also the first one gives the result   

//incase of functions also its the same as block

//eg for illegal shadowing 

// const a =20
// {
//     const a =19

//     console.log(a)
// }

// here it gives result of 19 because it takes value from its lexical scope of block scope

const a =20 

{
    const a =21
    {
        const a =22

        console.log (a)
    }
}
//here it gives result of 22