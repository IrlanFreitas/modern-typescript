interface EmployeeType {
  id: number;
  fullName: string;
  role: string;
}

let employees: Record<number, EmployeeType> = {
  0: { fullName: "Lusca Telas", role: "Terceirizado", id: 1 },
  1: { fullName: "Paula Toledo", role: "Gerente", id: 2 },
  2: { fullName: "Esdras", role: "Empregado", id: 3 },
};

interface PersonID<T> {
  id: T;
}

type PersonTypes = "executive" | "manager" | "employee";

const people: Record<PersonTypes, PersonID<string | number>> = {
  manager: { id: "001" },
  executive: { id: "002" },
  employee: { id: "003" },
};

console.log(people);

