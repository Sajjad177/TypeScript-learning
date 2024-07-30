{
  // TODO: OOP -> Inheritance -------------->

  //* What is Inheritance?
  // Ans: Inheritance in Object-Oriented Programming (OOP) is a process where one class (subclass or child class)
  // inherits the properties and methods of another class (superclass or parent class).
  // Inheritance allows us to reuse existing code and add additional functionality to new classes.

  // Parent Class
  class Parent {
    name: string;
    age: number;
    roll: number;

    // Constructor to initialize the properties of the Parent class
    constructor(name: string, age: number, roll: number) {
      this.name = name;
      this.age = age;
      this.roll = roll;
    }

    // Method to display sleeping hours
    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep everyday ${numOfHours} hours`);
    }
  }

  //* Example - 1 :
  // Child-1 Class inheriting from Parent
  class Student extends Parent {
    // Constructor for Student class, calling the Parent class constructor
    constructor(name: string, age: number, roll: number) {
      super(name, age, roll); // Calling the parent class constructor
    }
  }

  // Creating an instance of the Student class
  const student1 = new Student("Shakib", 23, 19);

  // Logging the properties of the student1 instance
  console.log(student1); // Output: Student { name: 'Shakib', age: 23, roll: 19 }

  // Calling the getSleep method for the student1 instance
  student1.getSleep(8); // Output: Shakib will sleep everyday 8 hours



  //* Example - 2 :
  // Child-2 Class inheriting from Parent
  class Teacher extends Parent {
    subject: string;

    // Constructor for Teacher class, calling the Parent class constructor
    constructor(name: string, age: number, roll: number, subject: string) {
      super(name, age, roll); // Calling the parent class constructor
      this.subject = subject; // Initializing the additional property
    }

    // Method specific to Teacher class
    takeClass(nameOfSub: string) {
      console.log(`${this.name} teacher takes class in ${nameOfSub} subject`);
    }
  }

  // Creating an instance of the Teacher class
  const teacher = new Teacher("Mr. Y", 45, 101, "Math");

  // Logging the properties of the teacher instance
  console.log(teacher); // Output: Teacher { name: 'Mr. Y', age: 45, roll: 101, subject: 'Math' }

  // Calling the getSleep method for the teacher instance
  teacher.getSleep(6); // Output: Mr. Y will sleep everyday 6 hours

  // Calling the takeClass method for the teacher instance
  teacher.takeClass("Science"); // Output: Mr. Y teacher takes class in Science subject

  //
}
