{
  //TODO : OOP - Class : --------------------------------->
  class Animal {
    // name: string;
    // species: string;
    // sound: string;

    //* if we use public keyword, we don't need to declare the variables in the constructor
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }
    makeSound() {
      console.log(`${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German Shepherd", "Dog", "Bark");
  const cat = new Animal("Persian", "Cat", "Meow");

  dog.makeSound();
  cat.makeSound();

  //
}
