// single responsibility principle => our code should be responsible for only one thing (ideally)

const myFunc = function(arr) {
    for (const element of arr) {
        const doubled = element * 2
        console.log(doubled)
    }
}

const myNums = [2, 4, 5];

myFunc(myNums)

const doubleIt = num => num*2

const loopIt = (arr, callback) => {
    for (const element of arr) {
        console.log(callback(element))
    }
}

loopIt(myNums, doubleIt)