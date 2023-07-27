
// HOF

const array = ['Jon', 'Yuli', 'Edwin', 'Ralph', 'Salman']

const callbackFunction = name => name.toUpperCase()

const newArray = array.map(callbackFunction)

console.log(newArray)

console.log(array.map((name => name.toUpperCase())))


function declaredCallback(name) {
    return name.toUpperCase()
}

