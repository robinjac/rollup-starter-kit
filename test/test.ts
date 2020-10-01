/* eslint-disable */
const assert = require("assert");
const hello = require("..").default;

const expected = "hello world";

assert.equal(hello(), expected);

console.log(`\u001B[32m✓\u001B[39m ${expected}`);