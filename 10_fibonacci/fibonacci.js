const fibonacci = function(fib) {
    let fibs = [1,1]
    let fibSum = 0
    for (let i = 0; i < fib; i++) {
        fibSum = fibs.at(-1) + fibs.at(-2)
        fibs.push(fibSum)
    }
    if (fib >= 0) {
        return fibs[fib-1]
    } else if (fib < 0) {
        return 'OOPS'
    }
    }

// Do not edit below this line
module.exports = fibonacci;
