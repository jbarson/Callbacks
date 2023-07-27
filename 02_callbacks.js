// A callback is a function that you pass to another function to be called by that function


const runMyFunc = function(callback) {
    callback('Jon')
    return "function has been invoked"
}

const sayHello = function(name) {
    console.log(`hello there ${name}`)
}

const sayHiToJon = function() {
    console.log('hi Jon')
}
// sayHello('Yuli')

// runMyFunc(sayHello)

// runMyFunc(console.log)

// console.log(runMyFunc(sayHello));

//practical callback

// setTimeout(sayHiToJon, 5000)

const sayHiToCurtis = function () {sayHello('Curtis')}

setTimeout(sayHello('Curtis'), 5000)  //doesn't work
//equivalent to
setTimeout(undefined, 5000 ) //doesnt work either

setTimeout(function () {sayHello('Curtis')}, 5000)

// same as 

setTimeout(sayHiToCurtis, 5000)
