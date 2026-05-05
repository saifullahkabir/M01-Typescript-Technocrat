//* keyof : type operator

type RichPeoplesVehicle = {
  car: string; // key: value
  bike: string;
  cng: string;
};
// string literal type
type MyVehicle1 = "car" | "bike" | "cng";
type MyVehicle2 = keyof RichPeoplesVehicle;

const myVehicle: MyVehicle2 = "bike";

type User = {
  id: number;
  name: string;
  address: {
    city: string;
    country: string;
  };
};

const user: User = {
  id: 222,
  name: "Rana",
  address: {
    city: "Chittagong",
    country: "BD",
  },
};

// const  myId = user.id;
const myId = user["id"];
const myName = user["name"];
const myAddress = user["address"];

// console.log({ myId, myName, myAddress});

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

const result1 = getPropertyFromObj(user, "name");

const product = {
  brand: "APPLE",
};

const result2 = getPropertyFromObj(product, "brand");

const student = {
  id: 122,
  class: "four",
};

const result3 = getPropertyFromObj(student, "id");
