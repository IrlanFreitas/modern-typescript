interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

class Identificador implements GenericInterface<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const myNumber = new Identificador<number>(10)

console.log(myNumber.getValue);
