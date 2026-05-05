//* Utility types

type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  color?: string;
};

//* Pick
type ProductSummary = Pick<Product, "id" | "name" | "price">;

//* Omit
type ProductWithoutStocl = Omit<Product, "stock" | "color">;

//* Required
type ProductWithColor = Required<Product>;

const product: ProductWithColor = {
  id: 222,
  name: "Mouse",
  price: 1000,
  stock: 20,
  color: "black",
};

//* Partial
type OptionalProduct = Partial<Product>;

//* Readonly
type ProductReadonly = Readonly<Product>;

//*Record

const emptyObj: Record<string, unknown> = {};

const product1 = {
  id: 123,
  name: "Pen",
  price: 10,
};
