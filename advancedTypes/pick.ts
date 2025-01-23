interface PickType {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
}

// ? Pick
// ! OBRIGATORIDADE
// * Interface que serve para que seja possível obrigar
// * a utilização de um determinado campo da interface indica
// * diferente do Omit, estou indicando que desejo obrigar
// * os campos "id" e "address", indicado pelo pipe
function showTypePick(args: Pick<PickType, "id" | "address">) {
  console.log("args", args);
}

showTypePick({ id: 34892489, address: "Valeria" });
