{
  // TODO : Inheritance : --------------------------------->

  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(hours: number) {
      console.log(`${this.name} sleeps for ${hours} hours`);
    }
    getWork(hours: number) {
      console.log(`${this.name} works for ${hours} hours`);
    }
  }

  //TODO : Example : 1 : --------------------------------->

  class Student extends Parent {
    constructor(
      name: string,
      age: number,
      address: string
    ) // super use for access the parent class properties
    {
      super(name, age, address);
    }
  }

  const student1 = new Student("John", 20, "123 Main St");
  const student2 = new Student("Jane", 21, "456 Elm St");

  student1.getSleep(8);
  student2.getSleep(10);
  student1.getWork(6);
  student2.getWork(8);

  //TODO : Example : 2 : --------------------------------->

  class Teacher extends Parent {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
  }

  const teacher1 = new Teacher("Mr. Smith", 40, "789 Oak St", "Teacher");
  const teacher2 = new Teacher("Mrs. Johnson", 35, "101 Pine St", "Teacher");

  teacher1.getSleep(8);
  teacher2.getSleep(10);
  teacher1.getWork(6);
  teacher2.getWork(8);

  //
}
