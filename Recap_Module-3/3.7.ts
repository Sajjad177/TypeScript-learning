{
  //TODO : Static ------------------------
  class Counter {
    static count: number = 0;
    static increment() {
    //   return (this.count = +1);
    return (Counter.count = Counter.count + 1);
    }
    static decrement() {
    //   return (this.count -= 1);
    return (Counter.count = Counter.count - 1);
    }
  }

  const instance1 = new Counter();
  console.log("Increment -> ", Counter.increment());
  console.log("Increment -> ", Counter.increment());



  const instance2 = new Counter();
  console.log("Increment -> ", Counter.increment());
  console.log("Increment -> ", Counter.increment());

  const instance3= new Counter();
  console.log("Decrement -> ", Counter.decrement());
  console.log("Decrement -> ", Counter.decrement());




//   const instance2 = new Counter();  
//   console.log("Decrement -> ", instance2.decrement());

  //

  //
}
