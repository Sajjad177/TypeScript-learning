{
// TODO : generic constraints with operators ->

type Vehicle = {
    bike: string;
    car: string;
    truck: string;
}
// manually defined type :
type Owner = "bike" | "car" | "truck";


// using keyof operator :
type Owner2 = keyof Vehicle;




//
}  