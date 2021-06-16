// TYPE ANNOTATIONS
let color = "Red";
// ARRAY TYPE
let names: (string | number | object)[] = [12, "ali", {}];
// OBJEC TYPE && TYPE INTERFACE
let personInformation: IPerson = {
  fullName: "Alichatraei",
  age: 20,
  sayHello(name) {
    return `Hello ${name}`;
  },
};
// FUNCTION TYPE
let greeting: (name: string) => string;
greeting = (name1): string => `Hello ${name1}`;
// BIG INT TYPE
// let HEX: bigint = 12254687979787987987989877n;
// INTERFACE TYPE
interface IPerson {
  fullName: string;
  age: number;
  sayHello(name: string): string;
}
// TUPLE TYPE
let RGB: [number, number, number] = [230, 220, 120],
  RGBA: [number, number, number, number?] = [220, 220, 220, 0.4];
// ENUM TYPE
enum Season {
  spring,
  summer,
  fall,
  winter,
}
// ANY TYPE
let anyTypeExample: any = { name: "ali" };
// VOID TYPE
function sayHello(fullName: string): void {
  console.log(`Hello dear ${fullName}`);
}
// NEVER TYPE
function showError(message: string): never {
  throw new Error(message);
  while (true) {
    console.log("hello");
  }
}
// UNION TYPE
let unionTypeExample: number | string = 12;
function combineAndSum(
  a: string | number,
  b: string | number
): string | number | never {
  if (typeof a === "number" && typeof b === "number") return a + b;
  if (typeof a === "string" && typeof b === "string") return a.concat(b);
  throw new Error("Parameters are not valid");
}
// ALIAS TYPE
type aliasTypeExample = number | string | object;
const a: aliasTypeExample = 12;
// STRING LITERALS TYPE
type MouseEv = "click" | "dblClick" | "mouseUp" | "mouseDown";
const mouseEvent: MouseEv = "click";
// FUNCTIONS
// function sum(firstNumber: number, secondNumber: number): number {
//     return firstNumber + secondNumber;
// }
// FUNCTIONS ---> FUNCTION PARAMETERS
let combinString: (firstString: string, secondString: string) => string =
  function (x: string, y: string): string {
    return x.concat(y);
  };
// FUNCTIONS ---> FUNCTION OPTIONAL PARAMETERS
function sumOptionalParametersExample(
  x: number,
  y: number,
  z: number = 0
): number {
  // IF Z PARAMETER IS OPTIANAL
  // if (typeof z !== "undefined")
  //     return x + y + z
  // else
  //     return x + y
  // IF Z PARAMETER USE DEFAULT VALUE
  return x + y + z;
}
// FUNCTIONS ---> RESTPARAMETERS
function sumRestparametersExample(...numbers: number[]): number {
  let sum: number = 0;
  numbers.forEach((number) => (sum += number));
  return sum;
}
// MODULES
