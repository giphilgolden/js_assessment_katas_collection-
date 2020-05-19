function add(x, y) {
    return x + y
}

let addTest = add(5,2)

console.log(addTest)


function multiply(x, y) {
    let z = 0
    for (let i = 1; i <= x ; i += 1) {
        z = add(y, z)
        

        
    }
    return z
}


let multiplyTest = multiply(6,4)

console.log(multiplyTest)

function exponentiation(x,y) {
    let z = 1
    for (let i = 1; i <= y ; i += 1) {
        z = multiply(x, z)
        

        
    }
    return z
}

let exponentiationTest = exponentiation(6,3)

console.log(exponentiationTest)

function factorial(x) {
    let z = 1
    for (let i = x; i > 1; i -= 1) {
        z = multiply(x, z)
        x -= 1
    }
    return z
}



let factorialResult = factorial(4)
console.log(factorialResult)

console.log("These are fibonacci results")

function fibonacci(x) {
    let currentNumber = 0
    let lastNumber = 0
    for (let i = 1; i < x ; i += 1) {
        console.log(currentNumber)
        currentNumber = (currentNumber+lastNumber)
        lastNumber = (currentNumber-lastNumber)
        if (currentNumber == 0) {
            currentNumber = 1
        }
        console.log("currentNumber is now " + currentNumber)
    } 
    
    return currentNumber
}

let fibonacciResult = fibonacci(8)

console.log("fibonacci number is " + fibonacciResult)