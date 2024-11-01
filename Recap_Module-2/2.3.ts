{
  //TODO : Generic Interface ->

  type GenericArray = Array<string>;

  const mentor: Array<string> = ["John", "Jane", "Jim"];

  // this type is same as above
  const mentor2: GenericArray = ["John", "Jane", "Jim"];

  const rollNumber: Array<number> = [1, 2, 3];


 // Reuserable generic type -> 
 // T works like a parameter :
  type Reuserable <T> = Array<T>;
  const students: Reuserable<string> = ["John", "Jane", "Jim"];


  //
}
