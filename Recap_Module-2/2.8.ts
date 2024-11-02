{
  // TODO : ASynchronous TypeScript ->

  // Promise :

  type Todo = {
    userId : number,
    id : number,
    title : string,
    completed : boolean
  }

    const getTodo = async (): Promise<Todo> => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
    return data;
  };

  getTodo();


// Example 2 : -------------------------------------->

  type Something = {something : string}

  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data = "There is some data";
      if (data) {
        resolve({something : data});
      } else {
        reject("Error");
      }
    });
  };

  // calling the promise :
  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    console.log(data);
    return data;
  };

  showData();

  //
}
