//* Problem 7:
//* Create a function getIntersection that takes two arrays of numbers and returns a new array containing only the elements that are present in both arrays.

//* Sample Input:
//* getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])

//* Sample Output:
//* [3, 4, 5]

const getIntersection = (array1: number[], array2: number[]): number[] => {
  const newArr: number[] = [];

  array1.forEach((number) => {
    if (array2.includes(number)) {
      newArr.push(number);
    }
  });

  return newArr;
};

console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
// getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);

//* another way

const getIntersection2 = (array1: number[], array2: number[]): number[] => {
  return array1.filter((number) => array2.includes(number));
};

// console.log(getIntersection2([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
