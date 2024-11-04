{
  // TODO : Polymorphism ------------------------

  class Person {
    getSleep() {
      console.log("I am sleeping 8 hours per day");
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("I am sleeping 7 hours per day");
    }
  }

  class Devloper extends Person {
    getSleep() {
      console.log("I am sleeping 6 hours per day");
    }
  }

  const getSleepHours = (params: Person) => {
    params.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Devloper();

  getSleepHours(person1);
  getSleepHours(person2);
  getSleepHours(person3);

  //
}
