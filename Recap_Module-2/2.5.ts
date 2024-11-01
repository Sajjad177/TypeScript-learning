{
  //TODO : Function with Generic

  // Generic function that can work with any type
  const createArray = <T>(param: T): T[] => {
    return [param];
  };

  const result1 = createArray<string>("Bangladesh");
  const result2 = createArray<number>(123);
  const result3 = createArray<boolean>(true);

  // Generic function with multiple parameters
  const createTuple = <T, U>(param1: T, param2: U): [T, U] => {
    return [param1, param2];
  };

  const result4 = createTuple<string, number>("Hello", 123);
  const result5 = createTuple<boolean, string>(false, "World");


  //* Example 2 : ------------------------------------

  
  // Generic function with optional parameters
  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({ name: "John", age: 20 });
  const student2 = addCourseToStudent({ name: "Jane", age: 21, email: "jane@example.com" });


//
}