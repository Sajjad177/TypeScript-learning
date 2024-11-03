{
  // TODO : instanceof operator :
  class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("Animal sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("Dog is Barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeow() {
      console.log("cat is meow");
    }
  }

  // TODO : using instanceof operator  - **

  const getAnimal = (animal: Animal) => {
    if (animal instanceof Dog) {
      animal.makeBark();
    } else if (animal instanceof Cat) {
      animal.makeMeow();
    }
  };

  getAnimal(new Dog("German Shepard dog", "dog"));
  getAnimal(new Cat("Persian cat", "cat"));

  // using smart way to check type of object
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal2 = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeow();
    }
  };

  getAnimal2(new Dog("German Shepard dog", "dog"));
  getAnimal2(new Cat("Persian cat", "cat"));

  const dog = new Dog("German Shepard dog", "dog");
  const cat = new Cat("Persian cat", "cat");

  //
}
