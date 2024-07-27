{
  // ts-node-dev use for running and see console 

  // TODO : ternary operator -------------------->
  const age: number = 18;
  const canVote = age >= 18 ? "Yes, can vote" : "No, cannot vote";

  console.log(canVote); // Output: Yes, can vote

  //TODO : nullish coalescing operator----------------> :
  const userInput: string | null = null;
  const defaultValue: string = "Default value";

  const finalValue: string = userInput ?? defaultValue;

  console.log(finalValue); // Output: Default value

  // example - 2 :
  const isAuth = null;
  const result = isAuth ?? "guest";
  console.log(result);

  //TODO : optional chaining ----------------------> :
  interface User {
    profile?: {
      name?: string;
    };
  }

  const user: User = {
    profile: {
      name: "Alice",
    },
  };

  // Using optional chaining to safely access the `name` property
  const userName: string | undefined = user?.profile?.name ?? "no name";

  console.log({ userName }); // Output: Alice

  // Example with missing `profile`
  const anotherUser: User = {};

  const anotherUserName: string | undefined =
    anotherUser?.profile?.name ?? "no name add";

  console.log(anotherUserName); // Output: no name add
}
