//* mapped type

const arrayOfNumber: number[] = [2, 4, 6];

const arrayOfString: string[] = ["2", "4", "6"];

const arrayOfStringUsingMap: string[] = arrayOfNumber.map((num) =>
  num.toString(),
);

// console.log(arrayOfStringUsingMap);

const user = {
  id: 22,
};
user.id;
user["id"];

type AreaOfNumber = {
  height: number;
  width: number;
};

type height = AreaOfNumber["height"];

// type AreaOfString = {
//   height: string;
//   width: string;
// };

// type AreaOfString = {
//   [key in keyof AreaOfNumber]: string;
// };

//* Examples

/**
 *  T =>> {height: string, width: number}
 *  T["height"]: string
 *  T["width"] : number
 */

type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<{ height: string; width: number }> = {
  height: "50",
  width: 30,
};
