//* static

class Counter {
  static count: number = 0;

  static increment() {
    return (Counter.count = Counter.count + 1);
  }
  static decrement() {
    return (Counter.count = Counter.count - 1);
  }
}

/*
const instance1 = new Counter(); //* work a in memory
console.log(instance1.increment()); // 1
console.log(instance1.increment()); // 1 >> 2
console.log(instance1.increment()); // 2 >>> 3

const instance2 = new Counter(); //* work in different memory
console.log(instance2.increment()); // 1
console.log(instance2.increment()); // 2
*/

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());