{
  //TODO : Nullable type------------------------>

  const searchName = (value: string | null) => {
    if (value) {
      console.log("searching");
    } else {
      console.log("There is nothing to search");
    }
  };

  // searchName("sajjad") // output : searching
  searchName(null); // output : There is nothing to search

  // TODO : Nullable Object Property Type ---------------->

  interface User {
    id: number;
    email?: string | null; // Email can be string or null
  }

  const user1: User = {
    id: 1,
    email: "alice@example.com",
  };

  const user2: User = {
    id: 2,
    email: null,
  };

  console.log(user1.email); // Output: alice@example.com
  console.log(user2.email); // Output: null

  // TODO : unknown type variable ---------------------->

  // Function that takes an unknown type argument
  function handleValue(value: unknown) {
    if (typeof value === "string") {
      console.log(`String length: ${value.length}`); // Safe to access `length`
    } else if (typeof value === "number") {
      console.log(`Number squared: ${value ** 2}`); // Safe to perform arithmetic
    } else {
      console.log("Unsupported type");
    }
  }

  // Example usage
  handleValue("Hello, TypeScript!"); // Output: String length: 18
  handleValue(42); // Output: Number squared: 1764
  handleValue(true); // Output: Unsupported type

  // TODO : Never type ------------------------------>
  // this is a custom error and we create some error

  // Function that never returns
  function throwError(message: string): never {
    throw new Error(message);
  }

  // Function that handles all possible cases and never reaches the default
  function newValue(value: "a" | "b" | "c") {
    switch (value) {
      case "a":
        console.log("Handled case a");
        break;
      case "b":
        console.log("Handled case b");
        break;
      case "c":
        console.log("Handled case c");
        break;
      default:
        const exhaustiveCheck: never = value; // Ensures all cases are handled
        throw new Error(`Unhandled value: ${exhaustiveCheck}`);
    }
  }

  // Example usage
  throwError("*****--- An error occurred we created----********"); // This will throw an error and never return

  newValue("a"); // Output: Handled case a
  newValue("b"); // Output: Handled case b
  newValue("c"); // Output: Handled case c



}
