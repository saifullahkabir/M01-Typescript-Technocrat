type User = {
  name: string;
  age: number;
};

//* interface : only object type : array, object, function
interface IUser {
  name: string;
  age: number;
}

type Role = {
  role: "admin" | "user";
};

type UserWithRole = User & Role;

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user1: IUserWithRole = {
  name: "Mr. X",
  age: 100,
  role: "admin",
};

const user2: IUser = {
  name: "Mr. Y",
  age: 50,
};

//* using interface in function

type Add = (num1: number, num2: number) => number; // type alias

interface IAdd {
  (num1: number, num2: number): number;
}

const add: IAdd = (num1, num2) => num1 + num2;

type Friends = string[];

interface IFriends {
  [index: number]: string;
}

const friends: IFriends = ["A", "B", "c"];
