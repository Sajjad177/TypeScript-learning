{
  // TODO: Type guard using `instanceof` ------->

  //* Example-1 :

  class Motor {
    name: string;
    model: string;
    year: number;

    constructor(name: string, model: string, year: number) {
      this.name = name;
      this.model = model;
      this.year = year;
    }

    makeCar() {
      console.log(`The car name is ${this.name}`);
    }
  }

  //* Example-2 :
  class Bike extends Motor {
    constructor(name: string, model: string, year: number) {
      super(name, model, year);
    }

    makeBike() {
      console.log(`This bike name is ${this.name}`);
    }
  }

  class SuperCar extends Motor {
    constructor(name: string, model: string, year: number) {
      super(name, model, year);
    }

    makeSuperCar() {
      console.log(`This super car name is ${this.name}`);
    }
  }

  //* Do it smart way :
  //"motor is Bike" its like a boolean

  const isBike = (motor: Motor): motor is Bike => {
    return motor instanceof Bike;
  };

  const isSuperCar = (motor: Motor): motor is SuperCar => {
    return motor instanceof SuperCar;
  };

  // Function to demonstrate type guarding using `instanceof`
  const getMotor = (motor: Motor) => {
    if (isBike(motor)) {
      motor.makeBike();
    } else if (isSuperCar(motor)) {
      motor.makeSuperCar();
    } else {
      motor.makeCar();
    }
  };

  // Creating instances of Bike and SuperCar
  const bike = new Bike("BMW", "MH-349", 2023);
  const superCar = new SuperCar("Jeep", "JP-420", 2024);

  // Calling the type guard function with different instances
  getMotor(bike); // Output: This bike name is BMW
  getMotor(superCar); // Output: This super car name is Jeep

  //* Example - 2 :_____________->

  // Base class for an Employee
  class Employee {
    name: string;
    role: string;

    constructor(name: string, role: string) {
      this.name = name;
      this.role = role;
    }

    getDetails() {
      console.log(`Name: ${this.name}, Role: ${this.role}`);
    }
  }

  // Derived class for a Developer
  class Developer extends Employee {
    programmingLanguage: string;

    constructor(name: string, role: string, programmingLanguage: string) {
      super(name, role);
      this.programmingLanguage = programmingLanguage;
    }

    writeCode() {
      console.log(
        `${this.name} is writing code in ${this.programmingLanguage}`
      );
    }
  }

  // Derived class for a Manager
  class Manager extends Employee {
    teamSize: number;

    constructor(name: string, role: string, teamSize: number) {
      super(name, role);
      this.teamSize = teamSize;
    }

    manageTeam() {
      console.log(
        `${this.name} is managing a team of ${this.teamSize} members`
      );
    }
  }

  // Type guard function to handle different types of employees
  const handleEmployee = (employee: Employee) => {
    employee.getDetails();
    if (employee instanceof Developer) {
      employee.writeCode();
    } else if (employee instanceof Manager) {
      employee.manageTeam();
    } else {
      console.log(`${employee.name} has a general role of ${employee.role}`);
    }
  };

  // Creating instances of Developer and Manager
  const dev = new Developer("Alice", "Software Developer", "TypeScript");
  const mgr = new Manager("Bob", "Project Manager", 10);

  // Calling the type guard function with different instances
  handleEmployee(dev);
  // Output: Name: Alice, Role: Software Developer Alice is writing code in TypeScript
  handleEmployee(mgr);
  // Output: Name: Bob, Role: Project Manager Bob is managing a team of 10 members

  //
}
