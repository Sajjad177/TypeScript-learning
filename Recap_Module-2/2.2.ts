{
  // TODO : Interface ->
  interface Person {
    name: string;
    age: number;
  }

  interface Student extends Person {
    studentId: string;
  }

  const person: Student = {
    name: "John",
    age: 30,
    studentId: "123456",
  };

  //
}
