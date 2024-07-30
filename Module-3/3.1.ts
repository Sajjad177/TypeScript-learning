{
  // TODO : ------------OOP - Class ------------>
  class Vehicle {
    name: string;
    model: string;
    made: string;

    // Constructor to initialize the attributes of the Vehicle class
    constructor(name: string, model: string, made: string) {
      this.name = name;
      this.model = model;
      this.made = made;
    }

    // Method to get the description of the Vehicle
    getDescription(): string {
      return `${this.name} (Model: ${this.model}) - Made in ${this.made}`;
    }
  }

  // Creating an instance of the Vehicle class
  const jeep = new Vehicle("Jeep wrangler", "420 M", "German");
  const bike = new Vehicle("BMW", "MH-423", "China");

  // Using the getDescription method to get a detailed description of the Vehicle
  console.log(jeep.getDescription()); // Output: Jeep wrangler (Model: 420 M) - Made in German
  console.log(bike.getDescription()); // Output: BMW (Model: MH-423) - Made in China

  //* ------------- using parameter properties______________________-> : 
  
  class Vehicle2 {
    // Constructor to initialize the attributes of the Vehicle class and using parameter properties["public"]
    constructor(
      public name: string,
      public model: string,
      public made: string
    ) {}

    // Method to get the description of the Vehicle
    getDescription(): string {
      return `${this.name} (Model: ${this.model}) - Made in ${this.made}`;
    }
  }

  // Creating an instance of the Vehicle class
  const jeep2 = new Vehicle2("Jeep wrangler", "420 M", "German");
  const bike2 = new Vehicle2("BMW", "MH-423", "China");

  // Using the getDescription method to get a detailed description of the Vehicle
  console.log(jeep2.getDescription()); // Output: Jeep wrangler (Model: 420 M) - Made in German
  console.log(bike2.getDescription()); // Output: BMW (Model: MH-423) - Made in China

  //
}
