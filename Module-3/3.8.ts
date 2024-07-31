{
  // TODO : Polymorphism---------------->
  //* Polymorphism হল একটি প্রোগ্রামিং ধারণা যা প্রাথমিকভাবে Object-Oriented Programming (OOP) এ ব্যবহৃত হয়। বাংলায় Polymorphism মানে হলো বহুরুপিতা। এই ধারণাটি একাধিক ফর্ম বা রূপ গ্রহণ করার ক্ষমতা বোঝায়।

  // Both structure is same to same
  class Person {
    getSleep() {
      console.log(`A person sleeping 8 hours per day`);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log(`Student sleeping 7 hours per day`);
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log(`Developer sleeping 5 hours per day`);
    }
  }

  const getSleepingHour = (params: Person) => {
    params.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHour(person1);
  getSleepingHour(person2);
  getSleepingHour(person3);

  //
}
