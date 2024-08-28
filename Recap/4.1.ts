{
  const arr: [string, number, boolean] = ["hi", 10, true];
  arr.push(5);
  console.log(arr); //Output : [ 'hi', 10, true, 5 ]

  function abcd(): never {
    while (true) {
      console.log("Infinite run");
    }
  }

  // abcd()

  //TODO : enum ->

  enum Direction {
    up = "UP",
    left = "LEFT",
    right = "RIGHT",
    bottom = "BOTTOM",
  }

  console.log(Direction.bottom);

  let value: string | number;
  value = 12;

  if (typeof value === "string") {
    console.log("This value is string");
  } else {
    console.log("This value is Number");
  }

  //
}
