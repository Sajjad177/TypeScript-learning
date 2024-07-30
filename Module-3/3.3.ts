{
  // TODO : type Guard using-------------------->

  //* Typeof ------> type guard : 

  type Alpha = string | number;

  const add = (param1: Alpha, param2: Alpha): Alpha => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(2, 5); // OutPut : 7
  const result2 = add("3", "5"); //output : 35

  console.log(result1);
  console.log(result2);

  //* In ------> type guard---------= :

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  const employee: NormalUser = {
    name: "Mr. Employee",
  };
  const adminVai: AdminUser = {
    name: "Mr. Admin",
    role: "admin",
  };

  getUser(adminVai); // My name is Mr. Admin and my role is admin
  getUser(employee); // My name is Mr. Employee

  //
}
