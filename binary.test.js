const Branch = require('./binary')
const assert = require("assert")

let x = new Branch(14)

// Insert more items into the x tree
x.insert(4)
x.insert(14)
x.insert(13)
x.insert(25)
x.insert(30)
x.insert(17)
x.insert(12)
x.insert(9)
x.insert(7)

// Unit Tests for Branch::search
assert.equal(typeof x.search(25), "object", `x.search(25) returns "${typeof x.search(25)}" instead of "object"`)
assert.equal(typeof x.search(37), "string", `x.search(37) returns "${typeof x.search(37)}" instead of "object"`)
assert.equal(typeof x.search(50), "string", `x.search(50) returns "${typeof x.search(50)}" instead of "object"`)
assert.equal(typeof x.search(30), "object", `x.search(30) returns "${typeof x.search(30)}" instead of "object"`)