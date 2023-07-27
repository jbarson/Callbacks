
const sayHelloToMax = function () {
    console.log('Hello Max');
    // return true
}

const runMyFunc = function(callback) {
    callback()
}

runMyFunc(sayHelloToMax)

// console.log(sayHelloToMax())

runMyFunc(function () {
    console.log('Hello Max');
})