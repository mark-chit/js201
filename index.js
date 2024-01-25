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

'use strict';

function id() {
  return "UP2060197"
  // e.g. return "UP654321";
}

function fn() {
  return 'mork';
}

function sn() {
  return 'c';
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
  };
}

//Create an arraySet function that accepts three parameters `arr`, `i` and `n`. 
//The first one is an array and the second one an index. 
//The function should place the value of the third parameter into the array at an index specified by the second parameter, 
//if (and only if) such an index is already in the array. Note that your function does not need to return a value because the array is modified directly. Rerun
function arraySet(arr, i, n){
 if (arr[i]){

  arr[i] = n;
 }

}