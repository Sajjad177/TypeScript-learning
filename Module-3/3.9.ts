{
  //TODO : Abstraction in OOP : 1.Interface 2. Abstract --------------------->

  //Interface:
  //* Idea ->
  interface Vehicle1 {
    vehicleName(): void;
    vehicleModel(): void;
  }
  //* real implementation -> :
  class Car implements Vehicle1 {
    vehicleName(): void {
      console.log("This car name is Jeep");
    }

    vehicleModel(): void {
      console.log("This car model is 2023");
    }

    move(): void {
      console.log("I am moving Car");
    }
  }

  const toyotaCar = new Car();
  toyotaCar.vehicleName();
  toyotaCar.vehicleModel();
  toyotaCar.move();

  // TODO : Abstract class -------------------------->
  // Abstract class Vehicle2 serves as a base class
  // It defines abstract methods that must be implemented by derived classes
  // It also provides a concrete implementation for the 'move' method
  abstract class Vehicle2 {
    // Abstract method 'vehicleName' must be implemented by any subclass
    abstract vehicleName(): void;

    // Abstract method 'vehicleModel' must be implemented by any subclass
    abstract vehicleModel(): void;

    // Concrete method 'move' is provided by the abstract class
    // Derived classes can either use this implementation or override it
    move(): void {
      console.log("I am moving Car");
    }
  }

  // The BmwCar class extends Vehicle2 and provides implementations
  // for the abstract methods defined in the base class
  class BmwCar extends Vehicle2 {
    // Implementation of the abstract method 'vehicleName'
    vehicleName(): void {
      console.log("The car name is BMW");
    }

    // Implementation of the abstract method 'vehicleModel'
    vehicleModel(): void {
      console.log("The car model is Bx43");
    }

    // Optionally override the 'move' method from Vehicle2
    // This method could have a different implementation specific to BmwCar
    move(): void {
      console.log("The BMW car is now moving");
    }
  }

  // Create an instance of BmwCar
  const bmw = new BmwCar();

  // Call the methods to demonstrate functionality
  bmw.vehicleName(); 
  bmw.vehicleModel(); 
  bmw.move(); 

  //
}
