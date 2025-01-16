//* String
const myName: string = "Yrlan";
const myAge: number = 29;
const stringInterpolation: string = `Meu nome é ${myName} e minha idade é ${myAge}`;
console.log("\n");
console.log("String interpolation");
console.log(stringInterpolation);
console.log("\n");

//* Numbers
let decimal: number = 34.1;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o774;
console.log("Numbers");
console.log({ decimal, hex, binary, octal });
console.log("\n");

//* Boolean
const isDone: boolean = true;
console.log("Boolean");
console.log(isDone);
console.log("\n");

//* Array
let list: Array<number> = [212, 12, 12, 1];
let list2: string[] = ["Banana", "Maça", "Jaca", "Laranja"];
console.log("Array");
console.log(list);
console.log(list2);
console.log("\n");

// * Tupla
// ? Parece mais um array de duas posições
let tupla: [string, number] = ["Rua Teste", 21];
console.log("Tupla");
console.log(tupla);
console.log("\n");

// ! aqui para baixo tem tipos mais avançados

// * Never
// ? Tipo utilizando quando se vai utilizar para lançar excessões
function error(message: string): never {
  throw new Error(message);
}
// try {
//   error("Ocorreu um error");
// } catch (error) {
//   console.log(error);
// }

// * Void
function warnError(): void {
  console.warn("Isso é uma mensagem de aviso");
}
console.log("Void");
warnError();
console.log("\n");

// * Null && Undefined
// ? Undefined
// ? Basicamente a referência não existe, exemplo
// ? acessar um campo de um objeto que não existe

// ? Null
// ? Quando o campo existe mas não tem valor

let objectTest: object = { nome: "Vitoria", idade: 27, endereco: null };
// console.log(objectTest?.altura); // aqui teremos um error de undefined
// console.log(objectTest.endereco); // aqui teremos um error de null
let u: undefined = undefined;
let n: null = null;

// * Assertions
let someValue: any = "Esse é um texto";

// ? Isso parece mais com um casting
let strLength: number = (<string>someValue).length;

console.log("Assertions");
console.log(someValue);
console.log(strLength);
