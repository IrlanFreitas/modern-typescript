function rPerson<T, N>(name: T, age: N): T {
  return name;
}

const person = rPerson<string, number>("Arling", 20);
console.log(person);
