//* Problem 1:
//* Create a TypeScript function filterEvenNumbers that accepts an array of numbers and returns a new array containing only the even numbers.

//* Sample Input:
//* filterEvenNumbers([1, 2, 3, 4, 5, 6])

//* Sample Output:
//* [2, 4, 6]

const filterEvenNumbers = (arrayOfNum: number[]): number[] => {
  const newArray: number[] = [];

  arrayOfNum.map((number) => {
    if (number % 2 === 0) {
      return newArray.push(number);
    }
  });

  return newArray;
};

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
