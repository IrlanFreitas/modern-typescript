interface PickType {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
}

// ? Omit
// ! BYPASSAR OS CAMPOS
// * Interface que serve para que seja possível não utilizar
// * algum campo de alguma outra interface que seja, nesse 
// * caso abaixo, estou indicando que não desejo utilizar
// * os campos "id" e "address", indicado pelo pipe
function showTypeOmit(args: Omit<PickType, "id" | "address">) {
  console.log("args", args);
}

showTypeOmit({ firstName: "Vick", lastName: "Marley" });
