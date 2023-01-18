/*
 * @Author: houbb
 * @Date: 2023-01-13 16:34:18
 * @LastEditTime: 2023-01-13 17:47:05
 * @LastEditors: houbb
 * @Description: 手写EventHub
 */

type CallBack = (data?: unknown) => void;

type CacheMap = {
  [x: string]: CallBack[];
};

class EventHub {
  private cacheMap: CacheMap = {};
  // 订阅事件
  on(eventName: string, fn: CallBack) {
    this.cacheMap[eventName] = this.cacheMap[eventName] = [];
    this.cacheMap[eventName].push(fn);
  }
  // 触发事件
  emit(eventName: string, data?: unknown) {
    const array = this.cacheMap[eventName] || [];
    array.forEach((fn: CallBack) => {
      fn(data);
    });
  }
  // 取消事件
  off(eventName: string, fn: CallBack) {
    this.cacheMap[eventName] = this.cacheMap[eventName] = [];
    this.cacheMap[eventName] = this.cacheMap[eventName].filter(
      (fnItem) => fnItem !== fn
    );
  }
}

export default EventHub
