# Mocha & Chai basic testing

## Purpose of this document

- A brief introduction into unit testing with Javascript.
- Introduction of [chai](https://www.chaijs.com/) and [mocha](https://mochajs.org/)

## Get started

- Install [node.js](https://nodejs.org/en/)
- Clone this repository
- Install dependencies `npm í -D`
- Open VSCode and move into the /src folder

## General rules & advices

- Other npm modules are not permitted
- Google for hints, not results (else the task does not count as done)
- Work together, if possible. Write the tests and have somebody else write out the functions
- Use [w3school's array reference](https://www.w3schools.com/jsref/jsref_obj_array.asp)

## Tasks to complete

- [ ] Task 1: High order array functions

### 1) Write your own high order array functions

Javascript high order functions are commonly used to execute functions on an array, such as filtering or checking whether it fulfills an expected requirement. Prominent examples for high order functions are `Array.forEach` or `Array.map`.

Your goal in this task is to do the following:

- Write down a test suite with at least three test cases for each of the high-order functions in the appendinx of this task
- Then, use common Javascript to copy their functionality
- You can find an example in the Array.forEach.js and Array.forEach.test.js files

**To give you an example:**

1. I named my test suite `MyArray`. MyArray is a function that uses the Array constructor
2. MyArray has a method named `myForEach`. It extends the prototype inherited by Array.
3. myForEach has three texting constraints:
   1. Iterate through all elements by their respective index & apply a function (in this case: assert.strictEqual)
   2. Multiply each element of a numberic array by 2
   3. Passes each array's element, its index argument and the array itself to the callback function
4. These constraints are defined in my `Array.forEach.test.js` - file
5. Then, I moved ahead and created the `Array.forEach.js` file
6. In it, I created a function that simulates the behavior of `Array.forEach` as per the three constraints mentiond above
7. I exported that function and imported it in my test suite.
8. Then, I ran it through the three tests.

**High order functions to consider**:

Replicate the above steps for each of these high level methods of the Array.prototype.

If you need a reference on what these functions do, check [w3schools array reference](https://www.w3schools.com/jsref/jsref_obj_array.asp)

```js
Array.map();
Array.filter();
Array.some();
Array.every();
Array.reduce();
```

Optional:

```js
Array.sort()
```
