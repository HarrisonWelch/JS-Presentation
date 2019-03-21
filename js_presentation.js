// // js_presentation.js

console.log('Hello! -js_presentation.js')

// My personal introduction

// Variables

// var keyword
var a = 1

// let keyword
let b = '2'

let thing1 = 1
if (true) {
  let thing2 = 2
  var thing3 = 3
  console.log('thing1 = ' + thing1)
}
// console.log('thing2 = ' + thing2)
console.log('thing3 = ' + thing3)

// const keyword
const c = [1,2,3,4,5]

// let's try to change it
// c = ['1','2','3','4','5']

// Arithmetic Operators

console.log( '2 + 2 = ' + ( 2 + 2 ) )
console.log( '2 - 2 = ' + ( 2 - 2 ) )
console.log( '2 * 2 = ' + ( 2 * 2 ) )
console.log( '2 / 2 = ' + ( 2 / 2 ) )
console.log( '10 % 3 = ' + ( 10 % 3 ) )
console.log( '10 % 2 = ' + ( 10 % 2 ) )

// Logical Operators

console.log( '1 == 2 = ' + (1 == 2) )
console.log( '1 < 2 = ' + (1 < 2) )
console.log( '1 > 2 = ' + (1 > 2) )
console.log( '1 > 2 = ' + (1 > 2) )

// Triple Trouble

console.log( '1 === 1 = ' + (1 === 1) )
console.log( '1 === \'1\' = ' + (1 === '1') )
console.log( '1 == \'1\' = ' + (1 == '1') )

console.log( '1 !== 1 = ' + (1 !== 1) )
console.log( '1 !== \'1\' = ' + (1 !== '1') )
console.log( '1 != \'1\' = ' + (1 != '1') )

// Control Flow

if (true){
  console.log('this is true')
}

if (false){
  console.log('this is true')
} else {
  console.log('this is false')
}

var x = 5

switch (x) {
  case 1:
    console.log('1')
    break
  case 2:
    console.log('2')
    break
  case 3:
    console.log('3')
    break
  case 4:
    console.log('4')
    break
  default:
    console.log('default')
    console.log('x = ' + x)
}

// String

var str = 'Hello World!'
console.log('str = ' + str)

str += ' I\'m Harrison Welch!'
console.log('str = ' + str)

var sub = str.substring(1,5)
console.log('sub = ' + sub)

var sub2 = str.substring(4)
console.log('sub2 = ' + sub2)

var spl = str.split(' ')
console.log('spl = ' + spl)
console.log('JSON.stringify spl = ' + JSON.stringify(spl, null, 2))

// Arrays

var arr = [1,2,3]
console.log('arr = ' + arr)

var weirdArr = [1, '2', [x]]
console.log('weirdArr = ' + weirdArr)

arr.push(4)
console.log('arr = ' + arr)

arr.pop()
console.log('arr = ' + arr)

arr.unshift(0)
console.log('arr = ' + arr)

arr.shift()
console.log('arr = ' + arr)

// Loops

for (var i = 0; i < 10; i++) {
  console.log('i = ' + i)
}

var j = 0
while( j < 10 ){
  console.log('j = ' + j)
  j++
}

var items = [152,4,124,12,123,12,13,4,35,12425,10001]

for (var item in items) {
  console.log('item = ' + item)
  console.log('items[item] = ' + items[item])
}

items.forEach(function(element) {
  console.log('element = ' + element)
})

function displayDate() {
  console.log('displayDate - new Date() = ' + (new Date()))
}

// jQuery
$(document).ready(function(){
  $("p").on("click", function(){
    alert("The paragraph was clicked.");
  });
});

// Function
// printHelloWorld()

function printHelloWorld(){
  console.log('Hello World');
}

printHelloWorld()

// items.forEach(function(element) {

items.forEach( (element) => {
  console.log('fat-arrow element = ' + element)
})

// DOM Manipulation
document.getElementById('abc').innerHTML = 'Fixed!'

document.getElementById('select').innerHTML = `
  <option>Dynamic Option Alpha</option>
  <option>Dynamic Option Beta</option>
  <option>Dynamic Option Gamma</option>
`

// JSON
var harrison = {
	name: 'Harrison Welch',
  age: 21,
  parents: ['Misty', 'Marty'],
  brother: {
    name: 'Charles Welch',
    age: 19,
    parents: ['Misty', 'Marty']
  }
}
console.log('harrison = ' + harrison)
console.log('harrison = ' + JSON.stringify(harrison, null, 2))

console.log('harrison.name = ' + harrison.name)
console.log('harrison[\'name\'] = ' + harrison['name'])

console.log('harrison.age = ' + harrison.age)
console.log('harrison.parents[0] = ' + harrison.parents[0])

console.log('harrison.brother.name = ' + harrison.brother.name)
console.log('harrison.brother.parents[1] = ' + harrison.brother.parents[1])

// Promise
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('Done!');
  }, 1000);
});

promise1
  .then(function(value) {
    console.log('value = ' + value)
  })
  .catch(function(error) {
    console.log('error = ' + error)
  });

// promise1
//   .then( res => {
//     console.log('value = ' + res)
//   })
//   .catch( err => {
//     console.log('error = ' + err)
//   });

// Immediately Invoked Function Expression (IIFE)

(function peter() {
  console.log('I\'m peter!') 
})()

// Transitive closure

// https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch09s02.html

var testModule = (function () {

  var counter = 0;

  return {

    incrementCounter: function () {
      return ++counter;
    },

    resetCounter: function () {
      console.log( "counter value prior to reset: " + counter );
      counter = 0;
    }
  };

})();

// Usage:

// Increment our counter
testModule.incrementCounter();

// Check the counter value and reset
// Outputs: 1
testModule.resetCounter();

// eof
