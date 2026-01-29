interface Config {
  config: string;
}

function logClassWithArgs(filter: Config) {
  return (target: Object) => {
    if (filter.config === "111") {
      console.log("É animal class");
    }
  };
}

@logClassWithArgs({ config: "111" })
class Person {
  constructor(public name: string) {}
}

@logClassWithArgs({ config: "222" })
class Animal {
  constructor(public name: string) {}
}
