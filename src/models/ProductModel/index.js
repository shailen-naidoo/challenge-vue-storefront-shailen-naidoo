import { BASE_QUANTITY } from "./constants"

/**
 * Represents a product model.
 */
class ProductModel {
  /**
   * Creates a new instance of ProductModel.
   *
   * @param {object} product An object containing product data.
   * @param {string} product.title The title of the product.
   * @param {number} product.price The price of the product.
   * @param {string} product.category The category of the product.
   * @param {string} product.description The description of the product.
   * @param {string} product.image The image URL of the product.
   */
  constructor(product) {
    this.title = product.title;
    this.price = product.price;
    this.category = product.category;
    this.description = product.description;
    this.image = product.image;

    /**
     * The quantity of the product.
     *
     * @type {number}
     */
    this.quantity = BASE_QUANTITY;
  }
}

export { ProductModel }