// Introduced in 2015
// - no function keyword
// - Use the "fat arrow"
// - if one parameter, no brackets required
// - if one line, no curlies needed

const sayHello1 = function(name) {
    console.log(name)
}

sayHello1('Casandra')

const sayHello2 = name => console.log(name)

// implicit return
// if a single line, no return statment needed

const sayHelloToMahamed = () => "Hi Mahamed"

console.log(sayHelloToMahamed())

const sayHelloToError = () => {
    "hello error"
}

console.log(sayHelloToError());

