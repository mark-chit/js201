/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

"use strict";

function id() {
  return "UP2060197";
  // e.g. return "UP654321";
}

function fn() {
  return "mork";
}

function sn() {
  return "c";
}

function example() {
  // replace this example with
  // your first function then
  // add more below as necessary.
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// const obj = {
//   checked: false
// }

function checkObject(obj) {
  obj.checked = true;
}

function checkObjectInside(obj) {
  if (obj.data) {
    obj.data.checked = true;
    //0 would equal false here... (not the best solution), could use != null
  }
}

/*
Create an arraySet function that accepts three parameters `arr`, `i` and `n`.
The first one is an array and the second one an index.
The function should place the value of the third parameter into the array at an index specified by the second parameter,
if (and only if) such an index is already in the array. 
Note that your function does not need to return a value because the array is modified directly. Rerun
*/
function arraySet(arr, i, n) {
  if (arr[i]) {
    arr[i] = n;
  }
}

function addAll(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function larger(a, b) {
  return Math.max(a, b);
  // turnary operator???? = (a,b) => a > b ? a : b;
  //what
}

/* function largest(arr) {
  //return Math.max(...arr);
  //why does this not work?
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    return max;
  }
  //ig this doesnt work either :DDDDDD
}
*/

function largest(arr) {
  return arr.length > 0 ? Math.max(...arr) : null;
}

//Create a function called compare that accepts two arrays of numbers (`a` and `b`) and compares the contents. It should return true if the arrays are identical and false otherwise.

function compare(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      return false;
    }
  }
  return true;
}

function addToAll(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 1, arr[i] + n);
  }
  return arr;
}

let remembered = null;
function rememberThis(keepsake) {
  remembered = keepsake;
}

function nArray(n) {
  let array = [];
  let count = 1;
  while (array.length < n) {
    array.push(count++);
  }
  return array;
}

function addAllOpt(arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  return count;
}

function divisors(arr, div) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % div === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

function multiples(n, m){
  let count = 1;
  let result = [];
  for (let i = 0; i < n; i++){
    result.push(count*m);
    count++;
  }
  return result;
}
