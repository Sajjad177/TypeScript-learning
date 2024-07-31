{
  // TODO : Statics in OOP--------------------------->

  class Counter {
    // Static property to keep track of count across all instances
    static count: number = 0;

    // Method to increment the count and return the updated value
    static increment() {
      return (Counter.count += 1);
    }

    // Method to decrement the count and return the updated value
    static decrement() {
      return (Counter.count -= 1);
    }
  }

  //* without add static in " increment "
  //   const instance1 = new Counter();
  //   console.log(instance1.increment());

  //* using static in " static increment "
  console.log(Counter.increment());

  //   const instance2 = new Counter();
  console.log(Counter.increment());

  //   const instance3 = new Counter();
  console.log(Counter.increment());

  //
}
