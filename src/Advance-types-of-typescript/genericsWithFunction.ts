//* Generics Funtion

const createArrayWithString = (value: string) => [value];

const createArrayWithNumber = (value: number) => [value];

const createArrayWithUserObj = (value: { id: number; name: string }) => [value];

const createArrayWithGenerics = <T>(value: T): T[] => {
  return [value];
};

// const arrString = createArrayWithString("APPLE");
// const arrNumber = createArrayWithNumber(12);
// const arrObject = createArrayWithUserObj({
//   id: 123,
//   name: "Mr. Rana",
// });

const arrString = createArrayWithGenerics("APPLE");
const arrNumber = createArrayWithGenerics(12);
const arrObject = createArrayWithGenerics({
  id: 123,
  name: "Mr. Rana",
});

//* tuple
const createArrayWithTuple = (value1: string, value2: number) => [
  value1,
  value2,
];

const createArrayTupleWithGeneric = <X, Y>(value1: X, value2: Y) => [
  value1,
  value2,
];

const res1 = createArrayTupleWithGeneric("Rana", true);
const res2 = createArrayTupleWithGeneric(22, { name: "Rana" });

const addStudentToCourse = <T>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 123,
  name: "Rana",
  hasPen: true,
};

const student2 = {
  id: 124,
  name: "Jr. Mahbub",
  hasCar: true,
  isMarried: true,
};

const result = addStudentToCourse(student1);
console.log(result);
