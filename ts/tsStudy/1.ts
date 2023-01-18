// const f = (a: number | string) => {
//   if (typeof a === "number") {
//     a.toFixed(2);
//   } else {
//     a.split(",");
//   }
// };

// const f = (a: Array<Date> | Date) => {
//   if (a instanceof Date) {
//     a.toISOString()
//   } else if (a instanceof Array) {
//     a[0].toDateString()
//   } else {
//     throw new Error('never do this')
//   }
// }

// type Person = {
//   name: string;
// };

// const f = (a: Person | Person[]) => {
//   if ("name" in a) {
//     a; // Person
//   } else {
//     a; // Person[]
//   }
// };

// type Rect = {
//   height: number;
//   width: number;
//   kind: "rect";
// };
// type Circle = {
//   center: [number, number];
//   radius: number;
//   kind: "circle";
// };

// const f = (a: unknown) => {
//   if (typeof a === "string") {
//     a // string
//   }
// };

// interface Person {
//   name: string
//   id: number
// }

// interface User extends Person  {
//   id: number
// }
//  类型兼容

// let a = (a: number, b: string) => {};
// let b = (a: number) => {};
// a = b
// b = a

// type A = {
//   name: string
// }

// type B = {
//   name: string
//   age: number
// }

// let a: B = {
//   name: '',
//   age: 12,
// }

// let b:A = a

// interface P {
//   name: string;
// }

// interface C extends P {
//   age: number;
// }

// let p: P = {
//   name :''
// }
// let c: C = {
//   name: '',
//   age: 12
// };

// p = c

// let a = ()

// interface P {
//   name: string;
// }

// interface C extends P {
//   age: number;
// }
// let a = (a: P) => {};
// let b = (a: C) => {};
// b = a

// let a = () => ({name: ''})
// let b = () => ({name: '', age: 12})

// a = b

// // 1.先写类型再赋值
// type F1 = (a: number, b: number) => number;
// const f1: F1 = (a, b) => a + b;
// // 2. 先实现箭头函数 再获取类型
// const f2 = (a: number, b: number): number => a + b;

// // 3. 先实现普通函数再获取类型
// function f3(this: unknown, a: number, b: number) {
//   return a + b;
// }
// type F3 = typeof f3;

// // 4. 先实现匿名普通函数 再获取类型
// const f4 = function (this: unknown, a: number, b: number) {
//   return a + b;
// };
// type F4 = typeof f4;

// type Hash1= {
//   [k: string]: unknown
//   length: number
// }

// type List1   = {
//   [k: number]: unknown
//   length: number
// }

// type Hash = {
//   [k in string]: unknown
// }

// type List   = {
//   [k in number]: unknown
// }

// 难度为1的泛型
// type Union<A, B> = A | B
// type C = Union<string, number>

// interface List<A> {
//   [index: number] : A
// }

// type D = List<string>
// 代入法
// interface List<string> {
//   [index: number] : string
// }

// type LikeString<T> = T extends string ? true : false
// type LikeNumber<T> = T extends number ? 1 : 2

// type R1 = LikeString<'hi'> // true
// type R2 = LikeString<2> // false

// type S1 = LikeNumber<33> // 1
// type S2 = LikeNumber<false> // 2

// type ToArray<T> = T extends unknown ? T[] : never;

// type Result = ToArray<string | number>;
// type Result1 = string extends unknown
//   ? string[]
//   : never | number extends unknown
//   ? number[]
//   : never;
// type Result2 = string[] | number[];

// type ToArray<T> = T extends unknown ? T[] : never;

// type Result = ToArray<never>; // never

// type Person = {name: string, age: number}
// type GetKeys<T> = keyof T

// type Result = GetKeys<Person>

// const r:Result = 'name' // name age

// 泛型约束 在泛型中使用 extends keyof

// type Person = {name: string, age: number}
// type GetKeyType<T, K extends keyof T> = T[K]

// type Result = GetKeyType<Person, 'age'> // number 这里可以约束key

// type X = Person['name'] // string 这里不能约束key
type Person = { id: number; name: string };

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
type A = MyReadonly<Person>; // {readonly id: number, readonly name: string}

type MyPartial<T> = {
  [K in keyof T]?: T[K];
};
type B = MyPartial<Person>; // {id?: number, name?: string}

type Person1 = { id?: number; name?: string };
type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};
type C = MyRequired<Person1>; // {id: number, name: string}

type MyRecord<K extends string | number | symbol, V> = {
  [k in K]: V;
};
type D = MyRecord<string, number>; // {[k: string]: number}

type MyExclude<A, B> = A extends B ? never : A;
type E = MyExclude<1 | 2 | 3, 1 | 2>;  // 3
//代入法 推导过程 前边分配后边不分配（分配定律）
// type E1 = (1 | 2 | 3) extends (1 | 2) ? never : (1 | 2 | 3)
type E2 =   (1  extends 1 | 2  ? never : 1)
          | (2  extends 1 | 2  ? never : 2)
          | (3  extends 1 | 2  ? never : 3)  // 3
type E3 = never | never | 3

type MyExtract<A, B> = A extends B ? A : never;
type F = MyExtract<1 | 2 | 3, 1 | 2> // 1 | 2

type MyOmit<T, Key> = {
  [K in keyof T as (K extends Key ? never : K)] : T[K]
}
type G = MyOmit<Person, 'name'> // {id: number}


type MyPick1<T, Key> = {
  [K in keyof T as (K extends Key ? K : never)] : T[K]
}
type MyPick2<T, Key extends keyof T> = {
  [K in Key] : T[K]
}
type H1 = MyPick1<Person, 'name'> // {name: string}
type H2 = MyPick2<Person, 'name'> // {name: string}


type Person2 = {
  readonly name: string
  readonly id: number
}
type MyMutable<T> = {
  -readonly [K in keyof T]: T[K]
}
type I = MyMutable<Person2> // {name: string, id: number}
