interface ToDo {
  title: string;
  description: string;
}

function updateToDo(toDo: ToDo, fieldsToUpdate: Partial<ToDo>) {
  return {
    ...toDo,
    fieldsToUpdate,
  };
}

const todo: ToDo = {
  title: "Check",
  description: "any",
};

const todoFunction = updateToDo(todo, {});

console.log("todoFunction", todoFunction);
