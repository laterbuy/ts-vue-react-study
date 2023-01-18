/*
 * @Author: houbb
 * @Date: 2023-01-17 09:49:16
 * @LastEditTime: 2023-01-17 14:02:09
 * @LastEditors: houbb
 * @Description: 递归深拷贝
 * 解题思路：
 * 1. 看节点类型 （7种） 基本类型 + object
 * 2. 基本类型直接拷贝 
 * 3. object 分情况处理
 * object分为：
 * 普通object for in
 * 数组 array Array初始化
 * 函数 function 
 * 日期 Date
 */
let cache = [];

function deepClone(source) {
  if (source instanceof Object) {
    if (cache.some(i => i[0] === source)) {
      return cache.find(i => i[0] === source)[1];
    } else {
      let dist;
      if (source instanceof Array) {// 数组
        dist = new Array();
      } else if (source instanceof Function) { // 函数
        dist = function () {
          return source.call(this, ...arguments)
        };
      } else if (source instanceof RegExp) { // 正则
        dist = new RegExp(source.source, source.flags)
      } else if (source instanceof Date) { // 日期
        dist = new Date(source);
      } else { // 普通对象
        dist = new Object()
      }
      cache.push([source, dist]);
      for (let key in source) { // 默认会遍历原型属性
        if (source.hasOwnProperty(key)) {
          dist[key] = deepClone(source[key])
        }
      }
      return dist;
    }
  }
  return source;
};

module.exports = deepClone;

