const db = require("../data/products");

/************* Funciones de uso local(este mismo archivo) ****************/

const formatProductPrices = function (product) {
  /* Da el formato a los precios de cada producto */

  const priceWithDiscount = // Calcula el precio final con el descuento incluido
    product.price - product.price * (product.discount / 100);

  product.priceWithDiscount = `$ ${priceWithDiscount.toLocaleString("es", {
    // Crea dentro del producto el precio con el descuento incluido y le da el formato
    minimumFractionDigits: 2,
  })}`;

  product.price = `$ ${product.price.toLocaleString("es", {
    // Le da el formato al precio
    minimumFractionDigits: 2,
  })}`;

  product.discount = product.discount.toLocaleString("es"); // Le da el formato al descuento

  return product;
};

const formatProductsPrices = function (products) {
  // Recibe los productos y a cada uno le otorga el formato
  return products.map((product) => formatProductPrices(product));
};

/*************** Funciones que se van a requerir en controllers *****************/
const productServices = {
  getAllProducts: () => {
    // Nos brinda todos los productos de la lista
    const products = db.products.findAll();
    return formatProductsPrices(products);
  },

  getProduct: (id) => {
    // Nos brinda el producto del id especificado
    const product = db.products.findById(id);
    return formatProductPrices(product);
  },

  getInSaleProducts: () => {
    // Nos brinda todos los productos en oferta
    const products = db.products
      .findAll()
      .filter((product) => product.offer == true);
    return formatProductsPrices(products);
  },

  getBestSellersProducts: function () {
    const products = db.products
      .findAll()
      .filter((product) => product.bestSeller == true);

    return formatProductsPrices(products);
  },
};

module.exports = productServices;
