// function Person(name) {
//   this.name = name;
// }

// Person.prototype.run = function () {
//   console.log('run');
// }

// Person.prototype = {
//   constructor: Person,  // 在构造函数中初始化特有属性
//   run: function () {   // 通用属性 
//     console.log('run');
//   }
// }

const trim2 = (str) => {
  while (str[0] === ' ') {
    str = str.slice(1)
  }
  while (str[str.length - 1] === ' ') {
    str = str.slice(0, -1)
  }
  return str
}