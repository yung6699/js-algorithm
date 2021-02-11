// const test01 = () => {
//   const test02 = () => {
//     return this
//   }
//   return test02();
// }
//
// console.log(a)
// console.log(b)
// var a = 'test'
// let b = 'test'
//
// test01();

// var xy = 'outer scope';
// (function() {
//   console.log(xy); // undefined
//   var x = 'inner scope';
// }());


//

const Person = function (name) {
  this.name = name;
};

Person.prototype.method = function () {
  console.log('prototype method')
};
Person.prototype.property1 = 'Constructor Prototype Property';
Person.prototype.getName = function () {
  return this.name;
}

let kim = new Person('Kim');

console.log(kim.name) // 2
console.log(kim.property1) // 2
console.log(kim.getName()) // 2
kim.method()
