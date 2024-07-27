{
  // TODO : type assertion--------------------->
  let someValue: any = "Hello, TypeScript";

  // Using 'as' syntax to assert that 'someValue' is a string
  let strLength: number = (someValue as string).length;

  console.log(strLength); // Outputs: 16

  // Example-2 :
  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }

  // TODO : Interface---------------------->
  // we can declear this using interface :
  type User1 = {
    name: string;
    age: number;
  };

  const user1: User1 = {
    name: "sadiya",
    age: 20,
  };

// using interface 
interface User2 {
    name : string;
    age : number;
}

const user2 : User2 = {
    name : "sajjad",
    age : 24,
}



}
