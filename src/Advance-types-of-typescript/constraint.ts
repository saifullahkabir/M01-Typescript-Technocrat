//* constraint : strict rules

type Student = { id: number; name: string };

const addStudentToCourse = <T extends Student>(studentInfo: T) => {
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

const student3 = {
  id: 122,
  name: "Mr. Elon Bhai",
  hasWatch: true,
};

const result = addStudentToCourse(student3);
console.log(result);
