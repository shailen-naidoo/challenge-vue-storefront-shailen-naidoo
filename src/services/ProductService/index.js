import { ProductModel } from '../../models/ProductModel'
import { HTTPService } from "../HTTPservice"

class ProductService {
  /** @returns {Promise<Array<ProductModel>>}*/
  static fetchListOfProducts = () => {
    return HTTPService.get('https://fakestoreapi.com/products')
      .then((res) => res.data.map((product) => new ProductModel(product)))
  }
}

export { ProductService }
