{
  // TODO : type assertion--------------------->

  let someValue: any = "Hello, TypeScript";

  // Using 'as' syntax to assert that 'someValue' is a string
  let strLength: number = (someValue as string).length;

  console.log(strLength); // Outputs: 16

  // Example-2 :
  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }

  // TODO : Interface---------------------->

  // we can declear this using interface :

  // This is type alias : 
  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRole1 = User1 & { role: string };

  const user1: UserWithRole1 = {
    name: "sadiya",
    age: 20,
    role: "manager",
  };

  // using interface : 
  interface User2 {
    name: string;
    age: number;
  }

  // added extra value using interface :
  interface UserWithRole extends User2 {
    role: string;
  }

  const user2: UserWithRole = {
    name: "sajjad",
    age: 24,
    role: "admin", // now added role
  };

  // create array using interface
  interface Person {
    name: string;
    age: number;
    isStudent: boolean;
  }
  let people: Person[] = [
    { name: "Alice", age: 25, isStudent: false },
    { name: "Bob", age: 30, isStudent: true },
    { name: "Charlie", age: 22, isStudent: true },
  ];

  // Accessing elements in the array
  people.forEach((person) => {
    console.log(
      `${person.name} is ${person.age} years old and ${
        person.isStudent ? "is" : "is not"
      } a student.`
    );
  });

  // output :
  // Alice is 25 years old and is not a student.
  // Bob is 30 years old and is a student.
  // Charlie is 22 years old and is a student.

  //* NOTE :  array and function use type alias and object you can use interface */



}
