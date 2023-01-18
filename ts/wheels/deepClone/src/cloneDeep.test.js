const deepClone = require('./index');
const cloneDeep = require('./index');


test('cloneDeep to be function', () => {
  expect(typeof cloneDeep === 'function').toBeTruthy()
});

describe('bast type', () => {
  test('cloneDeep can clone number', () => {
    const n = 123;
    const n2 = cloneDeep(n)
    expect(n === n2).toBeTruthy()
  });
  test('cloneDeep can clone string', () => {
    const n = '123';
    const n2 = cloneDeep(n)
    expect(n === n2).toBeTruthy()
  });
  test('cloneDeep can clone boolean', () => {
    const n = true;
    const n2 = cloneDeep(n)
    expect(n === n2).toBeTruthy()
  });
  test('cloneDeep can clone undefined', () => {
    const n = undefined;
    const n2 = cloneDeep(n)
    expect(n === n2).toBeTruthy()
  });
  test('cloneDeep can clone null', () => {
    const n = null;
    const n2 = cloneDeep(n)
    expect(n === n2).toBeTruthy()
  });
  test('cloneDeep can clone Symbol', () => {
    const n = Symbol();
    const n2 = cloneDeep(n)
    expect(n === n2).toBeTruthy()
  });
});
describe('object', () => {
  test('cloneDeep can clone simple object', () => {
    const n = { name: 'hou', child: { name: 'name' } };
    const n2 = cloneDeep(n)
    expect(n !== n2).toBeTruthy()
    expect(n.name === n2.name).toBeTruthy()
    expect(n.child !== n2.child).toBeTruthy()
    expect(n.child.name === n2.child.name).toBeTruthy()
  });
  test('cloneDeep can clone array', () => {
    const n = [[11, 12], [21, 22], [31, 32]];
    const n2 = cloneDeep(n)
    expect(n !== n2).toBeTruthy()
    expect(n[0] !== n2[0]).toBeTruthy()
    expect(n[0][0] === n2[0][0]).toBeTruthy()
    expect(n[1][0] === n2[1][0]).toBeTruthy()
    expect(n2).toEqual(n)
  });
  test('cloneDeep can clone function', () => {
    const n = () => { return 2 };
    n.xxx = { yyy: 1 }
    const n2 = cloneDeep(n)
    expect(n !== n2).toBeTruthy()
    expect(n.xxx !== n2.xxx).toBeTruthy()
    expect(n.xxx.yyy === n2.xxx.yyy).toBeTruthy()
    expect(n() === n2()).toBeTruthy()
  });

  test('对象的循环引用', () => {
    const n = { name: 'hou' };
    n.self = n
    const n2 = cloneDeep(n)
    expect(n !== n2).toBeTruthy()
    expect(n.name === n2.name).toBeTruthy()
  });

  test('对象层级20000', () => { // 超过10000多会爆栈 解决办法是把对象拍平 用循环处理
    const n = { child: null };
    let b = n;
    for (let i = 0; i < 2000; i++) {
      b.child = {
        child: null
      }
      b = b.child;
    }
    const n2 = cloneDeep(n)
    expect(n !== n2).toBeTruthy()
    expect(n.child !== n2.child).toBeTruthy()
  });
  test('可以复制正则表达式', () => {
    const n = /hid+/gi;
    const n2 = cloneDeep(n)
    expect(n !== n2).toBeTruthy()
    expect(n.source === n2.source).toBeTruthy()
    expect(n.flags === n2.flags).toBeTruthy()
  });
  test('可以复制日期', () => {
    const n = new Date();
    const n2 = cloneDeep(n)
    expect(n !== n2).toBeTruthy()
    expect(n.getTime() === n2.getTime()).toBeTruthy()
  });
  test('自动跳过原型属性', () => {
    const n = Object.create({name: 'n'})
    const n2 = deepClone(n)
    expect(n !== n2).toBeTruthy()
    expect('name' in n2).toBeFalsy()
  });
});



