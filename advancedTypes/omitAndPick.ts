interface User {
  id: number;
  firstName: string;
  lastName?: string;
  address?: string; // ! a interrogação serve para indicar que não é obrigatório
  age: Date;
  telephone?: string;
}

type UserFullName = Pick<User, "firstName" | "lastName">;
type UserPost = Omit<User, "id">;

const userFullName = <UserFullName>{};
const userFullName2: UserFullName = {
  firstName: "Lucas",
};

const userPost: UserPost = { firstName: "Belarod", age: new Date() };
