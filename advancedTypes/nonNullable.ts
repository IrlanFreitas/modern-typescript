type NonNullableTypeTest = string | number | null | undefined;

function showNonNullable(args: NonNullable<NonNullableTypeTest>) {
  console.log(args);
}

showNonNullable(10)