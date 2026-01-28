function showTypeGuards(x: string | number) {
  if (typeof x === "number") {
    console.log(`${x} + ${x} = ${x + x}`);
    return x + x;
  }

  throw new Error(`This operation is invalid ${typeof x}`);
}

showTypeGuards("aaaa")