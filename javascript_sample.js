Javascript
function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};
function Bird() {
  Bird.prototype = Object.create(Animal.prototype);
  Bird.prototype.contructor = Bird;
}

const user = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
];
const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);

const squareList = (arr) => {
  return arr.reduce(
    (newArr, item) =>
      item > 0 && item % parseInt(item) === 0
        ? newArr.concat(Math.pow(item, 2))
        : newArr,
    []
  );
};

function whatIsInName(collection, source) {
  let keys = Object.keys(source);
  return collection.filter((obj) =>
    keys.every((key) => obj.hasOwnProperty(key) && obj[key] === source[key])
  );
}

function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str.replace(consonantRegex, "").concat(myConsonants).concat("ay")
    : str.concat("way");
}

/* d3js */
<script src="https://d3js.org/d3.v6.min.js"></script>;

var paragraphs = document.getElementsByTagName("p");
for (var i = 0; i < paragraphs.length; i++) {
  var paragraphs = paragraphs.item(i);
  paragraphs.style.setProperty("color", "blue", null);
}

d3.selectAll("p").style("color", "blue");
d3.select("body").style("background-color", "black");
d3.selectAll("p").style("color", function () {
  return "hsl(" + Math.random() * 360 + ", 100%, 50%)";
});
d3.selectAll("p").style("color", function (d, i) {
  return i % 2 ? "#fff" : "#eee";
});

d3.selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
  .style("font-size", function () {
    return d + "px";
  });

d3.select("body")
  .selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
  .enter()
  .append("p")
  .text((d) => "I'm number" + d + "!");

var p = d3
  .select("body")
  .selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
  .text((d) => d);

p.enter()
  .append("p")
  .text((d) => d);

p.exit().remove();

d3.select("body").transition().style("background-color", "black");

d3.selectAll("circle")
  .transition()
  .duration(750)
  .delay((d, i) => i * 10 + d * 0)
  .attr("r", (d) => Math.sqrt(d * scale));

/* p5js */


/* GridFS Collection */

// The chunks Collection
{
  "_id": ObjectId,
  "file_id": ObjecttId,
  "n": num,
  "data": binary
}

// The files Collection
{
  "_id": ObjectId,
  "length": num,
  "chunkSize": num,
  "uploadDate": timestamp,
  "md5": hash,
  "filename": string,
  "contentType": string,
  "aliases": string array,
  "metadata": any
}

/* Destructuring Assignment */

let a, b, rest
[a, b] = [10, 20]
console.log(a) // 10
console.log(b) // 20

[a, b, ...rest] = [10, 20, 30, 40, 50]
console.log(rest) // [30, 40, 50]

({ a, b } = { a: 10, b: 20 })
console.log(a) // 10
console.log(b) // 20



({ a, b, ...rest } = { a: 10, b: 20, b: 30, d: 40 })
console.log(rest) // { c: 30, d: 40 }

let a = 1
let b = 3
[a, b] = [b, a]

function f() {
  return [1, 2, 3]
}
const [a, , b] = f()
console.log(a) // 1
console.log(b) = 3

function parseProtocol(url) {
  const parseURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  if (!parseURL) {
    return false;
  }

  console.log(parseURL);
  // ["https://developer.mozilla.org/en-US/Web/JavaScript",
  //  "https", "developer.mozilla.org", "en-US/Web/JavaScript"]
  const [, protocol, fullhost, fullpath] = parseURL;
  return protocol; // "https"
}

const user = {
  id: 42,
  is_vertified: true
}
const { id, is_vertified } = user;

const o = { p: 42, q: true }
const { p: foo, q: bar } = o
console.log(foo) // 42
console.log(bar) // true

for (const { name: n, family: { father: f } } of people) {
  console.log('Name: ' + n + ', Father: ' + f)
}

let key = 'z'
let { [key]: foo } = { z: 'bar' }
console.log(foo) // "bar"


var re = /ab+c/
var re = new RegExp("ab+c")
function: exec, test, match, search, replace, split

/* Spread Syntax */
myFunction(...iterableObj)
[...iterableObj, '4', 'five', 6]
let objClone = { ...obj }

function myFunction(x, y, z) {  }
const args = [ 0, 1, 2 ]
myFunction(...args)

function myFunction(v, w, x, y, z) {  }
const args = [ 0 , 1 ]
myFunction(-1, ...args, 2, ...[3])

let arr1 = [0, 1, 2]
let arr2 = [3, 4, 5]
arr1 = arr1.concat(arr2)
arr1 = [ ...arr1, ...arr2 ]

const obj1 = { foo: 'bar', x: 42 }
const obj2 = { foo: 'baz', y: 13 }
const cloneObj = { ...obj1 }
const mergedObj = { ...obj1, ...obj2 }

const merge = ( ...objects ) => ({ ...objects })

/* Hoisting */ 
function sayHi() {
  console.log(name) // undefined
  console.log(age) // ReferenceError
  var name = "Lydia"
  let age = 21
}

Variables defined with 'let' and 'const' are hoisted to the top of the block, but not initialized
Javascript in strict mode does not allow variales to be used if they are not declared ("use strict")


for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1) // 3 3 3
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1) // 0 1 2
}

const shape = {
  radius: 10, 
  diameter() {
    return this.radius * 2 // 20
  },
  perimeter: () => 2 * Math.PI * this.radius // NaN
}

Normal function !== Arrow function

Truthy value: +true

Property accessors: 
object.property
object['property']


strict equality (===)

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`; // TypeError without prototype
}


Javascript is a dynamic language
number++
++number


function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = "Lydia";
const age = 21;

getPersonInfo`${person} is ${age} years old`;


Khi kiểm tra sự bằng nhau, các dữ liệu nguyên thủy được so sánh bởi giá trị của chúng, trong khi các object được so sánh bằng tham chiếu của chúng!
  

eval(string) // string: a javascript expression, varible, statement, or sequence of statements

Dữ liệu được lưu trữ trong sessionStorage bị xóa khi người dùng đóng tab
Tất cả các object key (trừ symbol) đều được coi là chuỗi, ngay cả khi bạn tự gõ nó như là một chuỗi


let mySet = new Set()
mySet.add(1)
mySet.add(5)
let o = {a: 1, b: 2}
mySet.add(o)
mySet.has(1) // true
mySet.size
mySet.delete(5)
mySet.has(5)





