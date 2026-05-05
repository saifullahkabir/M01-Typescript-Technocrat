//* conditional type : jdi ekta type er value onno ekta type er value er upor depand kore kono ekta codition diye, tahole setay holo conditional type

type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;

type RichPeoplesVehicle = {
  bike: string;
  car: string;
  ship: string;
};

// type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;
type CheckVehicle<T> = T extends keyof RichPeoplesVehicle ? true : false;

type hasBike = CheckVehicle<"bike">;
