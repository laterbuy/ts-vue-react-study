/*
 * @Author: houbb
 * @Date: 2023-01-13 17:32:53
 * @LastEditTime: 2023-01-13 17:49:25
 * @LastEditors: houbb
 * @Description:
 */
import EventHub from "../src";

const testType = (message: string) => {
  const eventHub = new EventHub();
  console.assert(eventHub instanceof Object === true);
  console.log(message);
};

const testOnEmit = (message: string) => {
  const eventHub = new EventHub();
  let emited = false;
  eventHub.on("test", (data: unknown) => {
    emited = true;
    console.assert(typeof data === "string");
  });
  eventHub.emit("test", "data");
  console.assert(emited);
  console.log(message);
};

const testOff = (message: string) => {
  const eventHub = new EventHub();
  let emited = false;
  const callBack = (data: unknown) => {
    emited = true;
    console.assert(typeof data === "string");
  }
  eventHub.on("test", callBack);
  eventHub.off("test", callBack);
  eventHub.emit("test", "data");
  console.assert(emited === false);
  console.log(message);
}

testType("测试eventHub类型");
testOnEmit("测试订阅发布");
testOff("测试取消订阅");

