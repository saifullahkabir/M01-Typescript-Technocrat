//* Function
//* arrow function , normal function

function addNormal(num1: number, num2: number): number {
  return num1 + num2;
}

const addArrow = (num1: number, num2: number): number => num1 + num2;

addArrow(2, 8);

//* object => function => method

const poorUser = {
  name: "Rana",
  balance: 0,
  addBalance(value: number): number {
    this.balance = this.balance + value;
    return this.balance;
  },
};

poorUser.addBalance(40000);
// console.log(poorUser);

const arr: number[] = [2, 4, 6];

const sqrArray = arr.map((element: number): number => element * element);

console.log(sqrArray);