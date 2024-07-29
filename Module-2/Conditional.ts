{
  //TODO : Conditional type------------------>
  type a1 = null;
  type b1 = undefined;

  // Conditional type checking if `a1` is `null`
  type x = a1 extends null ? true : false; // true

  // Conditional type with nested conditions
  type y = a1 extends null ? true : b1 extends undefined ? undefined : any; // true

  // Adding more complex nested conditional types
  type c1 = string;
  type d1 = number;

  // Complex conditional type example
  type z = c1 extends string
    ? d1 extends number
      ? "string and number"
      : "string and not a number"
    : "not a string";

  type e1 = boolean;
  type f1 = number;

  // Another example of nested conditional types
  type w = e1 extends boolean
    ? f1 extends number
      ? "boolean and number"
      : "boolean and not a number"
    : "not a boolean";


    // TODO : example :----------------->

  type Rich = {
    bike: string;
    car: string;
    Iphone: string;
  };

  // Dynamically check if a type extends one of the keys of Rich
  type checkRich<T> = T extends keyof Rich ? true : false;

  type hasCar = checkRich<"car">; // Output: true
  type hasShip = checkRich<"ship">; // Output: false

  // Additional tests
  type hasBike = checkRich<"bike">; // Output: true
  type hasIphone = checkRich<"Iphone">; // Output: true
  type hasPlane = checkRich<"plane">; // Output: false

  //
}
