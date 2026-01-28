type StringMap<T> = {
  [P in keyof T]: string;
};

function showMappedType(args: StringMap<{ id: number; name: string }>) {
  console.log(args);
}

showMappedType({id: "10", name: "Hirl"})
