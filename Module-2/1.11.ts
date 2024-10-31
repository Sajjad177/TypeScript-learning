{
  // TODO: Ternary Operator ->

  const age: number = 22;

  // if (age >= 18) {
  //   console.log("Adult");
  // } else {
  //   console.log("Not Adult");
  // }

  const isAdult = age >= 18 ? "Adult" : "Not Adult";
  // console.log(isAdult);

  // TODO: Nullish Coalescing Operator ->  null, undefined for decision making

  const isAuthenticated = null;
  const result = isAuthenticated ?? "Guest";
  console.log({ result });

  //TODO : Optional Chaining ->

  type User = {
    name: string;
    address: {
      city: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "John",
    address: {
      city: "New York",
      presentAddress: "123 Main St",
    },
  };

  console.log(user?.address?.permanentAddress ?? "No Permanent Address");

  //
}
