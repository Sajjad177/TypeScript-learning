{
  //TODO : Conditional Types :
  // kecu buje ne
  type a1 = number;
  type b1 = undefined;

  // condition type :
  type result = a1 extends null ? true : false;

  // Example 2 : -------------------------------------->

  type Sheikh = {
    money: number;
    bike: string;
    car: boolean;
    ship: string;
  };

  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasBike = CheckVehicle<"bike">;

  // TODO : Mapped Types : ----------------------->

  const arrayOfNumbers = [1, 2, 3, 4, 5];

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; // lookup type

  // mapped type :
  type AreaString<T> = {
    [key in keyof AreaNumber]: string;
  };

  const area1: AreaString<{
    height: string;
    width: string;
  }> = {
    height: "100",
    width: "50",
  };

  //
}
