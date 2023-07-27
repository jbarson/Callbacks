
// sayHi() // cannot invoke before definition  
// sayHi2() // works due to hoisting

//  function expression
const sayHi = function(){
    console.log('hello')
}

// function declaration
function sayHi2() {
    console.log('hello again')
}

const number = 42

// sayHi();

// console.log(sayHi)
// console.log(sayHi())

let newVar

// console.log(newVar)

const anotherFunction = function(){
    return 42
}

// console.log(anotherFunction)
// console.log(anotherFunction())

// console.log('compare: ', number === anotherFunction())

sayHi.thingamabob = "this class is swell"


//  console.log(sayHi)

const funnyFunction = function(parameter) {
    console.log(parameter)
    return parameter.toUpperCase()
}

const output = funnyFunction("Jon")

console.log('output', output)

const functionArray = []

functionArray.push(sayHi)
functionArray.push(sayHi2)
functionArray.push(funnyFunction)

console.log(functionArray)

// jQuery()
// jQuery.length()

