/**
 * A quentida de vendida pode ser uma ou mais unidades
 * --> Se estoque ficar negativo uma exception deve ser lançada
 * --> Valor de venda não pode ser maior que o valor de compra
 *
 * @param {*} product
 * @param {*} amount
 */

export default function sellProduct(product, amount) {
  product.stock -= amount;
  return product;
}
