// const error = new Error("Something went WWronggg")

// console.log(error.stack);
// console.log(error.message);

// throw new Error("Something went WWronggg")

// const {CustomError} = require('./CustomError')
// throw new CustomError("This is Custom error")

//handle exception using try and catch

// try {
//     doSomething()
// } catch (error) {
//     console.log("Something went wrong");
//     console.log(error);
// }

function doSomething(){
    const data = fetch('localhost:3000/api')
    // console.log('Im here');
}

//uncaught exception
// process.on('UncaughtException', (err) =>{
//     console.log("There was a uncaught exception", err);
//     process.exit(1)
// })

doSomething()

// const promise = new Promise((resolve, reject) => {
//     if (false) {
//         resolve(doSomething())
//     } else {
//         reject(doSomething())
//     }
// })

// promise.then((val) => {
//     console.log(val);
// }).catch((err) =>{
//     console.log(err);
// })

//exeption with async and await
const someFunction = async() => {
    try {
        await doSomething()
    } catch (error) {
        console.log(error);
    }
}

someFunction()