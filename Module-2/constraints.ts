{
  //TODO : Constraints In Typescript------------------->
  //* 3 value must be added id, name and email because we use "extends"

  const addStudent = <T extends { name: string; id: number; email: string }>(
    student: T
  ) => {
    const course = "Next level web learning";

    return {
      ...student,
      course,
    };
  };

  const student1 = addStudent<{
    id: number;
    name: string;
    email: string;
    phone: number;
  }>({
    id: 1,
    name: "sajjad",
    email: "sajjad@com",
    phone: 348394,
  });

  const student2 = addStudent({
    id: 2,
    name: "nishat",
    email: "nishat@com",
    address: "bogura",
  });
  //* From there come error because we did not add 3 value (id, name and email)
  /* 
 const student3 = addStudent({
    address: "no address",
  });
 */

  //TODO : generic constraint with keyof operator----------------->

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // this is the manual way
  type Owner2 = keyof Vehicle; // both are the same

  const person1: Owner2 = "bike"; // assigning one of the keys of Vehicle type

  console.log(person1); // Output: bike

  // TODO : Example-2 :

  const getValue = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key];
  };

  const user = {
    name: "Mr. no body",
    age: 23,
    address: "Dhaka",
  };

  //* getValue(user, "name") correctly retrieves the value of the name property from the user object.

  const result1 = getValue(user, "name"); // Correct usage
  console.log(result1); // Output: Mr. no body

  // TODO : ----------------Example-3 -------------->

  // Generic function using type assertion
  const getProperty = <T>(obj: T, key: keyof T) => {
    //* obj[key] as T[keyof T]: Type assertion is used to explicitly specify the return type, which helps with type inference and ensures type safety.
    return obj[key] as T[keyof T];
  };

  const product = {
    id: 101,
    name: "Laptop",
    price: 1500,
  };

  const result2 = getProperty(product, "price");
  console.log(result2); // Output: 1500

  //
}
