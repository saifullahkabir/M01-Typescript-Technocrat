//* oop: instance of type guard / type narrowing

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleeop(numOfHours: number) {
    console.log(`${this.name} sleeps ${numOfHours} hours a day`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(numOfHours: number) {
    console.log(`${this.name} studies ${numOfHours} hours a day`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  takeClass(numOfHours: number) {
    console.log(`${this.name} takes ${numOfHours} hours of classes daily`);
  }
}

//* fucntion guard

const isStudent = (user: Person) => {
  return user instanceof Student  // user is Student
}

const isTeacher = (user: Person) => {
  return user instanceof Teacher; // user is Teacher
}

const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(8);
  } else if (isTeacher(user)) {
    user.takeClass(6);
  } else {
    user.getSleeop(10);
  }
};

const student1 = new Student("Mr. Student");
const teacher1 = new Teacher("Mr. Teacher");

getUserInfo(teacher1);
