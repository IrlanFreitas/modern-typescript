// * Juntando dois tipos num só

type Left = {
  id: number;
  left: string;
};

type Right = {
  id: number;
  right: string;
};

// * Com esse operador &, é possível juntar dois tipos sem repetir
type Both = Left & Right

const testBoth: Both = { id: 12, left: "10", right: "20" }