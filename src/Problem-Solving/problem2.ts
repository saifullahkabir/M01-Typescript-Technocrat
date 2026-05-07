//* Problem 2:
//* Write a function reverseString that takes a string as input and returns the reversed version of that string.

//* Sample Input:
//* reverseString("typescript");

//* Sample Output:
//* "tpircsepyt";

const reverseString = (input: string): string => {
    const reversed = input.split("").reverse().join("")
    return reversed;
}

console.log(reverseString("typescript"));