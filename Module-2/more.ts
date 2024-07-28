{
  //TODO : ----------Generic type------------------------->

  //* const roll: number[] = [3,5,6]
  //* const names : string[] = ["abs", "sdj", "djr"]

  // this is generic type and we also write this way
  const roll: Array<number> = [3, 5, 6];
  const names: Array<string> = ["abs", "sdj", "djr"];

  // generic type dynamic way

  type GenericArray<T> = Array<T>;

  const rolls: GenericArray<number> = [3, 5, 6];
  const users: GenericArray<string> = ["abs", "sdj", "djr"];

  // TODO : ----------- Generic Tuple----------------->
  type GenericTuple<X, Y> = [X, Y];

  const UserWithId: GenericTuple<number, { name: string; email: string }> = [
    124,
    { name: "hasa", email: "hasa@gmail.com" },
  ];
}
