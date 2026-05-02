//* array , object

const bazarList: string[] = ["tomato", "eggs", "sugar", "milk"];

// bazarList.push(12)

let mixedArr: (string | number)[] = ["eggs", 12, "sugar", 1, "milk", 2];

//* tuple
let coordinates: [number, number] = [20, 30];

let couple: [string, string] = ["Husband", "Wife"];

let RanaNameAndRoll: [string, number] = ["Rana", 100];

let destination: [string, string, number] = ["Chattogram", "Dhaka", 7];

//* reference type : object
//* literal type
const user: {
  organization: "Programmin Hero"; // value => type (literal type)
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Programmin Hero",
  firstName: "Saifullah",
  lastName: "Rana",
  isMarried: false,
};

//* access modifier
const user2: {
  readonly organization: string; // access modifier
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Programmin Hero",
  firstName: "Saifullah",
  lastName: "Rana",
  isMarried: false,
};
