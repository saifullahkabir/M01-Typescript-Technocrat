//* Problem 3:
//* Define a union type StringOrNumber and create a function checkType that uses type guards to return "String" if the input is a string or "Number" if the input is a number.

//* Sample Input 1:
//* checkType("Hello");

//* Sample Output 1:
//* "String";

//* Sample Input 2:
//* checkType(42);

//* Sample Output 2:
//* "Number";

type StringOrNumber = string | number;

const checkType = (value: StringOrNumber) => {
  if (typeof value === "string") {
    return "String";
  } else if (typeof value === "number") {
    return "Number";
  }
};

console.log(checkType(2));
