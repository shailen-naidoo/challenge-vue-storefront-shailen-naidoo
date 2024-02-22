import { describe, test, expect } from "vitest"
import { ProductModel } from "."
import { BASE_QUANTITY } from "./constants"

describe('Test ProductModel', () => {
  test('Is the ProductModel created with the correct properties', () => {
    // 1. SETUP
    const productModel = new ProductModel({
      title: 'Samsung Galaxy Note 10',
      price: 10000,
      category: 'Electronics',
      description: 'The latest Samsung Galaxy Note 10 device',
      image: 'https://image.com',
    })

    // 2. ASSERT
    expect(productModel).toEqual({
      title: 'Samsung Galaxy Note 10',
      price: 10000,
      category: 'Electronics',
      description: 'The latest Samsung Galaxy Note 10 device',
      image: 'https://image.com',
      quantity: BASE_QUANTITY,
    })
  })
})