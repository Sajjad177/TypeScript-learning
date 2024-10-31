{
//TODO : Nullable Types ->

  const search = (value : string | null) => {
    if(value){
        console.log("searching")
    } else {
      console.log("Nothing to search");
    }
  };

  search(null);

  //TODO : Unknown Type ->
  const getSpeed = (speed: unknown) => {
    if (typeof speed === "number") {
      console.log(`My speed is ${speed}`);
    } else {
      console.log("Not a number");
    }
  };

  getSpeed(100);


  //TODO : Never Type ->
  function throwError(message: string): never {
    throw new Error(message);
  }

  throwError("Something went wrong");


  //End  
}
