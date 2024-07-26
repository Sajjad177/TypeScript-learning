{

//TODO: basic data type------------------>

// string
let firstName: string = "sajjad";

//number type
let roll: number = 123;

//boolean type :
let isAdmin: boolean = true;

// undefined
let x: undefined = undefined;

//null
let y: null = null;

let data: number;
data = 222;

// Array string type
let friend: string[] = ["kriti", "hanniya"];

// Array number type :
let money: number[] = [20, 43];

//tuple :
let ageName: [number, string] = [20, "sajjad"];

//TODO: Reference type ---------------->

//Object :
const user: { firstName: string; middleName?: string; lastName: string } = {
  firstName: "sajjad",
  lastName: "Hossain",
};

const userData: {
  readonly learn: "programming Hero";
  firstName: string;
  age: number;
  address: [number, string];
  married: boolean;
} = {
  learn: "programming Hero",
  firstName: "sajjad",
  age: 20,
  address: [5820, "fulbari"],
  married: false,
};

// TODO : Function ------------------>

// Normal function :
function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(2, 3);

//arrow function :
const total = (num1: number, num2: number): number => num1 + num2;

//object --- function --- method :
const newUser = {
  name: "sajjad",
  balance: 0,
  addMoney(balance: number): string {
    this.balance += balance;
    return `my balance is: ${this.balance}`;
  },
};

// Example usage:
console.log(newUser.addMoney(50)); // my balance is: 50
console.log(newUser.balance); // 50

// TODO : Map ------------------>

const numbers: number[] = [13, 21, 3];
const newNum = numbers.map((num: number): number => num * num);

console.log(newNum); // [169, 441, 9]

// TODO : spread operator and destructuring

// Array spread operator
const users: string[] = ["sajjad", "nishat"];
const users2: string[] = ["rakib", "shakib"];

users.push(...users2);

// Object spread operator :

interface Person {
  name: string;
  age: number;
}

interface ContactInfo {
  email: string;
  phone: string;
}

const person: Person = {
  name: "John",
  age: 30,
};

const contact: ContactInfo = {
  email: "john@example.com",
  phone: "123-456-7890",
};

const personWithContact = {
  ...person,
  ...contact,
};

console.log(personWithContact);
/*
{
    name: "John",
    age: 30,
    email: "john@example.com",
    phone: "123-456-7890"
}
*/

// destructuring :
interface Address {
  street: string;
  city: string;
  state: string;
}

interface User {
  userName: string;
  age: number;
  address: Address;
}

const newData: User = {
  userName: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Somewhere",
    state: "CA",
  },
};

const {
  userName,
  address: { city, state },
} = newData;

console.log(userName); // John
console.log(city); // Somewhere
console.log(state); // CA


// array Destructuring 
const myFriends: string[] = ["a", "b", "c"];
const [...rest]: string[] = myFriends;

console.log(rest); // ["a", "b", "c"]

} 