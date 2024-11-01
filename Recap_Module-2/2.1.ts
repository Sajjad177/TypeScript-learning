{
  // TODO : Type Assertion ->

  let anything: any;
  anything = "Hello";
  anything = 123;
  anything = true;

  anything as string;

  // Another example of type assertion
  let someValue: unknown = "This is a string";
  let strLength: number = (someValue as string).length;
  console.log(strLength);

  // Can also use angle bracket syntax (except in TSX files)
  let numValue: unknown = 42;
  let doubledNum: number = <number>numValue * 2;
  console.log(doubledNum);

  // TODO : Type Assertion vs Type Casting

  // টাইপ অ্যাসারশন উদাহরণ (Type Assertion Example):
  // টাইপ অ্যাসারশন হল কম্পাইল টাইমে টাইপস্ক্রিপ্টকে বলা যে একটি ভ্যারিয়েবল কোন টাইপের
  let myString: unknown = "Hello World";
  let stringLength: number = (myString as string).length;
  console.log("টাইপ অ্যাসারশন ব্যবহার করে স্ট্রিং এর দৈর্ঘ্য:", stringLength);

  // অন্য একটি টাইপ অ্যাসারশন উদাহরণ অ্যাঙ্গেল ব্র্যাকেট ব্যবহার করে
  let myNumber: unknown = 42;
  let numericValue: number = <number>myNumber;
  console.log(
    "অ্যাঙ্গেল ব্র্যাকেট সিনট্যাক্স ব্যবহার করে টাইপ অ্যাসারশন:",
    numericValue
  );

  // Type Casting উদাহরণ (রানটাইম কনভার্শন):
  // টাইপ কাস্টিং রানটাইমে একটি টাইপ থেকে অন্য টাইপে রূপান্তর করে
  let numberAsString: string = "123";
  let actualNumber: number = Number(numberAsString);
  console.log("স্ট্রিং থেকে নাম্বারে রূপান্তর:", actualNumber);

  let booleanAsString: string = "true";
  let actualBoolean: boolean = Boolean(booleanAsString);
  console.log("স্ট্রিং থেকে বুলিয়ানে রূপান্তর:", actualBoolean);

  // মূল পার্থক্য:
  console.log("টাইপ অ্যাসারশন এবং টাইপ কাস্টিং এর মধ্যে পার্থক্য:");
  console.log("১। টাইপ অ্যাসারশন শুধুমাত্র কম্পাইল টাইমে কাজ করে");
  console.log("২। টাইপ কাস্টিং রানটাইমে প্রকৃত ডাটা কনভার্শন করে");

  // উদাহরণ দেখানো
  console.log("টাইপ অ্যাসারশন উদাহরণের ফলাফল:", stringLength);
  console.log("টাইপ কাস্টিং উদাহরণের ফলাফল:", actualNumber + 5);


 



}