function logger(constructor: any) {
  console.log("Loading...");
}

@logger
class RunLog {
  constructor() {}
}

@logger
class RunLog2 {
  constructor() {}
}

new RunLog();
new RunLog2();
