{
  // TODO :   type alias ------------------>  :

  type Address = {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country?: string; // optional property
  };

  type Person = {
    name: string;
    age: number;
    address: Address; // type alias use there
  };

  const person: Person = {
    name: "Bob Smith",
    age: 40,
    address: {
      street: "101 Maple St",
      city: "Small town",
      state: "WA",
      postalCode: "12321",
      country: "USA", // optional property included
    },
  };

  const personWithoutCountry: Person = {
    name: "Carol White",
    age: 35,
    address: {
      street: "202 Pine St",
      city: "Big city",
      state: "CA",
      postalCode: "45654",
      // country not included
    },
  };

  console.log(person);
  console.log(personWithoutCountry);

  // TODO : function type----------------------> :

  // Define a type alias for a function that takes two numbers and returns a number
  type MathOperation = (a: number, b: number) => number;

  // Example functions using the MathOperation type alias

  // Addition function
  const add: MathOperation = (a, b) => a + b;

  // Subtraction function
  const subtract: MathOperation = (a, b) => a - b;

  // Multiplication function
  const multiply: MathOperation = (a, b) => a * b;

  // Division function
  const divide: MathOperation = (a, b) => a / b;

  // Using the functions
  console.log(add(5, 3)); // 8
  console.log(subtract(5, 3)); // 2
  console.log(multiply(5, 3)); // 15
  console.log(divide(5, 3)); // 1.666...

  // TODO : union type --------------------->

  type frontDev = "proDeveloper" | "noobDeveloper";

  const newDev: frontDev = "proDeveloper";

  // TODO : ----------------2nd example--------------->

  // Union type example
  type Status = "pending" | "approved" | "rejected";

  function updateStatus(status: Status) {
    switch (status) {
      case "pending":
        console.log("The status is pending.");
        break;
      case "approved":
        console.log("The status is approved.");
        break;
      case "rejected":
        console.log("The status is rejected.");
        break;
      default:
        const exhaustiveCheck: never = status;
        throw new Error(`Unhandled status: ${exhaustiveCheck}`);
    }
  }

  // Example usage
  updateStatus("approved"); // Output: The status is approved.
}

//TODO : Union type with objects----------------------> :
type Animal =
  | { type: "dog"; breed: string }
  | { type: "cat"; color: string }
  | { type: "bird"; canFly: boolean };

function handleAnimal(animal: Animal) {
  switch (animal.type) {
    case "dog":
      console.log(`Dog breed: ${animal.breed}`);
      break;
    case "cat":
      console.log(`Cat color: ${animal.color}`);
      break;
    case "bird":
      console.log(`Can fly: ${animal.canFly}`);
      break;
    default:
      const exhaustiveCheck: never = animal;
      throw new Error(`Unhandled animal type: ${exhaustiveCheck}`);
  }
}

// Example usage
handleAnimal({ type: "dog", breed: "Labrador" }); // Output: Dog breed: Labrador
handleAnimal({ type: "bird", canFly: true }); // Output: Can fly: true
