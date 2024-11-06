//Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.

// Sample Input:
// repeatString("Hello!", 3)

// Sample Output:
// "Hello!Hello!Hello!"

const repeatString = (str: string, num: number) => {
  return str.repeat(num);
};

console.log(repeatString("Hello!", 3));

//Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.

// Sample Input:
// findLargestNumber([10, 5, 8, 20, 3])

// Sample Output:
// 20

const findLargestNumber2 = (arr: number[]) => {
  return Math.max(...arr);
};

console.log(findLargestNumber2([10, 5, 8, 20, 3]));

//Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.

const filterEvenNumbers = (arr: number[]) => {
  return arr.filter((num) => num % 2 === 0);
};

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

//Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.

const reverseArray = <T>(arr: T[]) => {
  return arr.reverse();
};

console.log(reverseArray(["apple", "banana", "cherry"]));


//You are given an object called “student” representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called calculateAverageGrade that takes this student object as input and calculates the average grade.

interface Student {
  name: string;
  age: number;
  grades: number[];
}

const calculateAverageGrade = (student : Student) => {
  return student.grades.reduce((acc, curr) => acc + curr, 0) / student.grades.length;
};

console.log(
  calculateAverageGrade({ name: "John", age: 20, grades: [75, 80, 82, 88, 90] })
);
