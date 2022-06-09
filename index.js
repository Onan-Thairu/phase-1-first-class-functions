function receivesAFunction(testFunc) {
    testFunc()
    return "Awesome"
}

function returnsANamedFunction() {
    return function namedFunction() {
        return "Done"
    } 
}

function returnsAnAnonymousFunction() {
    return function () {
        return "Done"
    }
}