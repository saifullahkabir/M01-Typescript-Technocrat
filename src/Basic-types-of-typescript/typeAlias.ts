type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};

const user1: User = {
  id: 123,
  name: {
    firstName: "Saifullah",
    lastName: "Kabir",
  },
  gender: "male",
  contactNo: "01800000000",
  address: {
    division: "Chittagong",
    city: "Chittagong",
  },
};

const user2: User = {
  id: 123,
  name: {
    firstName: "Mr.",
    lastName: "Y",
  },
  gender: "female",
  contactNo: "01800000000",
  address: {
    division: "Chittagong",
    city: "Chittagong",
  },
};

// console.log(user1, user2);

//* function (type alias)
type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => num1 + num2;

// console.log(add(2,2));