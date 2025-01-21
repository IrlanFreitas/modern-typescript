// * Interfaces
interface Person {
  name: string;
  age: number;
  born: Date;
}

function showPerson(data: Person): Person {
  console.log(data);
  return data;
}

const obj: Person = {
  name: "Paulo",
  age: 33,
  born: new Date("1990/06/20"),
};

// showPerson(obj);

// * Interfaces Extends
interface Color {
  color: string;
}

interface WheelSize {
  wheelSize: number;
}

interface Car extends Color, WheelSize {
  brand: string;
}

const myCar: Car = {
  brand: "Volks",
  color: "BLACK",
  wheelSize: 18,
};

const myCar2 = <Car>{};
myCar2.brand = "Ferrari";
myCar2.color = "Red";
myCar2.wheelSize = 19;

// console.log(myCar);
// console.log(myCar2);

// * Interfaces Implements

interface ClockInterface {
  currentTime: Date;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();

  constructor(h: number, m: number) {
    console.log(this.currentTime);
    console.log(h);
    console.log(m);
  }
}

const time: Clock = new Clock(10, 20);
// console.log(time);

// * Interfaces ReadOnly

interface Point {
  readonly x: number; //! Valor não pode ser modificado depois da criação do objeto
  y: number;
}

let point: Point = {
  x: 10,
  y: 20,
};

// point.x = 11;

let point2 = <Point>{
  x: 10,
};

point2.y = 11;

// * Interfaces Literais

interface MapConfig {
  lng: number;
  lat: number;
  size: 8 | 16 | 32 | "10"; // Esse são apenas os valores aceitos, isso que ele chamou de interface literal.
}

const map = <MapConfig>{
  lat: -73.54543,
  lng: 10,
  // size: 10, se não for um dos valores descritos não será aceito
};

// * Interfaces Opcionais

interface CarConfig {
  color: string;
  wide?: number; // Isso indica que o campo é opcional
}

const car: CarConfig = {
  color: "white",
};

// * Interfaces Function

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function (src: string, sub: string): boolean {
  return src === sub;
};

// console.log(mySearch("gato", "cachorro"));

// * Interfaces Index

interface StringArray {
  [index: number]: string | number;
}

let myArray: StringArray;
myArray = ["Bob", "Fred", 0];
console.log(myArray[1]);
