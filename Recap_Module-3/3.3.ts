{
  // TODO : type Guard :

  // ------------------  using typeof operator
  // Type guard example using typeof
  const numberOrString = (param: number | string): string => {
    if (typeof param === "number") {
      return param.toFixed(2);
    } else {
      return param.toUpperCase();
    }
  };

  console.log(numberOrString(42)); // "42.00"
  console.log(numberOrString("hello")); // "HELLO"


  //------------------------ in guard use for object type

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`${user.name} is an admin`);
    } else {
      console.log(`${user.name} is a normal user`);
    }
  };

  const normalUser: NormalUser = { name: "John" };
  const adminUser: AdminUser = { name: "Jane", role: "admin" };

  getUser(normalUser); // John is a normal user
  getUser(adminUser); // Jane is an admin

  //
}
