// TODO : repeat string ->

let str: string = "BMW";
let times: number = 6;

let result = str.repeat(times);
// console.log(result);

// TODO : Using function ->

const repeatName = (param1: string, param2: number) => {
  //   console.log(param1.repeat(param2));
};
repeatName("Hello!", 3);

// TODO : Find largest Number ->

function findLargestNumber(arr: number[]): number {
  return Math.max(...arr);
}

let maxNumber = findLargestNumber([10, 5, 8, 20, 3]);
// console.log(maxNumber)

// TODO : Filter Event Number ->

function filterEvenNumbers(arr: number[]): number[] {
  return arr.filter((num) => num % 2 === 0);
}

let eventNum = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
// console.log(eventNum)

// TODO : reverse array ->

function reverseNum(arr: any[]): any[] {
  return arr.reverse();
}

let reverse = reverseNum([10, 20, 30]);
console.log(reverse);

// Example - 2 :

function reverseStr(arr: string[]): any[] {
  return arr.reverse();
}

let reverse2 = reverseStr(["cherry", "banana", "apple"]);
console.log(reverse2); // Output: ["apple", "banana", "cherry"]

// TODO : Problem - 5 ->
interface Student {
  name: string;
  age: number;
  grades: number[];
}

const student1: Student = {
  name: "MR:x",
  age: 20,
  grades: [75, 80, 82, 88, 90],
};

function calculateAverageGrade(student: Student): number {
  const { grades } = student;
  const total = grades.reduce((num, grade) => num + grade, 0);
  return total / grades.length;
}

const result2 = calculateAverageGrade(student1);
console.log(result2);

// TODO : Problem - 6 ->

type Book = {
  title: string;
  author: string;
  publishedYear: 2022;
};

const book1: Book = {
  title: "Sample Book",
  author: "John Doe",
  publishedYear: 2022,
};

function isRecentBook(book: Book): boolean {
  const currentYear = new Date().getFullYear();
  return currentYear - book.publishedYear <= 5;
}

const result3 = isRecentBook(book1)
console.log(result3)