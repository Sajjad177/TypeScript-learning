{
  // TODO : Abstraction ------------------------

  interface Vehical {
    name: string;
    model: string;
  }
  //  Object -----
  const vehical1: Vehical = {
    name: "BMW",
    model: "2024",
  };

  class vehical2 implements Vehical {
    name: string = "AUDI";
    model: string = "2024";
  }

  // Example 2 ------------------------
  interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
  }

  class Car implements Vehicle {
    startEngine(): void {
      console.log("Engine started");
    }
    stopEngine(): void {
      console.log("Engine stopped");
    }
    test(): void {
      console.log("Test");
    }
  }


  const toyotaCar = new Car();
  toyotaCar.startEngine();
  console.log(toyotaCar);

  // Example 3 ------------------------

  //* if we use abstract class we can't create object of that class. And it's a leader class.

  // idea of abstract class is to provide a base class for other classes to inherit from.
  abstract class Vehicle2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract test(): void;
  }


  class FarraryCar extends Vehicle2 {
    startEngine(): void {
      console.log("Engine started");
    }
    stopEngine(): void {
      console.log("Engine stopped");
    }
    test(): void {
      console.log("Test");
    }
  }

  //* we can't create object of abstract class.
//   const AudiCar = new Vehicle2();
//   AudiCar.startEngine();
//   console.log(AudiCar);


  //
}
