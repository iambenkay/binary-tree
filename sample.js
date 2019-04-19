const Tree = require("./binary")

let x = new Tree(1000000), n = 0, tests = []

for(let i = 0; i < 2000000; i ++){
    n = Math.round(Math.random() * 2000000)
    x.insert(n)
    tests.push(n)
}

console.log("loop completed")




console.log("Started Binary Search: ")
console.time()
console.log(x.search(n))
console.timeEnd()

console.log("\nStarted Linear Search: ")
console.time()
for(let i of tests){
    if(n == i){
        console.log(n)
        break;
    }
}
console.timeEnd()