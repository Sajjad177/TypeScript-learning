{
  //TODO : Mapped types --------------------->
  const arrOfNum: number[] = [1, 4, 6];
  const arrOfString: string[] = arrOfNum.map((number) => number.toString());

  console.log(arrOfString); // Output: ["1", "4", "6"]

  // TODO : Utility types---------------------------->
  //* Pick :___________________->
  type Person = {
    name: string;
    age: number;
    email?: string;
  };

  // Using the Pick utility type to create a new type with only name and age properties
  type NameAge = Pick<Person, "name" | "age">;

  const person: NameAge = {
    name: "John",
    age: 30,
  };

  console.log(person); // Output: { name: "John", age: 30 }

  //* Omit--------------------->
  type User = {
    id: number;
    name: string;
    email: string;
    address: string;
  };

  //* omit remove address from the object

  type UserWithoutAddress = Omit<User, "address">;

  const user: UserWithoutAddress = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
  };

  console.log(user);
  //Output : {id : 1, name : Alice, email : alice@example.com}

  //* Required-------------------->
  type PartialUser = {
    id?: number;
    name?: string;
    email?: string;
  };

  //* all properties in a type required.

  type CompleteUser = Required<PartialUser>;

  const user2: CompleteUser = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
  };

  console.log(user2);

  //* Readonly----------------------------->
  type Product = {
    id: number;
    name: string;
    price: number;
  };

  //* All property in a type read-only.

  const product: Readonly<Product> = {
    id: 1,
    name: "Laptop",
    price: 1000,
  };

  // Error: Cannot assign to 'price' because it is a read-only property.
  // product.price = 900;

  //* Partial---------------------------->

  type Users = {
    id: number;
    name: string;
    email: string;
  };
  //* All properties in a type optional

  const updateUser = (id: number, update: Partial<Users>) => {
    // In a real application, this would update the user in the database
    console.log(`Updating user ${id} with`, update);
  };

  // Usage
  updateUser(1, { name: "Alice" });
  updateUser(2, { email: "bob@example.com" });

  //* Record------------------------------>

  type Role = "admin" | "user" | "guest" | "hr";

  type Permissions = Record<Role, string[]>;

  const rolePermissions: Permissions = {
    admin: ["read", "write", "delete"],
    user: ["read", "write"],
    guest: ["read"],
    hr : ["read"]
  };


  //
}
