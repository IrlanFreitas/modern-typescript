interface Props {
  a?: number;
  b?: string;
}

const obj1: Props = { a: 1 };
const obj2: Required<Props> = { a: 1, b: "aaaaa" };
