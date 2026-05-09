//* Polymorphism: bohurupi
// 01815289592
class Person {
  getSleep() {
    console.log(`I am a normal person. I sleep for 10 hours`);
  }
}

class Student extends Person {
  getSleep() {
    console.log(`I am a Student. I sleep for 8 hours`);
  }
}

class NextLevelDeveloper extends Person {
  getSleep() {
    console.log(`I am a Next Level developer. I sleep for 6 hours`);
  }
}

const getSleepingHours = (param: Person) => {
  param.getSleep();
};

const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();

getSleepingHours(person2);

//*
class Shape {
  getArea() {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  // area = pi * r * r
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  widht: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.widht = width;
    this.height = height;
  }

  // area = width * height
  getArea(): number {
    return this.widht * this.height;
  }
}

const getArea = (param: Shape) => {
  console.log(param.getArea());
};

const shape1 = new Shape();
const shape2 = new Circle(10);
const shape3 = new Rectangle(10, 20);

getArea(shape3);
