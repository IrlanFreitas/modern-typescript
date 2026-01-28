interface FirstType {
  id: number;
  firstName: string;
  lastName: string;
}

interface SecondType {
  id: number;
  address: string;
  city: string;
}

//* Só mantem os campos que são iguais entre as duas interfaces
type ExcludeType = Extract<keyof FirstType, keyof SecondType>;

const excludeType: ExcludeType = "id";

type myUnionType = 12 | 122 | 43424 | "AAaaaa";

let lemon: myUnionType = "AAaaaa";

let noLemon: Exclude<myUnionType, "AAaaaa"> = 122 