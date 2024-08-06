// TODO : repeat string ->

let str: string = "BMW";
let times: number = 6;

let result = str.repeat(times);
// console.log(result);

// TODO : Using function ->

const repeatName = (param1: string, param2: number) => {
//   console.log(param1.repeat(param2));
};
repeatName("Hello!", 3);

// TODO : Find largest Number -> 

function findLargestNumber( arr : number[] ) : number {
    return Math.max(...arr)
}

let maxNumber = findLargestNumber([10, 5, 8, 20, 3]);
// console.log(maxNumber)


// TODO : Filter Event Number -> 

function filterEvenNumbers(arr : number[]) : number[] {
    return arr.filter(num => num % 2 === 0 );
}

let eventNum = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
// console.log(eventNum)

// TODO : 