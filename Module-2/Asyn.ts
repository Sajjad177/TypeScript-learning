{
  //TODO : Basic Promise------------------->

  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "$10000";
      if (data) {
        resolve(`Your money is now ${data}`);
      } else {
        reject("No money in your account");
      }
    });
  };

  // Calling createPromise function with error handling
  //* Promise<void> অংশটি বোঝায় যে showData ফাংশনটি একটি প্রমিজ রিটার্ন করবে যা কোনো নির্দিষ্ট টাইপের মান রিটার্ন করবে না।
  const showData = async (): Promise<void> => {
    try {
      const data: string = await createPromise();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  showData();

  // TODO : Fetching data-------------------------------->

  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };

  const getTodo = async (): Promise<Todo> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    return data;
  };

  getTodo()
    .then((todo) => console.log(todo))
    .catch((error) => console.error(error));

  //
}
