class Person {
  name: string; // common
  age: number; // common
  address: string; // common

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  // common
  getSleep(numOfHours: number) {
    console.log(`${this.name} sleeps ${numOfHours} hours`);
  }
}

class Student extends Person {}

const student1 = new Student("Rana", 22, "Chittagong");

student1.getSleep(10);

class Teacher extends Person {
  designation: string; //own property

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  // own method
  takeClass(numberOfClass: number) {
    console.log(`${this.name} take class for ${numberOfClass} hours`);
  }
}

const teacher1 = new Teacher("Mr. Elon", 42, "Chittagong", "Senior Teacher");

teacher1.takeClass(6);
