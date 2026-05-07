//* Problem 4:
//* Write a generic function getProperty that takes an object and a key, then returns the value of that key. Use constraints to ensure the key exists on the object.

//* Sample Input:
//* const user = { id: 1, name: "John Doe", age: 21 };
//* getProperty(user, "name");

//* Sample Output:
//* "John Doe";

const getProperty = <X, Y extends keyof X>(obj: X, key: Y): X[Y] => {
  return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };
console.log(getProperty(user, "name"));
