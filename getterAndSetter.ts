class PersonAge {
  private _age: number = 0;

  get age(): number {
    return this._age;
  }

  set age(age: number) {
    if (age >= 0) {
      this._age = age;
    }
  }
}

const personAge = new PersonAge();
personAge.age = 10;
console.log("personAge.age", personAge.age);
