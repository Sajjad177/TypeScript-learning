{
  // TODO :----------- function with generics---------------->

  // The function 'identity' takes an argument 'arg' of type 'T' and returns it. 'T' represents any type.
  function identity<T>(arg: T): T {
    return arg;
  }

  // Using the generic function with different types:

  const num = identity<number>(42); // 'T' is inferred as 'number'
  console.log(num); // Output: 42

  const str = identity<string>("Hello, TypeScript!"); // 'T' is inferred as 'string'
  console.log(str); // Output: "Hello, TypeScript!"

  const arr = identity<number[]>([1, 2, 3]); // 'T' is inferred as 'number[]'
  console.log(arr); // Output: [1, 2, 3]

  // Explicitly specifying the type argument
  const bool = identity<boolean>(true);
  console.log(bool); // Output: true

  //Example-2 :
  const addStudent = <T>(student: T) => {
    const course = "Next level web learning";

    return {
      ...student,
      course,
    };
  };

  const student1 = addStudent({
    name: "sajjad",
    email: "sajjad@com",
    phone: 348394,
  });

  const student2 = addStudent({
    name: "nishat",
    email: "nishat@com",
    address: "bogura",
  });

  console.log(student1);
  console.log(student2);
  // Output: { name: "sajjad", email: "sajjad@com", phone: 348394, course: "Next level web learning" }
  // Output: { name: "nishat", email: "nishat@com", address: "bogura", course: "Next level web learning" }

  //
}
