{
  //TODO : Generic interface ->

  interface Developer<T, U> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    // T is a generic type parameter that can be any type
    smartWatch: T;
    bike?: U;
  }

  //* Example 1 : ------------------------------------

  type PoorWatch = {
    brand: string;
    model: string;
    releaseYear: number;
  };

  const poorDeveloper: Developer<PoorWatch, null> = {
    name: "John",
    computer: {
      brand: "Apple",
      model: "MacBook Pro",
      releaseYear: 2020,
    },
    smartWatch: {
      brand: "Apple",
      model: "Apple Watch",
      releaseYear: 2020,
    },
  };

  //* Example 2 : ------------------------------------

  type RichWatch = {
    brand: string;
    model: string;
    releaseYear: number;
    price: number;
    heartTrack: boolean;
  };

  type RichBike = {
    brand: string;
    model: string;
    releaseYear: number;
    price: number;
  };

  const richDeveloper: Developer<RichWatch, RichBike> = {
    name: "John",
    computer: {
      brand: "Apple",
      model: "MacBook Pro",
      releaseYear: 2020,
    },
    smartWatch: {
      brand: "Apple",
      model: "Apple Watch",
      releaseYear: 2020,
      price: 1000,
      heartTrack: true,
    },
    bike: {
      brand: "BMW",
      model: "BMW M3",
      releaseYear: 2020,
      price: 100000,
    },
  };

  //
}
