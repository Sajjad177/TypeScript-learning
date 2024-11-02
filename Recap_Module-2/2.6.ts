{
  // TODO : constrains ->

  // Example 1: Using extends to constrain to objects with name property
  const addCourseToStudent1 = <T extends { name: string; id: number }>(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  // Example 2: Constraining to objects with both name and age
  const addCourseToStudent2 = <T extends { name: string; age: number; id: number }>(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  // Example 3: Using multiple type parameters with constraints
  const addCourseWithGrade = <T extends { name: string; id: number }, U extends number>(
    student: T,
    grade: U
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
      grade,
    };
  };

  // Testing the constrained functions
  const student1 = addCourseToStudent1({ name: "John", id: 1, age: 20 }); // Works
  const student2 = addCourseToStudent2({ name: "Jane", id: 2, age: 21 }); // Works
  const student3 = addCourseWithGrade({ name: "Alice", id: 3, age: 22 }, 95); // Works



  //
}
