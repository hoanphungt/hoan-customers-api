const a1 = Promise.resolve(1)

// console.log(a1)

// const a2 = a1.then(n => n + 1)

// console.log(a2)
// a2.then(console.log)

// const p1 = Promise.resolve('Hello')
// const p2 = Promise.resolve('World')

// Promise.all([p1, p2]).then(console.log)

// p1.then(text => {
//     //fetch something slow
//     return Promise.resolve(text + ' World')
// }).then(text => {
//     console.log(text)
// })

// const printAndDouble = num => {
//     console.log(num)
//     return num * 2
// }

// a1.then(printAndDouble)
//     .then(printAndDouble)
//     .then(printAndDouble)
//     .then(printAndDouble)
//     .then(printAndDouble)

const printAndDouble = num => {
    if (num > 8) {
        throw "Too much!!"
    }
    console.log(num)
    return num * 2
}

a1.then(printAndDouble)
    .then(printAndDouble)
    .then(printAndDouble)
    .then(printAndDouble)
    .then(printAndDouble)
    .catch(error => console.log('We caught the error, it was: ' + error))