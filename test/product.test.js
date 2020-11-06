// A quentida de vendida pode ser uma ou mais unidades

import Product from "../src/model/product";
import sell from "../src/service/sellProduct";

test("deve validar baixa de estoque da venda de uma unidade", () => {
  let product = new Product("Celular", 500.0, 900.0, 10);
  sell(product, 1);

  // assertivas
  expect(product.stock).toBe(9);
});

test("deve aceitar a venda de mais do que uma unidade", () => {
  let product = new Product("Celular", 500.0, 900.0, 10);
  sell(product, 3);

  // assertivas
  expect(product.stock).toBe(7);
});
